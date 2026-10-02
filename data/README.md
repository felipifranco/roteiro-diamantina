# Fonte dos dados do roteiro

Os dados editáveis são separados por responsabilidade:

- [`pontos-de-parada.json`](pontos-de-parada.json): catálogo de cidades, regiões, restaurantes e atrações, com coordenadas, descrições, fontes e duração sugerida de visita. Cada lugar tem um `id` estável e é cadastrado uma única vez.
- [`roteiro.json`](roteiro.json): planejamento desta viagem, com calendário, visitas, seleção de passeios, hospedagens e notas por dia. Referencia os lugares do catálogo, sem copiar suas fichas.

O gerador valida as referências e reúne os dois arquivos no adaptador usado pela página. Os campos `initialDate` e `selectedByDefault` desse adaptador são derivados do planejamento; não são campos para editar no catálogo. `routeOverrides` preserva valores históricos da pesquisa quando necessário.

Agrupe os passeios de distritos, bairros e comunidades na parada do município quando esse vínculo estiver confirmado. `municipality` identifica o município dos grupos revisados; `locality` identifica a localidade de uma atração. Passeios transferidos recebem a localidade também no nome e em `catalogName`, para que ela apareça na página e no catálogo. Preserve as coordenadas do passeio e use `mapQuery` com a localidade correta: reunir fichas não desloca atrações para a sede municipal nem comprova duplicação. Grupos regionais que abrangem vários municípios e restaurantes independentes podem permanecer como paradas próprias. A revisão está em [`location-audit.md`](location-audit.md).

`visits` no planejamento define as paradas inicialmente selecionadas, na ordem desejada, com `stopId` e `date`. `selectedAttractions` define os passeios selecionados com `stopId` e `name` (nome exato da atração no catálogo). Origem e destino começam selecionados por serem fixos. Alterações de seleção, datas e hospedagens na interface ficam em memória do navegador; para mudar o padrão permanente, edite o planejamento e regenere os arquivos.

`kind` descreve a entidade (`cidade`, `regiao`, `atracao`, `restaurante` ou `alerta`); `type` descreve o tema (`historia`, `natureza` ou `gastronomia`). Origem e destino são definidos por `schedule.originId` e `schedule.destinationId`, não por `kind`. Não use `opcional` como classificação: a participação na rota é calculada a partir da seleção atual. O tema determina a cor base do marcador; o símbolo mostra sua participação e ordem na rota. A interface calcula `routeable` para atrações conforme `locationAccuracy` e `sameSiteAs`; uma atração sem destino próprio continua com `kind: atracao`, mas não entra sozinha no traçado.

O objeto `schedule` do planejamento guarda `startDate`, `endDate`, `destinationDate`, `originId`, `destinationId` e `dateRangeEnd`. O calendário mostra todos os dias entre `startDate` e `endDate`, inclusive, independentemente das visitas e hospedagens. Nesta viagem, o período é de 7 a 13 de outubro de 2026: os dias 12 e 13 continuam visíveis mesmo sem programação. `dateRangeEnd` é apenas o limite máximo permitido para configurar o período; não define os dias exibidos. As opções de visita, hospedagem e notas respeitam `endDate`. A estimativa de retorno é calculada separadamente e não encurta nem estende o calendário. As faixas `stayDays` do catálogo continuam sendo sugestões de duração de visita; não definem noites de hospedagem.

`stays` é uma lista independente de hospedagens. `checkIn` inclui a primeira noite; `checkOut` é a data de saída e não inclui uma noite. Por exemplo, duas noites no mesmo lugar:

```json
{"stopId": "camposaltos", "checkIn": "2026-10-07", "checkOut": "2026-10-09"}
```

Isso representa as noites de 7 e 8, com saída no dia 9. É possível voltar ao mesmo lugar em outro intervalo, sem duplicar sua ficha. Intervalos não podem se sobrepor e devem ficar dentro das datas de planejamento. As hospedagens não dependem da data nem da seleção de uma visita. Na página, escolha **Onde dormir?** no cabeçalho de cada dia. Para duas noites no mesmo lugar, selecione esse lugar nos dois dias. A quantidade de noites é calculada pelas datas; editar ou limpar um dia preserva as outras noites. Dias consecutivos no mesmo lugar formam uma única estadia. O último dia da viagem não oferece hospedagem, pois a noite ultrapassaria o término do período. A estadia também entra no cálculo do retorno estimado. O cadastro indica a cidade/região de hospedagem; não define hotel ou reserva. Para incluir esse lugar no trajeto rodoviário, adicione-o também como parada de visita.

Cada parada e atração pode ter `accessEffort`, com `level` (`easy`, `moderate`, `hard` ou `unknown`), `label` e `note`. O acesso exibido para uma atração consulta o registro dela; a página não deduz esforço pelo nome nem aplica a nota da cidade aos passeios. Os valores migrados preservam as estimativas anteriores e devem ser revisados com as fontes de cada local.

`dayNotes` no planejamento define as notas iniciais por data (`date` e `text`). O campo opcional `replaces` lista textos antigos que podem ser atualizados no navegador; notas personalizadas são preservadas. `accessAlerts` guarda os avisos de estrada e `sources` os links de fontes. Origem e destino são identificados pelos registros indicados em `schedule`.

Após alterar qualquer um dos JSONs, regenere os arquivos derivados:

```bash
python3 scripts/generate_route_data.py
```

## Origem da relevância

Cada parada e atração tem `relevanceSource`, que controla o destaque individual no mapa:

- `agency`: há evidência de que uma agência ou operadora inclui o ponto em um roteiro comercial; o marcador recebe uma estrela.
- `guide`: ponto complementar encontrado em guias, fontes oficiais ou pesquisa; aparece normalmente, sem contorno.

Use `agency` somente com evidência de inclusão em roteiro comercial. Não deduza esse valor pelo nome do ponto, por `agencyRationale`, pela posição no roteiro ou pela importância aparente. Sem essa evidência, use `guide`. `agencyAudit` registra a cobertura da pesquisa e não define a aparência de nenhum ponto; a interface consulta somente o `relevanceSource` de cada item. A relevância não seleciona o ponto para a rota.

O gerador atualiza apenas os arquivos cujo conteúdo mudou:

- `route-data.generated.js`: dados carregados pelo `index.html`;
- `PONTOS-DE-PARADA.md`: versão legível de `pontos-de-parada.json`, independente do planejamento da viagem. Mudar datas, visitas ou hospedagens em `roteiro.json` não altera nem regrava esse Markdown.

Não edite esses arquivos gerados manualmente. Para verificar se estão sincronizados:

```bash
python3 scripts/generate_route_data.py --check
python3 -m unittest tests/test_itinerary_source_of_truth.py -v
```

A validação também roda no GitHub Actions. Não há banco de dados: são arquivos estáticos publicados junto com a aplicação.

## Precisão dos pontos no mapa

Cada atração informa `locationAccuracy`: `exact` para um local físico confirmado, `street-center` para um trecho de rua ou evento distribuído nela, `trail-point` para um ponto representativo de trilha e `city-center` quando a única coordenada disponível é uma referência genérica da cidade. Use `mapQuery` quando a busca pelo nome da atração não levar ao lugar certo. Atrações `city-center` continuam na lista de passeios, mas não ganham marcador próprio nem entram como destino individual da rota. Marcadores de rua ou trilha mostram sua precisão e oferecem busca pelo local em vez de navegação para a coordenada do trecho.

Para revisar um ponto, confirme primeiro o local em fontes oficiais (prefeitura, órgão gestor ou página da atração) e depois confira a posição cartográfica. Um resultado de geocodificação com o mesmo nome em outra cidade não comprova a coordenada.

Quando duas fichas descrevem componentes do mesmo local físico, `sameSiteAs` recebe o nome exato da ficha principal da mesma parada. As duas fichas e seus links continuam no catálogo; o componente usa o marcador e o destino de rota da ficha principal. Não use essa relação só porque os pontos estão próximos ou compartilham um endereço de embarque. A revisão de casos próximos e pendências cartográficas está em [`location-audit.md`](location-audit.md).

Quando os conteúdos realmente formam uma única visita, mantenha uma ficha com descrição e `guideBriefing` completos. `mapQuery` indica o destino principal no Google Maps; `visitLinks` pode reunir buscas de elementos da visita e fontes oficiais, com `label` e URL HTTPS em cada item. Não use links adicionais como justificativa para unir atrações independentes.

## Restaurantes Boa Lembrança

Os oito restaurantes listados para MG em [Boa Lembrança](https://boalembranca.com.br/restaurantes?state=MG), consultados em 29/09/2026, são paradas opcionais individuais (`kind: restaurante`). Cada uma traz `dish2026` com nome, descrição resumida, página do prato e imagem local do prato comemorativo em `assets/dishes/2026/`. A imagem é servida pelo próprio site porque os endereços de imagem da fonte têm assinatura temporária. O crédito da imagem aparece no marcador aberto. O marcador redondo usa a ilustração do prato, sem a estrela reservada a pontos de agência. Endereço e coordenadas foram conferidos por nome e município; horários e disponibilidade do prato devem ser confirmados no restaurante.
