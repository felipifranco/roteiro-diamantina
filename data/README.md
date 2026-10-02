# Fonte dos dados do roteiro

Edite somente [`roteiro.json`](roteiro.json). O arquivo mantém cada parada em `routeStops`, com perfil e atrações detalhadas no próprio registro. Assim, os dados de rota e as fichas detalhadas ficam juntos, sem listas paralelas de cidades. Se um campo pesquisado divergir de um valor específico da rota, o valor anterior da rota fica registrado em `routeOverrides`.

Agrupe os passeios de distritos, bairros e comunidades na parada do município quando esse vínculo estiver confirmado. `municipality` identifica o município dos grupos revisados; `locality` identifica a localidade de uma atração. Passeios transferidos recebem a localidade também no nome e em `catalogName`, para que ela apareça na página e no catálogo. Preserve as coordenadas do passeio e use `mapQuery` com a localidade correta: reunir fichas não desloca atrações para a sede municipal nem comprova duplicação. Grupos regionais que abrangem vários municípios e restaurantes independentes podem permanecer como paradas próprias. A revisão está em [`location-audit.md`](location-audit.md).

O campo `selectedByDefault` em cada parada ou atração define se ela começa selecionada na página. A seleção feita na interface altera somente o estado em memória do navegador; para mudar o padrão permanente, edite esse campo no JSON e regenere os arquivos.

O objeto `schedule` guarda as datas da viagem e a ordem inicial das paradas. Em cada cidade, `initialDate` define a data inicial, `stayDays` a faixa de duração sugerida e `overnight` indica pernoite. A página usa esses valores como padrão; mudanças feitas durante a navegação ficam somente em memória.

Cada parada e atração pode ter `accessEffort`, com `level` (`easy`, `moderate`, `hard` ou `unknown`), `label` e `note`. O acesso exibido para uma atração consulta o registro dela; a página não deduz esforço pelo nome nem aplica a nota da cidade aos passeios. Os valores migrados preservam as estimativas anteriores e devem ser revisados com as fontes de cada local.

`schedule.dayNotes` define as notas iniciais por data (`date` e `text`). O campo opcional `replaces` lista textos antigos que podem ser atualizados no navegador; notas personalizadas são preservadas. `accessAlerts` guarda os avisos de estrada e `sources` os links de fontes. Origem e destino são identificados pelos registros indicados em `schedule`.

Após alterar o JSON, regenere os arquivos derivados:

```bash
python3 scripts/generate_route_data.py
```

## Origem da relevância

Cada parada e atração tem `relevanceSource`, que controla o destaque individual no mapa:

- `agency`: há evidência de que uma agência ou operadora inclui o ponto em um roteiro comercial; o marcador recebe uma estrela.
- `guide`: ponto complementar encontrado em guias, fontes oficiais ou pesquisa; aparece normalmente, sem contorno.

Use `agency` somente com evidência de inclusão em roteiro comercial. Não deduza esse valor pelo nome do ponto, por `agencyRationale`, pela posição no roteiro ou pela importância aparente. Sem essa evidência, use `guide`. `agencyAudit` registra a cobertura da pesquisa e não define a aparência de nenhum ponto; a interface consulta somente o `relevanceSource` de cada item. A relevância não seleciona o ponto para a rota.

O gerador atualiza:

- `route-data.generated.js`: dados carregados pelo `index.html`;
- `PONTOS-DE-PARADA.md`: catálogo legível para consulta.

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
