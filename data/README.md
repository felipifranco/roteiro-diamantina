# Fonte dos dados do roteiro

Edite somente [`roteiro.json`](roteiro.json). Ele contém os dados usados pelo mapa e o catálogo detalhado de atrações.

Após alterar o JSON, regenere os arquivos derivados:

```bash
python3 scripts/generate_route_data.py
```

O gerador atualiza:

- `route-data.generated.js`: adaptador carregado pelo `index.html`;
- `PONTOS-DE-PARADA.md`: catálogo legível para consulta.

Não edite esses arquivos gerados manualmente. Para verificar se estão sincronizados:

```bash
python3 scripts/generate_route_data.py --check
python3 -m unittest tests/test_itinerary_source_of_truth.py -v
```

A validação também roda no GitHub Actions. Não há banco de dados: são arquivos estáticos publicados junto com a aplicação.
