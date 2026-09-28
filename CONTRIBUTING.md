# Contribuir

## Branches

- Comece a partir de `main` atualizado.
- Use branches curtas e com um único objetivo: `feat/`, `fix/`, `ci/`, `docs/` ou `refactor/`, seguidas de um nome em `kebab-case`.
- Não desenvolva diretamente em `main`; não force push.

## Pull requests

- Abra um PR para `main` por mudança lógica e preencha o modelo em `.github/pull_request_template.md`.
- Aguarde o check `verify-generated-data` ficar verde; corrija falhas antes do merge.
- Prefira *squash merge* e apague a branch de origem após o merge.
- Mudanças visuais devem incluir uma prévia e uma verificação em celular.

## Publicação

O GitHub Pages deste repositório publica a branch `main` na raiz. Portanto, fazer merge em `main` atualiza o site público. Não faça merge até que essa publicação esteja intencional; abrir ou atualizar um PR não publica o site.

## Verificações locais

```sh
python scripts/generate_route_data.py --check
python -m unittest discover -s tests -v
for test in tests/*_regression.py; do python "$test" index.html; done
```
