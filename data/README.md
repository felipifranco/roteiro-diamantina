# Fonte dos dados do roteiro

Edite somente [`roteiro.json`](roteiro.json). O arquivo mantém cada parada em `routeStops`, com perfil e atrações detalhadas no próprio registro. Assim, os dados de rota e as fichas detalhadas ficam juntos, sem listas paralelas de cidades. Se um campo pesquisado divergir de um valor específico da rota, o valor anterior da rota fica registrado em `routeOverrides`.

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
