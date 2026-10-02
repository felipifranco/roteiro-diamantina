# Fonte dos dados do roteiro

Os dados editáveis são separados por responsabilidade:

- [`pontos-de-parada.json`](pontos-de-parada.json): catálogo de cidades, regiões, restaurantes e atrações, com coordenadas, descrições, fontes e duração sugerida de visita. Cada lugar tem um `id` estável e é cadastrado uma única vez.
- [`roteiro.json`](roteiro.json): planejamento desta viagem, com calendário, visitas, seleção de passeios, hospedagens e notas por dia. Referencia os lugares do catálogo, sem copiar suas fichas.

O gerador valida as referências e reúne os dois arquivos no adaptador usado pela página. Os campos `initialDate` e `selectedByDefault` desse adaptador são derivados do planejamento; não são campos para editar no catálogo. `routeOverrides` preserva valores históricos da pesquisa quando necessário.

Agrupe os passeios de distritos, bairros e comunidades na parada do município quando esse vínculo estiver confirmado. `municipality` identifica o município dos grupos revisados; `locality` identifica a localidade de uma atração. Passeios transferidos recebem a localidade também no nome e em `catalogName`, para que ela apareça na página e no catálogo. Preserve as coordenadas do passeio e use `mapQuery` com a localidade correta: reunir fichas não desloca atrações para a sede municipal nem comprova duplicação. Grupos regionais que abrangem vários municípios e restaurantes independentes podem permanecer como paradas próprias. A revisão está em [`location-audit.md`](location-audit.md).

`visits` no planejamento define as paradas inicialmente selecionadas, na ordem desejada, com `stopId` e `date`. `selectedAttractions` define os passeios selecionados com `stopId` e `name` (nome exato da atração no catálogo). Origem e destino começam selecionados. As políticas de obrigatoriedade e data fixa são explícitas em `policies.destination`. Alterações de seleção, datas e hospedagens na interface ficam em memória do navegador; para mudar o padrão permanente, edite o planejamento e regenere os arquivos.

`kind` descreve a entidade (`cidade`, `regiao`, `atracao`, `restaurante` ou `alerta`); `type` descreve o tema (`historia`, `natureza` ou `gastronomia`). Origem e destino são definidos por `schedule.originId` e `schedule.destinationId`, não por `kind`. Não use `opcional` como classificação: a participação na rota é calculada a partir da seleção atual. O tema determina a cor base do marcador; o símbolo mostra sua participação e ordem na rota. A interface calcula `routeable` para atrações conforme `locationAccuracy` e `sameSiteAs`; uma atração sem destino próprio continua com `kind: atracao`, mas não entra sozinha no traçado.

O objeto `schedule` do planejamento guarda `startDate`, `endDate`, `destinationDate`, `originId`, `destinationId` e `dateRangeEnd`. O calendário mostra todos os dias entre `startDate` e `endDate`, inclusive, independentemente das visitas e hospedagens. Nesta viagem, o período é de 7 a 13 de outubro de 2026: os dias 12 e 13 continuam visíveis mesmo sem programação. `dateRangeEnd` é apenas o limite máximo permitido para configurar o período; não define os dias exibidos. As opções de visita, hospedagem e notas respeitam `endDate`. A estimativa de retorno é calculada separadamente e não encurta nem estende o calendário. As faixas `stayDays` do catálogo continuam sendo sugestões de duração de visita; não definem noites de hospedagem.

`canHostStay` é um booleano obrigatório apenas nas paradas de `routeStops`; as atrações de `attractions` não possuem esse campo. A seleção **Onde dormir?** e a validação de `stays` consultam esse campo, não deduzem elegibilidade de `kind`. A migração mantém exatamente as opções anteriores: `true` nas cidades/regiões atuais e `false` nos restaurantes e alertas. Isso não comprova hotel disponível nem reserva.

`stays` é uma lista independente de hospedagens. `checkIn` inclui a primeira noite; `checkOut` é a data de saída e não inclui uma noite. Por exemplo, duas noites no mesmo lugar:

```json
{"stopId": "camposaltos", "checkIn": "2026-10-07", "checkOut": "2026-10-09"}
```

Isso representa as noites de 7 e 8, com saída no dia 9. É possível voltar ao mesmo lugar em outro intervalo, sem duplicar sua ficha. Intervalos não podem se sobrepor e devem ficar dentro das datas de planejamento. As hospedagens não dependem da data nem da seleção de uma visita. Na página, escolha **Onde dormir?** no rodapé de cada dia, depois das notas. Para duas noites no mesmo lugar, selecione esse lugar nos dois dias. A quantidade de noites é calculada pelas datas; editar ou limpar um dia preserva as outras noites. Dias consecutivos no mesmo lugar formam uma única estadia. O último dia da viagem não oferece hospedagem, pois a noite ultrapassaria o término do período. A estadia também entra no cálculo do retorno estimado. O cadastro indica a cidade/região de hospedagem; não define hotel ou reserva. Para incluir esse lugar no trajeto rodoviário, adicione-o também como parada de visita.

Cada parada e atração pode ter `accessEffort`, com `level` (`easy`, `moderate`, `hard` ou `unknown`), `label` e `note`. O acesso exibido para uma atração consulta o registro dela; a página não deduz esforço pelo nome nem aplica a nota da cidade aos passeios. Os valores migrados preservam as estimativas anteriores e devem ser revisados com as fontes de cada local.

`accessibility` nas atrações é um objeto com `status` e `description` integral. Os estados são `accessible` (Sim), `conditional` (Com condições), `restricted` (Restrita) e `unknown` (A confirmar). A interface consulta o estado, sem inferir palavras da descrição nem herdar a acessibilidade da cidade. A descrição original permanece no catálogo, no Markdown e no detalhe da interface. Ausência de confirmação, textos “—” ou “A confirmar” permanecem `unknown`; ressalvas explícitas de embarque, reserva, espera noturna, percurso ou áreas externas permanecem `conditional`. A migração não acrescenta fatos nem fontes e não transforma condições parciais em acesso irrestrito. `accessEffort` continua independente de acessibilidade.

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

## Políticas do planejamento

`policies` em `roteiro.json` reúne os parâmetros de negócio:

- `maxDrivingHoursPerDay`: limite diário usado na estimativa de retorno (atualmente 8 horas); a estimativa só existe após uma resposta válida de rota.
- `destination.required`: impede remover o destino; `fixedDate`: impede alterar sua data; são regras independentes. `sameDayOrder` (`before` ou `after`) posiciona o destino antes ou depois das demais paradas do mesmo dia, tanto nos cartões quanto no traçado. Os valores atuais preservam Diamantina obrigatória, fixa e antes das outras paradas de 09/10.
- `newStopDate.anchor` (`destination` ou `start`) e `offsetDays`: sugerem uma data depois do último dia efetivamente planejado (visitas e noites), tomando a âncora como mínimo e limitando a sugestão ao calendário. A configuração atual usa o destino e mais 1 dia. `stayDays` continua apenas uma recomendação do catálogo e nunca prolonga uma visita nem cria hospedagem.

Em `selectedAttractions`, `required: true` torna um passeio obrigatório nesta viagem e protege também a remoção de seu grupo. O padrão é `false`: ter `schedule` no catálogo informa um evento agendado, não uma obrigação. A Vesperata mantém `required: true` explicitamente, preservando o compromisso atual. Os conflitos com o destino usam somente hospedagens efetivamente planejadas em outra parada que atravessam sua data; sugestões de duração não geram conflitos.

`assets/trip-calendar.js` concentra cálculos de calendário, noites, retorno, conflitos, ordenação e herança de datas. `routeDate` prioriza a data explícita do ponto; atrações sem data própria consultam a data da cidade e depois a data fixa da cidade; outros pontos consultam sua própria data fixa. `assets/trip-route.js` reúne seleção e dependência de grupos/passeios, pontos efetivos da rota, combinação das fichas de passeios, agregação de trechos e requisições OSRM com cancelamento e descarte de respostas antigas. O HTML mantém a renderização e os eventos dos controles.

`routing` em `roteiro.json` configura `endpoint` (URL HTTPS da API de rotas OSRM), `profile` (atualmente `driving`) e `timeoutMs` (atualmente 20000). Esses parâmetros não mudam a ordem das visitas; o serviço calcula o trajeto na sequência planejada. O gerador valida as políticas e os parâmetros de rota e produz o adaptador para o navegador.

## Restaurantes Boa Lembrança

Os oito restaurantes listados para MG em [Boa Lembrança](https://boalembranca.com.br/restaurantes?state=MG), consultados em 29/09/2026, são paradas opcionais individuais (`kind: restaurante`). Cada uma traz `dish` com `year` (atualmente 2026), nome, descrição resumida, página do prato e imagem local do prato comemorativo em `assets/dishes/2026/`. A imagem é servida pelo próprio site porque os endereços de imagem da fonte têm assinatura temporária. O crédito da imagem aparece no marcador aberto. O marcador redondo usa a ilustração do prato, sem a estrela reservada a pontos de agência. Endereço e coordenadas foram conferidos por nome e município; horários e disponibilidade do prato devem ser confirmados no restaurante.
