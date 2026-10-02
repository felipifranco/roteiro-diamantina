# Revisão de localização dos pontos turísticos

Revisão cartográfica em 29/09/2026 e de agrupamento municipal em 01/10/2026. O cadastro tem 169 atrações em 33 paradas de localidades e regiões, além de oito restaurantes independentes (41 paradas no total): 115 atrações classificadas como pontos físicos (`exact`), 8 em trechos de rua (`street-center`), 1 em trecho de trilha (`trail-point`) e 45 que ainda têm apenas referência genérica da cidade (`city-center`). Os pontos foram cruzados por nome e município com fontes turísticas, OpenStreetMap/Nominatim e resultados de lugar do Google Maps. Resultados vazios, genéricos ou homônimos em outros distritos não foram usados para mover marcadores.

## Correções confirmadas

| Ponto | Ajuste | Referência do local |
| --- | --- | --- |
| Vesperata e Rua da Quitanda, Diamantina | Marcadores transferidos do centro da cidade para um trecho da Rua da Quitanda. Por se tratar de uma rua e de um evento distribuído nela, a precisão é `street-center`. | [Prefeitura de Diamantina](https://www.diamantina.mg.gov.br/portal/noticias/0/3/5764/calendario-da-vesperata-2026), [via no OpenStreetMap](https://www.openstreetmap.org/search?query=Rua%20da%20Quitanda%20Diamantina) |
| Casa de Chica da Silva, Diamantina | Marcador ajustado para o imóvel da Praça Lobo de Mesquita, 266; o destaque da cidade agora aponta só para a casa. | [Prefeitura de Diamantina](https://www.diamantina.mg.gov.br/portal/turismo/0/9/728/casa-de-chica-da-silva) |
| Igreja de São Francisco de Assis, Diamantina | Marcador ajustado para a igreja da Rua São Francisco. | [Prefeitura de Diamantina](https://www.diamantina.mg.gov.br/portal/turismo/0/9/731/igreja-de-sao-francisco-de-assis) |
| Igreja das Mercês, Diamantina | Marcador retirado do centro genérico e colocado na Rua das Mercês. | [Prefeitura de Diamantina](https://www.diamantina.mg.gov.br/portal/turismo/0/9/723/igreja-de-nossa-senhora-das-merces) |
| Museu do Tropeiro, Ipoema | Corrigida longitude que colocava o museu a cerca de 21 km do distrito. | [Turismo de Itabira](https://turismo.itabira.mg.gov.br/atrativos/ipoema/museutropeiro) |
| Memorial do Humorista Zacarias, Sete Lagoas | Localizado no Casarão Nhô Quim Drummond, Praça Tiradentes, 257; o marcador agora usa o ponto do memorial. | [Catálogo turístico de Sete Lagoas](https://cdnc.heyzine.com/files/uploaded/a1a747d4b97924454b02a2109f09697b3b1f0daa.pdf), [Casarão no Portal Minas Gerais](https://www.minasgerais.com.br/pt/atracoes/casarao-0) |
| Cachoeira da Grota Seca, Serro | Marcador retirado do centro do Serro e colocado na cachoeira, nos arredores de São Gonçalo do Rio das Pedras. | [Portal Minas Gerais](https://www.minasgerais.com.br/pt/atracoes/cachoeira-da-grota-seca) |
| Chácara do Barão e Igreja do Carmo, Serro | Marcadores movidos para os respectivos imóveis no Serro. | [Chácara do Barão no Portal Minas Gerais](https://www.minasgerais.com.br/pt/atracoes/serro/chacara-do-barao) |
| Oficina de Agosto, Bichinho | Marcador transferido do centro do povoado para a oficina. | [Oficina de Agosto no roteiro de Minas Gerais](https://www.minasgerais.com.br/pt/roteiros/minas-recebe-tiradentes-mg-0) |
| Beco do Cotovelo e Largo da Cruz, São João del-Rei; ruas Direita em Ouro Preto, Mariana e Tiradentes; Rua Dom Pedro II, Sabará | Marcadores transferidos para os respectivos logradouros. Os trechos de rua são identificados como tal. | [Beco do Cotovelo no perímetro histórico](https://saojoaodelreitransparente.com.br/laws/view/166), [Rua Direita de Ouro Preto](https://agenciaminas.mg.gov.br/noticia/rua-direta-de-ouro-preto-e-eleita-uma-das-mais-belas-do-mundo-por-plataforma-de-viagens) |
| Caminho dos Escravos, Diamantina | Marcador deslocado do centro para o caminho; a interface identifica que representa um trecho da trilha. | [Prefeitura de Diamantina](https://www.diamantina.mg.gov.br/portal/turismo/0/9/735/caminho-dos-escravos), [acesso informado pelo turismo municipal](https://visitediamantina.com.br/atrativos-detalhes?atrativo=caminho-dos-escravos) |
| Honório Bicalho, Nova Lima | Corrigida a posição da parada de referência para o distrito; o antigo ponto estava próximo ao centro de Nova Lima. | [Localização cartográfica do distrito](https://www.openstreetmap.org/search?query=Hon%C3%B3rio%20Bicalho%20Nova%20Lima) |

As 45 referências `city-center` restantes representam áreas, serviços sem endereço único ou atrações cuja posição específica ainda não foi confirmada. Elas continuam na lista de passeios, sem marcador próprio ou destino individual na rota. Para promovê-las a um ponto no mapa, é preciso confirmar cada endereço, acesso ou local físico individualmente.

## Revisão de pontos próximos e relações entre atrações

A proximidade das coordenadas é apenas um sinal para revisão. Ela não prova que dois nomes sejam a mesma atração. O cadastro mantém as fichas e os links individuais quando há conteúdos diferentes.

| Par | Resultado da revisão | Tratamento no mapa |
| --- | --- | --- |
| Casa da Glória / Passadiço da Glória (Diamantina) | O passadiço liga os casarões do conjunto da Casa da Glória. É um elemento próprio da visita, não uma segunda parada geográfica. [UFMG](https://igc.ufmg.br/casa-da-gloria/), [Prefeitura de Diamantina](https://www.diamantina.mg.gov.br/portal/turismo/0/9/724/casa-da-gloria) | Uma ficha, um marcador e um destino de rota. O Guia de visita explica as duas partes; a ficha reúne a busca da Casa, a busca do Passadiço e os links oficiais. |
| Catedral da Sé / Órgão Arp Schnitger (Mariana) | O órgão está instalado dentro da catedral. Tem interesse musical próprio, mas compartilha o local de visita. [IEPHA-MG](https://www.iepha.mg.gov.br/images/ICMS/documentacao_recebida_pontuacao/RELACAO_BENS_PROTEGIDOS_TOMBAMENTO_EX2024.pdf) | Duas fichas preservadas; órgão aponta para a Catedral. |
| Praça Tiradentes / Museu da Inconfidência (Ouro Preto) | A praça é um espaço público; o museu funciona no prédio da antiga Casa de Câmara e Cadeia, junto à praça. [Prefeitura de Ouro Preto](https://www.ouropreto.mg.gov.br/turismo/atrativo-item/572) | Duas paradas; corrigida a posição do museu, antes idêntica à da praça. |
| Solar dos Neves / Solar dos Lustosa / Igreja do Rosário (São João del-Rei) | Os solares são dois imóveis próximos entre si e à igreja, não nomes alternativos do templo. [Inventário urbano](https://saojoaodelreitransparente.com.br/static/files/docs/Plano_Urbano_de_S%C3%A3o_Jo%C3%A3o_del-Rei.pdf), [Estrada Real](https://institutoestradareal.com.br/tema/natureza/atrativo/solar-dos-neves/) | Ficha conjunta dos **dois solares** identificada como trecho do Largo do Rosário; igreja mantém marcador próprio. Não há coordenada individual confirmada para cada solar neste cadastro. |
| Museu de Sant'Ana / Igreja do Rosário dos Pretos (Tiradentes) | Museu na antiga cadeia e igreja são imóveis diferentes. [Museu de Sant'Ana](https://museudesantana.org.br/visite/planeje-sua-visita/), [Secretaria de Cultura de MG](https://www.secult.mg.gov.br/noticias-artigos/139-2013/4708-museu-de-sant-ana-em-tiradentes-comemora-tres-anos-com-exposicao-inedita) | Duas paradas; coordenadas diferenciadas. |
| Igreja da Conceição / Museu Aleijadinho (Ouro Preto) | O museu usa a igreja, mas é uma instituição e uma experiência de visita própria; o museu também possui outros núcleos. [Prefeitura de Ouro Preto](https://www.ouropreto.mg.gov.br/turismo/atrativo-item/590) | Fichas mantidas. Coordenadas iguais representam a sede na igreja; não foi presumida equivalência das experiências. |
| Rua da Quitanda / Vesperata (Diamantina) | A Vesperata é um evento na rua; não equivale ao passeio pela rua. [Prefeitura de Diamantina](https://www.diamantina.mg.gov.br/portal/noticias/0/3/5764/calendario-da-vesperata-2026) | Fichas mantidas com marcador de trecho da rua. |
| Estação EFOM / Maria Fumaça (São João del-Rei) | Estação e viagem ferroviária são experiências diferentes que compartilham o embarque. | Fichas mantidas; a coordenada comum indica o ponto de partida da viagem. |
| Santuário, Profetas, Passos e Sala dos Milagres (Congonhas) | Elementos distintos do mesmo conjunto; os Passos se distribuem em capelas e a Sala fica junto à basílica. [Prefeitura de Congonhas](https://www.congonhas.mg.gov.br/wp-content/uploads/2019/03/Folder_Museus_site.pdf) | Fichas mantidas. As coordenadas repetidas são um **ponto representativo do conjunto**, ainda não a posição exata de cada elemento; exigem revisão cartográfica individual antes de prometer navegação precisa. |
| Santuário, ruínas do colégio e observação do lobo-guará (Caraça) | Locais e atividades relacionados ao complexo, mas visitas diferentes. | Fichas mantidas. Coordenada comum é a base do santuário; não identifica cada experiência. |

Outros pares próximos, como Igreja do Carmo e Museu do Oratório (Ouro Preto), Igreja de São Francisco e feira de pedra-sabão (Ouro Preto), Casa do Muxarabiê e Rua da Quitanda (Diamantina), e Museu de Sant'Ana e Igreja do Rosário (Tiradentes) não devem ser agrupados por distância. As posições repetidas de componentes do Santuário de Congonhas e do Caraça são pendências de precisão cartográfica, não autorização para mesclar as fichas.


## Revisão de sobreposições em 01/10/2026

As 169 fichas foram preservadas: sem identificação do estabelecimento, operador ou percurso, semelhança de nomes e descrições não comprova duplicação.

| Par | Evidência e tratamento |
| --- | --- |
| Serra da Piedade / Santuário Nossa Senhora da Piedade (Caeté) | A [Arquidiocese de Belo Horizonte](https://arquidiocesebh.org.br/arquidiocese/santuarios/santuario-basilica-nossa-senhora-da-piedade/) confirma o santuário no alto da serra. Mantidas as fichas de paisagem e visita religiosa; `sameSiteAs` faz o santuário compartilhar o marcador e o destino de rota da serra. |
| Garimpo Real (Diamantina) / Experiência de garimpo (Curralinho/Extração) | O [portal turístico de Minas Gerais](https://www.minasgerais.com.br/pt/atracoes/diamantina/garimpo-real) situa o Garimpo Real próximo ao aeroporto. A ficha de Extração não identifica operador ou estabelecimento. Não foi confirmada equivalência; ambas permanecem. A fonte foi adicionada ao Garimpo Real e sua coordenada permanece genérica. |
| Mirante dos Canyons / Mirantes dos cânions (Capitólio) | O [parque Mirante dos Canyons](https://cataguacapitolio.com.br/mirante) reúne vários mirantes, mas a ficha plural não identifica qual local representa. Pode incluir outro mirante; fichas mantidas até identificação do destino. |
| Cânions de Furnas / Passeio pelo Lago de Furnas (Capitólio) | O lago comporta percursos diferentes; não foi identificado operador ou itinerário que demonstre equivalência. Mantidas as duas opções. |
| Queijo do Serro / Fazenda produtora de Queijo do Serro | Uma degustação e uma visita à produção podem ocorrer em locais diferentes. Nenhuma ficha identifica estabelecimento; mantidas até confirmação de produtor e experiência. |

Esta revisão não reclassifica `accessEffort`. A confirmação individual do esforço permanece pendente.


## Agrupamento municipal em 01/10/2026

A revisão reuniu oito grupos de localidades em seus municípios, preservando todas as 169 atrações, coordenadas, precisão cartográfica, regras de visita e esforço de acesso. `locality` e o sufixo do nome identificam os passeios transferidos. Os destaques dos distritos foram associados às fichas transferidas; os passeios não passam a ser selecionados por padrão apenas por pertencerem ao destino principal. Agrupamento municipal não implica proximidade, mesma experiência ou acesso pelo centro da cidade.

| Grupo atual | Localidades reunidas | Evidência |
| --- | --- | --- |
| Diamantina | Extração/Curralinho, Biribiri, Mendanha e Vau | [Legislação municipal sobre os distritos](https://www.diamantina.mg.gov.br/portal/leis_decretos/1/0/0/75/0/0/0/0/0/0/0/0/0/0/0/0/0/0/E/data-decrescente/avancada), [Vila de Biribiri](https://www.diamantina.mg.gov.br/portal/turismo/0/9/736/vila-de-biribiri), [cadastro municipal da comunidade do Vau](https://www.diamantina.mg.gov.br/portal/editais/4) |
| Serro | Milho Verde e São Gonçalo do Rio das Pedras | [Distritos do Serro](https://www.serro.mg.gov.br/portal/turismo/0/9/746/Nossos-Distritos) |
| Ouro Preto | Amarantina | [Distritos de Ouro Preto](https://www.ouropreto.mg.gov.br/turismo/distritos) |
| Catas Altas | Santuário do Caraça | [Portal turístico de Minas Gerais](https://www.minasgerais.com.br/pt/apoio-destino/catas-altas?tipo_lazer=80%2C81%2C88%2C89) |

Os grupos sem outra ficha do município no cadastro passaram a exibir município primeiro: Conceição do Mato Dentro · Tabuleiro, Prados · Bichinho, Itabira · Ipoema e Uberaba · Peirópolis. Mantidos os IDs desses grupos, suas referências geográficas e a seleção inicial de Peirópolis. Fontes: [Tabuleiro](https://www.cmd.mg.gov.br/tabuleiro-do-mato-dentro/), [Bichinho](https://www.minasgerais.com.br/pt/destinos/bichinho), [Ipoema](https://turismo.itabira.mg.gov.br/atrativos/ipoema), [Peirópolis](https://www.uberaba.mg.gov.br/portal/acervo/links/Arquivos/GUIA%20TURISTICO%20GEOPARK%20UBERABA.pdf).

Canastra, Serra do Cipó e Peruaçu continuam como grupos regionais: não foi atribuído um único município a áreas que exigem definição do atrativo ou do acesso. Os restaurantes Boa Lembrança seguem como paradas de refeição independentes. A suspeita entre Garimpo Real e Experiência de garimpo permanece pendente, agora dentro do mesmo grupo de Diamantina: pertencer ao mesmo município não prova equivalência.

## Campos Altos — pesquisa em 02/10/2026

Incluídas fichas do Santuário de Nossa Senhora Aparecida, Estação Ferroviária de Campos Altos, oficina de Dito Leandro, Cachoeira Olho do Sol e Parque Estadual dos Campos Altos. Descrições, endereços disponíveis e condições de entrada têm links oficiais no JSON. Não foi confirmada inclusão em roteiro comercial; todas têm `relevanceSource: guide`.

Santuário, estação, oficina e cachoeira passaram a `exact` após conferência por nome e município no Google Maps. A estação foi cruzada com o endereço da Praça Benedito Valadares; a oficina com Rua Tiradentes, 175. As coordenadas urbanas foram recuperadas dos Plus Codes dos locais. Os pontos do santuário e da cachoeira também concordam com o cadastro geográfico da Buser dentro da célula do Plus Code. Cada ficha registra `locationSourceUrl` e `locationPlusCode`. Esses quatro pontos têm marcadores e controles de inclusão na rota; não vêm selecionados automaticamente.

O parque permanece `city-center`, com referência municipal e busca pelo nome: não foi confirmada uma entrada de visitantes. O resultado do Google Maps (`7VFJ+JM Campos Altos`) diverge significativamente da coordenada do inventário municipal (-19.430047, -46.070318), e nenhum dos dois comprova um acesso turístico. Não foram usados como destino. O cartão mostra “Localização a confirmar”.

A data de inauguração da estação diverge entre Prefeitura (1912) e portal estadual (1913); o texto apresenta o início da década de 1910.

O [IEF](https://www.ief.mg.gov.br/w/parques-estaduais) relaciona Campos Altos entre os demais parques, fora da lista com infraestrutura para visitação. A ficha registra visitação a confirmar. A [estação](https://www.minasgerais.com.br/pt/atracoes/campos-altos/arquitetura/estacao-ferroviaria-de-campos-altos), a [oficina](https://www.minasgerais.com.br/pt/atracoes/campos-altos/artesanato/dito-leandro) e a [cachoeira](https://www.minasgerais.com.br/pt/atracoes/campos-altos/cachoeira-olho-do-sol) informam entrada franca no portal estadual. Não há regra etária oficial identificada nem acessibilidade confirmada. Durações urbanas são estimativas de planejamento; as fontes consultadas não publicam tempo de visita. O pernoite da cidade continua de 7 para 8 de outubro, sem selecionar automaticamente passeios.
