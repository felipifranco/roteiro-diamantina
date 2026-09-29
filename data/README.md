# Fonte dos dados do roteiro

Edite somente [`roteiro.json`](roteiro.json). O arquivo mantém cada parada em `routeStops`, com perfil e atrações detalhadas no próprio registro. Assim, os dados de rota e as fichas detalhadas ficam juntos, sem listas paralelas de cidades. Se um campo pesquisado divergir de um valor específico da rota, o valor anterior da rota fica registrado em `routeOverrides`.

Após alterar o JSON, regenere os arquivos derivados:

```bash
python3 scripts/generate_route_data.py
```

O gerador atualiza:

- `route-data.generated.js`: dados carregados pelo `index.html`;
- `PONTOS-DE-PARADA.md`: catálogo legível para consulta.

Não edite esses arquivos gerados manualmente. Para verificar se estão sincronizados:

```bash
python3 scripts/generate_route_data.py --check
python3 -m unittest tests/test_itinerary_source_of_truth.py -v
```

A validação também roda no GitHub Actions. Não há banco de dados: são arquivos estáticos publicados junto com a aplicação.
