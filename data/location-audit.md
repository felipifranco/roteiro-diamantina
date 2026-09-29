# Revisão de localização dos pontos turísticos

Revisão em 29/09/2026. O cadastro tem 170 atrações em 41 paradas: 111 com coordenada de lugar (`exact`), 2 marcadas como trecho de rua (`street-center`) e 57 com referência do centro da cidade (`city-center`). As coordenadas dos pontos `exact` foram cruzadas por nome e município com o OpenStreetMap/Nominatim. Resultados vazios ou homônimos em outros distritos não foram usados para mover marcadores.

## Correções confirmadas

| Ponto | Ajuste | Referência do local |
| --- | --- | --- |
| Vesperata e Rua da Quitanda, Diamantina | Marcadores transferidos do centro da cidade para um trecho da Rua da Quitanda. Por se tratar de uma rua e de um evento distribuído nela, a precisão é `street-center`. | [Prefeitura de Diamantina](https://www.diamantina.mg.gov.br/portal/noticias/0/3/5764/calendario-da-vesperata-2026), [via no OpenStreetMap](https://www.openstreetmap.org/search?query=Rua%20da%20Quitanda%20Diamantina) |
| Casa de Chica da Silva, Diamantina | Marcador ajustado para o imóvel da Praça Lobo de Mesquita, 266; o destaque da cidade agora aponta só para a casa. | [Prefeitura de Diamantina](https://www.diamantina.mg.gov.br/portal/turismo/0/9/728/casa-de-chica-da-silva) |
| Igreja de São Francisco de Assis, Diamantina | Marcador ajustado para a igreja da Rua São Francisco. | [Prefeitura de Diamantina](https://www.diamantina.mg.gov.br/portal/turismo/0/9/731/igreja-de-sao-francisco-de-assis) |
| Igreja das Mercês, Diamantina | Marcador retirado do centro genérico e colocado na Rua das Mercês. | [Prefeitura de Diamantina](https://www.diamantina.mg.gov.br/portal/turismo/0/9/723/igreja-de-nossa-senhora-das-merces) |
| Museu do Tropeiro, Ipoema | Corrigida longitude que colocava o museu a cerca de 21 km do distrito. | [Turismo de Itabira](https://turismo.itabira.mg.gov.br/atrativos/ipoema/museutropeiro) |

As 57 referências `city-center` ainda representam áreas, serviços sem endereço único ou lugares cuja posição específica não foi confirmada. A interface as identifica como aproximadas e oferece busca pelo local em vez de navegação direta para a coordenada genérica. Para promovê-las a `exact`, é preciso confirmar cada endereço ou entrada física individualmente.
