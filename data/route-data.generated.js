// Generated from data/pontos-de-parada.json and data/roteiro.json by scripts/generate_route_data.py. Do not edit.
window.ROTEIRO_DATA = {
  "routing": {
    "endpoint": "https://router.project-osrm.org/route/v1",
    "profile": "driving",
    "timeoutMs": 20000
  },
  "policies": {
    "maxDrivingHoursPerDay": 8,
    "destination": {
      "required": true,
      "fixedDate": true,
      "sameDayOrder": "before"
    },
    "newStopDate": {
      "anchor": "destination",
      "offsetDays": 1
    }
  },
  "schedule": {
    "startDate": "2026-10-07",
    "destinationId": "diamantina",
    "destinationDate": "2026-10-08",
    "dateRangeEnd": "2026-10-31",
    "originId": "mirassol",
    "endDate": "2026-10-16",
    "initialStopOrder": [
      "peiro",
      "araxa",
      "camposaltos",
      "camposaltos-palace-hotel",
      "hotel-estilo-de-minas",
      "cordisburgo",
      "setelagoas",
      "belohorizonte",
      "boa-divinorestaurante",
      "ouropreto",
      "tiradentes"
    ],
    "stays": [
      {
        "stopId": "camposaltos-palace-hotel",
        "checkIn": "2026-10-07",
        "checkOut": "2026-10-08",
        "checkInTime": "12:00",
        "checkOutTime": "12:00",
        "nights": 1,
        "reservationStatus": "informed_by_owner"
      },
      {
        "stopId": "hotel-estilo-de-minas",
        "checkIn": "2026-10-08",
        "checkOut": "2026-10-10",
        "reservationStatus": "planned"
      },
      {
        "stopId": "belohorizonte",
        "checkIn": "2026-10-10",
        "checkOut": "2026-10-12"
      },
      {
        "stopId": "ouropreto",
        "checkIn": "2026-10-12",
        "checkOut": "2026-10-14"
      },
      {
        "stopId": "tiradentes",
        "checkIn": "2026-10-14",
        "checkOut": "2026-10-16"
      }
    ],
    "dayNotes": []
  },
  "routeStops": [
    {
      "id": "mirassol",
      "name": "Mirassol · origem",
      "lat": -20.81414,
      "lon": -49.50745,
      "kind": "cidade",
      "canHostStay": true,
      "type": "historia",
      "days": "Ponto de partida e retorno",
      "sights": [],
      "kid": "Organize a primeira perna com pausa planejada.",
      "url": "https://www.google.com/maps/search/?api=1&query=Mirassol+SP",
      "guideBriefing": "Mirassol é o ponto de partida paulista do circuito. Fundada no início do século XX durante a expansão agrícola e ferroviária do noroeste de São Paulo, marca o contraste entre uma região de ocupação mais recente e os núcleos mineiros formados nos ciclos do ouro e dos diamantes.",
      "relevanceSource": "guide",
      "ageClassification": {
        "status": "indeterminada"
      },
      "ticket": {
        "status": "indeterminado"
      },
      "profile": "Origem e retorno do circuito",
      "attractions": [],
      "selectedByDefault": true
    },
    {
      "id": "canastra",
      "name": "Serra da Canastra",
      "lat": -20.24528,
      "lon": -46.36583,
      "kind": "regiao",
      "canHostStay": true,
      "type": "natureza",
      "days": "1–2 dias",
      "sights": [
        "Parque Nacional",
        "Cachoeira Casca d’Anta",
        "Queijarias e mirantes"
      ],
      "kid": "Acesso a atrativos pode envolver estrada de terra e trilhas; consulte o ICMBio e operadores antes de ir com bebês.",
      "url": "https://www.gov.br/icmbio/pt-br/assuntos/biodiversidade/unidade-de-conservacao/unidades-de-biomas/cerrado/lista-de-ucs/parna-da-serra-da-canastra",
      "attractions": [
        {
          "name": "Casca d’Anta",
          "lat": -20.30191,
          "lon": -46.52234,
          "locationAccuracy": "exact",
          "catalogName": "Casca d'Anta",
          "description": "Grande queda do rio São Francisco despencando da borda da serra. É o cartão-postal do parque e a atração natural mais reconhecida da Canastra.",
          "agencyRationale": "É a atração natural mais reconhecida da Canastra.",
          "visitType": "Trilha / cachoeira",
          "estimatedDuration": "meio dia",
          "publishedDuration": "—",
          "oneYearOld": "—",
          "access": {
            "level": "hard",
            "label": "Exigente",
            "description": "Visita à cachoeira por trilha, com possibilidade de degraus e terreno irregular. Confirme o trecho escolhido, duração, desnível e alternativas de acesso."
          },
          "days": "meio dia",
          "relevanceSource": "agency",
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "indeterminado"
          },
          "kind": "atracao",
          "type": "natureza"
        },
        {
          "name": "Parque Nacional da Serra da Canastra",
          "description": "Chapadões, campos de altitude, cerrado e fauna formam uma das paisagens mais características do interior mineiro. A Canastra é um destino de paisagem e estrada rural; as agências organizam os dias em torno dos acessos ao parque, fauna, cachoeiras e fazendas produtoras.",
          "agencyRationale": "A Canastra é um destino de paisagem e estrada rural; as agências organizam os dias em torno dos acessos ao parque, fauna, cachoeiras e fazendas produtoras.",
          "visitType": "Carro + natureza",
          "estimatedDuration": "1 dia",
          "publishedDuration": "—",
          "oneYearOld": "—",
          "access": {
            "level": "hard",
            "label": "Exigente / variável",
            "description": "Visita combina deslocamento de carro e percursos de natureza. Distância e terreno variam entre trilhas e cachoeiras; confirme o roteiro e as condições de acesso ao parque."
          },
          "lat": -20.24528,
          "lon": -46.36583,
          "locationAccuracy": "city-center",
          "days": "1 dia",
          "relevanceSource": "agency",
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "indeterminado"
          },
          "kind": "atracao",
          "type": "natureza"
        },
        {
          "name": "Nascente histórica do São Francisco",
          "description": "Ponto tradicionalmente identificado como nascente do rio São Francisco dentro do parque. Dá significado geográfico e cultural à visita, além da paisagem.",
          "agencyRationale": "Dá significado geográfico e cultural à visita, além da paisagem.",
          "visitType": "Carro + caminhada curta",
          "estimatedDuration": "1 h + deslocamento",
          "publishedDuration": "—",
          "oneYearOld": "—",
          "access": {
            "level": "unknown",
            "label": "A confirmar",
            "description": "Visita de carro com caminhada curta, conforme o tipo de visita cadastrado. Confirme a estrada, o trecho a pé e seus desníveis; a dificuldade não está documentada para a nascente."
          },
          "lat": -20.243269,
          "lon": -46.446873,
          "locationAccuracy": "exact",
          "days": "1 h + deslocamento",
          "relevanceSource": "agency",
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "indeterminado"
          },
          "kind": "atracao",
          "type": "natureza"
        },
        {
          "name": "Queijarias de Canastra",
          "description": "Fazendas mantêm métodos tradicionais de produção do queijo artesanal da Canastra, permitindo conhecer produção, maturação e degustação. Gastronomia e contato com produtores são parte essencial dos roteiros da região.",
          "agencyRationale": "Gastronomia e contato com produtores são parte essencial dos roteiros da região.",
          "visitType": "Visita / degustação",
          "estimatedDuration": "2 h",
          "publishedDuration": "—",
          "oneYearOld": "—",
          "access": {
            "level": "unknown",
            "label": "A confirmar",
            "description": "Visita e degustação dependem da queijaria escolhida. Confirme estrada de acesso, entrada e circulação com o produtor."
          },
          "lat": -20.24528,
          "lon": -46.36583,
          "locationAccuracy": "city-center",
          "days": "2 h",
          "relevanceSource": "agency",
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "indeterminado"
          },
          "kind": "atracao",
          "type": "gastronomia"
        }
      ],
      "guideBriefing": "A Serra da Canastra é um grande chapadão do sudoeste mineiro, protegido em parte pelo Parque Nacional criado em 1972. A região está ligada às cabeceiras do rio São Francisco, ao Cerrado e aos campos de altitude, à pecuária tradicional e ao queijo artesanal da Canastra. A visita combina geografia, conservação ambiental e uma cultura rural moldada pelo isolamento das serras.",
      "profile": "Parque nacional · cachoeiras · gastronomia",
      "relevanceSource": "guide",
      "ageClassification": {
        "status": "indeterminada"
      },
      "ticket": {
        "status": "por_passeio"
      },
      "stayDays": [
        1,
        2
      ],
      "access": {
        "level": "hard",
        "label": "Exigente / variável",
        "description": "Cachoeira Casca d’Anta e trilhas têm terreno e distância variáveis. Confirme o trecho e o acesso local; visitas à nascente e a queijarias precisam ser avaliadas separadamente."
      }
    },
    {
      "id": "capitolio",
      "name": "Capitólio",
      "lat": -20.6144,
      "lon": -46.04884,
      "kind": "cidade",
      "canHostStay": true,
      "type": "natureza",
      "days": "1 dia",
      "sights": [
        "Cânions e Lago de Furnas",
        "Mirante dos Canyons",
        "Passeio de lancha"
      ],
      "kid": "Prefira atrações de acesso simples; confirmar colete, idade mínima e política para bebês antes de reservar lancha.",
      "url": "https://www.capitolio.mg.gov.br/portal/turismo",
      "attractions": [
        {
          "name": "Mirante dos Canyons",
          "lat": -20.6461,
          "lon": -46.26575,
          "locationAccuracy": "exact",
          "relevanceSource": "guide",
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "online",
            "url": "https://ingressos.pauaparque.com.br/"
          },
          "access": {
            "level": "moderate",
            "label": "Variável",
            "description": "Visita ao mirante com caminhada; pode haver escadarias. Confirme o percurso, os degraus e a disponibilidade de acesso sem escadas."
          },
          "kind": "atracao",
          "type": "natureza",
          "description": "Parque de contemplação dos cânions de Furnas, com mirantes, deck suspenso, trilhas e piscinas naturais. A duração e as condições de acesso dependem das atividades escolhidas; confirme com o parque.",
          "agencyRationale": "Complemento documentado na página oficial do parque; inclusão em roteiro comercial de agência não confirmada.",
          "visitType": "Mirante / caminhada",
          "estimatedDuration": "Duração a confirmar",
          "publishedDuration": "—",
          "oneYearOld": "A confirmar",
          "days": "Duração a confirmar",
          "sourceUrl": "https://cataguacapitolio.com.br/mirante",
          "researchedAt": "2026-10-02",
          "mapQuery": "Parque Mirante dos Canyons MG-050 km 312 Capitólio MG",
          "visitLinks": [
            {
              "label": "Parque · fonte oficial",
              "url": "https://cataguacapitolio.com.br/mirante"
            }
          ]
        },
        {
          "name": "Cânions de Furnas",
          "description": "Paredões rochosos cortados pelas águas do reservatório de Furnas. A combinação de rocha vertical e água é a imagem que tornou a região famosa. Capitólio entra quando a agência quer equilibrar muitos dias de cidades históricas com água e paisagem. Normalmente merece ao menos um dia próprio porque as atrações são espalhadas.",
          "agencyRationale": "Capitólio entra quando a agência quer equilibrar muitos dias de cidades históricas com água e paisagem. Normalmente merece ao menos um dia próprio porque as atrações são espalhadas.",
          "visitType": "Lancha / natureza",
          "estimatedDuration": "meio dia ou dia",
          "publishedDuration": "—",
          "oneYearOld": "Sim no passeio de lancha — operadores aceitam 1–4 anos",
          "access": {
            "level": "unknown",
            "label": "Embarque a combinar",
            "description": "Visita de lancha. As condições de acesso dependem da embarcação e do embarque; confirme degraus, apoio e adaptações com o operador. O cadastro não informa o esforço físico desse passeio."
          },
          "lat": -20.6144,
          "lon": -46.04884,
          "locationAccuracy": "city-center",
          "days": "meio dia ou dia",
          "relevanceSource": "agency",
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "indeterminado"
          },
          "kind": "atracao",
          "type": "natureza"
        },
        {
          "name": "Passeio pelo Lago de Furnas",
          "description": "Passeios de barco permitem entrar nos braços do lago e observar cânions e cachoeiras a partir da água. É a experiência central vendida pelas operadoras na região.",
          "agencyRationale": "É a experiência central vendida pelas operadoras na região.",
          "visitType": "Lancha",
          "estimatedDuration": "4 h / dia inteiro",
          "publishedDuration": "—",
          "oneYearOld": "Sim — operadores aceitam 1–4 anos",
          "access": {
            "level": "moderate",
            "label": "Embarque com condições",
            "description": "Passeio de lancha cujo acesso depende do embarque e da embarcação. Confirme degraus, apoio e condições para mobilidade reduzida com o operador."
          },
          "lat": -20.6144,
          "lon": -46.04884,
          "locationAccuracy": "city-center",
          "days": "4 h / dia inteiro",
          "relevanceSource": "agency",
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "indeterminado"
          },
          "kind": "atracao",
          "type": "natureza"
        },
        {
          "name": "Mirantes dos cânions",
          "description": "Pontos elevados permitem compreender a escala do relevo e do reservatório de cima. Complementam a perspectiva obtida no passeio de barco.",
          "agencyRationale": "Complementam a perspectiva obtida no passeio de barco.",
          "visitType": "Mirante / caminhada",
          "estimatedDuration": "2 h",
          "publishedDuration": "—",
          "oneYearOld": "—",
          "access": {
            "level": "hard",
            "label": "Exigente",
            "description": "Percursos de mirante e caminhada podem envolver degraus e terreno irregular. A estimativa de esforço depende do mirante escolhido; confirme distância, desnível e alternativas de acesso."
          },
          "lat": -20.6144,
          "lon": -46.04884,
          "locationAccuracy": "city-center",
          "days": "2 h",
          "relevanceSource": "agency",
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "indeterminado"
          },
          "kind": "atracao",
          "type": "natureza"
        },
        {
          "name": "Cachoeiras",
          "description": "Diversos complexos de quedas e piscinas naturais ficam espalhados pela região. Justificam mais de um dia no destino.",
          "agencyRationale": "Justificam mais de um dia no destino.",
          "visitType": "Natureza / banho",
          "estimatedDuration": "meio dia",
          "publishedDuration": "—",
          "oneYearOld": "—",
          "access": {
            "level": "moderate",
            "label": "Variável",
            "description": "As cachoeiras têm percursos diferentes. Confirme estrada, distância da caminhada, terreno e condições de banho para a cachoeira escolhida."
          },
          "lat": -20.6144,
          "lon": -46.04884,
          "locationAccuracy": "city-center",
          "days": "meio dia",
          "relevanceSource": "agency",
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "indeterminado"
          },
          "kind": "atracao",
          "type": "natureza"
        }
      ],
      "guideBriefing": "Capitólio mudou profundamente com a formação do reservatório de Furnas, no início da década de 1960. A água inundou vales e criou a paisagem de braços de lago entre paredões rochosos que hoje caracteriza a região. O interesse histórico e geográfico está justamente nessa transformação: uma obra de geração de energia produziu uma nova paisagem e reorganizou a economia local em torno do turismo.",
      "profile": "Cânions · água · natureza",
      "relevanceSource": "guide",
      "ageClassification": {
        "status": "indeterminada"
      },
      "ticket": {
        "status": "por_passeio"
      },
      "stayDays": [
        1,
        1
      ],
      "access": {
        "level": "moderate",
        "label": "Variável",
        "description": "Mirantes podem ter escadarias; passeios de lancha dependem do embarque. Confirme degraus, apoio e percurso com o responsável por cada passeio."
      }
    },
    {
      "id": "congonhas",
      "name": "Congonhas",
      "lat": -20.50152,
      "lon": -43.85646,
      "kind": "cidade",
      "canHostStay": true,
      "type": "historia",
      "days": "½–1 dia",
      "sights": [
        "Santuário do Bom Jesus de Matosinhos",
        "Profetas de Aleijadinho"
      ],
      "kid": "Passeio cultural mais curto; verificar ladeiras, sombra e acesso com carrinho.",
      "url": "https://www.congonhas.org.br/",
      "attractions": [
        {
          "name": "Santuário do Bom Jesus",
          "description": "Complexo religioso setecentista construído no alto de uma colina e reconhecido como Patrimônio Mundial. O valor está no conjunto formado pela basílica, adro, profetas e capelas. Congonhas oferece alto valor histórico com logística simples: o conjunto principal está concentrado no santuário. Por isso cabe naturalmente no deslocamento entre Ouro Preto/BH e São João del-Rei/Tiradentes.",
          "agencyRationale": "Congonhas oferece alto valor histórico com logística simples: o conjunto principal está concentrado no santuário. Por isso cabe naturalmente no deslocamento entre Ouro Preto/BH e São João del-Rei/Tiradentes.",
          "visitType": "Complexo religioso",
          "estimatedDuration": "1 h",
          "publishedDuration": "—",
          "oneYearOld": "—",
          "access": {
            "level": "moderate",
            "label": "Escadaria e calçamento",
            "description": "Visita ao conjunto do santuário, com escadaria e calçamento no percurso. Verifique alternativas sem degraus e planeje pausas."
          },
          "catalogName": "Santuário do Bom Jesus de Matosinhos",
          "lat": -20.50753,
          "lon": -43.86053,
          "locationAccuracy": "exact",
          "relevanceSource": "agency",
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "indeterminado"
          },
          "kind": "atracao",
          "type": "historia",
          "days": "1 h"
        },
        {
          "name": "Doze Profetas",
          "description": "Doze esculturas monumentais em pedra-sabão executadas por Aleijadinho e sua oficina, consideradas um dos ápices e símbolos do barroco brasileiro. A disposição das figuras no adro faz parte da obra; observar as esculturas no local e no conjunto concebido para elas é diferente de conhecê-las por fotografias.",
          "agencyRationale": "Os Profetas são tratados como obra indispensável de Aleijadinho e como um dos símbolos do barroco brasileiro. Ver as esculturas no local e na disposição concebida para o adro é diferente de conhecê-las por fotografias.",
          "visitType": "Externa / contemplação",
          "estimatedDuration": "40 min",
          "publishedDuration": "—",
          "oneYearOld": "—",
          "access": {
            "level": "moderate",
            "label": "Escadaria e calçamento",
            "description": "Visita ao conjunto do santuário, com escadaria e calçamento no percurso. Verifique alternativas sem degraus e planeje pausas."
          },
          "lat": -20.508574,
          "lon": -43.860643,
          "locationAccuracy": "exact",
          "days": "40 min",
          "relevanceSource": "agency",
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "indeterminado"
          },
          "kind": "atracao",
          "type": "historia"
        },
        {
          "name": "Passos da Paixão / Via Crucis",
          "description": "Seis capelas guardam grupos de esculturas policromadas representando cenas da Paixão de Cristo. Permitem observar Aleijadinho também como escultor de figuras dramáticas em madeira. Complementam os Profetas e formam uma narrativa artística completa.",
          "agencyRationale": "Complementam os Profetas e formam uma narrativa artística completa.",
          "visitType": "Capelas / caminhada",
          "estimatedDuration": "1 h",
          "publishedDuration": "—",
          "oneYearOld": "—",
          "access": {
            "level": "moderate",
            "label": "Caminhada entre capelas",
            "description": "Percurso a pé entre as capelas do conjunto religioso. Considere o calçamento e as escadarias do entorno; confirme o trecho e alternativas sem degraus."
          },
          "lat": -20.508574,
          "lon": -43.860643,
          "locationAccuracy": "exact",
          "days": "1 h",
          "relevanceSource": "agency",
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "indeterminado"
          },
          "kind": "atracao",
          "type": "historia"
        },
        {
          "name": "Sala dos Milagres / ex-votos",
          "description": "Reúne objetos deixados por fiéis em agradecimento por graças alcançadas, documentando séculos de religiosidade popular. Acrescenta a dimensão humana e devocional ao conjunto monumental.",
          "agencyRationale": "Acrescenta a dimensão humana e devocional ao conjunto monumental.",
          "visitType": "Museu/devocional",
          "estimatedDuration": "30 min",
          "publishedDuration": "—",
          "oneYearOld": "—",
          "access": {
            "level": "moderate",
            "label": "Atenção ao percurso",
            "description": "O entorno do santuário tem escadaria e calçamento; essa estimativa não descreve a circulação interna. Confirme a entrada, os desníveis e os recursos de apoio do espaço visitado."
          },
          "lat": -20.508574,
          "lon": -43.860643,
          "locationAccuracy": "exact",
          "days": "30 min",
          "relevanceSource": "agency",
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "indeterminado"
          },
          "kind": "atracao",
          "type": "historia"
        },
        {
          "name": "Museu de Congonhas",
          "description": "Museu dedicado à interpretação do Santuário, da peregrinação, da devoção e da obra de Aleijadinho. Ajuda a compreender o conjunto antes ou depois de observá-lo ao ar livre. Roteiros oficiais o incluem porque fornece contexto: explica por que o Santuário existe, como a peregrinação se desenvolveu e por que Profetas e Passos são tão importantes.",
          "agencyRationale": "Roteiros oficiais o incluem porque fornece contexto: explica por que o Santuário existe, como a peregrinação se desenvolveu e por que Profetas e Passos são tão importantes.",
          "visitType": "Visita turística",
          "estimatedDuration": "1 h",
          "publishedDuration": "—",
          "oneYearOld": "—",
          "access": {
            "level": "moderate",
            "label": "Atenção ao percurso",
            "description": "O entorno do santuário tem escadaria e calçamento; essa estimativa não descreve a circulação interna. Confirme a entrada, os desníveis e os recursos de apoio do espaço visitado."
          },
          "lat": -20.506946,
          "lon": -43.861204,
          "locationAccuracy": "exact",
          "days": "1 h",
          "relevanceSource": "agency",
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "indeterminado"
          },
          "kind": "atracao",
          "type": "historia"
        }
      ],
      "guideBriefing": "Congonhas cresceu no contexto da mineração setecentista e tornou-se um dos grandes centros de peregrinação de Minas. No Santuário do Bom Jesus de Matosinhos, construído a partir do século XVIII, arquitetura, devoção e a obra de Aleijadinho formam um conjunto único. Os Profetas em pedra-sabão e os Passos da Paixão permitem compreender o barroco mineiro como narrativa religiosa e experiência espacial, não apenas como decoração.",
      "profile": "Aleijadinho · arte sacra · história",
      "relevanceSource": "agency",
      "ageClassification": {
        "status": "indeterminada"
      },
      "ticket": {
        "status": "por_passeio"
      },
      "stayDays": [
        0.5,
        1
      ],
      "access": {
        "level": "moderate",
        "label": "Atenção a ladeiras",
        "description": "O entorno do santuário tem escadaria e calçamento. Confirme percursos sem degraus e planeje pausas; os acessos internos dos museus precisam ser verificados separadamente."
      }
    },
    {
      "id": "ouropreto",
      "name": "Ouro Preto",
      "lat": -20.38567,
      "lon": -43.50362,
      "kind": "cidade",
      "canHostStay": true,
      "type": "historia",
      "days": "1–2 dias",
      "sights": [
        "Praça Tiradentes",
        "Museu da Inconfidência",
        "Casa de Tomás Antônio Gonzaga",
        "Basílica de Nossa Senhora do Pilar",
        "Igreja de São Francisco de Assis",
        "Casa dos Contos",
        "Teatro Municipal / Casa da Ópera",
        "Capela do Nosso Senhor do Bonfim",
        "Igreja Matriz de São Gonçalo do Amarante · Amarantina",
        "Capela de Nossa Senhora da Piedade - Ouro Preto",
        "Capela de Nossa Senhora das Dores OP",
        "Capela de Santana - Ouro Preto",
        "Chafariz do Antônio Dias"
      ],
      "kid": "Ladeiras e calçamento irregular podem dificultar carrinho; planeje pausas e hospedagem bem localizada.",
      "url": "https://ouropreto.org.br/atracoes-turisticas",
      "guideBriefing": "Ouro Preto, antiga Vila Rica, foi um dos centros mais ricos e politicamente importantes da América portuguesa durante o ciclo do ouro. A cidade permite acompanhar a mineração, a fiscalização da Coroa, a escravidão, as irmandades religiosas, a Inconfidência Mineira e o florescimento do barroco. Minas, igrejas, repartições e casarões são partes de uma mesma estrutura econômica e social do século XVIII.\n\nAmarantina: a Igreja Matriz de São Gonçalo do Amarante, construída na década de 1750, é a principal referência religiosa e urbana do distrito. A ficha municipal descreve a capela inicial, as ampliações e o vínculo da matriz com as festas locais.\n\nAuditoria do portal municipal em 13/10/2026: a página oficial de capelas lista 19 locais no município; as 10 entradas identificadas como Ouro Preto estão individualizadas aqui, junto com a Capela de Nossa Senhora das Dores OP, que tem ficha própria. As igrejas históricas, 8 minas, museus e casas também aparecem como opções nomeadas, não como ordem nem visitas automaticamente marcadas; entre as opções culturais estão o Museu Boulieu e o Memorial do Tropeiro em Santo Antônio do Salto. Cada ficha liga à fonte oficial e distingue endereço/ponto exato de busca textual; confirme horário, ingresso, obra e reserva antes de sair. Também foram individualizados o Passo de Antônio Dias (fechado fora da Semana Santa), a Igreja Queimada no distrito de Antônio Pereira e o Chafariz do Antônio Dias, que constava em obra com conclusão prevista para outubro de 2026. São opções com acesso condicionado, não visitas confirmadas nem paradas a pé do centro.",
      "profile": "História · barroco · mineração",
      "attractions": [
        {
          "name": "Praça Tiradentes",
          "description": "Antigo centro cívico de Vila Rica. De um lado está o antigo Palácio dos Governadores; do outro, a antiga Casa de Câmara e Cadeia. O monumento a Tiradentes marca o lugar onde sua cabeça foi exposta após a execução.\n\nA praça funciona como abertura da visita a Ouro Preto: em poucos metros, o guia apresenta a relação entre Coroa, administração colonial, mineração e Inconfidência. A partir dela, quase todo o restante do centro pode ser percorrido a pé.",
          "agencyRationale": "A praça funciona como aula de abertura de Ouro Preto: em poucos metros o guia apresenta Coroa, administração colonial, mineração e Inconfidência. A partir dela, quase todo o restante do centro pode ser percorrido a pé.",
          "visitType": "Externa / caminhada",
          "estimatedDuration": "30 min",
          "publishedDuration": "—",
          "oneYearOld": "—",
          "access": {
            "level": "easy",
            "label": "Mais fácil",
            "description": "Visita externa com caminhada pela praça. A estimativa considera um trecho curto; confirme calçamento, degraus e ladeiras no percurso escolhido."
          },
          "lat": -20.385743,
          "lon": -43.503686,
          "locationAccuracy": "exact",
          "days": "30 min",
          "relevanceSource": "agency",
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "indeterminado"
          },
          "kind": "atracao",
          "type": "historia"
        },
        {
          "name": "Museu da Inconfidência",
          "description": "Ocupa a antiga Casa de Câmara e Cadeia. Reúne objetos, documentos, arte sacra e os restos mortais atribuídos a inconfidentes, explicando a sociedade mineradora e a Inconfidência Mineira. É recorrente nos pacotes porque organiza uma história complexa em objetos, edifício e personagens. Depois da visita, Tiradentes e a Inconfidência deixam de ser apenas nomes vistos nas ruas e praças.",
          "agencyRationale": "É recorrente nos pacotes porque organiza uma história complexa em objetos, edifício e personagens. Depois da visita, Tiradentes e a Inconfidência deixam de ser apenas nomes vistos nas ruas e praças.",
          "visitType": "Museu / interna",
          "estimatedDuration": "1h30",
          "publishedDuration": "1–1h30",
          "oneYearOld": "Sim",
          "access": {
            "level": "moderate",
            "label": "Atenção ao entorno",
            "description": "O percurso pelo centro histórico tem ladeiras e calçamento irregular. No museu, o cadastro registra rampas, corrimãos, cadeira de rodas e sanitário adaptado; confirme a entrada e o uso desses recursos na visita."
          },
          "lat": -20.3860981,
          "lon": -43.5036894,
          "locationAccuracy": "exact",
          "days": "1h30",
          "relevanceSource": "agency",
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "gratuito",
            "url": "https://www.gov.br/museus/pt-br/museus-ibram/museu-da-inconfidencia"
          },
          "kind": "atracao",
          "type": "historia"
        },
        {
          "name": "Igreja de São Francisco de Assis",
          "description": "Uma das obras-primas do barroco/rococó mineiro, com projeto e esculturas associados a Aleijadinho e pintura de Mestre Ataíde. Para os circuitos de barroco, é uma parada essencial por reunir arquitetura, escultura e pintura desses mestres no mesmo edifício, tornando visível o que os guias explicam sobre a arte religiosa mineira. A ficha municipal do Museu Aleijadinho informa que peças do acervo estão expostas nesta igreja, além de sua sede física nos fundos da Matriz de Nossa Senhora da Conceição. Essa visita é parte do circuito do museu, não um passeio separado.",
          "agencyRationale": "Para os circuitos de barroco, é parada essencial: permite ver arquitetura, escultura e pintura associadas a Aleijadinho e Ataíde no mesmo edifício, tornando visível o que os guias explicam sobre o barroco mineiro.",
          "visitType": "Igreja / interna",
          "estimatedDuration": "30 min",
          "publishedDuration": "—",
          "oneYearOld": "—",
          "access": {
            "level": "easy",
            "label": "Mais fácil na visita",
            "description": "A estimativa considera uma visita curta ao templo. Confirme degraus, entrada e circulação interna, além de calçamento e ladeiras no trajeto; o cadastro não comprova um percurso sem barreiras."
          },
          "lat": -20.3866,
          "lon": -43.5029,
          "locationAccuracy": "exact",
          "days": "30 min",
          "relevanceSource": "agency",
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "indeterminado"
          },
          "kind": "atracao",
          "type": "historia",
          "mapQuery": "Igreja de São Francisco de Assis, Largo de Coimbra, Ouro Preto MG",
          "visitLinks": [
            {
              "label": "Prefeitura — Igreja de São Francisco de Assis",
              "url": "https://www.ouropreto.mg.gov.br/turismo/atrativo-item/585"
            },
            {
              "label": "Prefeitura — situação das obras (02/09/2026)",
              "url": "https://www.ouropreto.mg.gov.br/noticia/5756"
            },
            {
              "label": "Prefeitura — Museu Aleijadinho e circuito do acervo",
              "url": "https://www.ouropreto.mg.gov.br/turismo/atrativo-item/590"
            },
            {
              "label": "Prefeitura — peças do acervo nas igrejas",
              "url": "https://www.ouropreto.mg.gov.br/turismo/atrativo-item/584"
            }
          ],
          "scheduleNote": "Em 02/09/2026, a Prefeitura informou contrato de restauração com início então previsto para agosto e prazo de seis meses. Confirme se a igreja está acessível no dia; não presuma visita interna."
        },
        {
          "name": "Basílica de Nossa Senhora do Pilar",
          "description": "Exterior relativamente sóbrio esconde um interior coberto por talha dourada. A quantidade de ouro aplicada na decoração materializa a riqueza produzida pela mineração de Vila Rica. Roteiros organizados a usam para mostrar como parte dessa riqueza, apresentada nas histórias sobre ouro e impostos da Coroa, foi convertida em arte e ostentação religiosa.",
          "agencyRationale": "As agências a usam para materializar a riqueza de Vila Rica. Depois de ouvir sobre ouro e impostos da Coroa, o visitante vê como parte dessa riqueza foi convertida em arte e ostentação religiosa.",
          "visitType": "Igreja / interna",
          "estimatedDuration": "40 min",
          "publishedDuration": "—",
          "oneYearOld": "—",
          "access": {
            "level": "moderate",
            "label": "Atenção ao entorno",
            "description": "O percurso pelo centro histórico pode envolver ladeiras e calçamento irregular. Os acessos e a circulação interna desta atração não estão detalhados; confirme entrada, degraus e alternativas sem escadas."
          },
          "lat": -20.386489,
          "lon": -43.508,
          "locationAccuracy": "exact",
          "days": "40 min",
          "relevanceSource": "agency",
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "indeterminado"
          },
          "kind": "atracao",
          "type": "historia",
          "mapQuery": "Basílica de Nossa Senhora do Pilar, Ouro Preto MG",
          "visitLinks": [
            {
              "label": "Prefeitura — Museu de Arte Sacra na Basílica do Pilar",
              "url": "https://www.ouropreto.mg.gov.br/turismo/atrativo-item/627"
            }
          ]
        },
        {
          "name": "Igreja Nossa Senhora do Carmo",
          "description": "Igreja rococó ligada à Ordem Terceira do Carmo, com elementos associados a Aleijadinho e importante conjunto artístico. Fica no núcleo da Praça Tiradentes e complementa a leitura da arte religiosa local.",
          "agencyRationale": "Fica no núcleo da Praça Tiradentes e complementa a leitura da arte religiosa local.",
          "visitType": "Igreja / interna",
          "estimatedDuration": "30 min",
          "publishedDuration": "—",
          "oneYearOld": "—",
          "access": {
            "level": "easy",
            "label": "Mais fácil na visita",
            "description": "A estimativa considera uma visita curta ao templo. Confirme degraus, entrada e circulação interna, além de calçamento e ladeiras no trajeto; o cadastro não comprova um percurso sem barreiras."
          },
          "lat": -20.38613,
          "lon": -43.50424,
          "locationAccuracy": "exact",
          "days": "30 min",
          "relevanceSource": "agency",
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "indeterminado"
          },
          "kind": "atracao",
          "type": "historia",
          "mapQuery": "Igreja de Nossa Senhora do Carmo, Praça Tiradentes, Ouro Preto MG",
          "visitLinks": [
            {
              "label": "Prefeitura — Igreja de Nossa Senhora do Carmo",
              "url": "https://www.ouropreto.mg.gov.br/turismo/atrativo-item/587"
            }
          ]
        },
        {
          "name": "Igreja Nossa Senhora do Rosário",
          "description": "Igreja de planta curva singular, construída por irmandade ligada à população negra. Ajuda a compreender a organização religiosa e social de grupos que não pertenciam às elites brancas. Acrescenta uma dimensão social que vai além das igrejas mais ricas do centro.",
          "agencyRationale": "Acrescenta uma dimensão social que vai além das igrejas mais ricas do centro.",
          "visitType": "Igreja / interna",
          "estimatedDuration": "30 min",
          "publishedDuration": "—",
          "oneYearOld": "—",
          "access": {
            "level": "easy",
            "label": "Mais fácil na visita",
            "description": "A estimativa considera uma visita curta ao templo. Confirme degraus, entrada e circulação interna, além de calçamento e ladeiras no trajeto; o cadastro não comprova um percurso sem barreiras."
          },
          "lat": -20.383909,
          "lon": -43.50981,
          "locationAccuracy": "exact",
          "days": "30 min",
          "relevanceSource": "agency",
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "indeterminado"
          },
          "kind": "atracao",
          "type": "historia",
          "mapQuery": "Igreja de Nossa Senhora do Rosário, bairro Rosário, Ouro Preto MG",
          "visitLinks": [
            {
              "label": "Prefeitura — Igreja de Nossa Senhora do Rosário",
              "url": "https://www.ouropreto.mg.gov.br/turismo/atrativo-item/593"
            }
          ]
        },
        {
          "name": "Teatro Municipal / Casa da Ópera",
          "description": "Teatro setecentista inaugurado em 1770, com sala em formato de ferradura e três pavimentos. A visita permite entender a vida cultural de Vila Rica fora dos circuitos religiosos e da mineração; confira no portal municipal se há visitação interna ou apresentação na data escolhida.",
          "agencyRationale": "Mostra a vida cênica de Vila Rica e amplia o circuito para além de igrejas, museus e minas.",
          "visitType": "Teatro histórico / visita interna sujeita a confirmação",
          "estimatedDuration": "40 min",
          "publishedDuration": "—",
          "oneYearOld": "—",
          "access": {
            "level": "moderate",
            "label": "Atenção ao entorno",
            "description": "O percurso pelo centro histórico pode envolver ladeiras e calçamento irregular. Os acessos e a circulação interna desta atração não estão detalhados; confirme entrada, degraus e alternativas sem escadas."
          },
          "lat": -20.38592,
          "lon": -43.504947,
          "locationAccuracy": "exact",
          "days": "40 min",
          "relevanceSource": "agency",
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "indeterminado"
          },
          "kind": "atracao",
          "type": "historia",
          "scheduleNote": "A visitação interna pode depender da programação e de atividades do teatro; confirme diretamente antes de ir."
        },
        {
          "name": "Grande Mina Central",
          "description": "A Prefeitura a descreve como a maior mina de ouro aberta à visitação em Ouro Preto, a cerca de 350 m da Praça Tiradentes, com mais de 600 m de galerias visitáveis. A ficha menciona afloramentos de minério de ferro no Quadrilátero Ferrífero e identifica o endereço na Rua dos Paulistas, 295.",
          "agencyRationale": "A visita subterrânea mostra a escala da extração e a geologia do Quadrilátero Ferrífero, ligando a paisagem da cidade ao trabalho minerador.",
          "visitType": "Mina / visita guiada",
          "estimatedDuration": "1 h",
          "publishedDuration": "—",
          "oneYearOld": "A confirmar",
          "access": {
            "level": "hard",
            "label": "Percurso subterrâneo guiado",
            "description": "Visita em galerias subterrâneas; altura, piso, degraus e restrições variam. Confirme condições e acessibilidade com o operador antes de comprar."
          },
          "lat": -20.3844891,
          "lon": -43.5024196,
          "locationAccuracy": "street-center",
          "days": "1 h",
          "relevanceSource": "official_tourism_inventory",
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "indeterminado",
            "url": "https://www.ouropreto.mg.gov.br/turismo/atrativo-item/2949"
          },
          "kind": "atracao",
          "type": "historia",
          "mapQuery": "Grande Mina Central, Rua dos Paulistas 295, Antônio Dias, Ouro Preto MG",
          "catalogName": "Grande Mina Central",
          "visitLinks": [
            {
              "label": "Prefeitura de Ouro Preto — ficha turística",
              "url": "https://www.ouropreto.mg.gov.br/turismo/atrativo-item/2949"
            }
          ],
          "scheduleNote": "A ficha municipal informa visitação diária de 9h a 17h e orienta contato para reservas e valores; não publica preço fixo. Confirme ingresso, reserva e horário antes de sair. O ponto cartográfico é o trecho da Rua dos Paulistas, não a entrada exata."
        },
        {
          "name": "Mina 13 de Maio",
          "description": "A ficha municipal informa cerca de 180 m de extensão e destaca estruturas geológicas que mostram os dobramentos da Serra de Ouro Preto. A recepção, chamada Casa da Mineração, foi construída em canga; no local também são expostos ferramentas e artefatos de ferro usados na mineração.",
          "agencyRationale": "Combina galerias, leitura geológica e uma estrutura de recepção ligada aos materiais locais, em uma experiência distinta das demais minas.",
          "visitType": "Mina / visita guiada",
          "estimatedDuration": "45–60 min",
          "publishedDuration": "—",
          "oneYearOld": "A confirmar",
          "access": {
            "level": "hard",
            "label": "Percurso subterrâneo guiado",
            "description": "A visita desce a galerias; confirme degraus, altura, piso, duração e restrições etárias com o operador."
          },
          "lat": -20.3858668,
          "lon": -43.4919261,
          "locationAccuracy": "street-center",
          "days": "45–60 min",
          "relevanceSource": "official_tourism_inventory",
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "indeterminado",
            "url": "https://www.ouropreto.mg.gov.br/turismo/atrativo-item/1671"
          },
          "kind": "atracao",
          "type": "historia",
          "mapQuery": "Mina 13 de Maio, Rua Treze de Maio 67, Alto da Cruz, Ouro Preto MG",
          "catalogName": "Mina 13 de Maio",
          "visitLinks": [
            {
              "label": "Prefeitura de Ouro Preto — ficha turística",
              "url": "https://www.ouropreto.mg.gov.br/turismo/atrativo-item/1671"
            }
          ],
          "scheduleNote": "A Prefeitura publica visitação diária das 9h às 17h e contato (31) 3552-1685; confirme valores e funcionamento. O ponto do mapa é o trecho da Rua Treze de Maio indicado no endereço."
        },
        {
          "name": "Mina do Bijoca",
          "description": "A ficha municipal descreve galerias bem iluminadas, com trechos de alturas diferentes, e destaca a relação entre a estrutura natural da rocha e a extração do ouro. A visita permite observar a escala estreita das galerias sem confundir o local com a vizinha Mina do Chico Rei.",
          "agencyRationale": "Oferece uma visita subterrânea própria, com percurso e operador distintos de outras minas do bairro Antônio Dias.",
          "visitType": "Mina / visita guiada",
          "estimatedDuration": "45–60 min",
          "publishedDuration": "—",
          "oneYearOld": "A confirmar",
          "access": {
            "level": "moderate",
            "label": "Galerias subterrâneas",
            "description": "A ficha municipal descreve galerias iluminadas e acessíveis, mas isso não comprova acesso para cadeira de rodas nem ausência de degraus. Confirme o percurso e as restrições."
          },
          "lat": -20.3855109,
          "lon": -43.499598,
          "locationAccuracy": "exact",
          "days": "45–60 min",
          "relevanceSource": "official_tourism_inventory",
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "indeterminado",
            "url": "https://www.ouropreto.mg.gov.br/turismo/atrativo-item/1463"
          },
          "kind": "atracao",
          "type": "historia",
          "mapQuery": "Mina do Bijoca, Antônio Dias, Ouro Preto MG",
          "catalogName": "Mina do Bijoca",
          "visitLinks": [
            {
              "label": "Prefeitura de Ouro Preto — ficha turística",
              "url": "https://www.ouropreto.mg.gov.br/turismo/atrativo-item/1463"
            }
          ],
          "scheduleNote": "A ficha municipal informa visitação de segunda a sábado, 9h–17h, mas diverge no domingo: o texto indica 9h–16h e a tabela 9h–17h. Confirme o horário, valores e condições do percurso diretamente com o operador."
        },
        {
          "name": "Mina do Chico Rei",
          "description": "A ficha municipal atribui a Galanga/Chico Rei a propriedade da mina segundo a tradição oral, não como fato documental comprovado. O complexo descrito possui 175 galerias em três níveis e 325 m iluminados; há também um circuito radical separado, anunciado com duração de 2 a 4 horas.",
          "agencyRationale": "Ajuda a discutir mineração e escravização sem transformar uma tradição oral em certeza histórica; o circuito curto e o radical são produtos diferentes.",
          "visitType": "Mina / visita guiada",
          "estimatedDuration": "1 h",
          "publishedDuration": "—",
          "oneYearOld": "A confirmar",
          "access": {
            "level": "hard",
            "label": "Percurso subterrâneo guiado",
            "description": "A visita desce a galerias; duração, altura, degraus e exigência física variam entre o passeio comum e o radical. Confirme o roteiro reservado."
          },
          "lat": -20.3862658,
          "lon": -43.4992531,
          "locationAccuracy": "exact",
          "days": "1 h",
          "relevanceSource": "official_tourism_inventory",
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "indeterminado",
            "url": "https://www.ouropreto.mg.gov.br/turismo/atrativo-item/568"
          },
          "kind": "atracao",
          "type": "historia",
          "mapQuery": "Mina do Chico Rei, Rua Dom Silvério 108, Antônio Dias, Ouro Preto MG",
          "catalogName": "Mina do Chico Rei",
          "visitLinks": [
            {
              "label": "Prefeitura de Ouro Preto — ficha turística",
              "url": "https://www.ouropreto.mg.gov.br/turismo/atrativo-item/568"
            }
          ],
          "scheduleNote": "A ficha municipal diverge nos horários: o texto de visitação informa diariamente 9h–17h, enquanto o quadro de funcionamento indica 8h–17h e outra descrição informa 8h–17h30. Confirme com o operador; o circuito radical é separado e anunciado com duração de 2 a 4 horas."
        },
        {
          "name": "Mina do Jeje",
          "description": "A ficha municipal informa aproximadamente 160 m de extensão e aponta indícios arqueológicos que situam sua origem entre 1711 e 1713. O espaço propõe reconhecer conhecimentos africanos de mineração e engenharia que deixaram marcas na formação de Ouro Preto.",
          "agencyRationale": "Traz para o roteiro a autoria técnica africana, em vez de tratar a mineração apenas como processo geológico ou obra da Coroa.",
          "visitType": "Mina / visita guiada",
          "estimatedDuration": "45–60 min",
          "publishedDuration": "—",
          "oneYearOld": "A confirmar",
          "access": {
            "level": "hard",
            "label": "Percurso subterrâneo guiado",
            "description": "Visita subterrânea; confirme degraus, altura, piso e restrições com o operador antes de reservar."
          },
          "lat": -20.3860152,
          "lon": -43.4966438,
          "locationAccuracy": "street-center",
          "days": "45–60 min",
          "relevanceSource": "official_tourism_inventory",
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "indeterminado",
            "url": "https://www.ouropreto.mg.gov.br/turismo/atrativo-item/567"
          },
          "kind": "atracao",
          "type": "historia",
          "mapQuery": "Mina do Jeje, Rua Chico Rei 371, Alto da Cruz, Ouro Preto MG",
          "catalogName": "Mina do Jeje",
          "visitLinks": [
            {
              "label": "Prefeitura de Ouro Preto — ficha turística",
              "url": "https://www.ouropreto.mg.gov.br/turismo/atrativo-item/567"
            }
          ],
          "scheduleNote": "A Prefeitura informa visitação diária de 9h a 17h e contato para reservas; confirme valores e o endereço/entrada antes de ir. A coordenada é do trecho da Rua Chico Rei, não da entrada subterrânea."
        },
        {
          "name": "Mina Du Veloso",
          "description": "A ficha municipal descreve mais de 400 m de galerias que conectam câmaras e pilares de sustentação, com marcas do trabalho de mineradores escravizados. Também funciona como centro cultural dedicado à memória da mineração e oferece guia bilíngue.",
          "agencyRationale": "Une a visita subterrânea à história do trabalho escravizado e a um espaço cultural dedicado à memória da mineração.",
          "visitType": "Mina / visita guiada",
          "estimatedDuration": "1 h",
          "publishedDuration": "—",
          "oneYearOld": "A confirmar",
          "access": {
            "level": "hard",
            "label": "Percurso subterrâneo guiado",
            "description": "Galerias subterrâneas com câmaras e pilares; confirme degraus, altura, piso e esforço exigido com o operador."
          },
          "lat": -20.376179,
          "lon": -43.5159369,
          "locationAccuracy": "exact",
          "days": "1 h",
          "relevanceSource": "official_tourism_inventory",
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "indeterminado",
            "url": "https://www.ouropreto.mg.gov.br/turismo/atrativo-item/570"
          },
          "kind": "atracao",
          "type": "historia",
          "mapQuery": "Mina Du Veloso, Rua Levindo Inácio André 400, São Cristóvão, Ouro Preto MG",
          "catalogName": "Mina Du Veloso",
          "visitLinks": [
            {
              "label": "Prefeitura de Ouro Preto — ficha turística",
              "url": "https://www.ouropreto.mg.gov.br/turismo/atrativo-item/570"
            }
          ],
          "scheduleNote": "A ficha municipal informa segunda a sábado, 9h–17h; para domingo, o texto de visitação indica 9h–15h e o quadro de funcionamento 9h–17h. Confirme o horário, reserva e valor pelo contato oficial."
        },
        {
          "name": "Mina Santa Rita",
          "description": "Mina do século XVIII junto ao sítio arqueológico de Padre Faria. A Prefeitura informa cerca de 115 m de percurso guiado e seguro, em uma escavação com muitas bifurcações; a ficha atribui a estrutura a trabalhadores negros vindos do sul da África, especialmente da região do Congo.",
          "agencyRationale": "Acrescenta uma mina de visitação exclusivamente agendada e vinculada ao sítio arqueológico de Padre Faria, sem ser confundida com uma mina de acesso espontâneo.",
          "visitType": "Mina / visita guiada com agendamento",
          "estimatedDuration": "1 h",
          "publishedDuration": "—",
          "oneYearOld": "A confirmar",
          "access": {
            "level": "hard",
            "label": "Agendamento e percurso subterrâneo",
            "description": "Percurso subterrâneo guiado em galeria com bifurcações; confirme condições físicas, duração e ponto de encontro com o proprietário."
          },
          "lat": -20.3880724,
          "lon": -43.4914485,
          "locationAccuracy": "trail-point",
          "days": "1 h",
          "relevanceSource": "official_tourism_inventory",
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "agendamento",
            "url": "https://www.ouropreto.mg.gov.br/turismo/atrativo-item/673"
          },
          "kind": "atracao",
          "type": "historia",
          "mapQuery": "Mina Santa Rita, sítio arqueológico de Padre Faria, Ouro Preto MG",
          "catalogName": "Mina Santa Rita",
          "visitLinks": [
            {
              "label": "Prefeitura de Ouro Preto — ficha turística",
              "url": "https://www.ouropreto.mg.gov.br/turismo/atrativo-item/673"
            }
          ],
          "scheduleNote": "A ficha municipal lista visitação de terça a domingo, 9h–17h, mediante agendamento; às segundas, somente com reserva prévia. Valores são tratados diretamente com o proprietário. O marcador representa a área do sítio, não a entrada exata da mina."
        },
        {
          "name": "Minas do Palácio Velho",
          "description": "Minas exploradas em meados do século XVIII e adaptadas mais recentemente para visitação. A ficha municipal descreve trechos subterrâneos e galerias que ajudam a compreender tanto as condições degradantes impostas aos escravizados quanto a engenharia empregada nas escavações.",
          "agencyRationale": "Oferece uma leitura arqueológica e histórica da mineração, distinta de simplesmente entrar em qualquer galeria antiga.",
          "visitType": "Mina / visita guiada",
          "estimatedDuration": "45–60 min",
          "publishedDuration": "—",
          "oneYearOld": "A confirmar",
          "access": {
            "level": "hard",
            "label": "Percurso subterrâneo guiado",
            "description": "Visita em galerias subterrâneas; confirme degraus, altura, piso e restrições com o operador."
          },
          "lat": -20.3858837,
          "lon": -43.4989203,
          "locationAccuracy": "exact",
          "days": "45–60 min",
          "relevanceSource": "official_tourism_inventory",
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "indeterminado",
            "url": "https://www.ouropreto.mg.gov.br/turismo/atrativo-item/1012"
          },
          "kind": "atracao",
          "type": "historia",
          "mapQuery": "Minas do Palácio Velho, Rua Dom Silvério 159, Antônio Dias, Ouro Preto MG",
          "catalogName": "Minas do Palácio Velho",
          "visitLinks": [
            {
              "label": "Prefeitura de Ouro Preto — ficha turística",
              "url": "https://www.ouropreto.mg.gov.br/turismo/atrativo-item/1012"
            }
          ],
          "scheduleNote": "A ficha municipal lista funcionamento diário, 9h–17h, e contato para visitação; confirme reserva, ingresso e condições da entrada antes de ir."
        },
        {
          "name": "Rua Direita e casario colonial",
          "description": "Eixo tradicional do centro, cercado por sobrados que mostram a organização urbana e comercial de Vila Rica. O valor está no conjunto, não em um edifício isolado. Permite que o deslocamento entre atrações seja também parte da visita histórica.",
          "agencyRationale": "Permite que o deslocamento entre atrações seja também parte da visita histórica.",
          "visitType": "Caminhada / externa",
          "estimatedDuration": "1 h",
          "publishedDuration": "—",
          "oneYearOld": "—",
          "access": {
            "level": "moderate",
            "label": "Atenção ao calçamento",
            "description": "Caminhada pelo centro histórico, com ladeiras e calçamento irregular no entorno. Confirme o trecho escolhido e planeje pausas."
          },
          "lat": -20.3853985,
          "lon": -43.5045394,
          "locationAccuracy": "street-center",
          "days": "1 h",
          "relevanceSource": "agency",
          "mapQuery": "Rua Conde de Bobadela (Rua Direita), Ouro Preto MG",
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "indeterminado"
          },
          "kind": "atracao",
          "type": "historia"
        },
        {
          "name": "Casa dos Contos",
          "description": "Solar do fim do século XVIII ligado à administração das finanças e à cobrança de tributos da Coroa. Além da arquitetura, permite entender para onde ia a riqueza extraída das minas, a fiscalização do ouro, a moeda e a estrutura econômica de Vila Rica. Roteiros organizados a incluem porque completa a história contada nas minas e igrejas: depois de ver onde o ouro era extraído e gasto, aqui se entende como ele era controlado e tributado pela Coroa.",
          "agencyRationale": "Agências a incluem porque completa a história contada nas minas e igrejas: depois de ver onde o ouro era extraído e gasto, aqui se entende como ele era controlado e tributado pela Coroa.",
          "visitType": "Visita turística",
          "estimatedDuration": "1 h",
          "publishedDuration": "—",
          "oneYearOld": "—",
          "access": {
            "level": "moderate",
            "label": "Atenção ao entorno",
            "description": "O percurso pelo centro histórico pode envolver ladeiras e calçamento irregular. Os acessos e a circulação interna desta atração não estão detalhados; confirme entrada, degraus e alternativas sem escadas."
          },
          "lat": -20.38442,
          "lon": -43.506206,
          "locationAccuracy": "exact",
          "days": "1 h",
          "relevanceSource": "agency",
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "indeterminado"
          },
          "kind": "atracao",
          "type": "historia",
          "mapQuery": "Museu Casa dos Contos, Rua São José 12, Ouro Preto MG",
          "visitLinks": [
            {
              "label": "Prefeitura — Museu Casa dos Contos",
              "url": "https://www.ouropreto.mg.gov.br/turismo/atrativo-item/571"
            }
          ]
        },
        {
          "name": "Feira de Pedra-Sabão",
          "description": "Feira de artesanato próxima à Igreja de São Francisco de Assis, dedicada sobretudo à pedra-sabão, material profundamente associado à escultura e à arquitetura de Ouro Preto. É uma parada recorrente porque conecta o barroco histórico a uma tradição artesanal que continua viva e ainda oferece tempo livre para compras sem deslocamento adicional.",
          "agencyRationale": "É uma parada recorrente porque conecta o barroco histórico a uma tradição artesanal que continua viva e ainda oferece tempo livre para compras sem deslocamento adicional.",
          "visitType": "Visita turística",
          "estimatedDuration": "1 h",
          "publishedDuration": "—",
          "oneYearOld": "—",
          "access": {
            "level": "moderate",
            "label": "Atenção ao calçamento",
            "description": "Caminhada pelo centro histórico, com ladeiras e calçamento irregular no entorno. Confirme o trecho escolhido e planeje pausas."
          },
          "lat": -20.386259,
          "lon": -43.502794,
          "locationAccuracy": "exact",
          "days": "1 h",
          "relevanceSource": "agency",
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "indeterminado"
          },
          "kind": "atracao",
          "type": "historia"
        },
        {
          "name": "Museu de Mineralogia / Museu de Ciência e Técnica",
          "description": "Museu da Escola de Minas instalado no antigo Palácio dos Governadores. A ficha municipal descreve coleções de mais de 20 mil amostras de minerais, História Natural, Mineração, Metalurgia, Química, Física, Astronomia, Topografia e Desenho, além de biblioteca de obras raras; o edifício também passou por funções de Casa de Fundição, Contadoria e sede do governo.",
          "agencyRationale": "Liga a geologia e a ciência da Escola de Minas à história administrativa do edifício e à formação mineral da região.",
          "visitType": "Museu / coleções científicas",
          "estimatedDuration": "1 h",
          "publishedDuration": "—",
          "oneYearOld": "—",
          "access": {
            "level": "moderate",
            "label": "Atenção ao entorno",
            "description": "O percurso pelo centro histórico pode envolver ladeiras e calçamento irregular. Os acessos e a circulação interna desta atração não estão detalhados; confirme entrada, degraus e alternativas sem escadas."
          },
          "lat": -20.384846,
          "lon": -43.50366,
          "locationAccuracy": "exact",
          "days": "1 h",
          "relevanceSource": "agency",
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "indeterminado"
          },
          "kind": "atracao",
          "type": "historia",
          "mapQuery": "Museu de Ciência e Técnica da Escola de Minas da UFOP, Praça Tiradentes, Ouro Preto MG",
          "visitLinks": [
            {
              "label": "Prefeitura — Museu de Ciência e Técnica da UFOP",
              "url": "https://www.ouropreto.mg.gov.br/turismo/atrativo-item/617"
            }
          ],
          "scheduleNote": "Na ficha turística municipal consultada em 13/10/2026, o museu aparece fechado temporariamente. Um mapa turístico municipal mais antigo informa horário de terça a domingo, 12h–17h; siga o aviso atual da ficha e confirme reabertura diretamente com a UFOP."
        },
        {
          "name": "Igreja Nossa Senhora da Conceição",
          "lat": -20.386625,
          "lon": -43.500495,
          "locationAccuracy": "exact",
          "catalogName": "Igreja Nossa Senhora da Conceição",
          "description": "Matriz do bairro Antônio Dias. A ficha municipal do Museu Aleijadinho o localiza nos fundos desta igreja. A própria Prefeitura também informa que peças do acervo podem ser vistas na Igreja de São Francisco de Assis e na Igreja de Nossa Senhora das Mercês e Perdões; essas exibições pertencem ao circuito do museu e não são um passeio separado.",
          "agencyRationale": "O Museu Aleijadinho fica fisicamente nos fundos da Matriz de Nossa Senhora da Conceição; parte de seu acervo também está exposta em São Francisco de Assis e Mercês e Perdões. O catálogo agrupa o museu ao circuito de igrejas para evitar uma parada duplicada.",
          "visitType": "Igreja / visita interna sujeita a confirmação",
          "estimatedDuration": "30–45 min",
          "publishedDuration": "—",
          "oneYearOld": "A confirmar",
          "access": {
            "level": "easy",
            "label": "Mais fácil na visita",
            "description": "A estimativa considera uma visita curta ao templo. Confirme degraus, entrada e circulação interna, além de calçamento e ladeiras no trajeto; o cadastro não comprova um percurso sem barreiras."
          },
          "days": "30–45 min",
          "relevanceSource": "agency",
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "indeterminado"
          },
          "kind": "atracao",
          "type": "historia",
          "mapQuery": "Igreja Nossa Senhora da Conceição, Antônio Dias, Ouro Preto MG",
          "visitLinks": [
            {
              "label": "Prefeitura — Santuário de Nossa Senhora da Conceição",
              "url": "https://www.ouropreto.mg.gov.br/turismo/atrativo-item/581"
            },
            {
              "label": "Prefeitura — Museu Aleijadinho, instalado nesta igreja",
              "url": "https://www.ouropreto.mg.gov.br/turismo/atrativo-item/590"
            },
            {
              "label": "Prefeitura — circuito do acervo nas igrejas",
              "url": "https://www.ouropreto.mg.gov.br/turismo/atrativo-item/584"
            }
          ],
          "scheduleNote": "A ficha municipal de Mercês e Perdões informa que o Santuário de Nossa Senhora da Conceição está em restauração e sem visitação, enquanto a ficha da própria Matriz lista horários de visita; as páginas divergem. Confirme a abertura diretamente antes de planejar a entrada. O Museu Aleijadinho permanece integrado ao circuito das igrejas, sem passeio independente."
        },
        {
          "name": "Museu do Oratório",
          "lat": -20.3864036507973,
          "lon": -43.5043358802795,
          "locationAccuracy": "exact",
          "catalogName": "Museu do Oratório",
          "description": "Instalado em um casarão setecentista no adro da Igreja do Carmo, apresenta oratórios brasileiros de diferentes tipos, escalas e materiais, além de imagens religiosas dos séculos XVII ao XX. A exposição ocupa três pavimentos e mostra usos domésticos, de viagem e de devoção; o acervo ajuda a ler a religiosidade cotidiana, não apenas a arte monumental das igrejas.",
          "agencyRationale": "Complementa as igrejas barrocas com objetos de devoção doméstica e itinerante, em edifício histórico ao lado do Carmo.",
          "visitType": "Museu / exposição interna",
          "estimatedDuration": "45–60 min",
          "publishedDuration": "—",
          "oneYearOld": "A confirmar",
          "access": {
            "level": "moderate",
            "label": "Atenção ao entorno",
            "description": "O percurso pelo centro histórico pode envolver ladeiras e calçamento irregular. Os acessos e a circulação interna desta atração não estão detalhados; confirme entrada, degraus e alternativas sem escadas."
          },
          "days": "45–60 min",
          "relevanceSource": "agency",
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "bilheteria",
            "url": "https://museudooratorio.org.br/visite/planeje-sua-visita/"
          },
          "kind": "atracao",
          "type": "historia",
          "mapQuery": "Museu do Oratório, Adro do Carmo, Ouro Preto MG",
          "visitLinks": [
            {
              "label": "Museu do Oratório — acervo e visita",
              "url": "https://museudooratorio.org.br/sobre/"
            },
            {
              "label": "Museu do Oratório — planeje a visita",
              "url": "https://museudooratorio.org.br/visite/planeje-sua-visita/"
            }
          ],
          "scheduleNote": "O site do museu informa funcionamento de quarta a segunda, 9h30–17h30, e ingresso de R$ 5; portanto, a ficha consultada indica fechamento às terças. Confirme preço e horário antes de ir."
        },
        {
          "name": "Igreja Matriz de São Gonçalo do Amarante · Amarantina",
          "description": "Matriz do distrito de Amarantina, construída na década de 1750 e implantada no alto de uma elevação, dominando a paisagem local. A ficha municipal descreve uma capela inicial de feição simples que ganhou duas torres e ampliações à medida que o povoado cresceu. A igreja permanece como principal referência comunitária e concentra os ofícios da festa do padroeiro.",
          "agencyRationale": "Torna a parada em Amarantina concreta: é o marco religioso e urbano do distrito, em vez de um ponto genérico de “núcleo histórico”.",
          "visitType": "Igreja / visita externa e interna a confirmar",
          "estimatedDuration": "30–45 min",
          "publishedDuration": "—",
          "oneYearOld": "A confirmar",
          "access": {
            "level": "unknown",
            "label": "A confirmar",
            "description": "A ficha municipal não confirma degraus, rampas nem circulação sem barreiras. O Centro Histórico tem ladeiras e calçamento irregular; confirme o acesso específico antes de ir."
          },
          "lat": -20.3114404,
          "lon": -43.7116598,
          "locationAccuracy": "exact",
          "days": "30–45 min",
          "relevanceSource": "official_tourism_inventory",
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "indeterminado",
            "url": "https://www.ouropreto.mg.gov.br/turismo/atrativo-item/1788"
          },
          "kind": "atracao",
          "type": "historia",
          "mapQuery": "Igreja Matriz de São Gonçalo do Amarante, Amarantina, Ouro Preto MG",
          "catalogName": "Igreja Matriz de São Gonçalo do Amarante · Amarantina",
          "visitLinks": [
            {
              "label": "Prefeitura — Igreja Matriz de São Gonçalo do Amarante",
              "url": "https://www.ouropreto.mg.gov.br/turismo/atrativo-item/1788"
            },
            {
              "label": "Prefeitura — situação das obras (02/09/2026)",
              "url": "https://www.ouropreto.mg.gov.br/noticia/5756"
            }
          ],
          "scheduleNote": "A Prefeitura informou em 02/09/2026 contrato para restauração civil, com início previsto para agosto e conclusão estimada em fevereiro de 2027. Para a viagem de outubro de 2026, trate o interior como indisponível até confirmação de reabertura.",
          "locality": "Amarantina"
        },
        {
          "name": "Capela do Nosso Senhor do Bonfim",
          "description": "Capela do século XVIII na Rua Antônio de Albuquerque, antiga Rua da Glória. Segundo a tradição oral registrada pela Prefeitura, condenados a caminho da forca paravam ali para ouvir missa; a fachada foi reformada no século XIX e sua aparência anterior foi retomada em 1957–1958.",
          "agencyRationale": "É um ponto pequeno, mas acrescenta ao circuito religioso uma história local de devoção e dos condenados à forca, identificada como tradição oral e não como fato documental comprovado.",
          "visitType": "Capela / visita interna",
          "estimatedDuration": "20–30 min",
          "publishedDuration": "—",
          "oneYearOld": "A confirmar",
          "access": {
            "level": "unknown",
            "label": "A confirmar",
            "description": "A ficha municipal confirma o nome, mas não foi possível confirmar um ponto de entrada em mapa aberto. O marcador usa apenas a referência da cidade; use a busca pelo nome/endereço no Waze e confirme acesso antes de ir."
          },
          "lat": -20.38567,
          "lon": -43.50362,
          "locationAccuracy": "city-center",
          "days": "20–30 min",
          "relevanceSource": "official_tourism_inventory",
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "gratuito",
            "url": "https://www.ouropreto.mg.gov.br/turismo/atrativo-item/637"
          },
          "kind": "atracao",
          "type": "historia",
          "mapQuery": "Capela do Nosso Senhor do Bonfim, Rua Antônio de Albuquerque, Pilar, Ouro Preto MG",
          "catalogName": "Capela do Nosso Senhor do Bonfim",
          "visitLinks": [
            {
              "label": "Prefeitura — Capela do Nosso Senhor do Bonfim",
              "url": "https://www.ouropreto.mg.gov.br/turismo/atrativo-item/637"
            }
          ],
          "scheduleNote": "A ficha turística municipal informa entrada franca e visitação de terça a domingo, 9h–16h45, e contato (31) 3551-4736. Confirme mudanças no dia; o marcador é apenas referência da cidade, então use a busca textual pelo nome no Waze."
        },
        {
          "name": "Igreja de Santa Efigênia",
          "description": "Também chamada Matriz de Santa Efigênia, a igreja está ligada à Irmandade de Nossa Senhora do Rosário dos Pretos no Alto da Cruz. A ficha municipal situa a construção entre 1733 e 1785 e descreve quatro altares internos, sob invocações como Santa Rita, Santo Antônio Noto, São Benedito e Nossa Senhora do Carmo.",
          "agencyRationale": "Distingue a igreja do Alto da Cruz das outras igrejas do Rosário e documenta a história das irmandades negras e da comunidade de Antônio Dias.",
          "visitType": "Igreja / visita interna sujeita a confirmação",
          "estimatedDuration": "30–45 min",
          "publishedDuration": "—",
          "oneYearOld": "A confirmar",
          "access": {
            "level": "unknown",
            "label": "A confirmar",
            "description": "A ficha municipal não confirma degraus, rampas nem circulação sem barreiras. O Centro Histórico tem ladeiras e calçamento irregular; confirme o acesso específico antes de ir."
          },
          "lat": -20.3881026,
          "lon": -43.4954592,
          "locationAccuracy": "exact",
          "days": "30–45 min",
          "relevanceSource": "official_tourism_inventory",
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "indeterminado",
            "url": "https://www.ouropreto.mg.gov.br/turismo/atrativo-item/624"
          },
          "kind": "atracao",
          "type": "historia",
          "mapQuery": "Igreja de Santa Efigênia, Rua do Cruzeiro, Ouro Preto MG",
          "catalogName": "Igreja de Santa Efigênia",
          "visitLinks": [
            {
              "label": "Prefeitura de Ouro Preto — ficha turística",
              "url": "https://www.ouropreto.mg.gov.br/turismo/atrativo-item/624"
            }
          ],
          "scheduleNote": "A ficha municipal lista missa aos sábados às 19h30 e domingos às 7h, mas não confirma uma janela diária de visita turística; consulte a paróquia e a taxa pelo (31) 3551-5047."
        },
        {
          "name": "Capela de Nossa Senhora do Rosário do Padre Faria",
          "description": "Erguida nos primeiros anos do século XVIII, a capela teve originalmente a invocação de Nossa Senhora do Carmo. Em 1723 passou à Irmandade de Nossa Senhora do Parto; por volta de 1740 recebeu também irmãos da Irmandade do Rosário e foi reconstruída. O forro representa a coroação da Virgem e quatro cenas da vida de Maria.",
          "agencyRationale": "É indispensável para distinguir a capela do Padre Faria das igrejas do Rosário dos bairros Rosário e Alto da Cruz, e preserva um conjunto pictórico mariano específico.",
          "visitType": "Capela / visita interna sujeita a confirmação",
          "estimatedDuration": "30–45 min",
          "publishedDuration": "—",
          "oneYearOld": "A confirmar",
          "access": {
            "level": "unknown",
            "label": "A confirmar",
            "description": "A ficha municipal não confirma degraus, rampas nem circulação sem barreiras. O Centro Histórico tem ladeiras e calçamento irregular; confirme o acesso específico antes de ir."
          },
          "lat": -20.3880724,
          "lon": -43.4914485,
          "locationAccuracy": "exact",
          "days": "30–45 min",
          "relevanceSource": "official_tourism_inventory",
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "indeterminado",
            "url": "https://www.ouropreto.mg.gov.br/turismo/atrativo-item/598"
          },
          "kind": "atracao",
          "type": "historia",
          "mapQuery": "Capela de Nossa Senhora do Rosário do Padre Faria, Ouro Preto MG",
          "catalogName": "Capela de Nossa Senhora do Rosário do Padre Faria",
          "visitLinks": [
            {
              "label": "Prefeitura de Ouro Preto — ficha turística",
              "url": "https://www.ouropreto.mg.gov.br/turismo/atrativo-item/598"
            },
            {
              "label": "Prefeitura — situação das obras (02/09/2026)",
              "url": "https://www.ouropreto.mg.gov.br/noticia/5756"
            }
          ],
          "scheduleNote": "A Prefeitura informou em 02/09/2026 obras de requalificação urbana e contenção de encosta iniciadas em abril, com entrega então aguardada para setembro; não localizei confirmação posterior. Isso pode afetar o acesso à capela; confirme a situação atual antes de subir."
        },
        {
          "name": "Igreja Bom Jesus de Matosinhos e São Miguel e Almas",
          "description": "Templo do bairro Cabeças, identificado pela Prefeitura com as duas invocações de Bom Jesus de Matosinhos e São Miguel e Almas. A ficha municipal informa que a igreja está fechada aguardando reforma/restauração; ela deve permanecer no roteiro como referência patrimonial, não como visita interna garantida.",
          "agencyRationale": "Registra um templo histórico fora do miolo da Praça Tiradentes e evita que a denominação “Matosinhos” seja confundida com outros lugares.",
          "visitType": "Igreja / exterior; interior fechado",
          "estimatedDuration": "15–20 min",
          "publishedDuration": "—",
          "oneYearOld": "A confirmar",
          "access": {
            "level": "unknown",
            "label": "A confirmar",
            "description": "O marcador foi ajustado ao prédio identificado no OpenStreetMap/Nominatim como Igreja de Bom Jesus de Matosinhos, na Rua Alvarenga; a ficha municipal informa templo fechado para restauração, e o acesso interno não está confirmado."
          },
          "lat": -20.3821961,
          "lon": -43.5161583,
          "locationAccuracy": "exact",
          "days": "15–20 min",
          "relevanceSource": "official_tourism_inventory",
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "indeterminado",
            "url": "https://www.ouropreto.mg.gov.br/turismo/atrativo-item/594"
          },
          "kind": "atracao",
          "type": "historia",
          "mapQuery": "Igreja de Bom Jesus de Matosinhos, Rua Alvarenga, Cabeças, Ouro Preto MG",
          "catalogName": "Igreja Bom Jesus de Matosinhos e São Miguel e Almas",
          "visitLinks": [
            {
              "label": "Prefeitura de Ouro Preto — ficha turística",
              "url": "https://www.ouropreto.mg.gov.br/turismo/atrativo-item/594"
            },
            {
              "label": "Prefeitura — situação das obras (02/09/2026)",
              "url": "https://www.ouropreto.mg.gov.br/noticia/5756"
            }
          ],
          "scheduleNote": "A Prefeitura informou em 02/09/2026 que a primeira etapa de restauração tinha previsão de conclusão em novembro de 2026 e que o templo permaneceria fechado para a etapa seguinte. Não planeje visita interna sem confirmação oficial."
        },
        {
          "name": "Igreja de Nossa Senhora das Dores do Monte Calvário",
          "description": "A capela foi iniciativa da Irmandade de Nossa Senhora das Dores do Calvário, constituída em 1768 na Matriz de Antônio Dias, em terreno doado pela Irmandade do Santíssimo Sacramento. A ficha municipal relaciona a confraria a membros ligados à devoção de Braga e registra a mudança de capela para ordem terceira em 1863.",
          "agencyRationale": "Completa o núcleo de Antônio Dias com uma devoção e uma irmandade próprias, em vez de ser confundida com a Igreja de Nossa Senhora das Dores de Cachoeira do Campo.",
          "visitType": "Igreja / visita interna somente se aberta",
          "estimatedDuration": "20–30 min",
          "publishedDuration": "—",
          "oneYearOld": "A confirmar",
          "access": {
            "level": "unknown",
            "label": "A confirmar",
            "description": "A ficha municipal confirma o nome, mas não foi possível confirmar um ponto de entrada em mapa aberto. O marcador usa apenas a referência da cidade; use a busca pelo nome/endereço no Waze e confirme acesso antes de ir."
          },
          "lat": -20.38567,
          "lon": -43.50362,
          "locationAccuracy": "city-center",
          "days": "20–30 min",
          "relevanceSource": "official_tourism_inventory",
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "indeterminado",
            "url": "https://www.ouropreto.mg.gov.br/turismo/atrativo-item/915"
          },
          "kind": "atracao",
          "type": "historia",
          "mapQuery": "Igreja de Nossa Senhora das Dores do Monte Calvário, Ouro Preto MG",
          "catalogName": "Igreja de Nossa Senhora das Dores do Monte Calvário",
          "visitLinks": [
            {
              "label": "Prefeitura de Ouro Preto — ficha turística",
              "url": "https://www.ouropreto.mg.gov.br/turismo/atrativo-item/915"
            }
          ],
          "scheduleNote": "A ficha municipal consultada apresenta funcionamento fechado na semana; confirme eventual reabertura antes de contar com visita interna."
        },
        {
          "name": "Igreja de Nossa Senhora das Mercês e Perdões",
          "description": "Conhecida como “Mercês de baixo”, sua capela primitiva foi edificada em 1742. A irmandade era dedicada a negros e mulatos nascidos no Brasil; o templo foi ampliado diante do aumento de fiéis. A ficha municipal publica visitação de terça a domingo, das 8h30 às 12h e das 13h30 às 16h45. A ficha municipal do Museu Aleijadinho informa que peças do acervo estão expostas nesta igreja, além de sua sede física nos fundos da Matriz de Nossa Senhora da Conceição. Essa visita é parte do circuito do museu, não um passeio separado.",
          "agencyRationale": "Explica como irmandades negras e pardas organizavam devoção, assistência e vida comunitária; sua visita pode ser combinada com a Igreja de São Francisco de Assis no mesmo núcleo de Antônio Dias.",
          "visitType": "Igreja / visita interna",
          "estimatedDuration": "30–45 min",
          "publishedDuration": "—",
          "oneYearOld": "A confirmar",
          "access": {
            "level": "unknown",
            "label": "A confirmar",
            "description": "A ficha municipal não confirma degraus, rampas nem circulação sem barreiras. O Centro Histórico tem ladeiras e calçamento irregular; confirme o acesso específico antes de ir."
          },
          "lat": -20.3877752,
          "lon": -43.5020354,
          "locationAccuracy": "exact",
          "days": "30–45 min",
          "relevanceSource": "official_tourism_inventory",
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "bilheteria",
            "url": "https://www.ouropreto.mg.gov.br/turismo/atrativo-item/584"
          },
          "kind": "atracao",
          "type": "historia",
          "mapQuery": "Igreja de Nossa Senhora das Mercês e Perdões, Ouro Preto MG",
          "catalogName": "Igreja de Nossa Senhora das Mercês e Perdões",
          "visitLinks": [
            {
              "label": "Prefeitura de Ouro Preto — ficha turística",
              "url": "https://www.ouropreto.mg.gov.br/turismo/atrativo-item/584"
            },
            {
              "label": "Prefeitura — Museu Aleijadinho e circuito do acervo",
              "url": "https://www.ouropreto.mg.gov.br/turismo/atrativo-item/590"
            }
          ],
          "scheduleNote": "Horário publicado pela Prefeitura: terça a domingo, 8h30–12h e 13h30–16h45; confirme ingresso, intervalo e funcionamento antes de ir."
        },
        {
          "name": "Igreja de Nossa Senhora das Mercês e Misericórdia",
          "description": "Conhecida como “Mercês de cima”, sua irmandade foi instituída em Vila Rica entre 1740 e 1754. É um templo distinto da igreja Mercês e Perdões, e sua ficha municipal reúne a história da confraria e da devoção que lhe deu origem.",
          "agencyRationale": "Evita a duplicação genérica “Igreja das Mercês” e permite reconhecer dois templos e duas irmandades diferentes na caminhada pelo centro.",
          "visitType": "Igreja / visita interna a confirmar",
          "estimatedDuration": "20–30 min",
          "publishedDuration": "—",
          "oneYearOld": "A confirmar",
          "access": {
            "level": "unknown",
            "label": "A confirmar",
            "description": "O marcador foi ajustado ao prédio indicado pelo OpenStreetMap/Nominatim na Rua Padre Rolim; a entrada para visitação não foi confirmada. Confirme acesso antes de ir."
          },
          "lat": -20.3835416,
          "lon": -43.5044509,
          "locationAccuracy": "exact",
          "days": "20–30 min",
          "relevanceSource": "official_tourism_inventory",
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "indeterminado",
            "url": "https://www.ouropreto.mg.gov.br/turismo/atrativo-item/586"
          },
          "kind": "atracao",
          "type": "historia",
          "mapQuery": "Igreja Nossa Senhora das Mercês e Misericórdia, Rua Padre Rolim, Centro, Ouro Preto MG",
          "catalogName": "Igreja de Nossa Senhora das Mercês e Misericórdia",
          "visitLinks": [
            {
              "label": "Prefeitura de Ouro Preto — ficha turística",
              "url": "https://www.ouropreto.mg.gov.br/turismo/atrativo-item/586"
            },
            {
              "label": "Prefeitura — situação das obras (02/09/2026)",
              "url": "https://www.ouropreto.mg.gov.br/noticia/5756"
            }
          ],
          "scheduleNote": "A ficha municipal publica missa aos sábados, 18h30–20h30, mas não confirma visitação turística regular. Em 02/09/2026, a Prefeitura informou restauração integral ainda em fase de contratação, com obra civil de 18 meses e restauração artística de 24 meses; confirme acesso interno antes de ir."
        },
        {
          "name": "Igreja de São Francisco de Paula",
          "description": "A confraria surgiu em 1780 na Matriz de Nossa Senhora da Conceição de Antônio Dias e depois construiu seu próprio templo. A igreja ocupa uma elevação do núcleo histórico; sua posição permite compreender a expansão do antigo arraial para além dos largos centrais.",
          "agencyRationale": "Completa o conjunto de igrejas do núcleo histórico e acrescenta uma parada própria, em vez de reduzir o circuito a Pilar, Carmo e São Francisco de Assis.",
          "visitType": "Igreja / visita interna a confirmar",
          "estimatedDuration": "20–30 min",
          "publishedDuration": "—",
          "oneYearOld": "A confirmar",
          "access": {
            "level": "unknown",
            "label": "A confirmar",
            "description": "A ficha municipal não confirma degraus, rampas nem circulação sem barreiras. O Centro Histórico tem ladeiras e calçamento irregular; confirme o acesso específico antes de ir."
          },
          "lat": -20.3824304,
          "lon": -43.5078178,
          "locationAccuracy": "exact",
          "days": "20–30 min",
          "relevanceSource": "official_tourism_inventory",
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "indeterminado",
            "url": "https://www.ouropreto.mg.gov.br/turismo/atrativo-item/588"
          },
          "kind": "atracao",
          "type": "historia",
          "mapQuery": "Igreja de São Francisco de Paula, Ouro Preto MG",
          "catalogName": "Igreja de São Francisco de Paula",
          "visitLinks": [
            {
              "label": "Prefeitura de Ouro Preto — ficha turística",
              "url": "https://www.ouropreto.mg.gov.br/turismo/atrativo-item/588"
            },
            {
              "label": "Prefeitura — situação das obras (02/09/2026)",
              "url": "https://www.ouropreto.mg.gov.br/noticia/5756"
            }
          ],
          "scheduleNote": "Em 02/09/2026, a Prefeitura informou que o projeto de restauração aguardava aprovação do IPHAN. O estado de visitação interna não está confirmado; consulte a paróquia antes de ir."
        },
        {
          "name": "Igreja de São José",
          "description": "No século XVIII, o templo reunia frequentadores de diferentes posições sociais, entre eles brancos pobres, pardos, artífices, músicos, brancos ricos e governadores. A Prefeitura destaca a torre central única e o terraço com balaustrada em pedra-sabão; recebeu o título de Capela Imperial em 1889 e passou por restauração entre 1992 e 2012.",
          "agencyRationale": "Sua história social e sua arquitetura singular completam a leitura das irmandades e da vida urbana de Vila Rica.",
          "visitType": "Igreja / visita interna a confirmar",
          "estimatedDuration": "20–30 min",
          "publishedDuration": "—",
          "oneYearOld": "A confirmar",
          "access": {
            "level": "unknown",
            "label": "A confirmar",
            "description": "A ficha municipal não confirma degraus, rampas nem circulação sem barreiras. O Centro Histórico tem ladeiras e calçamento irregular; confirme o acesso específico antes de ir."
          },
          "lat": -20.3845615,
          "lon": -43.5080043,
          "locationAccuracy": "exact",
          "days": "20–30 min",
          "relevanceSource": "official_tourism_inventory",
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "indeterminado",
            "url": "https://www.ouropreto.mg.gov.br/turismo/atrativo-item/626"
          },
          "kind": "atracao",
          "type": "historia",
          "mapQuery": "Igreja de São José, Rua Alferes Periquito, Ouro Preto MG",
          "catalogName": "Igreja de São José",
          "visitLinks": [
            {
              "label": "Prefeitura de Ouro Preto — ficha turística",
              "url": "https://www.ouropreto.mg.gov.br/turismo/atrativo-item/626"
            }
          ],
          "scheduleNote": "A ficha municipal consultada não confirma uma janela regular de visita turística; confirme a abertura do interior antes de ir."
        },
        {
          "name": "Ecomuseu Morro da Queimada",
          "description": "Sítio arqueológico nos altos da Serra de Ouro Preto, com vestígios de antigas moradias e serviços ligados à mineração. A visita percorre um território de ruínas e paisagem, em vez de uma exposição fechada, e ajuda a compreender a ocupação do Morro da Queimada.",
          "agencyRationale": "Amplia o roteiro para a arqueologia da paisagem e para os vestígios de moradia e mineração fora dos edifícios monumentais do centro.",
          "visitType": "Sítio arqueológico / caminhada interpretativa",
          "estimatedDuration": "1h30–2 h",
          "publishedDuration": "—",
          "oneYearOld": "A confirmar",
          "access": {
            "level": "hard",
            "label": "Caminhada em área de morro",
            "description": "Visita ao ar livre em terreno de morro e ruínas; confirme rota, desnível, condições do piso e clima com a gestão local."
          },
          "lat": -20.3843949,
          "lon": -43.4962169,
          "locationAccuracy": "trail-point",
          "days": "1h30–2 h",
          "relevanceSource": "official_tourism_inventory",
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "indeterminado",
            "url": "https://www.ouropreto.mg.gov.br/turismo/atrativo-item/822"
          },
          "kind": "atracao",
          "type": "historia",
          "mapQuery": "Ecomuseu Morro da Queimada, Ouro Preto MG",
          "catalogName": "Ecomuseu Morro da Queimada",
          "visitLinks": [
            {
              "label": "Prefeitura de Ouro Preto — ficha turística",
              "url": "https://www.ouropreto.mg.gov.br/turismo/atrativo-item/822"
            }
          ],
          "scheduleNote": "A ficha municipal não estabelece uma janela regular de visitação; confirme acesso, guia e condições do percurso antes de subir. O marcador representa a área do Morro da Queimada, não uma entrada única."
        },
        {
          "name": "Memorial do Tropeiro · Santo Antônio do Salto",
          "description": "No distrito de Santo Antônio do Salto, o memorial guarda objetos pessoais e a memória de Theodoro de Souza, morador conhecido como benzedor e raizeiro. O acervo liga a história do tropeirismo à vida rural e às práticas locais de cura; no mesmo prédio também funciona uma agência dos Correios.",
          "agencyRationale": "Registra a história dos caminhos e da vida rural nos distritos de Ouro Preto, mas exige deslocamento próprio e não é uma visita a pé do centro histórico.",
          "visitType": "Memorial / visita em distrito",
          "estimatedDuration": "45–60 min",
          "publishedDuration": "—",
          "oneYearOld": "A confirmar",
          "access": {
            "level": "unknown",
            "label": "Deslocamento e horário a confirmar",
            "description": "A atração fica em Santo Antônio do Salto, fora do centro histórico. O ponto no mapa representa o distrito; confirme endereço, transporte, horário e acesso antes de sair."
          },
          "lat": -20.4974953,
          "lon": -43.4626859,
          "locationAccuracy": "city-center",
          "days": "45–60 min",
          "relevanceSource": "official_tourism_inventory",
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "indeterminado",
            "url": "https://www.ouropreto.mg.gov.br/turismo/atrativo-item/2789"
          },
          "kind": "atracao",
          "type": "historia",
          "mapQuery": "Memorial do Tropeiro, Santo Antônio do Salto, Ouro Preto MG",
          "catalogName": "Memorial do Tropeiro · Santo Antônio do Salto",
          "visitLinks": [
            {
              "label": "Prefeitura — Memorial do Tropeiro",
              "url": "https://www.ouropreto.mg.gov.br/turismo/atrativo-item/2789"
            }
          ],
          "scheduleNote": "A Prefeitura informa que o memorial reabre por ocasião da festa do padroeiro; não encontrei calendário regular de visitação. Confirme com o distrito antes de sair do centro. O ponto cartográfico é o centro do distrito, não a porta do memorial.",
          "locality": "Santo Antônio do Salto"
        },
        {
          "name": "Museu Boulieu",
          "description": "Museu “Caminhos da Fé” com a coleção reunida por Maria Helena e Jacques Boulieu. A ficha municipal descreve peças provenientes de diferentes regiões e tradições, permitindo acompanhar circulação de imagens, objetos religiosos e encontros culturais para além de Minas Gerais.",
          "agencyRationale": "Acrescenta coleções de alcance internacional e outras culturas religiosas ao circuito predominantemente colonial mineiro.",
          "visitType": "Museu / exposição interna",
          "estimatedDuration": "1 h",
          "publishedDuration": "—",
          "oneYearOld": "A confirmar",
          "access": {
            "level": "unknown",
            "label": "A confirmar",
            "description": "A ficha municipal não confirma degraus, rampas nem circulação sem barreiras. O Centro Histórico tem ladeiras e calçamento irregular; confirme o acesso específico antes de ir."
          },
          "lat": -20.3812066,
          "lon": -43.505178,
          "locationAccuracy": "street-center",
          "days": "1 h",
          "relevanceSource": "official_tourism_inventory",
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "bilheteria",
            "url": "https://www.ouropreto.mg.gov.br/turismo/atrativo-item/1673"
          },
          "kind": "atracao",
          "type": "historia",
          "mapQuery": "Museu Boulieu, Rua Padre Rolim 142, Ouro Preto MG",
          "catalogName": "Museu Boulieu",
          "visitLinks": [
            {
              "label": "Prefeitura de Ouro Preto — ficha turística",
              "url": "https://www.ouropreto.mg.gov.br/turismo/atrativo-item/1673"
            }
          ],
          "scheduleNote": "A ficha municipal informa segunda 10h–18h; terça fechado; quarta 13h–21h; quinta a domingo 10h–18h. Ingresso: R$ 10 inteira e R$ 5 meia; crianças até 11 anos, pessoas com deficiência e residentes de Ouro Preto têm gratuidade conforme a página. O endereço oficial é Rua Padre Rolim, 142; o ponto OSM aparece associado ao nº 412, então use busca pelo nome/endereço no Waze, não um pin exato."
        },
        {
          "name": "Museu Casa dos Inconfidentes",
          "description": "Conhecida como Chácara dos Inconfidentes, a propriedade pertenceu ao capitão-mor José Alves Maciel, pai de José Álvares Maciel. A tradição oral a aponta como um dos lugares de reunião dos envolvidos na Inconfidência; o acervo inclui mobiliário dos séculos XVIII e XIX e a visita também apresenta a paisagem da Vila Aparecida.",
          "agencyRationale": "Diferencia a memória doméstica e a tradição oral da Inconfidência do discurso oficial apresentado no Museu da Inconfidência.",
          "visitType": "Museu-casa / visita interna condicionada",
          "estimatedDuration": "45–60 min",
          "publishedDuration": "—",
          "oneYearOld": "A confirmar",
          "access": {
            "level": "unknown",
            "label": "A confirmar",
            "description": "A ficha municipal não confirma degraus, rampas nem circulação sem barreiras. O Centro Histórico tem ladeiras e calçamento irregular; confirme o acesso específico antes de ir."
          },
          "lat": -20.3924268,
          "lon": -43.5037786,
          "locationAccuracy": "street-center",
          "days": "45–60 min",
          "relevanceSource": "official_tourism_inventory",
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "indeterminado",
            "url": "https://www.ouropreto.mg.gov.br/turismo/atrativo-item/579"
          },
          "kind": "atracao",
          "type": "historia",
          "mapQuery": "Museu Casa dos Inconfidentes, Rua Engenheiro Corrêa, Vila Aparecida, Ouro Preto MG",
          "catalogName": "Museu Casa dos Inconfidentes",
          "visitLinks": [
            {
              "label": "Prefeitura de Ouro Preto — ficha turística",
              "url": "https://www.ouropreto.mg.gov.br/turismo/atrativo-item/579"
            },
            {
              "label": "Prefeitura — situação das obras (02/09/2026)",
              "url": "https://www.ouropreto.mg.gov.br/noticia/5756"
            }
          ],
          "scheduleNote": "Em 02/09/2026, a Prefeitura informou que a conclusão da restauração ainda era aguardada, com previsão para outubro de 2026. Como essa previsão não confirma reabertura, telefone antes; não planeje visita interna sem confirmação."
        },
        {
          "name": "Museu Casa Guignard",
          "description": "Casa-museu dedicada a Alberto da Veiga Guignard. O acervo municipal reúne cerca de 420 itens — desenhos, cartões, pinturas sobre madeira, telas e objetos — que permitem acompanhar a relação do artista com Ouro Preto e sua produção para além das pinturas de paisagem mais conhecidas.",
          "agencyRationale": "Oferece um contraponto moderno e biográfico ao circuito colonial, com foco em um artista que retratou repetidamente Ouro Preto.",
          "visitType": "Museu-casa / exposição interna",
          "estimatedDuration": "45–60 min",
          "publishedDuration": "—",
          "oneYearOld": "A confirmar",
          "access": {
            "level": "unknown",
            "label": "A confirmar",
            "description": "A ficha municipal não confirma degraus, rampas nem circulação sem barreiras. O Centro Histórico tem ladeiras e calçamento irregular; confirme o acesso específico antes de ir."
          },
          "lat": -20.3852705,
          "lon": -43.5047324,
          "locationAccuracy": "exact",
          "days": "45–60 min",
          "relevanceSource": "official_tourism_inventory",
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "gratuito",
            "url": "https://www.ouropreto.mg.gov.br/turismo/atrativo-item/576"
          },
          "kind": "atracao",
          "type": "historia",
          "mapQuery": "Museu Casa Guignard, Rua Conde de Bobadela 110, Ouro Preto MG",
          "catalogName": "Museu Casa Guignard",
          "visitLinks": [
            {
              "label": "Prefeitura de Ouro Preto — ficha turística",
              "url": "https://www.ouropreto.mg.gov.br/turismo/atrativo-item/576"
            }
          ],
          "scheduleNote": "A ficha municipal informa terça a sexta, 12h–18h, e domingo, 9h–15h; há divergência para sábado entre o texto de visitação (9h–15h) e a tabela de funcionamento (12h–18h). Entrada gratuita com contribuição espontânea. Confirme o horário de sábado pelo contato oficial."
        },
        {
          "name": "Museu de Arte Sacra de Ouro Preto",
          "description": "Instalado na cripta da Basílica do Pilar, sob a sacristia, o museu reúne cerca de 400 peças dos séculos XVII–XIX em oito vitrines temáticas. Imagens, resplendores, documentos e vestimentas ajudam a contextualizar a antiga Vila Rica e a devoção ligada à paróquia.",
          "agencyRationale": "Completa a visita à Basílica com objetos e contexto histórico; é um componente do mesmo sítio físico, não um destino separado no mapa.",
          "visitType": "Museu / coleção sacra na Basílica",
          "estimatedDuration": "45–60 min",
          "publishedDuration": "—",
          "oneYearOld": "A confirmar",
          "access": {
            "level": "unknown",
            "label": "A confirmar",
            "description": "A ficha municipal não confirma degraus, rampas nem circulação sem barreiras. O Centro Histórico tem ladeiras e calçamento irregular; confirme o acesso específico antes de ir."
          },
          "lat": -20.386489,
          "lon": -43.508,
          "locationAccuracy": "exact",
          "days": "45–60 min",
          "relevanceSource": "official_tourism_inventory",
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "bilheteria",
            "url": "https://www.ouropreto.mg.gov.br/turismo/atrativo-item/627"
          },
          "kind": "atracao",
          "type": "historia",
          "mapQuery": "Museu de Arte Sacra de Ouro Preto, Basílica do Pilar, Ouro Preto MG",
          "catalogName": "Museu de Arte Sacra de Ouro Preto",
          "visitLinks": [
            {
              "label": "Prefeitura de Ouro Preto — ficha turística",
              "url": "https://www.ouropreto.mg.gov.br/turismo/atrativo-item/627"
            }
          ],
          "scheduleNote": "Páginas municipais consultadas divergem nos intervalos de visitação; confirme horário e ingresso com a paróquia antes de ir.",
          "sameSiteAs": "Basílica de Nossa Senhora do Pilar"
        },
        {
          "name": "Museu de Farmácia",
          "description": "Museu da Escola de Farmácia da UFOP, instituição fundada em 1839. A exposição trata do ensino e da prática profissional da Farmácia em Ouro Preto no final do século XIX, usando parte do acervo histórico da escola.",
          "agencyRationale": "Acrescenta a história da educação científica e da saúde à leitura da mineração e da administração colonial.",
          "visitType": "Museu universitário / visita interna",
          "estimatedDuration": "45–60 min",
          "publishedDuration": "—",
          "oneYearOld": "A confirmar",
          "access": {
            "level": "unknown",
            "label": "A confirmar",
            "description": "A ficha municipal localiza o museu na Escola de Farmácia da UFOP, na Rua Costa Sena; o ponto disponível é do trecho da rua. Confirme entrada e acessibilidade com a universidade."
          },
          "lat": -20.3866125,
          "lon": -43.5033428,
          "locationAccuracy": "street-center",
          "days": "45–60 min",
          "relevanceSource": "official_tourism_inventory",
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "indeterminado",
            "url": "https://www.ouropreto.mg.gov.br/turismo/atrativo-item/580"
          },
          "kind": "atracao",
          "type": "historia",
          "mapQuery": "Museu de Farmácia da UFOP, Rua Costa Sena, Ouro Preto MG",
          "catalogName": "Museu de Farmácia",
          "visitLinks": [
            {
              "label": "Prefeitura de Ouro Preto — ficha turística",
              "url": "https://www.ouropreto.mg.gov.br/turismo/atrativo-item/580"
            }
          ],
          "scheduleNote": "Na ficha turística municipal consultada em 13/10/2026, o museu aparece fechado temporariamente; confirme reabertura e visitação diretamente com a UFOP antes de se deslocar."
        },
        {
          "name": "Casa de Tomás Antônio Gonzaga",
          "description": "Casarão colonial onde Tomás Antônio Gonzaga viveu de 1782 a 1788, segundo a ficha municipal. A casa também é apontada como um dos prováveis locais de reunião dos inconfidentes; depois da prisão do poeta, serviu a funções públicas, entre elas Ouvidoria e Chefatura de Polícia.",
          "agencyRationale": "Liga a Inconfidência a uma casa e a um morador concretos, sem apresentar como certeza documental que todas as reuniões tenham ocorrido ali.",
          "visitType": "Casarão histórico / visita externa; interior a confirmar",
          "estimatedDuration": "30–45 min",
          "publishedDuration": "—",
          "oneYearOld": "A confirmar",
          "access": {
            "level": "unknown",
            "label": "A confirmar",
            "description": "A ficha municipal não confirma degraus, rampas nem circulação sem barreiras. O Centro Histórico tem ladeiras e calçamento irregular; confirme o acesso específico antes de ir."
          },
          "lat": -20.3856165,
          "lon": -43.5027668,
          "locationAccuracy": "exact",
          "days": "30–45 min",
          "relevanceSource": "official_tourism_inventory",
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "indeterminado",
            "url": "https://www.ouropreto.mg.gov.br/turismo/atrativo-item/1384"
          },
          "kind": "atracao",
          "type": "historia",
          "mapQuery": "Casa de Tomás Antônio Gonzaga, Rua Cláudio Manoel, Ouro Preto MG",
          "catalogName": "Casa de Tomás Antônio Gonzaga",
          "visitLinks": [
            {
              "label": "Prefeitura — Casa de Tomás Antônio Gonzaga",
              "url": "https://www.ouropreto.mg.gov.br/turismo/atrativo-item/1384"
            }
          ],
          "scheduleNote": "A ficha municipal a identifica como ponto turístico, mas não confirma horário de visitação interna; considere a fachada até confirmar atendimento e acesso."
        },
        {
          "name": "Capela de Nossa Senhora da Piedade - Ouro Preto",
          "description": "Capela no Morro da Piedade, em área que a ficha municipal relaciona ao antigo arraial de Pascoal da Silva. A construção é apontada como provavelmente de 1720 e marcada por alvenaria de canga; o lugar integra o conjunto de capelas de morro que amplia a leitura da cidade para além do eixo da Praça Tiradentes.",
          "agencyRationale": "É uma capela histórica do perímetro urbano que estava ausente do catálogo; sua localização e o estado de restauração precisam ser diferenciados de uma visita garantida.",
          "visitType": "Capela / visita interna sujeita a confirmação",
          "estimatedDuration": "20–30 min",
          "publishedDuration": "—",
          "oneYearOld": "A confirmar",
          "access": {
            "level": "unknown",
            "label": "A confirmar",
            "description": "A ficha municipal não confirma degraus, rampas nem circulação sem barreiras. A coordenada é aproximada quando indicada; use a busca textual pelo nome/endereço e confirme acesso antes de ir."
          },
          "lat": -20.3853851,
          "lon": -43.4853482,
          "locationAccuracy": "exact",
          "days": "20–30 min",
          "relevanceSource": "official_tourism_inventory",
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "indeterminado",
            "url": "https://www.ouropreto.mg.gov.br/turismo/atrativo-item/677"
          },
          "kind": "atracao",
          "type": "historia",
          "mapQuery": "Capela de Nossa Senhora da Piedade, Rua Nossa Senhora da Piedade, Piedade, Ouro Preto MG",
          "catalogName": "Capela de Nossa Senhora da Piedade - Ouro Preto",
          "locality": "Morro da Piedade",
          "visitLinks": [
            {
              "label": "Prefeitura — ficha da capela",
              "url": "https://www.ouropreto.mg.gov.br/turismo/atrativo-item/677"
            },
            {
              "label": "Prefeitura — situação das obras (02/09/2026)",
              "url": "https://www.ouropreto.mg.gov.br/noticia/5756"
            },
            {
              "label": "Prefeitura — início das obras (07/08/2026)",
              "url": "https://www.ouropreto.mg.gov.br/noticia/5692"
            }
          ],
          "scheduleNote": "A ficha turística não publica horário regular. A Prefeitura anunciou início oficial da restauração em 07/08/2026; outra atualização municipal, de 02/09/2026, ainda descreveu o contrato em fase de assinatura e prazo estimado de 12 meses. As informações oficiais de andamento divergem: trate a capela como em obras e confirme eventual acesso externo; não planeje visita interna."
        },
        {
          "name": "Capela de Santana - Ouro Preto",
          "description": "Capela no Morro de Santana, identificada pela Prefeitura como uma das construções religiosas mais antigas de Ouro Preto, anterior a 1720. A ficha registra celebração dominical às 9h e reuniões comunitárias; não apresenta uma janela regular de visita turística.",
          "agencyRationale": "Inclui uma capela de morro e a vida comunitária de Santana, sem confundi-la com a Capela de Santana do Paço da Misericórdia.",
          "visitType": "Capela / visita interna sujeita a confirmação",
          "estimatedDuration": "20–30 min",
          "publishedDuration": "—",
          "oneYearOld": "A confirmar",
          "access": {
            "level": "unknown",
            "label": "A confirmar",
            "description": "A ficha municipal não confirma degraus, rampas nem circulação sem barreiras. A coordenada é aproximada quando indicada; use a busca textual pelo nome/endereço e confirme acesso antes de ir."
          },
          "lat": -20.3817838,
          "lon": -43.4886606,
          "locationAccuracy": "exact",
          "days": "20–30 min",
          "relevanceSource": "official_tourism_inventory",
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "indeterminado",
            "url": "https://www.ouropreto.mg.gov.br/turismo/atrativo-item/784"
          },
          "kind": "atracao",
          "type": "historia",
          "mapQuery": "Capela de Santana, Rua Vinte e Quatro de Julho, Morro Santana, Ouro Preto MG",
          "catalogName": "Capela de Santana - Ouro Preto",
          "locality": "Morro de Santana",
          "visitLinks": [
            {
              "label": "Prefeitura — ficha da capela",
              "url": "https://www.ouropreto.mg.gov.br/turismo/atrativo-item/784"
            }
          ],
          "scheduleNote": "A ficha municipal informa missa aos domingos às 9h, mas não confirma horário de visita turística; confirme acesso interno com a comunidade."
        },
        {
          "name": "Capela de Santana do Paço da Misericórdia - Ouro Preto",
          "description": "Capela ligada ao antigo Paço da Misericórdia, instituição que a Prefeitura apresenta como o primeiro hospital de Minas Gerais. A capela possui imagem de Sant’Ana e funciona em um conjunto histórico de assistência e devoção; é distinta da capela do Morro de Santana.",
          "agencyRationale": "Acrescenta ao roteiro a história da assistência hospitalar e das instituições de caridade em Vila Rica, além da arquitetura religiosa.",
          "visitType": "Capela / visita interna sujeita a confirmação",
          "estimatedDuration": "20–30 min",
          "publishedDuration": "—",
          "oneYearOld": "A confirmar",
          "access": {
            "level": "unknown",
            "label": "A confirmar",
            "description": "A ficha municipal não confirma degraus, rampas nem circulação sem barreiras. A coordenada é aproximada quando indicada; use a busca textual pelo nome/endereço e confirme acesso antes de ir."
          },
          "lat": -20.38567,
          "lon": -43.50362,
          "locationAccuracy": "city-center",
          "days": "20–30 min",
          "relevanceSource": "official_tourism_inventory",
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "indeterminado",
            "url": "https://www.ouropreto.mg.gov.br/turismo/atrativo-item/931"
          },
          "kind": "atracao",
          "type": "historia",
          "mapQuery": "Capela de Santana do Paço da Misericórdia, Ouro Preto MG",
          "catalogName": "Capela de Santana do Paço da Misericórdia - Ouro Preto",
          "locality": "Centro Histórico / Paço da Misericórdia",
          "visitLinks": [
            {
              "label": "Prefeitura — ficha da capela",
              "url": "https://www.ouropreto.mg.gov.br/turismo/atrativo-item/931"
            }
          ],
          "scheduleNote": "A página municipal não informa horário regular de visitação; consulte o contato indicado na ficha antes de planejar uma visita interna."
        },
        {
          "name": "Capela de São João Batista - Ouro Preto",
          "description": "Capela do antigo arraial do Ouro Fino, com construção anterior a 1743 segundo a ficha municipal. A Prefeitura destaca o retábulo-mor com pintura dos doze apóstolos e informa que a visita ocorre somente com agendamento; há missa dominical às 17h.",
          "agencyRationale": "Torna visível a história do Ouro Fino e oferece um conjunto artístico específico, mas exige deslocamento e agendamento, não uma parada espontânea no centro.",
          "visitType": "Capela / visita interna sujeita a confirmação",
          "estimatedDuration": "20–30 min",
          "publishedDuration": "—",
          "oneYearOld": "A confirmar",
          "access": {
            "level": "unknown",
            "label": "A confirmar",
            "description": "A ficha municipal não confirma degraus, rampas nem circulação sem barreiras. A coordenada é aproximada quando indicada; use a busca textual pelo nome/endereço e confirme acesso antes de ir."
          },
          "lat": -20.38567,
          "lon": -43.50362,
          "locationAccuracy": "city-center",
          "days": "20–30 min",
          "relevanceSource": "official_tourism_inventory",
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "agendamento",
            "url": "https://www.ouropreto.mg.gov.br/turismo/atrativo-item/720"
          },
          "kind": "atracao",
          "type": "historia",
          "mapQuery": "Capela de São João Batista, Ouro Fino, Ouro Preto MG",
          "catalogName": "Capela de São João Batista - Ouro Preto",
          "locality": "Ouro Fino",
          "visitLinks": [
            {
              "label": "Prefeitura — ficha da capela",
              "url": "https://www.ouropreto.mg.gov.br/turismo/atrativo-item/720"
            }
          ],
          "scheduleNote": "Visita somente com agendamento; a ficha municipal também informa missa aos domingos às 17h. Confirme o ponto de encontro e acesso pelo telefone publicado na página."
        },
        {
          "name": "Capela de São Sebastião - Ouro Preto",
          "description": "Capela do Morro de São Sebastião, cuja construção a ficha municipal data de 1753, embora registre a possibilidade de uma origem anterior. O interior possui talha e imagens devocionais; a Prefeitura informa visitação diária gratuita, mas não publica faixa de horário.",
          "agencyRationale": "Inclui a capela do Morro de São Sebastião como atração distinta e preserva a informação de que horário e acesso precisam ser confirmados.",
          "visitType": "Capela / visita interna sujeita a confirmação",
          "estimatedDuration": "20–30 min",
          "publishedDuration": "—",
          "oneYearOld": "A confirmar",
          "access": {
            "level": "unknown",
            "label": "A confirmar",
            "description": "A ficha municipal não confirma degraus, rampas nem circulação sem barreiras. A coordenada é aproximada quando indicada; use a busca textual pelo nome/endereço e confirme acesso antes de ir."
          },
          "lat": -20.38567,
          "lon": -43.50362,
          "locationAccuracy": "city-center",
          "days": "20–30 min",
          "relevanceSource": "official_tourism_inventory",
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "gratuito",
            "url": "https://www.ouropreto.mg.gov.br/turismo/atrativo-item/785"
          },
          "kind": "atracao",
          "type": "historia",
          "mapQuery": "Capela de São Sebastião, Morro de São Sebastião, Ouro Preto MG",
          "catalogName": "Capela de São Sebastião - Ouro Preto",
          "locality": "Morro de São Sebastião",
          "visitLinks": [
            {
              "label": "Prefeitura — ficha da capela",
              "url": "https://www.ouropreto.mg.gov.br/turismo/atrativo-item/785"
            }
          ],
          "scheduleNote": "A ficha municipal informa visitação diária gratuita, sem indicar horas de abertura; confirme acesso pelo contato oficial antes de subir."
        },
        {
          "name": "Capela do Bom Jesus da Pedra Fria - Ouro Preto",
          "description": "Capela histórica da invocação de Bom Jesus da Pedra Fria, cuja existência é documentada antes de 1811. A ficha municipal registra fachada simples e elegante e devoção popular; não publica horário regular de visitação.",
          "agencyRationale": "Distingue este templo da Igreja Bom Jesus de Matosinhos e da Capela do Bom Jesus das Flores, evitando agrupar invocações e localidades diferentes.",
          "visitType": "Capela / visita interna sujeita a confirmação",
          "estimatedDuration": "20–30 min",
          "publishedDuration": "—",
          "oneYearOld": "A confirmar",
          "access": {
            "level": "unknown",
            "label": "A confirmar",
            "description": "A ficha municipal não confirma degraus, rampas nem circulação sem barreiras. A coordenada é aproximada quando indicada; use a busca textual pelo nome/endereço e confirme acesso antes de ir."
          },
          "lat": -20.38567,
          "lon": -43.50362,
          "locationAccuracy": "city-center",
          "days": "20–30 min",
          "relevanceSource": "official_tourism_inventory",
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "indeterminado",
            "url": "https://www.ouropreto.mg.gov.br/turismo/atrativo-item/674"
          },
          "kind": "atracao",
          "type": "historia",
          "mapQuery": "Capela do Bom Jesus da Pedra Fria, Ouro Preto MG",
          "catalogName": "Capela do Bom Jesus da Pedra Fria - Ouro Preto",
          "locality": "Ouro Preto",
          "visitLinks": [
            {
              "label": "Prefeitura — ficha da capela",
              "url": "https://www.ouropreto.mg.gov.br/turismo/atrativo-item/674"
            }
          ],
          "scheduleNote": "A ficha municipal não informa horário regular; confirme abertura e endereço pelo contato publicado antes de se deslocar."
        },
        {
          "name": "Capela do Bom Jesus das Flores - Ouro Preto",
          "description": "Capela do Taquaral cuja construção remonta a 1748; a ficha municipal registra que passou a ser chamada Bom Jesus das Flores do Taquaral em 1855 e destaca pinturas no forro. Fica fora do percurso a pé do centro histórico.",
          "agencyRationale": "Acrescenta a capela setecentista do Taquaral como opção de distrito, com nome e localidade próprios, sem apresentá-la como uma parada central.",
          "visitType": "Capela / visita interna sujeita a confirmação",
          "estimatedDuration": "20–30 min",
          "publishedDuration": "—",
          "oneYearOld": "A confirmar",
          "access": {
            "level": "unknown",
            "label": "A confirmar",
            "description": "A ficha municipal não confirma degraus, rampas nem circulação sem barreiras. A coordenada é aproximada quando indicada; use a busca textual pelo nome/endereço e confirme acesso antes de ir."
          },
          "lat": -20.38567,
          "lon": -43.50362,
          "locationAccuracy": "city-center",
          "days": "20–30 min",
          "relevanceSource": "official_tourism_inventory",
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "agendamento",
            "url": "https://www.ouropreto.mg.gov.br/turismo/atrativo-item/914"
          },
          "kind": "atracao",
          "type": "historia",
          "mapQuery": "Capela do Bom Jesus das Flores, Taquaral, Ouro Preto MG",
          "catalogName": "Capela do Bom Jesus das Flores - Ouro Preto",
          "locality": "Taquaral",
          "visitLinks": [
            {
              "label": "Prefeitura — ficha da capela",
              "url": "https://www.ouropreto.mg.gov.br/turismo/atrativo-item/914"
            }
          ],
          "scheduleNote": "Visita mediante agendamento; a ficha municipal lista ingresso de R$ 3, valor a confirmar. Combine transporte e horário antes de sair do centro."
        },
        {
          "name": "Capela do Palácio dos Governadores - Ouro Preto",
          "description": "Capela histórica integrada ao antigo Palácio dos Governadores, edifício que também abriga o Museu de Ciência e Técnica da Escola de Minas. A ficha municipal descreve altar e talha rococó; a capela é um componente do mesmo sítio físico do museu, não um ponto separado para navegação.",
          "agencyRationale": "Explicita a capela que costuma desaparecer quando o Palácio é catalogado apenas como museu ou edifício administrativo.",
          "visitType": "Capela / visita interna sujeita a confirmação",
          "estimatedDuration": "20–30 min",
          "publishedDuration": "—",
          "oneYearOld": "A confirmar",
          "access": {
            "level": "unknown",
            "label": "A confirmar",
            "description": "A ficha municipal não confirma degraus, rampas nem circulação sem barreiras. A coordenada é aproximada quando indicada; use a busca textual pelo nome/endereço e confirme acesso antes de ir."
          },
          "lat": -20.384846,
          "lon": -43.50366,
          "locationAccuracy": "exact",
          "days": "20–30 min",
          "relevanceSource": "official_tourism_inventory",
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "indeterminado",
            "url": "https://www.ouropreto.mg.gov.br/turismo/atrativo-item/935"
          },
          "kind": "atracao",
          "type": "historia",
          "mapQuery": "Capela do Palácio dos Governadores, Museu de Ciência e Técnica, Praça Tiradentes, Ouro Preto MG",
          "catalogName": "Capela do Palácio dos Governadores - Ouro Preto",
          "locality": "Praça Tiradentes / Palácio dos Governadores",
          "visitLinks": [
            {
              "label": "Prefeitura — ficha da capela",
              "url": "https://www.ouropreto.mg.gov.br/turismo/atrativo-item/935"
            }
          ],
          "scheduleNote": "A ficha municipal não informa visitação separada da capela. Na consulta de 13/10/2026, a página do Museu de Ciência e Técnica, no mesmo edifício, indica fechamento temporário; confirme com a UFOP se o Palácio e a capela estão acessíveis.",
          "sameSiteAs": "Museu de Mineralogia / Museu de Ciência e Técnica"
        },
        {
          "name": "Capela de Nossa Senhora das Dores OP",
          "description": "Capela identificada pela Prefeitura como “Nossa Senhora das Dores OP”, com ficha e visitação próprias. Não deve ser confundida com a Igreja de Nossa Senhora das Dores do Monte Calvário, cuja ficha municipal informa situação de funcionamento diferente.",
          "agencyRationale": "Corrige uma lacuna de identificação: são dois locais distintos com invocações de Nossa Senhora das Dores, e só este registro municipal publica visita gratuita diária.",
          "visitType": "Capela / visita interna sujeita a confirmação",
          "estimatedDuration": "20–30 min",
          "publishedDuration": "—",
          "oneYearOld": "A confirmar",
          "access": {
            "level": "unknown",
            "label": "A confirmar",
            "description": "A ficha municipal não confirma degraus, rampas nem circulação sem barreiras. A coordenada é aproximada quando indicada; use a busca textual pelo nome/endereço e confirme acesso antes de ir."
          },
          "lat": -20.38567,
          "lon": -43.50362,
          "locationAccuracy": "city-center",
          "days": "20–30 min",
          "relevanceSource": "official_tourism_inventory",
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "gratuito",
            "url": "https://www.ouropreto.mg.gov.br/turismo/atrativo-item/615"
          },
          "kind": "atracao",
          "type": "historia",
          "mapQuery": "Capela de Nossa Senhora das Dores OP, Alto das Dores, Ouro Preto MG",
          "catalogName": "Capela de Nossa Senhora das Dores OP",
          "locality": "Alto das Dores",
          "visitLinks": [
            {
              "label": "Prefeitura — ficha da capela",
              "url": "https://www.ouropreto.mg.gov.br/turismo/atrativo-item/615"
            }
          ],
          "scheduleNote": "A ficha turística municipal informa visitação gratuita diariamente, das 9h às 17h; confirme eventuais alterações e o acesso interno antes de ir."
        },
        {
          "name": "Passo de Antônio Dias",
          "description": "Pequena capela-passo na Rua Bernardo de Vasconcelos, construída no século XIX; pagamentos da obra foram registrados a partir de outubro de 1843. No interior há uma imagem de Cristo diante do Pretório. O Passo faz parte das procissões da Semana Santa e não é uma igreja aberta para visita cotidiana.",
          "agencyRationale": "Registra um elemento específico da religiosidade processional de Antônio Dias sem induzir o visitante a esperar uma visita interna em outubro.",
          "visitType": "Passo / visita sazonal na Semana Santa",
          "estimatedDuration": "15–20 min",
          "publishedDuration": "—",
          "oneYearOld": "A confirmar",
          "access": {
            "level": "unknown",
            "label": "A confirmar",
            "description": "A ficha oficial dá o endereço, mas não há ponto de entrada confirmado em mapa aberto. Use a busca textual pelo nome e endereço; a visita interna é sazonal e fechada fora da Semana Santa."
          },
          "lat": -20.38567,
          "lon": -43.50362,
          "locationAccuracy": "city-center",
          "days": "15–20 min",
          "relevanceSource": "official_tourism_inventory",
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "indeterminado",
            "url": "https://www.ouropreto.mg.gov.br/turismo/atrativo-item/1015"
          },
          "kind": "atracao",
          "type": "historia",
          "mapQuery": "Passo de Antônio Dias, Rua Bernardo de Vasconcelos, Antônio Dias, Ouro Preto MG",
          "catalogName": "Passo de Antônio Dias",
          "locality": "Antônio Dias",
          "visitLinks": [
            {
              "label": "Prefeitura — Passo de Antônio Dias",
              "url": "https://www.ouropreto.mg.gov.br/turismo/atrativo-item/1015"
            }
          ],
          "scheduleNote": "A Prefeitura informa que o Passo fica fechado durante todo o ano e abre excepcionalmente em duas procissões da Semana Santa. Em 12–14/10/2026 não há visita interna; ligue (31) 3551-3282. O marcador usa a referência da cidade, não o endereço exato."
        },
        {
          "name": "Igreja Queimada de Nossa Senhora da Conceição · Antônio Pereira",
          "description": "Ruínas da antiga matriz do distrito de Antônio Pereira. A Prefeitura data a capela primitiva de 1716 e sua elevação a matriz em 1720; um incêndio em 1830 destruiu o templo ornamentado e deixou a fachada. O portal registra versões orais para a causa do incêndio, mas afirma que nenhuma foi comprovada. O lugar é também um cemitério em uso.",
          "agencyRationale": "Acrescenta uma igreja histórica de distrito com nome próprio e preserva a diferença entre história documentada e tradição oral.",
          "visitType": "Ruínas e cemitério / visita externa",
          "estimatedDuration": "30–45 min",
          "publishedDuration": "—",
          "oneYearOld": "A confirmar",
          "access": {
            "level": "unknown",
            "label": "Ruínas / acesso externo a confirmar",
            "description": "O local preserva apenas parte da fachada e funciona também como cemitério. Fique em áreas autorizadas e respeite sinalização; a Prefeitura não publica informação de acessibilidade."
          },
          "lat": -20.3103045,
          "lon": -43.4808156,
          "locationAccuracy": "exact",
          "days": "30–45 min",
          "relevanceSource": "official_tourism_inventory",
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "indeterminado",
            "url": "https://www.ouropreto.mg.gov.br/turismo/atrativo-item/1198"
          },
          "kind": "atracao",
          "type": "historia",
          "mapQuery": "Igreja Queimada de Nossa Senhora da Conceição, Antônio Pereira, Ouro Preto MG",
          "catalogName": "Igreja Queimada de Nossa Senhora da Conceição · Antônio Pereira",
          "locality": "Antônio Pereira",
          "visitLinks": [
            {
              "label": "Prefeitura — Igreja Queimada de Nossa Senhora da Conceição",
              "url": "https://www.ouropreto.mg.gov.br/turismo/atrativo-item/1198"
            },
            {
              "label": "Prefeitura — andamento das obras (02/09/2026)",
              "url": "https://www.ouropreto.mg.gov.br/noticia/5756"
            }
          ],
          "scheduleNote": "A ficha turística lista visitação 24h, mas a notícia municipal de 02/09/2026 informa consolidação das ruínas em execução, com prazo final projetado para agosto de 2026 (já passado). Confirme o acesso antes de dirigir até Antônio Pereira e respeite o cemitério e qualquer sinalização de obra."
        },
        {
          "name": "Chafariz do Antônio Dias",
          "description": "Fonte histórica de Antônio Dias, identificada pela Prefeitura como patrimônio urbano em restauração. A notícia municipal de setembro de 2026 situa o chafariz entre as obras centrais e prevê conclusão em outubro; não localizei uma ficha turística separada com endereço ou horário de visita.",
          "agencyRationale": "É um marco específico da infraestrutura histórica da cidade, mas a obra pode afetar a observação e o acesso durante a viagem de outubro.",
          "visitType": "Fonte histórica / observação externa",
          "estimatedDuration": "10–15 min",
          "publishedDuration": "—",
          "oneYearOld": "A confirmar",
          "access": {
            "level": "unknown",
            "label": "Obra / acesso a confirmar",
            "description": "A coordenada não representa a fonte: use a busca textual pelo nome no mapa e respeite barreiras de restauração."
          },
          "lat": -20.38567,
          "lon": -43.50362,
          "locationAccuracy": "city-center",
          "days": "10–15 min",
          "relevanceSource": "official_tourism_inventory",
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "indeterminado",
            "url": "https://www.ouropreto.mg.gov.br/noticia/5756"
          },
          "kind": "atracao",
          "type": "historia",
          "mapQuery": "Chafariz do Antônio Dias, Antônio Dias, Ouro Preto MG",
          "catalogName": "Chafariz do Antônio Dias",
          "locality": "Antônio Dias",
          "visitLinks": [
            {
              "label": "Prefeitura — restauração do Chafariz do Antônio Dias (02/09/2026)",
              "url": "https://www.ouropreto.mg.gov.br/noticia/5756"
            }
          ],
          "scheduleNote": "A Prefeitura informou obra em execução com conclusão prevista para outubro de 2026. Em 13/10/2026 não há confirmação publicada de término; confirme no local e não ultrapasse barreiras. O mapa usa busca textual, pois não foi confirmado um ponto exato do chafariz."
        }
      ],
      "relevanceSource": "agency",
      "ageClassification": {
        "status": "indeterminada"
      },
      "ticket": {
        "status": "por_passeio"
      },
      "stayDays": [
        1,
        2
      ],
      "access": {
        "level": "moderate",
        "label": "Atenção a ladeiras",
        "description": "O centro histórico tem ladeiras e calçamento irregular. Escolha o percurso a pé e confirme os acessos internos de cada atração."
      },
      "municipality": "Ouro Preto",
      "initialDate": "2026-10-12",
      "selectedByDefault": true,
      "availableDates": [
        "2026-10-13"
      ]
    },
    {
      "id": "mariana",
      "name": "Mariana",
      "lat": -20.37783,
      "lon": -43.41633,
      "kind": "cidade",
      "canHostStay": true,
      "type": "historia",
      "days": "½–1 dia",
      "sights": [
        "Praça Minas Gerais",
        "Centro histórico",
        "Mina da Passagem"
      ],
      "kid": "Verifique acesso e duração da visita à mina antes de incluir crianças pequenas.",
      "url": "https://mariana.org.br/atracoes-turisticas",
      "attractions": [
        {
          "name": "Praça Minas Gerais",
          "description": "Praça monumental onde Igreja do Carmo, Igreja de São Francisco, Casa de Câmara e Cadeia e pelourinho formam um raro conjunto civil e religioso colonial. É extremamente eficiente para grupos: em uma única praça o guia consegue explicar Igreja, Estado, justiça e organização urbana colonial. Isso faz Mariana render muito conteúdo mesmo em visitas de poucas horas.",
          "agencyRationale": "É extremamente eficiente para grupos: em uma única praça o guia consegue explicar Igreja, Estado, justiça e organização urbana colonial. Isso faz Mariana render muito conteúdo mesmo em visitas de poucas horas.",
          "visitType": "Externa / caminhada",
          "estimatedDuration": "30 min",
          "publishedDuration": "—",
          "oneYearOld": "—",
          "access": {
            "level": "unknown",
            "label": "A confirmar",
            "description": "Visita externa com caminhada pela praça histórica. Confirme calçamento e desníveis do trecho escolhido. A dificuldade desse percurso não está confirmada."
          },
          "lat": -20.37812,
          "lon": -43.41813,
          "locationAccuracy": "exact",
          "relevanceSource": "agency",
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "indeterminado"
          },
          "kind": "atracao",
          "type": "historia",
          "days": "30 min"
        },
        {
          "name": "Catedral da Sé",
          "description": "Uma das igrejas mais antigas e importantes de Minas. Guarda um órgão Arp Schnitger do início do século XVIII, raríssimo no Brasil. Acrescenta patrimônio musical e religioso ao circuito.",
          "agencyRationale": "Acrescenta patrimônio musical e religioso ao circuito.",
          "visitType": "Igreja / interna",
          "estimatedDuration": "40 min",
          "publishedDuration": "—",
          "oneYearOld": "—",
          "access": {
            "level": "moderate",
            "label": "Atenção ao percurso",
            "description": "O centro histórico pode ter calçamento e desníveis no trajeto até a atração. Confirme entrada e circulação interna."
          },
          "lat": -20.378172,
          "lon": -43.416413,
          "locationAccuracy": "exact",
          "days": "40 min",
          "relevanceSource": "agency",
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "indeterminado"
          },
          "kind": "atracao",
          "type": "historia"
        },
        {
          "name": "Igreja de São Francisco de Assis",
          "description": "Igreja setecentista com obras associadas a Aleijadinho e Mestre Ataíde; o próprio Ataíde está sepultado no templo. Liga Mariana diretamente aos grandes mestres do barroco mineiro.",
          "agencyRationale": "Liga Mariana diretamente aos grandes mestres do barroco mineiro.",
          "visitType": "Igreja / interna",
          "estimatedDuration": "30 min",
          "publishedDuration": "—",
          "oneYearOld": "—",
          "access": {
            "level": "easy",
            "label": "Mais fácil na visita",
            "description": "A estimativa considera uma visita curta ao templo. Confirme degraus, entrada e circulação interna, além de calçamento e ladeiras no trajeto; o cadastro não comprova um percurso sem barreiras."
          },
          "lat": -20.378199,
          "lon": -43.418028,
          "locationAccuracy": "exact",
          "days": "30 min",
          "relevanceSource": "agency",
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "indeterminado"
          },
          "kind": "atracao",
          "type": "historia"
        },
        {
          "name": "Igreja Nossa Senhora do Carmo",
          "description": "Igreja rococó que forma, junto com São Francisco, uma das imagens urbanas mais marcantes de Mariana. Completa o conjunto arquitetônico da Praça Minas Gerais.",
          "agencyRationale": "Completa o conjunto arquitetônico da Praça Minas Gerais.",
          "visitType": "Igreja / interna",
          "estimatedDuration": "30 min",
          "publishedDuration": "—",
          "oneYearOld": "—",
          "access": {
            "level": "easy",
            "label": "Mais fácil na visita",
            "description": "A estimativa considera uma visita curta ao templo. Confirme degraus, entrada e circulação interna, além de calçamento e ladeiras no trajeto; o cadastro não comprova um percurso sem barreiras."
          },
          "lat": -20.378541,
          "lon": -43.418098,
          "locationAccuracy": "exact",
          "days": "30 min",
          "relevanceSource": "agency",
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "indeterminado"
          },
          "kind": "atracao",
          "type": "historia"
        },
        {
          "name": "Casa de Câmara e Cadeia",
          "description": "Edifício que reunia funções administrativas e judiciais da vila colonial. Ajuda a entender como o poder português funcionava localmente. Complementa a visita religiosa com história política e administrativa.",
          "agencyRationale": "Complementa a visita religiosa com história política e administrativa.",
          "visitType": "Externa/interna conforme acesso",
          "estimatedDuration": "30 min",
          "publishedDuration": "—",
          "oneYearOld": "—",
          "access": {
            "level": "moderate",
            "label": "Atenção ao percurso",
            "description": "O centro histórico pode ter calçamento e desníveis no trajeto até a atração. Confirme entrada e circulação interna."
          },
          "lat": -20.378101,
          "lon": -43.417849,
          "locationAccuracy": "exact",
          "days": "30 min",
          "relevanceSource": "agency",
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "indeterminado"
          },
          "kind": "atracao",
          "type": "historia"
        },
        {
          "name": "Mina da Passagem",
          "description": "Antiga mina de ouro industrial com visita por vagonete até galerias subterrâneas. A descida, a escala e a profundidade tornam a mineração mais compreensível do que apenas observá-la em museus. Roteiros organizados usam essa experiência para explicar em escala física a atividade econômica que criou Mariana e Ouro Preto.",
          "agencyRationale": "A descida de vagonete e as galerias dão caráter de experiência ao roteiro. Agências a utilizam para explicar em escala física a atividade econômica que criou Mariana e Ouro Preto.",
          "visitType": "Mina / visita guiada",
          "estimatedDuration": "1h15",
          "publishedDuration": "~45 min",
          "oneYearOld": "Sim, com responsável — conforme fonte da classificação etária",
          "access": {
            "level": "unknown",
            "label": "Vagonete e galerias",
            "description": "A visita guiada desce por vagonete até galerias subterrâneas. Confirme embarque, circulação, degraus e restrições com o operador; a meia-entrada para maiores de 60 anos não comprova condições de mobilidade."
          },
          "lat": -20.392408,
          "lon": -43.438774,
          "locationAccuracy": "exact",
          "days": "1h15",
          "relevanceSource": "agency",
          "ageClassification": {
            "status": "livre",
            "sourceUrl": "https://mariana.minasdapassagem.com.br/visitacao/",
            "note": "Crianças de até 5 anos entram gratuitamente, acompanhadas de responsável."
          },
          "ticket": {
            "status": "bilheteria",
            "url": "https://mariana.minasdapassagem.com.br/visitacao/"
          },
          "kind": "atracao",
          "type": "historia"
        },
        {
          "name": "Rua Direita e casario",
          "description": "Eixo histórico de Mariana com sobrados coloniais que permite perceber o desenho urbano planejado da cidade e a vida civil fora das grandes igrejas. Aparece nos walking tours porque liga as atrações centrais e transforma o deslocamento em leitura da cidade colonial.",
          "agencyRationale": "Aparece nos walking tours porque liga as atrações centrais e transforma o deslocamento em leitura da cidade colonial.",
          "visitType": "Visita turística",
          "estimatedDuration": "1 h",
          "publishedDuration": "—",
          "oneYearOld": "—",
          "access": {
            "level": "moderate",
            "label": "Atenção ao calçamento",
            "description": "Visita ao centro histórico com caminhada. Confirme calçamento, desníveis e extensão do trecho escolhido."
          },
          "lat": -20.3775358,
          "lon": -43.417483,
          "locationAccuracy": "street-center",
          "days": "1 h",
          "relevanceSource": "agency",
          "mapQuery": "Rua Direita, Centro Histórico, Mariana MG",
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "indeterminado"
          },
          "kind": "atracao",
          "type": "historia"
        },
        {
          "name": "Órgão Arp Schnitger",
          "description": "Órgão alemão do início do século XVIII instalado na Catedral da Sé, um dos raríssimos instrumentos de sua época preservados no Brasil. Roteiros organizados e roteiros oficiais o destacam porque oferece patrimônio musical excepcional, diferenciando Mariana das demais cidades barrocas.",
          "agencyRationale": "Operadoras e roteiros oficiais o destacam porque oferece patrimônio musical excepcional, diferenciando Mariana das demais cidades barrocas.",
          "visitType": "Visita turística",
          "estimatedDuration": "1 h",
          "publishedDuration": "—",
          "oneYearOld": "—",
          "access": {
            "level": "moderate",
            "label": "Atenção ao percurso",
            "description": "O centro histórico pode ter calçamento e desníveis no trajeto até a atração. Confirme entrada e circulação interna."
          },
          "lat": -20.378193,
          "lon": -43.416366,
          "locationAccuracy": "exact",
          "days": "1 h",
          "relevanceSource": "agency",
          "sameSiteAs": "Catedral da Sé",
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "indeterminado"
          },
          "kind": "atracao",
          "type": "historia"
        },
        {
          "name": "Igreja de São Pedro dos Clérigos",
          "description": "Igreja iniciada no século XVIII, marcante pela implantação elevada e pela arquitetura de linhas curvas. Entra em roteiros mais completos para ampliar a leitura da arquitetura religiosa de Mariana além do conjunto da Praça Minas Gerais.",
          "agencyRationale": "Entra em roteiros mais completos para ampliar a leitura da arquitetura religiosa de Mariana além do conjunto da Praça Minas Gerais.",
          "visitType": "Visita turística",
          "estimatedDuration": "1 h",
          "publishedDuration": "—",
          "oneYearOld": "—",
          "access": {
            "level": "easy",
            "label": "Mais fácil na visita",
            "description": "A estimativa considera uma visita curta ao templo. Confirme degraus, entrada e circulação interna, além de calçamento e ladeiras no trajeto; o cadastro não comprova um percurso sem barreiras."
          },
          "lat": -20.38358,
          "lon": -43.418777,
          "locationAccuracy": "exact",
          "days": "1 h",
          "relevanceSource": "agency",
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "indeterminado"
          },
          "kind": "atracao",
          "type": "historia"
        },
        {
          "name": "Igreja Nossa Senhora do Rosário dos Pretos",
          "lat": -20.373329,
          "lon": -43.420127,
          "locationAccuracy": "exact",
          "catalogName": "Igreja Nossa Senhora do Rosário dos Pretos",
          "description": "Igreja histórica de Mariana incluída em roteiro comercial.",
          "agencyRationale": "Parada explicitamente incluída em roteiro comercializado por agência de turismo.",
          "visitType": "Religiosa",
          "estimatedDuration": "—",
          "publishedDuration": "—",
          "oneYearOld": "A confirmar",
          "access": {
            "level": "easy",
            "label": "Mais fácil na visita",
            "description": "A estimativa considera uma visita curta ao templo. Confirme degraus, entrada e circulação interna, além de calçamento e ladeiras no trajeto; o cadastro não comprova um percurso sem barreiras."
          },
          "days": "—",
          "relevanceSource": "agency",
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "indeterminado"
          },
          "kind": "atracao",
          "type": "historia"
        },
        {
          "name": "Museu Arquidiocesano de Arte Sacra",
          "lat": -20.378695,
          "lon": -43.416398,
          "locationAccuracy": "exact",
          "catalogName": "Museu Arquidiocesano de Arte Sacra",
          "description": "Museu com acervo ligado à arte sacra mineira, incluído em roteiro comercial.",
          "agencyRationale": "Parada explicitamente incluída em roteiro comercializado por agência de turismo.",
          "visitType": "Museu",
          "estimatedDuration": "—",
          "publishedDuration": "—",
          "oneYearOld": "A confirmar",
          "access": {
            "level": "moderate",
            "label": "Atenção ao percurso",
            "description": "O centro histórico pode ter calçamento e desníveis no trajeto até a atração. Confirme entrada e circulação interna."
          },
          "days": "—",
          "relevanceSource": "agency",
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "indeterminado"
          },
          "kind": "atracao",
          "type": "historia"
        },
        {
          "name": "Pelourinho de Mariana",
          "lat": -20.378189,
          "lon": -43.418002,
          "locationAccuracy": "exact",
          "catalogName": "Pelourinho de Mariana",
          "description": "Marco urbano do conjunto histórico de Mariana incluído em roteiro comercial.",
          "agencyRationale": "Parada explicitamente incluída em roteiro comercializado por agência de turismo.",
          "visitType": "Histórica",
          "estimatedDuration": "—",
          "publishedDuration": "—",
          "oneYearOld": "A confirmar",
          "access": {
            "level": "moderate",
            "label": "Atenção ao calçamento",
            "description": "Visita ao centro histórico com caminhada. Confirme calçamento, desníveis e extensão do trecho escolhido."
          },
          "days": "—",
          "relevanceSource": "agency",
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "indeterminado"
          },
          "kind": "atracao",
          "type": "historia"
        }
      ],
      "guideBriefing": "Mariana surgiu no início da ocupação mineradora e foi a primeira vila, a primeira cidade e a primeira capital de Minas Gerais. Também se tornou sede do primeiro bispado da capitania. Seu traçado, igrejas, Câmara e Cadeia e antigas áreas de mineração ajudam a compreender como poder civil, Igreja e economia do ouro organizaram os primeiros centros urbanos mineiros.",
      "profile": "História · barroco · mineração",
      "relevanceSource": "agency",
      "ageClassification": {
        "status": "indeterminada"
      },
      "ticket": {
        "status": "por_passeio"
      },
      "stayDays": [
        0.5,
        1
      ],
      "access": {
        "level": "moderate",
        "label": "Variável",
        "description": "A caminhada pelo centro histórico pode envolver calçamento e desníveis. A visita subterrânea à Mina da Passagem tem condições próprias, a confirmar com o operador."
      }
    },
    {
      "id": "cipo",
      "name": "Serra do Cipó",
      "lat": -19.33555,
      "lon": -43.62559,
      "kind": "regiao",
      "canHostStay": true,
      "type": "natureza",
      "days": "1–2 dias",
      "sights": [
        "Parque Nacional",
        "Cânions e cachoeiras",
        "Paisagens da Serra do Espinhaço"
      ],
      "kid": "Muitas atrações envolvem trilha, terreno irregular ou água; escolha apenas após checar acesso e estrutura.",
      "url": "https://www.gov.br/icmbio/pt-br/assuntos/biodiversidade/unidade-de-conservacao/unidades-de-biomas/cerrado/lista-de-ucs/parna-da-serra-do-cipo",
      "guideBriefing": "A Serra do Cipó integra a Serra do Espinhaço, cadeia montanhosa que condicionou caminhos, rios, biodiversidade e ocupação humana no centro de Minas. A região reúne campos rupestres, cânions e cachoeiras e foi atravessada por antigas rotas entre a área mineradora e o norte da capitania. O parque nacional protege uma das áreas de maior diversidade botânica do Espinhaço.",
      "relevanceSource": "guide",
      "ageClassification": {
        "status": "indeterminada"
      },
      "ticket": {
        "status": "indeterminado"
      },
      "stayDays": [
        1,
        2
      ],
      "access": {
        "level": "hard",
        "label": "Exigente nas trilhas",
        "description": "O cadastro cita roteiros do ICMBio com caminhadas de vários quilômetros. Escolha um percurso compatível com o grupo e confirme distância, terreno e possibilidade de acesso curto."
      },
      "profile": "Parque nacional · serras · cachoeiras",
      "attractions": []
    },
    {
      "id": "tabuleiro",
      "name": "Conceição do Mato Dentro · Tabuleiro",
      "lat": -19.03722,
      "lon": -43.42528,
      "kind": "cidade",
      "canHostStay": true,
      "type": "natureza",
      "days": "1 dia",
      "sights": [
        "Cachoeira do Tabuleiro",
        "Poços e mirantes"
      ],
      "kid": "A cachoeira é associada a caminhada e terreno de serra; não considerar visita como passeio de carrinho. Confirmar acesso local.",
      "url": "https://turismo.cmd.mg.gov.br/",
      "guideBriefing": "Tabuleiro é um distrito de Conceição do Mato Dentro ligado à ocupação rural da Serra do Espinhaço. A comunidade se formou em área de agricultura e antigas atividades de ferro; com o tempo, a Cachoeira do Tabuleiro transformou o turismo de natureza em parte central da economia local. A queda, com cerca de 273 metros, é a mais alta de Minas Gerais e tornou-se uma referência paisagística da Estrada Real.",
      "profile": "Natureza · Estrada Real · história",
      "attractions": [
        {
          "name": "Cachoeira do Tabuleiro",
          "description": "Queda monumental despencando de um paredão da Serra do Espinhaço. A escala da formação rochosa é o principal motivo da visita. Tabuleiro é incluída porque oferece uma mudança de escala: sai-se do patrimônio construído para uma paisagem monumental do Espinhaço. Pode justificar uma etapa inteira do roteiro.",
          "agencyRationale": "Tabuleiro é incluída porque oferece uma mudança de escala: sai-se do patrimônio construído para uma paisagem monumental do Espinhaço. Pode justificar uma etapa inteira do roteiro.",
          "visitType": "Trilha / natureza",
          "estimatedDuration": "1 h mirante / 4 h parte baixa",
          "publishedDuration": "Mirante: 15–30 min de caminhada; parte baixa: ~3 h de passeio",
          "oneYearOld": "A confirmar",
          "access": {
            "level": "hard",
            "label": "Trilha com restrições",
            "description": "Acesso por trilha, com possibilidade de degraus e terreno irregular. A norma citada no cadastro prevê restrições para dificuldade de mobilidade e menciona idosos e pessoas com deficiência; confirme o percurso e as regras atuais na portaria."
          },
          "lat": -19.08936,
          "lon": -43.55158,
          "locationAccuracy": "exact",
          "days": "1 h mirante / 4 h parte baixa",
          "relevanceSource": "agency",
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "bilheteria",
            "url": "https://www.turismo.cmd.mg.gov.br/turismo/cachoeira-do-tabuleiro/17",
            "note": "Taxa de visitação informada pela prefeitura; confirme valor e acesso atual."
          },
          "mapQuery": "Cachoeira do Tabuleiro, Conceição do Mato Dentro MG",
          "kind": "atracao",
          "type": "natureza"
        },
        {
          "name": "Centro histórico",
          "description": "Igrejas e casarões registram a ocupação do antigo caminho entre as áreas mineradoras. Mantém continuidade histórica entre natureza e Estrada Real.",
          "agencyRationale": "Mantém continuidade histórica entre natureza e Estrada Real.",
          "visitType": "Caminhada / externa",
          "estimatedDuration": "1h30",
          "publishedDuration": "—",
          "oneYearOld": "—",
          "access": {
            "level": "easy",
            "label": "Mais fácil",
            "description": "Visita externa com caminhada entre igrejas e casarões. A estimativa considera um trecho curto; confirme calçamento, degraus e ladeiras no percurso escolhido."
          },
          "lat": -19.03722,
          "lon": -43.42528,
          "locationAccuracy": "city-center",
          "days": "1h30",
          "relevanceSource": "agency",
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "indeterminado"
          },
          "mapQuery": "Centro histórico, Conceição do Mato Dentro MG",
          "kind": "atracao",
          "type": "historia"
        },
        {
          "name": "Serra do Espinhaço",
          "description": "Cadeia montanhosa de campos rupestres, cânions, cachoeiras e grande biodiversidade. Faz o percurso até Diamantina ser também um roteiro paisagístico.",
          "agencyRationale": "Faz o percurso até Diamantina ser também um roteiro paisagístico.",
          "visitType": "Paisagem / trilha",
          "estimatedDuration": "meio dia",
          "publishedDuration": "—",
          "oneYearOld": "—",
          "access": {
            "level": "hard",
            "label": "Exigente / variável",
            "description": "Visita de paisagem e trilha na serra. O esforço depende do percurso escolhido; confirme distância, desnível, terreno e condições com o responsável pelo roteiro."
          },
          "lat": -19.03722,
          "lon": -43.42528,
          "locationAccuracy": "city-center",
          "days": "meio dia",
          "relevanceSource": "agency",
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "indeterminado"
          },
          "mapQuery": "Serra do Espinhaço, Conceição do Mato Dentro MG",
          "kind": "atracao",
          "type": "natureza"
        },
        {
          "name": "Igreja Matriz de Nossa Senhora da Conceição",
          "lat": -19.036528,
          "lon": -43.425667,
          "locationAccuracy": "exact",
          "catalogName": "Igreja Matriz de Nossa Senhora da Conceição",
          "description": "Matriz histórica de Conceição do Mato Dentro incluída em roteiro comercial Diamantina–BH.",
          "agencyRationale": "Parada explicitamente incluída em roteiro comercializado por agência de turismo.",
          "visitType": "Religiosa",
          "estimatedDuration": "—",
          "publishedDuration": "—",
          "oneYearOld": "A confirmar",
          "access": {
            "level": "easy",
            "label": "Mais fácil na visita",
            "description": "A estimativa considera uma visita curta ao templo. Confirme degraus, entrada e circulação interna, além de calçamento e ladeiras no trajeto; o cadastro não comprova um percurso sem barreiras."
          },
          "days": "—",
          "relevanceSource": "agency",
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "indeterminado"
          },
          "mapQuery": "Igreja Matriz de Nossa Senhora da Conceição, Conceição do Mato Dentro MG",
          "kind": "atracao",
          "type": "historia"
        }
      ],
      "relevanceSource": "agency",
      "ageClassification": {
        "status": "indeterminada"
      },
      "ticket": {
        "status": "por_passeio"
      },
      "stayDays": [
        1,
        1
      ],
      "access": {
        "level": "hard",
        "label": "Exigente nas trilhas",
        "description": "A cachoeira e a parte baixa envolvem trilha. Confirme percurso, desnível e condições na portaria; a visita urbana ao centro histórico tem outro contexto de acesso."
      },
      "municipality": "Conceição do Mato Dentro",
      "mapQuery": "Tabuleiro, Conceição do Mato Dentro MG"
    },
    {
      "id": "serro",
      "name": "Serro",
      "lat": -18.60444,
      "lon": -43.37945,
      "kind": "cidade",
      "canHostStay": true,
      "type": "historia",
      "days": "½ dia",
      "sights": [
        "Centro histórico",
        "Arquitetura colonial",
        "Queijo do Serro",
        "Igreja de Nossa Senhora do Rosário · Milho Verde",
        "Núcleo histórico · Milho Verde",
        "Cachoeiras · Milho Verde",
        "Cachoeira do Comércio · São Gonçalo do Rio das Pedras",
        "Núcleo histórico · São Gonçalo do Rio das Pedras",
        "Igrejas e capelas · São Gonçalo do Rio das Pedras",
        "Cachoeiras e Serra do Espinhaço · São Gonçalo do Rio das Pedras"
      ],
      "kid": "Parada cultural/gastronômica mais flexível que trilhas; verificar hospedagem e pausas.",
      "url": "https://www.serro.mg.gov.br/portal/turismo",
      "guideBriefing": "O Serro, antigo Arraial do Ribeirão das Minas de Santo Antônio do Bom Retiro do Serro do Frio, formou-se no começo do século XVIII com a mineração. Tornou-se centro administrativo de uma vasta região que depois se ligaria à exploração de diamantes. O casario e as igrejas preservam essa origem, enquanto o Queijo do Serro representa uma tradição rural desenvolvida paralelamente à economia mineradora.\n\nMilho Verde: Milho Verde surgiu no antigo território do Serro Frio, em meio aos caminhos da mineração e dos diamantes. O pequeno núcleo preserva a escala dos arraiais que serviam às rotas coloniais, com capelas, casario e caminhos inseridos na Serra do Espinhaço. Sua história também se cruza com personagens e tradições da região diamantífera, enquanto cachoeiras e campos rupestres mostram a paisagem que condicionava esses deslocamentos.\n\nSão Gonçalo do Rio das Pedras: São Gonçalo do Rio das Pedras já possuía casas, roças e engenhos no início do século XVIII. Situado entre Serro e a região diamantífera, viveu sob a vigilância da Coroa sobre os caminhos e o garimpo de diamantes. O povoado preserva a escala e a paisagem dos pequenos núcleos que davam apoio à circulação colonial na Serra do Espinhaço.",
      "profile": "História · Estrada Real · gastronomia",
      "attractions": [
        {
          "name": "Centro Histórico",
          "description": "Conjunto de casarões, igrejas e ladeiras de uma das primeiras vilas do norte minerador de Minas. É um núcleo menos monumental e mais preservado na escala cotidiana. O Serro é usado porque preserva um elo histórico do próprio caminho que levava às áreas diamantíferas. Também oferece patrimônio e gastronomia suficientes para que a parada tenha valor próprio.",
          "agencyRationale": "O Serro é usado porque preserva um elo histórico do próprio caminho que levava às áreas diamantíferas. Também oferece patrimônio e gastronomia suficientes para que a parada tenha valor próprio.",
          "visitType": "A pé / externa",
          "estimatedDuration": "2–3 h",
          "publishedDuration": "—",
          "oneYearOld": "—",
          "access": {
            "level": "easy",
            "label": "Mais fácil em trecho curto",
            "description": "Circuito a pé entre casarões e igrejas, distribuídos pelas ladeiras. A estimativa de menor esforço vale para trechos curtos; confirme calçamento, desníveis e duração do circuito escolhido."
          },
          "lat": -18.60444,
          "lon": -43.37945,
          "locationAccuracy": "city-center",
          "days": "2–3 h",
          "relevanceSource": "agency",
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "indeterminado"
          },
          "kind": "atracao",
          "type": "historia"
        },
        {
          "name": "Igrejas coloniais",
          "description": "Templos distribuídos pelas ladeiras documentam irmandades, arte sacra e a sociedade mineradora local. Dão conteúdo histórico a uma parada que também é gastronômica.",
          "agencyRationale": "Dão conteúdo histórico a uma parada que também é gastronômica.",
          "visitType": "Circuito a pé",
          "estimatedDuration": "1h30",
          "publishedDuration": "—",
          "oneYearOld": "—",
          "access": {
            "level": "easy",
            "label": "Mais fácil em trecho curto",
            "description": "Circuito a pé entre casarões e igrejas, distribuídos pelas ladeiras. A estimativa de menor esforço vale para trechos curtos; confirme calçamento, desníveis e duração do circuito escolhido."
          },
          "lat": -18.60444,
          "lon": -43.37945,
          "locationAccuracy": "city-center",
          "days": "1h30",
          "relevanceSource": "agency",
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "indeterminado"
          },
          "kind": "atracao",
          "type": "historia"
        },
        {
          "name": "Queijo do Serro",
          "description": "Queijo artesanal produzido há séculos com técnicas tradicionais; a região é uma das referências da cultura queijeira mineira. O queijo transforma patrimônio imaterial em experiência sensorial. Roteiros organizados conseguem ligar história rural, técnica tradicional e degustação em uma mesma parada.",
          "agencyRationale": "O queijo transforma patrimônio imaterial em experiência sensorial. Agências conseguem ligar história rural, técnica tradicional e degustação em uma mesma parada.",
          "visitType": "Degustação / produtor",
          "estimatedDuration": "1 h",
          "publishedDuration": "—",
          "oneYearOld": "—",
          "access": {
            "level": "easy",
            "label": "Mais fácil na visita",
            "description": "Degustação e visita a um produtor. A estimativa de menor esforço se refere à visita; confirme estrada de acesso, entrada, degraus e circulação na propriedade escolhida."
          },
          "lat": -18.60444,
          "lon": -43.37945,
          "locationAccuracy": "city-center",
          "days": "1 h",
          "relevanceSource": "agency",
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "indeterminado"
          },
          "kind": "atracao",
          "type": "gastronomia"
        },
        {
          "name": "Cachoeira da Grota Seca",
          "lat": -18.4192319,
          "lon": -43.4610846,
          "locationAccuracy": "exact",
          "catalogName": "Cachoeira da Grota Seca",
          "description": "Cachoeira do Serro incluída em passeio comercial da Estrada Real.",
          "agencyRationale": "Parada explicitamente incluída em roteiro comercializado por agência de turismo.",
          "visitType": "Natureza",
          "estimatedDuration": "—",
          "publishedDuration": "—",
          "oneYearOld": "A confirmar",
          "access": {
            "level": "unknown",
            "label": "A confirmar",
            "description": "O cadastro identifica a cachoeira, mas não detalha estrada, caminhada nem desnível. Confirme o acesso e o percurso local."
          },
          "days": "—",
          "relevanceSource": "agency",
          "mapQuery": "Cachoeira da Grota Seca, São Gonçalo do Rio das Pedras, Serro MG",
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "indeterminado"
          },
          "kind": "atracao",
          "type": "natureza"
        },
        {
          "name": "Cachoeira do Carijó",
          "lat": -18.48323,
          "lon": -43.4872,
          "locationAccuracy": "exact",
          "catalogName": "Cachoeira do Carijó",
          "description": "Cachoeira do Serro incluída em passeio comercial da Estrada Real.",
          "agencyRationale": "Parada explicitamente incluída em roteiro comercializado por agência de turismo.",
          "visitType": "Natureza",
          "estimatedDuration": "—",
          "publishedDuration": "—",
          "oneYearOld": "A confirmar",
          "access": {
            "level": "unknown",
            "label": "A confirmar",
            "description": "O cadastro identifica a cachoeira, mas não detalha estrada, caminhada nem desnível. Confirme o acesso e o percurso local."
          },
          "days": "—",
          "relevanceSource": "agency",
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "indeterminado"
          },
          "kind": "atracao",
          "type": "natureza"
        },
        {
          "name": "Casa dos Ottoni",
          "lat": -18.600956,
          "lon": -43.378653,
          "locationAccuracy": "exact",
          "catalogName": "Casa dos Ottoni",
          "description": "Casarão histórico incluído no city tour comercial do Serro.",
          "agencyRationale": "Parada explicitamente incluída em roteiro comercializado por agência de turismo.",
          "visitType": "Histórica",
          "estimatedDuration": "—",
          "publishedDuration": "—",
          "oneYearOld": "A confirmar",
          "access": {
            "level": "moderate",
            "label": "Atenção ao percurso",
            "description": "O percurso pelo centro histórico pode envolver calçamento e desníveis. Confirme entrada, áreas abertas à visita e circulação no imóvel."
          },
          "days": "—",
          "relevanceSource": "agency",
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "indeterminado"
          },
          "kind": "atracao",
          "type": "historia"
        },
        {
          "name": "Chácara do Barão",
          "lat": -18.6024683,
          "lon": -43.3808094,
          "locationAccuracy": "exact",
          "catalogName": "Chácara do Barão",
          "description": "Conjunto histórico incluído no city tour comercial do Serro.",
          "agencyRationale": "Parada explicitamente incluída em roteiro comercializado por agência de turismo.",
          "visitType": "Histórica",
          "estimatedDuration": "—",
          "publishedDuration": "—",
          "oneYearOld": "A confirmar",
          "access": {
            "level": "moderate",
            "label": "Atenção ao percurso",
            "description": "O percurso pelo centro histórico pode envolver calçamento e desníveis. Confirme entrada, áreas abertas à visita e circulação no imóvel."
          },
          "days": "—",
          "relevanceSource": "agency",
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "indeterminado"
          },
          "kind": "atracao",
          "type": "historia"
        },
        {
          "name": "Igreja de Santa Rita",
          "lat": -18.606111,
          "lon": -43.384,
          "locationAccuracy": "exact",
          "catalogName": "Igreja de Santa Rita",
          "description": "Templo histórico incluído no roteiro comercial do Serro.",
          "agencyRationale": "Parada explicitamente incluída em roteiro comercializado por agência de turismo.",
          "visitType": "Religiosa",
          "estimatedDuration": "—",
          "publishedDuration": "—",
          "oneYearOld": "A confirmar",
          "access": {
            "level": "easy",
            "label": "Mais fácil na visita",
            "description": "A estimativa considera uma visita curta ao templo. Confirme degraus, entrada e circulação interna, além de calçamento e ladeiras no trajeto; o cadastro não comprova um percurso sem barreiras."
          },
          "days": "—",
          "relevanceSource": "agency",
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "indeterminado"
          },
          "kind": "atracao",
          "type": "historia"
        },
        {
          "name": "Igreja Nossa Senhora do Carmo",
          "lat": -18.6052766,
          "lon": -43.3821884,
          "locationAccuracy": "exact",
          "catalogName": "Igreja Nossa Senhora do Carmo",
          "description": "Igreja histórica incluída no roteiro comercial do Serro.",
          "agencyRationale": "Parada explicitamente incluída em roteiro comercializado por agência de turismo.",
          "visitType": "Religiosa",
          "estimatedDuration": "—",
          "publishedDuration": "—",
          "oneYearOld": "A confirmar",
          "access": {
            "level": "easy",
            "label": "Mais fácil na visita",
            "description": "A estimativa considera uma visita curta ao templo. Confirme degraus, entrada e circulação interna, além de calçamento e ladeiras no trajeto; o cadastro não comprova um percurso sem barreiras."
          },
          "days": "—",
          "relevanceSource": "agency",
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "indeterminado"
          },
          "kind": "atracao",
          "type": "historia"
        },
        {
          "name": "Igreja Nossa Senhora do Rosário",
          "lat": -18.606013,
          "lon": -43.376882,
          "locationAccuracy": "exact",
          "catalogName": "Igreja Nossa Senhora do Rosário",
          "description": "Igreja histórica incluída no roteiro comercial do Serro.",
          "agencyRationale": "Parada explicitamente incluída em roteiro comercializado por agência de turismo.",
          "visitType": "Religiosa",
          "estimatedDuration": "—",
          "publishedDuration": "—",
          "oneYearOld": "A confirmar",
          "access": {
            "level": "easy",
            "label": "Mais fácil na visita",
            "description": "A estimativa considera uma visita curta ao templo. Confirme degraus, entrada e circulação interna, além de calçamento e ladeiras no trajeto; o cadastro não comprova um percurso sem barreiras."
          },
          "days": "—",
          "relevanceSource": "agency",
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "indeterminado"
          },
          "kind": "atracao",
          "type": "historia"
        },
        {
          "name": "Fazenda produtora de Queijo do Serro",
          "lat": -18.60444,
          "lon": -43.37945,
          "locationAccuracy": "city-center",
          "catalogName": "Fazenda produtora de Queijo do Serro",
          "description": "Experiência rural ligada ao modo tradicional de produção do Queijo do Serro.",
          "agencyRationale": "Parada explicitamente incluída em roteiro comercializado por agência de turismo.",
          "visitType": "Gastronômica / rural",
          "estimatedDuration": "—",
          "publishedDuration": "—",
          "oneYearOld": "A confirmar",
          "access": {
            "level": "easy",
            "label": "Mais fácil na visita",
            "description": "Degustação e visita a um produtor. A estimativa de menor esforço se refere à visita; confirme estrada de acesso, entrada, degraus e circulação na propriedade escolhida."
          },
          "days": "—",
          "relevanceSource": "agency",
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "indeterminado"
          },
          "kind": "atracao",
          "type": "gastronomia"
        },
        {
          "name": "Igreja de Nossa Senhora do Rosário · Milho Verde",
          "description": "Localidade: Milho Verde, município de Serro. Pequena igreja branca isolada diante da serra, uma das imagens mais emblemáticas da Estrada Real. O valor está tanto no templo quanto na paisagem ao redor. É um cartão-postal muito eficiente em roteiros do Caminho dos Diamantes.",
          "agencyRationale": "É um cartão-postal muito eficiente em roteiros do Caminho dos Diamantes.",
          "visitType": "Igreja + paisagem",
          "estimatedDuration": "30 min",
          "publishedDuration": "—",
          "oneYearOld": "—",
          "access": {
            "level": "easy",
            "label": "Mais fácil na visita",
            "description": "A estimativa considera uma visita curta ao templo. Confirme degraus, entrada e circulação interna, além de calçamento e ladeiras no trajeto; o cadastro não comprova um percurso sem barreiras."
          },
          "lat": -18.4730041335,
          "lon": -43.4985745087,
          "locationAccuracy": "exact",
          "days": "30 min",
          "relevanceSource": "agency",
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "indeterminado"
          },
          "locality": "Milho Verde",
          "mapQuery": "Igreja de Nossa Senhora do Rosário, Milho Verde, Serro MG",
          "catalogName": "Igreja de Nossa Senhora do Rosário · Milho Verde",
          "kind": "atracao",
          "type": "historia"
        },
        {
          "name": "Núcleo histórico · Milho Verde",
          "description": "Localidade: Milho Verde, município de Serro. Casario e ruas preservam a escala de um antigo povoado ligado à mineração de ouro e diamantes. Oferece experiência de vila histórica mais tranquila que os grandes centros.",
          "agencyRationale": "Oferece experiência de vila histórica mais tranquila que os grandes centros.",
          "visitType": "Caminhada / externa",
          "estimatedDuration": "1 h",
          "publishedDuration": "—",
          "oneYearOld": "—",
          "access": {
            "level": "unknown",
            "label": "A confirmar",
            "description": "Visita ao núcleo histórico de Milho Verde, sem incluir os percursos das cachoeiras. Confirme calçamento, degraus e desníveis do trecho a pé; o esforço não está documentado para a vila."
          },
          "lat": -18.47324,
          "lon": -43.49798,
          "locationAccuracy": "city-center",
          "days": "1 h",
          "relevanceSource": "agency",
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "indeterminado"
          },
          "locality": "Milho Verde",
          "mapQuery": "Núcleo histórico, Milho Verde, Serro MG",
          "catalogName": "Núcleo histórico · Milho Verde",
          "kind": "atracao",
          "type": "historia"
        },
        {
          "name": "Cachoeiras · Milho Verde",
          "description": "Localidade: Milho Verde, município de Serro. Quedas e poços próximos ao povoado permitem alternar patrimônio e natureza no mesmo dia. Justificam permanecer mais tempo na região em vez de apenas atravessá-la.",
          "agencyRationale": "Justificam permanecer mais tempo na região em vez de apenas atravessá-la.",
          "visitType": "Natureza / banho",
          "estimatedDuration": "meio dia",
          "publishedDuration": "—",
          "oneYearOld": "—",
          "access": {
            "level": "moderate",
            "label": "Variável",
            "description": "As cachoeiras têm acessos distintos, alguns irregulares. Confirme estrada, caminhada, terreno e condições da água para o local escolhido."
          },
          "lat": -18.47324,
          "lon": -43.49798,
          "locationAccuracy": "city-center",
          "days": "meio dia",
          "relevanceSource": "agency",
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "indeterminado"
          },
          "locality": "Milho Verde",
          "mapQuery": "Cachoeiras, Milho Verde, Serro MG",
          "catalogName": "Cachoeiras · Milho Verde",
          "kind": "atracao",
          "type": "natureza"
        },
        {
          "name": "Cachoeira do Comércio · São Gonçalo do Rio das Pedras",
          "lat": -18.41676,
          "lon": -43.49807,
          "locationAccuracy": "exact",
          "relevanceSource": "guide",
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "gratuito",
            "url": "https://www.minasgerais.com.br/pt/atracoes/serro/cachoeira/cachoeira-do-comercio",
            "note": "Entrada franca informada pelo portal estadual; confirme condições atuais."
          },
          "access": {
            "level": "moderate",
            "label": "Variável",
            "description": "A cachoeira pode exigir caminhada. Confirme distância, terreno e condições do percurso com guia local."
          },
          "locality": "São Gonçalo do Rio das Pedras",
          "mapQuery": "Cachoeira do Comércio, São Gonçalo do Rio das Pedras, Serro MG",
          "catalogName": "Cachoeira do Comércio · São Gonçalo do Rio das Pedras",
          "kind": "atracao",
          "type": "natureza",
          "description": "Localidade: São Gonçalo do Rio das Pedras, município de Serro. Cachoeira em São Gonçalo do Rio das Pedras, distrito do Serro, com queda d’água, paredão e moinhos tradicionais de pau-a-pique nas proximidades. Confirme o percurso e as condições de visita localmente.",
          "agencyRationale": "Complemento documentado no portal turístico estadual; inclusão em roteiro comercial de agência não confirmada.",
          "visitType": "Cachoeira / paisagem",
          "estimatedDuration": "Duração a confirmar",
          "publishedDuration": "—",
          "oneYearOld": "A confirmar",
          "days": "Duração a confirmar",
          "sourceUrl": "https://www.minasgerais.com.br/pt/atracoes/serro/cachoeira/cachoeira-do-comercio",
          "researchedAt": "2026-10-02",
          "visitLinks": [
            {
              "label": "Turismo de Minas Gerais · fonte oficial",
              "url": "https://www.minasgerais.com.br/pt/atracoes/serro/cachoeira/cachoeira-do-comercio"
            }
          ]
        },
        {
          "name": "Núcleo histórico · São Gonçalo do Rio das Pedras",
          "description": "Localidade: São Gonçalo do Rio das Pedras, município de Serro. Pequeno povoado surgido nos caminhos da mineração, preservando arquitetura simples e ritmo rural. É uma parada autêntica no trajeto da Estrada Real entre Serro e Diamantina.",
          "agencyRationale": "É uma parada autêntica no trajeto da Estrada Real entre Serro e Diamantina.",
          "visitType": "Caminhada / externa",
          "estimatedDuration": "1 h",
          "publishedDuration": "—",
          "oneYearOld": "—",
          "access": {
            "level": "unknown",
            "label": "A confirmar",
            "description": "Visita ao núcleo histórico. Confirme o percurso a pé, calçamento e desníveis."
          },
          "lat": -18.42003,
          "lon": -43.49561,
          "locationAccuracy": "city-center",
          "days": "1 h",
          "relevanceSource": "agency",
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "indeterminado"
          },
          "locality": "São Gonçalo do Rio das Pedras",
          "mapQuery": "Núcleo histórico, São Gonçalo do Rio das Pedras, Serro MG",
          "catalogName": "Núcleo histórico · São Gonçalo do Rio das Pedras",
          "kind": "atracao",
          "type": "historia"
        },
        {
          "name": "Igrejas e capelas · São Gonçalo do Rio das Pedras",
          "description": "Localidade: São Gonçalo do Rio das Pedras, município de Serro. Pequenos templos ajudam a contar a formação religiosa e comunitária dos povoados mineradores. Complementam a narrativa das grandes igrejas barrocas com patrimônio rural.",
          "agencyRationale": "Complementam a narrativa das grandes igrejas barrocas com patrimônio rural.",
          "visitType": "Circuito a pé",
          "estimatedDuration": "1 h",
          "publishedDuration": "—",
          "oneYearOld": "—",
          "access": {
            "level": "easy",
            "label": "Mais fácil na visita",
            "description": "A estimativa considera uma visita curta ao templo. Confirme degraus, entrada e circulação interna, além de calçamento e ladeiras no trajeto; o cadastro não comprova um percurso sem barreiras."
          },
          "lat": -18.42003,
          "lon": -43.49561,
          "locationAccuracy": "city-center",
          "days": "1 h",
          "relevanceSource": "agency",
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "indeterminado"
          },
          "locality": "São Gonçalo do Rio das Pedras",
          "mapQuery": "Igrejas e capelas, São Gonçalo do Rio das Pedras, Serro MG",
          "catalogName": "Igrejas e capelas · São Gonçalo do Rio das Pedras",
          "kind": "atracao",
          "type": "historia"
        },
        {
          "name": "Cachoeiras e Serra do Espinhaço · São Gonçalo do Rio das Pedras",
          "description": "Localidade: São Gonçalo do Rio das Pedras, município de Serro. Trilhas, cursos d'água e campos rupestres cercam o distrito. Permitem inserir natureza sem abandonar o eixo histórico da viagem.",
          "agencyRationale": "Permitem inserir natureza sem abandonar o eixo histórico da viagem.",
          "visitType": "Natureza / trilha",
          "estimatedDuration": "meio dia",
          "publishedDuration": "—",
          "oneYearOld": "—",
          "access": {
            "level": "moderate",
            "label": "Variável",
            "description": "Os passeios de natureza podem exigir caminhada. Confirme a cachoeira ou trilha escolhida, distância e terreno com guia local."
          },
          "lat": -18.42003,
          "lon": -43.49561,
          "locationAccuracy": "city-center",
          "days": "meio dia",
          "relevanceSource": "agency",
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "indeterminado"
          },
          "locality": "São Gonçalo do Rio das Pedras",
          "mapQuery": "Cachoeiras e Serra do Espinhaço, São Gonçalo do Rio das Pedras, Serro MG",
          "catalogName": "Cachoeiras e Serra do Espinhaço · São Gonçalo do Rio das Pedras",
          "kind": "atracao",
          "type": "natureza"
        }
      ],
      "relevanceSource": "agency",
      "ageClassification": {
        "status": "indeterminada"
      },
      "ticket": {
        "status": "por_passeio"
      },
      "stayDays": [
        0.5,
        0.5
      ],
      "access": {
        "level": "moderate",
        "label": "Atenção a ladeiras",
        "description": "O centro histórico tem calçamento e desníveis; escolha trechos curtos. Visitas a produtores de queijo e cachoeiras precisam de confirmação própria de estrada e percurso."
      },
      "municipality": "Serro"
    },
    {
      "id": "diamantina",
      "name": "Diamantina",
      "lat": -18.24409,
      "lon": -43.60065,
      "kind": "cidade",
      "canHostStay": true,
      "type": "historia",
      "days": "2–3 dias",
      "sights": [
        "Centro histórico",
        "Casa de JK",
        "Casa de Chica da Silva",
        "Igreja Nossa Senhora do Carmo",
        "Vesperata",
        "Gruta do Salitre · Extração / Curralinho",
        "Experiência de garimpo · Extração / Curralinho",
        "Vila de Biribiri · Biribiri",
        "Cachoeiras · Biribiri",
        "Trilhas do Parque Estadual do Biribiri · Biribiri",
        "Núcleo histórico e artesanato de Mendanha · Mendanha",
        "Povoado histórico do Vau · Vau"
      ],
      "kid": "Base para reduzir deslocamentos; confira calendário de eventos, acesso da hospedagem e pausas.",
      "url": "https://visitediamantina.com.br/",
      "attractions": [
        {
          "name": "Casa de JK",
          "description": "Casa onde JK viveu na juventude, hoje museu. Liga a pequena cidade colonial à trajetória do futuro presidente responsável pela construção de Brasília. Introduz uma camada de história republicana ao roteiro colonial.",
          "agencyRationale": "Introduz uma camada de história republicana ao roteiro colonial.",
          "visitType": "Museu / interna",
          "estimatedDuration": "1 h",
          "publishedDuration": "< 1 h",
          "oneYearOld": "Sim",
          "access": {
            "level": "moderate",
            "label": "Atenção ao entorno",
            "description": "O percurso no centro histórico tem calçamento e desníveis. A Casa de JK registra rota externa, entrada interna por rampa e sanitário acessível; confirme o trajeto e a disponibilidade desses acessos."
          },
          "catalogName": "Casa de Juscelino Kubitschek",
          "lat": -18.244848,
          "lon": -43.600277,
          "locationAccuracy": "exact",
          "relevanceSource": "agency",
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "indeterminado"
          },
          "kind": "atracao",
          "type": "historia",
          "days": "1 h"
        },
        {
          "name": "Centro Histórico",
          "description": "Conjunto urbano colonial formado durante o ciclo dos diamantes. As ruas de pedra, sobrados e igrejas permitem entender como a riqueza diamantífera moldou a cidade; é Patrimônio Mundial da UNESCO. O conjunto histórico reúne a memória da mineração de diamantes, da sociedade colonial e uma tradição musical própria. Nos circuitos longos, costuma justificar pernoites porque não cabe em uma parada rápida.",
          "agencyRationale": "O conjunto histórico reúne a memória da mineração de diamantes, da sociedade colonial e uma tradição musical própria. Nos circuitos longos, costuma justificar pernoites porque não cabe em uma parada rápida.",
          "visitType": "A pé / externa",
          "estimatedDuration": "2–3 h",
          "publishedDuration": "—",
          "oneYearOld": "—",
          "access": {
            "level": "easy",
            "label": "Mais fácil em trecho curto",
            "description": "Visita a pé pelo centro histórico. A estimativa considera um trecho curto; calçamento, degraus e ladeiras podem aumentar o esforço conforme o circuito escolhido."
          },
          "lat": -18.24409,
          "lon": -43.60065,
          "locationAccuracy": "city-center",
          "days": "2–3 h",
          "relevanceSource": "agency",
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "indeterminado"
          },
          "kind": "atracao",
          "type": "historia"
        },
        {
          "name": "Casa da Glória e Passadiço da Glória",
          "description": "Conjunto de dois casarões históricos em lados opostos da Rua da Glória, ligados pelo Passadiço da Glória, uma das imagens mais reconhecíveis de Diamantina. Observar a casa e a passagem elevada compõe uma única parada a pé.\n\nDa rua, observe a ligação entre os edifícios e a arquitetura do antigo conjunto religioso e educacional. Hoje o local abriga atividades do Instituto Casa da Glória, ligado à UFMG. Reserve cerca de 20 minutos para a parte externa; consulte a instituição antes de planejar uma visita aos espaços internos ou atravessar o passadiço.",
          "agencyRationale": "O conjunto e seu passadiço são um marco visual do centro histórico e uma parada frequente nos roteiros a pé de Diamantina.",
          "visitType": "Arquitetura / visita externa; interior conforme funcionamento",
          "estimatedDuration": "20 min (exterior)",
          "publishedDuration": "—",
          "oneYearOld": "A confirmar",
          "access": {
            "level": "moderate",
            "label": "Atenção ao percurso",
            "description": "Visita externa ao conjunto na Rua da Glória, em área de calçamento e desníveis. A visita ao interior e ao passadiço depende do funcionamento da instituição; confirme entrada e circulação interna."
          },
          "lat": -18.241529,
          "lon": -43.601612,
          "locationAccuracy": "exact",
          "days": "20 min (exterior)",
          "relevanceSource": "agency",
          "catalogName": "Casa da Glória e Passadiço da Glória",
          "mapQuery": "Casa da Glória Diamantina MG",
          "visitLinks": [
            {
              "label": "Passadiço no Google Maps",
              "url": "https://www.google.com/maps/search/?api=1&query=Passadi%C3%A7o%20da%20Gl%C3%B3ria%20Diamantina%20MG"
            },
            {
              "label": "Casa da Glória · UFMG",
              "url": "https://igc.ufmg.br/casa-da-gloria/"
            },
            {
              "label": "Casa da Glória · Prefeitura",
              "url": "https://www.diamantina.mg.gov.br/portal/turismo/0/9/724/casa-da-gloria"
            }
          ],
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "indeterminado"
          },
          "kind": "atracao",
          "type": "historia"
        },
        {
          "name": "Casa de Chica da Silva",
          "description": "Residência associada a Chica da Silva, personagem central da sociedade diamantífera do século XVIII. A visita ajuda a compreender mineração, escravidão, mobilidade social e costumes da época. Acrescenta história humana e social ao roteiro, além da arquitetura colonial.",
          "agencyRationale": "Acrescenta história humana e social ao roteiro, além da arquitetura colonial.",
          "visitType": "Museu / interna",
          "estimatedDuration": "1 h",
          "publishedDuration": "—",
          "oneYearOld": "—",
          "access": {
            "level": "moderate",
            "label": "Atenção ao entorno",
            "description": "O trajeto pelo centro histórico pode envolver calçamento e desníveis. Confirme entrada, degraus e circulação interna deste imóvel; o cadastro não detalha esses acessos."
          },
          "lat": -18.2467273,
          "lon": -43.5967904,
          "locationAccuracy": "exact",
          "days": "1 h",
          "relevanceSource": "agency",
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "indeterminado"
          },
          "kind": "atracao",
          "type": "historia"
        },
        {
          "name": "Igreja de São Francisco de Assis",
          "description": "Igreja setecentista ligada à elite local e à arte sacra de Diamantina. É uma boa leitura da religiosidade e da organização social do período minerador. Integra os circuitos guiados de arte sacra do centro histórico.",
          "agencyRationale": "Integra os circuitos guiados de arte sacra do centro histórico.",
          "visitType": "Igreja / interna",
          "estimatedDuration": "30 min",
          "publishedDuration": "—",
          "oneYearOld": "—",
          "access": {
            "level": "easy",
            "label": "Mais fácil na visita",
            "description": "A estimativa considera uma visita curta ao templo. Confirme degraus, entrada e circulação interna, além de calçamento e ladeiras no trajeto; o cadastro não comprova um percurso sem barreiras."
          },
          "lat": -18.2438742,
          "lon": -43.5985499,
          "locationAccuracy": "exact",
          "days": "30 min",
          "relevanceSource": "agency",
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "indeterminado"
          },
          "kind": "atracao",
          "type": "historia"
        },
        {
          "name": "Rua da Quitanda",
          "description": "Rua histórica de casario colonial, cenário tradicional da Vesperata; o Beco da Tecla fica nas proximidades. É o espaço onde patrimônio arquitetônico e vida cultural contemporânea se encontram.",
          "agencyRationale": "É o espaço onde patrimônio arquitetônico e vida cultural contemporânea se encontram.",
          "visitType": "Caminhada / externa",
          "estimatedDuration": "30 min",
          "publishedDuration": "—",
          "oneYearOld": "—",
          "access": {
            "level": "moderate",
            "label": "Atenção ao calçamento",
            "description": "Caminhada pela rua do centro histórico, com calçamento e desníveis no percurso. Confirme o trecho e planeje pausas."
          },
          "lat": -18.2452602,
          "lon": -43.5967276,
          "locationAccuracy": "street-center",
          "days": "30 min",
          "relevanceSource": "agency",
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "indeterminado"
          },
          "kind": "atracao",
          "type": "historia"
        },
        {
          "name": "Vesperata",
          "description": "Concerto em que músicos se apresentam das sacadas dos casarões enquanto maestros e público ocupam a rua. Não é apenas um show: utiliza a própria arquitetura colonial como palco. É uma das experiências culturais mais características e procuradas de Diamantina.",
          "agencyRationale": "É uma das experiências culturais mais características e procuradas de Diamantina.",
          "visitType": "Evento",
          "estimatedDuration": "2–3 h",
          "publishedDuration": "—",
          "oneYearOld": "—",
          "access": {
            "level": "easy",
            "label": "Mais fácil no evento",
            "description": "Evento no centro histórico. A estimativa se refere à permanência no evento; confirme o local, o percurso pelo calçamento, os degraus e as condições de acomodação."
          },
          "schedule": "09/10/2026 · 20h · Rua da Quitanda",
          "scheduleNote": "Sessão extra divulgada em setembro; confira ingresso e eventuais atualizações.",
          "eventUrl": "https://bileto.sympla.com.br/event/117032?share_id=1-copiarlink",
          "lat": -18.2452602,
          "lon": -43.5967276,
          "locationAccuracy": "street-center",
          "days": "2–3 h",
          "relevanceSource": "agency",
          "mapQuery": "Rua da Quitanda, Centro Histórico, Diamantina MG",
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "online",
            "url": "https://bileto.sympla.com.br/event/117032?share_id=1-copiarlink"
          },
          "kind": "atracao",
          "type": "historia",
          "initialDate": "2026-10-09",
          "selectedByDefault": true,
          "required": true
        },
        {
          "name": "Caminho dos Escravos",
          "lat": -18.2165745,
          "lon": -43.5955235,
          "locationAccuracy": "trail-point",
          "catalogName": "Caminho dos Escravos",
          "description": "Trecho histórico associado às rotas coloniais e à mineração na Serra dos Cristais.",
          "agencyRationale": "Parada explicitamente incluída em roteiro comercializado por agência de turismo.",
          "visitType": "Histórica / trilha",
          "estimatedDuration": "—",
          "publishedDuration": "—",
          "oneYearOld": "A confirmar",
          "access": {
            "level": "unknown",
            "label": "A confirmar",
            "description": "Visita histórica com trilha. O cadastro não detalha o trecho, a distância ou o desnível; confirme o percurso."
          },
          "days": "—",
          "relevanceSource": "agency",
          "mapQuery": "Caminho dos Escravos, acesso BR-367 Rua Salto da Divisa, Diamantina MG",
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "indeterminado"
          },
          "kind": "atracao",
          "type": "historia"
        },
        {
          "name": "Casa do Muxarabiê",
          "lat": -18.245215,
          "lon": -43.596794,
          "locationAccuracy": "exact",
          "catalogName": "Casa do Muxarabiê",
          "description": "Casarão histórico de Diamantina conhecido pelo muxarabiê.",
          "agencyRationale": "Parada explicitamente incluída em roteiro comercializado por agência de turismo.",
          "visitType": "Cultural",
          "estimatedDuration": "—",
          "publishedDuration": "—",
          "oneYearOld": "A confirmar",
          "access": {
            "level": "moderate",
            "label": "Atenção ao entorno",
            "description": "O trajeto pelo centro histórico pode envolver calçamento e desníveis. Confirme entrada, degraus e circulação interna deste imóvel; o cadastro não detalha esses acessos."
          },
          "days": "—",
          "relevanceSource": "agency",
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "indeterminado"
          },
          "kind": "atracao",
          "type": "historia"
        },
        {
          "name": "Catedral Metropolitana de Santo Antônio",
          "lat": -18.244904,
          "lon": -43.597327,
          "locationAccuracy": "exact",
          "catalogName": "Catedral Metropolitana de Santo Antônio",
          "description": "Principal templo católico do centro de Diamantina.",
          "agencyRationale": "Parada explicitamente incluída em roteiro comercializado por agência de turismo.",
          "visitType": "Religiosa",
          "estimatedDuration": "—",
          "publishedDuration": "—",
          "oneYearOld": "A confirmar",
          "access": {
            "level": "moderate",
            "label": "Atenção ao entorno",
            "description": "O trajeto pelo centro histórico pode envolver calçamento e desníveis. Confirme entrada, degraus e circulação interna deste imóvel; o cadastro não detalha esses acessos."
          },
          "days": "—",
          "relevanceSource": "agency",
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "indeterminado"
          },
          "kind": "atracao",
          "type": "historia"
        },
        {
          "name": "Igreja Nossa Senhora do Carmo",
          "lat": -18.245866,
          "lon": -43.596125,
          "locationAccuracy": "exact",
          "catalogName": "Igreja Nossa Senhora do Carmo",
          "description": "Igreja histórica do antigo Arraial do Tijuco.",
          "agencyRationale": "Parada explicitamente incluída em roteiro comercializado por agência de turismo.",
          "visitType": "Religiosa",
          "estimatedDuration": "—",
          "publishedDuration": "—",
          "oneYearOld": "A confirmar",
          "access": {
            "level": "easy",
            "label": "Mais fácil na visita",
            "description": "A estimativa considera uma visita curta ao templo. Confirme degraus, entrada e circulação interna, além de calçamento e ladeiras no trajeto; o cadastro não comprova um percurso sem barreiras."
          },
          "days": "—",
          "relevanceSource": "agency",
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "indeterminado"
          },
          "kind": "atracao",
          "type": "historia"
        },
        {
          "name": "Garimpo Real",
          "lat": -18.24409,
          "lon": -43.60065,
          "locationAccuracy": "city-center",
          "catalogName": "Garimpo Real",
          "description": "Experiência de garimpo artesanal ligada à história dos diamantes, próximo ao aeroporto de Diamantina, conforme o portal turístico de Minas Gerais. O portal descreve práticas com bateias e peneiras e conversa com trabalhadores. Confirme funcionamento, agendamento e ponto de encontro com o responsável. A coordenada deste cadastro continua sendo uma referência genérica de Diamantina. Não foi comprovada equivalência com a opção Experiência de garimpo cadastrada em Curralinho/Extração.",
          "agencyRationale": "Parada explicitamente incluída em roteiro comercializado por agência de turismo.",
          "visitType": "Experiência / histórica",
          "estimatedDuration": "—",
          "publishedDuration": "—",
          "oneYearOld": "A confirmar",
          "access": {
            "level": "unknown",
            "label": "A confirmar",
            "description": "Experiência de garimpo com condições próprias de visita. Confirme forma de entrada, terreno e deslocamento com o responsável."
          },
          "days": "—",
          "relevanceSource": "agency",
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "indeterminado"
          },
          "mapQuery": "Garimpo Real Diamantina MG",
          "visitLinks": [
            {
              "label": "Garimpo Real · Turismo de Minas Gerais",
              "url": "https://www.minasgerais.com.br/pt/atracoes/diamantina/garimpo-real"
            }
          ],
          "kind": "atracao",
          "type": "historia"
        },
        {
          "name": "Igreja das Mercês",
          "lat": -18.246666,
          "lon": -43.5983666,
          "locationAccuracy": "exact",
          "catalogName": "Igreja das Mercês",
          "description": "Templo histórico ligado à Irmandade de Nossa Senhora das Mercês.",
          "agencyRationale": "Parada explicitamente incluída em roteiro comercializado por agência de turismo.",
          "visitType": "Religiosa",
          "estimatedDuration": "—",
          "publishedDuration": "—",
          "oneYearOld": "A confirmar",
          "access": {
            "level": "easy",
            "label": "Mais fácil na visita",
            "description": "A estimativa considera uma visita curta ao templo. Confirme degraus, entrada e circulação interna, além de calçamento e ladeiras no trajeto; o cadastro não comprova um percurso sem barreiras."
          },
          "days": "—",
          "relevanceSource": "agency",
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "indeterminado"
          },
          "kind": "atracao",
          "type": "historia"
        },
        {
          "name": "Igreja Nossa Senhora do Rosário",
          "lat": -18.245725,
          "lon": -43.5948,
          "locationAccuracy": "exact",
          "catalogName": "Igreja Nossa Senhora do Rosário",
          "description": "Igreja histórica ligada à irmandade de negros.",
          "agencyRationale": "Parada explicitamente incluída em roteiro comercializado por agência de turismo.",
          "visitType": "Religiosa",
          "estimatedDuration": "—",
          "publishedDuration": "—",
          "oneYearOld": "A confirmar",
          "access": {
            "level": "easy",
            "label": "Mais fácil na visita",
            "description": "A estimativa considera uma visita curta ao templo. Confirme degraus, entrada e circulação interna, além de calçamento e ladeiras no trajeto; o cadastro não comprova um percurso sem barreiras."
          },
          "days": "—",
          "relevanceSource": "agency",
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "indeterminado"
          },
          "kind": "atracao",
          "type": "historia"
        },
        {
          "name": "Prédio da Prefeitura / Antiga Casa da Intendência",
          "lat": -18.244451,
          "lon": -43.597648,
          "locationAccuracy": "exact",
          "catalogName": "Prédio da Prefeitura / Antiga Casa da Intendência",
          "description": "Edifício associado à administração histórica do Distrito Diamantino.",
          "agencyRationale": "Parada explicitamente incluída em roteiro comercializado por agência de turismo.",
          "visitType": "Histórica",
          "estimatedDuration": "—",
          "publishedDuration": "—",
          "oneYearOld": "A confirmar",
          "access": {
            "level": "moderate",
            "label": "Atenção ao entorno",
            "description": "O trajeto pelo centro histórico pode envolver calçamento e desníveis. Confirme entrada, degraus e circulação interna deste imóvel; o cadastro não detalha esses acessos."
          },
          "days": "—",
          "relevanceSource": "agency",
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "indeterminado"
          },
          "kind": "atracao",
          "type": "historia"
        },
        {
          "name": "Cruzeiro da Serra",
          "lat": -18.2394976724,
          "lon": -43.5889402055,
          "locationAccuracy": "exact",
          "catalogName": "Cruzeiro da Serra",
          "description": "Ponto panorâmico na Serra dos Cristais.",
          "agencyRationale": "Parada explicitamente incluída em roteiro comercializado por agência de turismo.",
          "visitType": "Mirante",
          "estimatedDuration": "—",
          "publishedDuration": "—",
          "oneYearOld": "A confirmar",
          "access": {
            "level": "unknown",
            "label": "A confirmar",
            "description": "Visita a um mirante. Confirme estrada, extensão da caminhada, terreno e desnível."
          },
          "days": "—",
          "relevanceSource": "agency",
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "indeterminado"
          },
          "kind": "atracao",
          "type": "natureza"
        },
        {
          "name": "Cachoeira da Sentinela",
          "lat": -18.18361,
          "lon": -43.61832,
          "locationAccuracy": "exact",
          "catalogName": "Cachoeira da Sentinela",
          "description": "Cachoeira incluída em roteiros turísticos de Diamantina.",
          "agencyRationale": "Parada explicitamente incluída em roteiro comercializado por agência de turismo.",
          "visitType": "Natureza",
          "estimatedDuration": "—",
          "publishedDuration": "—",
          "oneYearOld": "A confirmar",
          "access": {
            "level": "unknown",
            "label": "A confirmar",
            "description": "O cadastro não detalha estrada, caminhada nem desnível até a cachoeira. Confirme o percurso e as condições da água."
          },
          "days": "—",
          "relevanceSource": "agency",
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "indeterminado"
          },
          "kind": "atracao",
          "type": "natureza"
        },
        {
          "name": "Gruta do Salitre · Extração / Curralinho",
          "description": "Localidade: Extração / Curralinho, município de Diamantina. Formação rochosa de grande impacto próxima a Diamantina, com paredões e cavidades associados à paisagem mineral da região. A visita ajuda a perceber que a história diamantífera nasceu de uma geologia muito particular. Roteiros organizados de ecoturismo de Diamantina a combinam com city tour e Biribiri para ligar a história da mineração à paisagem que a produziu.",
          "agencyRationale": "Operadoras de ecoturismo de Diamantina a combinam com city tour e Biribiri para ligar a história da mineração à paisagem que a produziu.",
          "visitType": "Visita turística",
          "estimatedDuration": "1 h",
          "publishedDuration": "—",
          "oneYearOld": "—",
          "access": {
            "level": "unknown",
            "label": "A confirmar",
            "description": "Visita à gruta em Extração / Curralinho. Confirme percurso de entrada, terreno e condições da visita; distância e desnível não estão documentados no cadastro."
          },
          "lat": -18.27952,
          "lon": -43.53615,
          "locationAccuracy": "exact",
          "days": "1 h",
          "relevanceSource": "agency",
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "agendamento",
            "url": "https://www.diamantina.mg.gov.br/portal/turismo/0/9/738/gruta-do-salitre"
          },
          "locality": "Extração / Curralinho",
          "mapQuery": "Gruta do Salitre, Extração / Curralinho, Diamantina MG",
          "catalogName": "Gruta do Salitre · Extração / Curralinho",
          "kind": "atracao",
          "type": "natureza"
        },
        {
          "name": "Experiência de garimpo · Extração / Curralinho",
          "description": "Localidade: Extração / Curralinho, município de Diamantina. Atividade interpretativa ligada às técnicas e à memória da procura por ouro e diamantes na região. O interesse é compreender na prática o trabalho que deu origem aos povoados e à economia local. Aparece em pacotes porque transforma a narrativa do ciclo dos diamantes em experiência participativa, em vez de apenas museológica.",
          "agencyRationale": "Aparece em pacotes porque transforma a narrativa do ciclo dos diamantes em experiência participativa, em vez de apenas museológica.",
          "visitType": "Visita turística",
          "estimatedDuration": "1 h",
          "publishedDuration": "—",
          "oneYearOld": "—",
          "access": {
            "level": "unknown",
            "label": "A confirmar",
            "description": "Experiência de garimpo na localidade de Extração / Curralinho. Confirme o local da atividade, terreno e forma de acesso com o responsável."
          },
          "lat": -18.31002,
          "lon": -43.523591,
          "locationAccuracy": "city-center",
          "days": "1 h",
          "relevanceSource": "agency",
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "indeterminado"
          },
          "locality": "Extração / Curralinho",
          "mapQuery": "Experiência de garimpo, Extração / Curralinho, Diamantina MG",
          "catalogName": "Experiência de garimpo · Extração / Curralinho",
          "kind": "atracao",
          "type": "historia"
        },
        {
          "name": "Vila de Biribiri · Biribiri",
          "description": "Localidade: Biribiri, município de Diamantina. Vila operária do século XIX criada em torno de uma fábrica têxtil, com casas, igreja e traçado preservados. É uma rara oportunidade de ver patrimônio industrial dentro de uma paisagem natural. Biribiri acrescenta a industrialização do século XIX à viagem: depois de mineração colonial, o visitante vê uma comunidade organizada em torno de uma fábrica têxtil. A proximidade de Diamantina facilita um bate-volta.",
          "agencyRationale": "Biribiri acrescenta a industrialização do século XIX à viagem: depois de mineração colonial, o visitante vê uma comunidade organizada em torno de uma fábrica têxtil. A proximidade de Diamantina facilita um bate-volta.",
          "visitType": "Vila histórica / caminhada",
          "estimatedDuration": "2 h",
          "publishedDuration": "—",
          "oneYearOld": "—",
          "access": {
            "level": "easy",
            "label": "Mais fácil na vila",
            "description": "Visita à vila histórica com caminhada curta como estimativa de planejamento. Confirme estrada, calçamento e degraus do trecho; os acessos às cachoeiras e trilhas são separados."
          },
          "lat": -18.14464,
          "lon": -43.61966,
          "locationAccuracy": "city-center",
          "days": "2 h",
          "relevanceSource": "agency",
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "indeterminado"
          },
          "locality": "Biribiri",
          "mapQuery": "Vila de Biribiri, Biribiri, Diamantina MG",
          "catalogName": "Vila de Biribiri · Biribiri",
          "kind": "atracao",
          "type": "historia"
        },
        {
          "name": "Cachoeiras · Biribiri",
          "description": "Localidade: Biribiri, município de Diamantina. Poços e quedas d'água dentro do Parque Estadual do Biribiri. Depois de um city tour de ruas, igrejas e museus, oferecem uma mudança real de ritmo e contato com a paisagem do Espinhaço. Roteiros organizados de Vesperata combinam explicitamente city tour histórico-cultural com trilhas e cachoeiras em Biribiri, equilibrando patrimônio e natureza dentro da mesma estadia.",
          "agencyRationale": "Operadoras de Vesperata combinam explicitamente city tour histórico-cultural com trilhas e cachoeiras em Biribiri, equilibrando patrimônio e natureza dentro da mesma estadia.",
          "visitType": "Natureza / banho",
          "estimatedDuration": "meio dia",
          "publishedDuration": "—",
          "oneYearOld": "—",
          "access": {
            "level": "moderate",
            "label": "Variável",
            "description": "As cachoeiras têm acessos diferentes da visita à vila. Confirme estrada, caminhada, terreno e condições da água para a cachoeira escolhida."
          },
          "lat": -18.14464,
          "lon": -43.61966,
          "locationAccuracy": "city-center",
          "days": "meio dia",
          "relevanceSource": "agency",
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "indeterminado"
          },
          "locality": "Biribiri",
          "mapQuery": "Cachoeiras, Biribiri, Diamantina MG",
          "catalogName": "Cachoeiras · Biribiri",
          "kind": "atracao",
          "type": "natureza"
        },
        {
          "name": "Trilhas do Parque Estadual do Biribiri · Biribiri",
          "description": "Localidade: Biribiri, município de Diamantina. Caminhos pelo cerrado e campos rupestres levam a cursos d'água, mirantes e áreas naturais em torno da antiga vila. São incluídas para transformar Biribiri em experiência ativa, e não apenas visita fotográfica à vila histórica.",
          "agencyRationale": "São incluídas para transformar Biribiri em experiência ativa, e não apenas visita fotográfica à vila histórica.",
          "visitType": "Visita turística",
          "estimatedDuration": "1 h",
          "publishedDuration": "—",
          "oneYearOld": "—",
          "access": {
            "level": "moderate",
            "label": "Variável",
            "description": "O esforço depende da trilha escolhida. Confirme acesso ao parque, distância, terreno e desnível antes de sair; a visita à vila não caracteriza o percurso de trilha."
          },
          "lat": -18.14464,
          "lon": -43.61966,
          "locationAccuracy": "city-center",
          "days": "1 h",
          "relevanceSource": "agency",
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "indeterminado"
          },
          "locality": "Biribiri",
          "mapQuery": "Trilhas do Parque Estadual do Biribiri, Biribiri, Diamantina MG",
          "catalogName": "Trilhas do Parque Estadual do Biribiri · Biribiri",
          "kind": "atracao",
          "type": "natureza"
        },
        {
          "name": "Núcleo histórico e artesanato de Mendanha · Mendanha",
          "lat": -18.11224,
          "lon": -43.52785,
          "locationAccuracy": "city-center",
          "catalogName": "Núcleo histórico e artesanato de Mendanha · Mendanha",
          "description": "Localidade: Mendanha, município de Diamantina. Parada cultural no distrito de Mendanha incluída em roteiro de agência.",
          "agencyRationale": "Parada explicitamente incluída em roteiro comercializado por agência de turismo.",
          "visitType": "Cultural",
          "estimatedDuration": "—",
          "publishedDuration": "—",
          "oneYearOld": "A confirmar",
          "access": {
            "level": "unknown",
            "label": "A confirmar",
            "description": "Visita ao núcleo da localidade. Estrada, percurso a pé e desníveis não estão detalhados no cadastro; confirme as condições locais."
          },
          "days": "—",
          "relevanceSource": "agency",
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "indeterminado"
          },
          "locality": "Mendanha",
          "mapQuery": "Núcleo histórico e artesanato de Mendanha, Mendanha, Diamantina MG",
          "kind": "atracao",
          "type": "historia"
        },
        {
          "name": "Povoado histórico do Vau · Vau",
          "lat": -18.4167,
          "lon": -43.5333,
          "locationAccuracy": "city-center",
          "catalogName": "Povoado histórico do Vau · Vau",
          "description": "Localidade: Vau, município de Diamantina. Antigo ponto de travessia do Rio Jequitinhonha no Caminho dos Diamantes.",
          "agencyRationale": "Parada explicitamente incluída em roteiro comercializado por agência de turismo.",
          "visitType": "Histórica",
          "estimatedDuration": "—",
          "publishedDuration": "—",
          "oneYearOld": "A confirmar",
          "access": {
            "level": "unknown",
            "label": "A confirmar",
            "description": "Visita ao núcleo da localidade. Estrada, percurso a pé e desníveis não estão detalhados no cadastro; confirme as condições locais."
          },
          "days": "—",
          "relevanceSource": "agency",
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "indeterminado"
          },
          "locality": "Vau",
          "mapQuery": "Povoado histórico do Vau, Vau, Diamantina MG",
          "kind": "atracao",
          "type": "historia"
        }
      ],
      "guideBriefing": "Diamantina, antigo Arraial do Tijuco, desenvolveu-se com a descoberta e o controle dos diamantes no século XVIII. A Coroa portuguesa criou uma administração especialmente rígida para a região, deixando marcas na organização social e urbana. O centro histórico, a memória de Chica da Silva, a tradição musical e a trajetória de Juscelino Kubitschek revelam diferentes períodos de uma cidade cuja identidade ultrapassou o ciclo diamantífero.\n\nExtração / Curralinho: Curralinho, hoje Extração, é um distrito de Diamantina inserido na antiga região diamantífera. Sua história está ligada ao garimpo e aos pequenos núcleos formados ao redor das áreas de extração. A paisagem rochosa e a Gruta do Salitre ajudam a relacionar geologia e mineração com a ocupação humana do entorno de Diamantina.\n\nBiribiri: Biribiri representa a industrialização mineira do século XIX. A vila surgiu em torno da fábrica de tecidos criada em 1876 por iniciativa da família do bispo de Diamantina, aproveitando a força hidráulica dos cursos d’água. Casas, capela e estruturas fabris formavam uma comunidade organizada em torno do trabalho têxtil. Hoje a vila está inserida no Parque Estadual do Biribiri, unindo patrimônio industrial e paisagem do Espinhaço.\n\nMendanha: Distrito histórico visitado por agência em roteiro de Diamantina, com artesanato e ligação aos antigos caminhos regionais.\n\nVau: Povoado histórico no Caminho dos Diamantes, usado como parada em roteiro comercial entre Diamantina e Serro.",
      "profile": "História · cultura · música",
      "relevanceSource": "agency",
      "ageClassification": {
        "status": "indeterminada"
      },
      "ticket": {
        "status": "por_passeio"
      },
      "access": {
        "level": "moderate",
        "label": "Atenção a ladeiras",
        "description": "O centro histórico tem calçamento e desníveis. Confirme o percurso urbano e os acessos de cada museu; cachoeiras, trilhas e distritos têm condições próprias."
      },
      "municipality": "Diamantina",
      "selectedByDefault": true,
      "availableDates": [
        "2026-10-09"
      ]
    },
    {
      "id": "peruacu",
      "name": "Peruaçu",
      "lat": -15.08943,
      "lon": -44.2287,
      "kind": "regiao",
      "canHostStay": true,
      "type": "natureza",
      "days": "1–2 dias + grande desvio",
      "sights": [
        "Cânion",
        "Cavernas",
        "Pinturas rupestres"
      ],
      "kid": "Visitas podem exigir reserva, guia e caminhada; avaliar como extensão separada, não como parada simples com bebês.",
      "url": "https://whc.unesco.org/en/list/1747",
      "guideBriefing": "O vale do Peruaçu reúne uma história humana muito anterior às cidades coloniais do roteiro. Cavernas, abrigos e paredões guardam pinturas rupestres e vestígios de ocupações indígenas de milhares de anos, enquanto o relevo cárstico criou grandes cavernas e cânions. O conjunto permite observar, no mesmo território, arqueologia, geologia e a longa ocupação humana do norte de Minas.",
      "relevanceSource": "guide",
      "ageClassification": {
        "status": "indeterminada"
      },
      "ticket": {
        "status": "indeterminado"
      },
      "stayDays": [
        1,
        2
      ],
      "access": {
        "level": "hard",
        "label": "Exigente",
        "description": "Cavernas e trilhas podem ter escadas e terreno irregular. Confirme o percurso guiado, a distância e as restrições antes de incluir a visita."
      },
      "profile": "Cavernas · cânion · pinturas rupestres",
      "attractions": []
    },
    {
      "id": "delfinopolis",
      "name": "Delfinópolis · acesso à Canastra",
      "lat": -20.34475,
      "lon": -46.85464,
      "kind": "alerta",
      "canHostStay": false,
      "type": "natureza",
      "days": "Travessia variável",
      "sights": [
        "Balsa com Cássia (Rio Grande)",
        "Cachoeiras da região"
      ],
      "kid": "Com bebês, confirme operação, filas e embarque antes de escolher esse caminho. Não confundir essa travessia com o acesso urbano a Capitólio.",
      "url": "https://www.google.com/maps/search/?api=1&query=Balsa+Cassia+Delfinopolis",
      "guideBriefing": "Delfinópolis ocupa a borda sudoeste da Serra da Canastra, entre serras, rios e antigas áreas rurais. A construção da represa de Peixoto, hoje Mascarenhas de Moraes, alterou acessos e paisagens e tornou a travessia por balsa uma característica local. A região funciona como outra porta de entrada para a Canastra e para seus vales e cachoeiras.",
      "relevanceSource": "guide",
      "ageClassification": {
        "status": "indeterminada"
      },
      "ticket": {
        "status": "indeterminado"
      },
      "stayDays": [
        0,
        1
      ],
      "access": {
        "level": "moderate",
        "label": "Variável",
        "description": "Acesso à região pode envolver balsa; os passeios às cachoeiras têm condições próprias. Confirme operação, embarque e caminhada para o roteiro escolhido."
      },
      "profile": "Acesso à Canastra · travessia do Rio Grande",
      "attractions": []
    },
    {
      "id": "hotel-estilo-de-minas",
      "name": "Hotel Estilo de Minas",
      "lat": -18.2394261,
      "lon": -43.6233388,
      "locationAccuracy": "exact",
      "locationSourceUrl": "https://www.google.com/maps/place/Estilo+de+Minas/data=!4m2!3m1!1s0xaeb9cae1c77e37:0xdc5be8aaa69d2f20",
      "locationNote": "Ponto do estabelecimento nomeado no Google Maps, conferido pelo endereço e site oficial; não é o centro do mapa incorporado.",
      "kind": "hospedagem",
      "canHostStay": true,
      "type": "natureza",
      "days": "Pernoite",
      "sights": [],
      "kid": "",
      "url": "https://hotelestilodeminas.com.br/",
      "bookingUrl": "https://www.booking.com/Share-StFWLx6",
      "profile": "Hospedagem em Diamantina",
      "municipality": "Diamantina",
      "city": "Diamantina",
      "address": "Av. João Antunes de Oliveira, 100A, Cazuza, Diamantina/MG, CEP 39100-000",
      "phone": "+55 (38) 98046-6710",
      "email": "hotelestilodeminas@gmail.com",
      "mapQuery": "Hotel Estilo de Minas Av. João Antunes de Oliveira 100A Diamantina MG",
      "guideBriefing": "Hospedagem em Diamantina indicada pelo proprietário pelo link do Booking. Endereço e contato conferidos na página oficial. O site oficial informa interdição temporária da piscina e do quiosque-bar; consultar o hotel antes de contar com essas instalações. O link compartilhado é um anúncio, não uma confirmação de reserva.",
      "attractions": [],
      "ageClassification": {
        "status": "indeterminada"
      },
      "ticket": {
        "status": "indeterminado"
      },
      "initialDate": "2026-10-08",
      "selectedByDefault": true
    },
    {
      "id": "cordisburgo",
      "name": "Cordisburgo",
      "lat": -19.125834,
      "lon": -44.320278,
      "kind": "cidade",
      "canHostStay": true,
      "type": "historia",
      "days": "½–1 dia",
      "sights": [
        "Gruta do Maquiné",
        "Museu Casa Guimarães Rosa"
      ],
      "kid": "Gruta exige caminhada monitorada; confirme restrições e acessos. O museu é alternativa mais leve.",
      "url": "https://www.google.com/maps/search/?api=1&query=Cordisburgo+MG",
      "guideBriefing": "Cordisburgo reúne dois capítulos importantes da história cultural e científica de Minas. Na Gruta do Maquiné, Peter Wilhelm Lund realizou pesquisas a partir da década de 1830 que ajudaram a fundar a paleontologia brasileira. Em 1908 nasceu na cidade João Guimarães Rosa, cuja literatura transformou paisagens, fala e personagens do sertão mineiro em matéria literária. A visita permite relacionar a história natural profunda do território com a forma como esse mesmo sertão foi observado e narrado no século XX.",
      "profile": "Literatura · cavernas · ciência",
      "attractions": [
        {
          "name": "Gruta do Maquiné",
          "description": "Grande caverna calcária com salões, estalactites e estalagmites. Foi explorada cientificamente por Peter Lund no século XIX e está ligada ao nascimento da paleontologia brasileira. Roteiros organizados que ligam Diamantina a Belo Horizonte aproveitam Cordisburgo para transformar um dia de deslocamento em dia de visita. Maquiné acrescenta geologia, ciência e uma atração de grande escala sem exigir outro destino distante.",
          "agencyRationale": "Operadoras que ligam Diamantina a Belo Horizonte aproveitam Cordisburgo para transformar um dia de deslocamento em dia de visita. Maquiné acrescenta geologia, ciência e uma atração de grande escala sem exigir outro destino distante.",
          "visitType": "Gruta / visita monitorada",
          "estimatedDuration": "1h30",
          "publishedDuration": "60 min",
          "oneYearOld": "Não — idade mínima 4 anos",
          "access": {
            "level": "unknown",
            "label": "Caminhada em gruta",
            "description": "A visita monitorada percorre a gruta a pé. Confirme extensão do trajeto, desníveis, pausas e condições para o grupo; o cadastro não informa um nível de esforço físico."
          },
          "lat": -19.1251,
          "lon": -44.35217,
          "locationAccuracy": "exact",
          "days": "1h30",
          "relevanceSource": "agency",
          "ageClassification": {
            "status": "idade_minima",
            "sourceUrl": "https://ingressos.urbanesparques.com.br/unit/4212/gruta-do-maquine/",
            "note": "Visita à gruta exige idade mínima de 4 anos.",
            "minimumAge": 4
          },
          "ticket": {
            "status": "online",
            "url": "https://ingressos.urbanesparques.com.br/unit/4212/gruta-do-maquine/",
            "note": "Compra on-line com pelo menos 48 h de antecedência, segundo a bilheteria oficial."
          },
          "kind": "atracao",
          "type": "natureza",
          "selectedByDefault": true,
          "required": false
        },
        {
          "name": "Museu Casa Guimarães Rosa",
          "description": "Casa natal de João Guimarães Rosa, preservada com objetos, documentos e referências ao universo sertanejo que inspirou sua literatura. Costuma ser combinada com Maquiné: em uma mesma parada a agência entrega natureza e literatura. Guimarães Rosa também conecta a paisagem real do sertão mineiro ao Brasil retratado em sua obra.",
          "agencyRationale": "Costuma ser combinada com Maquiné: em uma mesma parada a agência entrega natureza e literatura. Guimarães Rosa também conecta a paisagem real do sertão mineiro ao Brasil retratado em sua obra.",
          "visitType": "Museu / interna",
          "estimatedDuration": "1h30–2 h",
          "publishedDuration": "1–2 h",
          "oneYearOld": "Sim",
          "access": {
            "level": "unknown",
            "label": "Rampa móvel disponível",
            "description": "O museu registra rampa móvel e atividades para a terceira idade. Confirme entrada e circulação interna; esses recursos não estabelecem o esforço físico de toda a visita."
          },
          "lat": -19.122867,
          "lon": -44.322836,
          "locationAccuracy": "exact",
          "days": "1h30–2 h",
          "relevanceSource": "agency",
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "gratuito",
            "url": "https://www.mg.gov.br/servico/visitar-o-museu-casa-guimaraes-rosa"
          },
          "kind": "atracao",
          "type": "historia",
          "selectedByDefault": true,
          "required": false
        },
        {
          "name": "Portal Grande Sertão",
          "lat": -19.117163,
          "lon": -44.322558,
          "locationAccuracy": "exact",
          "catalogName": "Portal Grande Sertão",
          "description": "Espaço cultural dedicado ao universo de Guimarães Rosa e ao sertão mineiro.",
          "agencyRationale": "Parada explicitamente incluída em roteiro comercializado por agência de turismo.",
          "visitType": "Cultural",
          "estimatedDuration": "—",
          "publishedDuration": "—",
          "oneYearOld": "A confirmar",
          "access": {
            "level": "unknown",
            "label": "A confirmar",
            "description": "As condições de entrada, circulação e desníveis não estão documentadas para esta atração. Confirme o percurso com o responsável pela visita."
          },
          "days": "—",
          "relevanceSource": "agency",
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "indeterminado"
          },
          "kind": "atracao",
          "type": "historia",
          "selectedByDefault": true,
          "required": false
        },
        {
          "name": "Casa Elefante",
          "lat": -19.127964,
          "lon": -44.322672,
          "locationAccuracy": "exact",
          "catalogName": "Casa Elefante",
          "description": "Construção escultórica incluída em roteiro cultural de agência em Cordisburgo.",
          "agencyRationale": "Parada explicitamente incluída em roteiro comercializado por agência de turismo.",
          "visitType": "Cultural",
          "estimatedDuration": "—",
          "publishedDuration": "—",
          "oneYearOld": "A confirmar",
          "access": {
            "level": "unknown",
            "label": "A confirmar",
            "description": "As condições de entrada, circulação e desníveis não estão documentadas para esta atração. Confirme o percurso com o responsável pela visita."
          },
          "days": "—",
          "relevanceSource": "agency",
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "indeterminado"
          },
          "kind": "atracao",
          "type": "historia",
          "selectedByDefault": true,
          "required": false
        }
      ],
      "relevanceSource": "agency",
      "ageClassification": {
        "status": "indeterminada"
      },
      "ticket": {
        "status": "por_passeio"
      },
      "stayDays": [
        0.5,
        1
      ],
      "initialDate": "2026-10-10",
      "selectedByDefault": true
    },
    {
      "id": "belohorizonte",
      "name": "Belo Horizonte",
      "lat": -19.922732,
      "lon": -43.945095,
      "kind": "cidade",
      "canHostStay": true,
      "type": "historia",
      "days": "1–2 dias",
      "sights": [
        "Conjunto Moderno da Pampulha",
        "Praça da Liberdade",
        "Mercado Central",
        "Feira Hippie (Feira da Afonso Pena)"
      ],
      "kid": "A cidade tem deslocamentos urbanos; agrupe visitas por região e confira acessibilidade de cada atração.",
      "url": "https://www.google.com/maps/search/?api=1&query=Belo+Horizonte+MG",
      "guideBriefing": "Belo Horizonte foi inaugurada em 1897 como capital planejada para substituir Ouro Preto e simbolizar a modernização republicana de Minas. Seu traçado regular e seus edifícios públicos marcam essa ruptura com as cidades coloniais. No século XX, a Pampulha acrescentou outra camada: o modernismo de Oscar Niemeyer, Burle Marx e Portinari, ligado à administração de Juscelino Kubitschek.",
      "profile": "Arquitetura · cultura · gastronomia",
      "attractions": [
        {
          "name": "Conjunto Moderno da Pampulha",
          "description": "Conjunto de Oscar Niemeyer com paisagismo de Burle Marx e obras de Portinari. É um marco da arquitetura moderna brasileira e Patrimônio Mundial. Roteiros organizados incluem a Pampulha porque ela mostra outra Minas: modernista, urbana e ligada ao projeto político de JK. Depois do barroco, Niemeyer, Burle Marx e Portinari criam um contraste histórico deliberado.",
          "agencyRationale": "As agências incluem a Pampulha porque ela mostra outra Minas: modernista, urbana e ligada ao projeto político de JK. Depois do barroco, Niemeyer, Burle Marx e Portinari criam um contraste histórico deliberado.",
          "visitType": "Circuito / externa + internas",
          "estimatedDuration": "meio dia",
          "publishedDuration": "—",
          "oneYearOld": "—",
          "access": {
            "level": "unknown",
            "label": "A confirmar",
            "description": "Circuito com áreas externas e visitas internas. Confirme quais espaços serão visitados, os deslocamentos entre eles e os acessos de cada edifício; o esforço do conjunto não está documentado."
          },
          "lat": -19.851944,
          "lon": -43.973611,
          "locationAccuracy": "exact",
          "days": "meio dia",
          "relevanceSource": "agency",
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "indeterminado"
          },
          "kind": "atracao",
          "type": "historia"
        },
        {
          "name": "Praça da Liberdade",
          "description": "Antigo centro do poder estadual, cercado por palácios e edifícios de diferentes períodos que hoje integram um circuito cultural. Concentra museus e arquitetura em uma área caminhável.",
          "agencyRationale": "Concentra museus e arquitetura em uma área caminhável.",
          "visitType": "Caminhada + museus opcionais",
          "estimatedDuration": "1–3 h",
          "publishedDuration": "—",
          "oneYearOld": "—",
          "access": {
            "level": "easy",
            "label": "Mais fácil",
            "description": "Visita à praça com caminhada curta como estimativa de planejamento. Confirme o trajeto e eventuais degraus; os acessos internos dos espaços culturais do entorno são separados."
          },
          "lat": -19.932067,
          "lon": -43.938064,
          "locationAccuracy": "exact",
          "days": "1–3 h",
          "relevanceSource": "agency",
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "indeterminado"
          },
          "kind": "atracao",
          "type": "historia"
        },
        {
          "name": "Mercado Central",
          "description": "Mercado tradicional onde se encontram queijos, doces, cachaças, temperos e pratos mineiros. A atração é experimentar a cultura gastronômica, não apenas fazer compras. É uma parada de experiência, não apenas de compras: permite provar em um só lugar queijo, doce, cachaça, café e pratos mineiros. Para uma agência, entrega gastronomia com logística simples e tempo previsível.",
          "agencyRationale": "É uma parada de experiência, não apenas de compras: permite provar em um só lugar queijo, doce, cachaça, café e pratos mineiros. Para uma agência, entrega gastronomia com logística simples e tempo previsível.",
          "visitType": "Mercado / gastronomia",
          "estimatedDuration": "1h30–2 h",
          "publishedDuration": "—",
          "oneYearOld": "—",
          "access": {
            "level": "unknown",
            "label": "A confirmar",
            "description": "Visita ao mercado para gastronomia e compras. Confirme entrada, circulação e condições do percurso; o cadastro não documenta o esforço físico da visita."
          },
          "lat": -19.92258,
          "lon": -43.94302,
          "locationAccuracy": "exact",
          "days": "1h30–2 h",
          "relevanceSource": "agency",
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "indeterminado"
          },
          "kind": "atracao",
          "type": "gastronomia",
          "initialDate": "2026-10-11",
          "selectedByDefault": true,
          "required": false
        },
        {
          "name": "Feira Hippie (Feira da Afonso Pena)",
          "description": "Feira de artes, artesanato e produtores de variedades realizada aos domingos na Avenida Afonso Pena. Surgiu na Praça da Liberdade em 1969 e foi transferida para a avenida em 1991. Reúne artesanato, roupas, decoração e gastronomia, oferecendo um passeio pela produção artesanal e pela vida de rua de Belo Horizonte.",
          "agencyRationale": "Combina artesanato, compras e gastronomia em um passeio urbano na região central; inclusão solicitada pelo proprietário após a conversa com o guia.",
          "visitType": "Feira ao ar livre / artesanato / gastronomia",
          "estimatedDuration": "2–3 h",
          "publishedDuration": "—",
          "oneYearOld": "Planejar pausas e proteção de sol ou chuva; a circulação com carrinho depende do movimento entre as barracas.",
          "access": {
            "level": "moderate",
            "label": "Caminhada em feira urbana",
            "description": "Percurso variável ao ar livre entre barracas. Esforço moderado como estimativa de planejamento: a feira ocupa cerca de 1 km de avenida, mas não é necessário percorrer toda a extensão. Prever pausas e atenção ao movimento de pessoas."
          },
          "lat": -19.9215025,
          "lon": -43.9370989,
          "locationAccuracy": "exact",
          "locationSourceUrl": "https://www.google.com/maps/place/Feira+Hippie/data=!4m7!3m6!1s0xa69990a67d78c9:0x14154ccb050a86f8!8m2!3d-19.9215025!4d-43.9370989!16s%2Fg%2F11v3g7nvfh",
          "locationNote": "Marcador representativo da Feira Hippie na Avenida Afonso Pena, não do escritório da feira. A atividade ocupa um trecho da avenida, não um único edifício.",
          "mapQuery": "Feira Hippie Avenida Afonso Pena Belo Horizonte MG",
          "address": "Avenida Afonso Pena, Centro, Belo Horizonte/MG",
          "days": "2–3 h",
          "scheduleNote": "Aos domingos, das 8h às 14h, conforme horário habitual informado pela Prefeitura de Belo Horizonte. Visita prevista pela manhã; conferir eventuais alterações perto da data. As 2–3 h são estimativa de visita, não duração oficial.",
          "visitLinks": [
            {
              "label": "Informações da Prefeitura de BH",
              "url": "https://prefeitura.pbh.gov.br/noticias/barracas-de-alimentacao-da-feira-da-afonso-pena-tambem-vao-funcionar-24-horas-durante"
            },
            {
              "label": "Localização da feira",
              "url": "https://www.google.com/maps/search/?api=1&query=Feira+Hippie+Avenida+Afonso+Pena+Belo+Horizonte+MG"
            }
          ],
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "indeterminado",
            "note": "Compras e consumo nas barracas são pagos à parte."
          },
          "kind": "atracao",
          "type": "gastronomia",
          "initialDate": "2026-10-11",
          "selectedByDefault": true,
          "required": false
        }
      ],
      "relevanceSource": "agency",
      "ageClassification": {
        "status": "indeterminada"
      },
      "ticket": {
        "status": "por_passeio"
      },
      "stayDays": [
        1,
        2
      ],
      "initialDate": "2026-10-10",
      "selectedByDefault": true,
      "availableDates": [
        "2026-10-11",
        "2026-10-12"
      ]
    },
    {
      "id": "brumadinho",
      "name": "Brumadinho",
      "lat": -20.143611,
      "lon": -44.2,
      "kind": "cidade",
      "canHostStay": true,
      "type": "natureza",
      "days": "1 dia",
      "sights": [
        "Instituto Inhotim"
      ],
      "kid": "Inhotim é extenso; há transporte interno opcional, mas planeje pausas e confirme serviços para crianças.",
      "url": "https://www.google.com/maps/search/?api=1&query=Instituto+Inhotim",
      "guideBriefing": "Brumadinho se desenvolveu em uma região marcada por mineração, ferrovia e paisagens da transição entre Mata Atlântica e Cerrado. Desde 2006, Inhotim transformou o município também em referência internacional de arte contemporânea e paisagismo. A visita introduz uma leitura de Minas muito posterior ao barroco: grandes instalações artísticas dialogando diretamente com jardins e território.",
      "profile": "Arte · arquitetura · jardins",
      "attractions": [
        {
          "name": "Instituto Inhotim",
          "description": "Museu de arte contemporânea em escala monumental, com galerias e obras espalhadas por um jardim botânico. Muitas obras foram concebidas para o próprio espaço, fazendo paisagem e arte funcionarem juntas. Inhotim costuma receber um dia próprio porque é uma experiência de escala internacional e muito diferente das cidades históricas. A alternância entre galerias, obras ao ar livre e jardins evita que o circuito fique restrito a igrejas e casario colonial.",
          "agencyRationale": "Inhotim costuma receber um dia próprio porque é uma experiência de escala internacional e muito diferente das cidades históricas. A alternância entre galerias, obras ao ar livre e jardins evita que o circuito fique restrito a igrejas e casario colonial.",
          "visitType": "Museu + jardins",
          "estimatedDuration": "1 dia",
          "publishedDuration": "—",
          "oneYearOld": "Sim",
          "access": {
            "level": "unknown",
            "label": "Circuito a escolher",
            "description": "A visita reúne galerias e jardins distribuídos pelo espaço. Há cadeira de rodas disponível e transporte interno opcional no cadastro; confirme o circuito e o uso desses recursos, pois o esforço varia com o trajeto."
          },
          "lat": -20.122893,
          "lon": -44.221551,
          "locationAccuracy": "exact",
          "days": "1 dia",
          "relevanceSource": "agency",
          "ageClassification": {
            "status": "livre",
            "sourceUrl": "https://www.inhotim.org.br/visite/ingressos/inhotim_gratuito/",
            "note": "Crianças de 0 a 5 anos entram gratuitamente, acompanhadas de responsável e com documento."
          },
          "ticket": {
            "status": "online",
            "url": "https://www.inhotim.org.br/visite/ingressos/"
          },
          "kind": "atracao",
          "type": "natureza"
        }
      ],
      "relevanceSource": "agency",
      "ageClassification": {
        "status": "indeterminada"
      },
      "ticket": {
        "status": "por_passeio"
      },
      "stayDays": [
        1,
        1
      ]
    },
    {
      "id": "saojoaodelrei",
      "name": "São João del-Rei",
      "lat": -21.133576,
      "lon": -44.258809,
      "kind": "cidade",
      "canHostStay": true,
      "type": "historia",
      "days": "1–2 dias",
      "sights": [
        "Centro Histórico",
        "Igreja de São Francisco de Assis",
        "Maria Fumaça para Tiradentes",
        "Estação da Estrada de Ferro Oeste de Minas",
        "Museu Regional",
        "Memorial Tancredo Neves"
      ],
      "kid": "Centro com calçamento e desníveis; confirme operação e acessibilidade do trem antes de reservar.",
      "url": "https://www.google.com/maps/search/?api=1&query=Sao+Joao+del+Rei+MG",
      "guideBriefing": "São João del-Rei formou-se no início do século XVIII com o ouro, mas sua história não terminou com o declínio da mineração. Comércio, atividades agropecuárias e, no século XIX, a ferrovia mantiveram a cidade economicamente ativa. Por isso seu patrimônio reúne barroco, arquitetura civil, tradição musical, memória ferroviária e história política, mostrando a continuidade de um centro urbano mineiro por diferentes períodos.",
      "profile": "História · barroco · música · ferrovia",
      "attractions": [
        {
          "name": "Centro Histórico",
          "description": "Pontes de pedra, casarões e igrejas mostram uma cidade colonial que continuou economicamente ativa depois do ciclo do ouro, ao contrário de núcleos que ficaram quase congelados no século XVIII. São João del-Rei não ficou presa ao século XVIII: ouro, comércio, ferrovia, política e música continuaram moldando a cidade. Roteiros organizados a usam justamente para mostrar essa continuidade histórica.",
          "agencyRationale": "São João del-Rei não ficou presa ao século XVIII: ouro, comércio, ferrovia, política e música continuaram moldando a cidade. As agências a usam justamente para mostrar essa continuidade histórica.",
          "visitType": "A pé / externa",
          "estimatedDuration": "2–3 h",
          "publishedDuration": "—",
          "oneYearOld": "—",
          "access": {
            "level": "easy",
            "label": "Mais fácil em trecho curto",
            "description": "Circuito a pé no centro histórico. A estimativa considera trechos curtos; confirme calçamento, degraus, ladeiras e distância entre os pontos escolhidos."
          },
          "lat": -21.133576,
          "lon": -44.258809,
          "locationAccuracy": "city-center",
          "days": "2–3 h",
          "relevanceSource": "agency",
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "indeterminado"
          },
          "kind": "atracao",
          "type": "historia"
        },
        {
          "name": "Igreja de São Francisco de Assis",
          "description": "Grande templo rococó com projeto modificado por Aleijadinho, cercado por jardim de Burle Marx. É uma das obras arquitetônicas mais marcantes da cidade. É a principal parada artística dos city tours locais.",
          "agencyRationale": "É a principal parada artística dos city tours locais.",
          "visitType": "Igreja / interna",
          "estimatedDuration": "30 min",
          "publishedDuration": "—",
          "oneYearOld": "—",
          "access": {
            "level": "easy",
            "label": "Mais fácil na visita",
            "description": "A estimativa considera uma visita curta ao templo. Confirme degraus, entrada e circulação interna, além de calçamento e ladeiras no trajeto; o cadastro não comprova um percurso sem barreiras."
          },
          "lat": -21.138733,
          "lon": -44.260274,
          "locationAccuracy": "exact",
          "days": "30 min",
          "relevanceSource": "agency",
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "indeterminado"
          },
          "kind": "atracao",
          "type": "historia"
        },
        {
          "name": "Igrejas e tradição musical",
          "description": "A cidade mantém antigas orquestras e uma forte tradição de música sacra associada às celebrações religiosas. A musicalidade é um dos diferenciais usados pelos roteiros oficiais de Minas.",
          "agencyRationale": "A musicalidade é um dos diferenciais usados pelos roteiros oficiais de Minas.",
          "visitType": "Igrejas / experiência cultural",
          "estimatedDuration": "1 h",
          "publishedDuration": "—",
          "oneYearOld": "—",
          "access": {
            "level": "easy",
            "label": "Mais fácil em trecho curto",
            "description": "Circuito a pé no centro histórico. A estimativa considera trechos curtos; confirme calçamento, degraus, ladeiras e distância entre os pontos escolhidos."
          },
          "lat": -21.133576,
          "lon": -44.258809,
          "locationAccuracy": "city-center",
          "days": "1 h",
          "relevanceSource": "agency",
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "indeterminado"
          },
          "kind": "atracao",
          "type": "historia"
        },
        {
          "name": "Estação da Estrada de Ferro Oeste de Minas",
          "description": "Complexo ferroviário histórico com locomotivas, vagões e memória da ferrovia inaugurada no século XIX. Prepara e contextualiza a experiência da Maria Fumaça.",
          "agencyRationale": "Prepara e contextualiza a experiência da Maria Fumaça.",
          "visitType": "Museu/estação",
          "estimatedDuration": "1 h",
          "publishedDuration": "—",
          "oneYearOld": "—",
          "access": {
            "level": "unknown",
            "label": "A confirmar",
            "description": "Visita à estação e ao espaço de memória ferroviária. Confirme áreas abertas ao público, entrada e circulação; desníveis e esforço não estão documentados."
          },
          "lat": -21.136897,
          "lon": -44.263584,
          "locationAccuracy": "exact",
          "days": "1 h",
          "relevanceSource": "agency",
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "indeterminado"
          },
          "kind": "atracao",
          "type": "historia"
        },
        {
          "name": "Maria Fumaça São João del-Rei–Tiradentes",
          "description": "Viagem em trem histórico por cerca de 12 km entre as duas cidades, margeando o Rio das Mortes e a Serra de São José. O próprio deslocamento torna-se atração. É popular porque resolve duas coisas ao mesmo tempo: desloca o visitante entre duas cidades históricas e transforma o trajeto em atração. A paisagem e o equipamento ferroviário histórico tornam o percurso parte do passeio.",
          "agencyRationale": "É popular porque resolve duas coisas ao mesmo tempo: desloca o visitante entre duas cidades históricas e transforma o trajeto em atração. A paisagem e o equipamento ferroviário histórico tornam o percurso parte do passeio.",
          "visitType": "Trem turístico",
          "estimatedDuration": "1h15 só ida",
          "publishedDuration": "45–50 min por trecho",
          "oneYearOld": "Sim",
          "access": {
            "level": "unknown",
            "label": "Embarque a combinar",
            "description": "O trem turístico registra vagões adaptados e rampas. Avise sobre as necessidades do grupo na reserva e confirme embarque e desembarque; o esforço físico da visita não está documentado."
          },
          "lat": -21.136897,
          "lon": -44.263584,
          "locationAccuracy": "exact",
          "days": "1h15 só ida",
          "relevanceSource": "agency",
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "indeterminado"
          },
          "kind": "atracao",
          "type": "historia"
        },
        {
          "name": "Artesanato em estanho",
          "description": "São João del-Rei tornou-se referência brasileira na produção artesanal de peças de estanho. Acrescenta uma tradição produtiva local ao roteiro histórico.",
          "agencyRationale": "Acrescenta uma tradição produtiva local ao roteiro histórico.",
          "visitType": "Lojas/oficinas",
          "estimatedDuration": "1 h",
          "publishedDuration": "—",
          "oneYearOld": "—",
          "access": {
            "level": "unknown",
            "label": "A confirmar",
            "description": "Visita a lojas ou oficinas de artesanato. Confirme endereço, entrada e circulação no estabelecimento escolhido; não há um percurso único de acesso."
          },
          "lat": -21.133576,
          "lon": -44.258809,
          "locationAccuracy": "city-center",
          "days": "1 h",
          "relevanceSource": "agency",
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "indeterminado"
          },
          "kind": "atracao",
          "type": "historia"
        },
        {
          "name": "Ponte da Cadeia",
          "description": "Ponte de pedra sobre o Córrego do Lenheiro, parte da infraestrutura histórica que conectava os setores da antiga vila. Walking tours a utilizam como ponto de leitura da formação urbana: ela permite explicar circulação, cursos d'água e expansão da cidade.",
          "agencyRationale": "Walking tours a utilizam como ponto de leitura da formação urbana: ela permite explicar circulação, cursos d'água e expansão da cidade.",
          "visitType": "Visita turística",
          "estimatedDuration": "1 h",
          "publishedDuration": "—",
          "oneYearOld": "—",
          "access": {
            "level": "unknown",
            "label": "A confirmar",
            "description": "Visita externa ao ponto histórico. Confirme extensão da caminhada e condições do calçamento; o cadastro não detalha desníveis ou esforço do percurso."
          },
          "lat": -21.134313,
          "lon": -44.259123,
          "locationAccuracy": "exact",
          "days": "1 h",
          "relevanceSource": "agency",
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "indeterminado"
          },
          "kind": "atracao",
          "type": "historia"
        },
        {
          "name": "Teatro Municipal",
          "description": "Teatro histórico que representa a vida cultural urbana de São João del-Rei para além das igrejas. É incluído para mostrar que a cidade desenvolveu vida cultural e instituições urbanas importantes, especialmente no século XIX.",
          "agencyRationale": "É incluído para mostrar que a cidade desenvolveu vida cultural e instituições urbanas importantes, especialmente no século XIX.",
          "visitType": "Interna / visita",
          "estimatedDuration": "40 min",
          "publishedDuration": "—",
          "oneYearOld": "—",
          "access": {
            "level": "unknown",
            "label": "A confirmar",
            "description": "Visita a um espaço cultural. Confirme entrada, degraus, circulação interna e áreas abertas ao público; o cadastro não detalha o esforço da visita."
          },
          "lat": -21.134624,
          "lon": -44.258771,
          "locationAccuracy": "exact",
          "days": "40 min",
          "relevanceSource": "agency",
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "indeterminado"
          },
          "kind": "atracao",
          "type": "historia"
        },
        {
          "name": "Museu Regional",
          "description": "Instalado em grande sobrado colonial, reúne mobiliário, arte sacra, utensílios e objetos do cotidiano dos séculos XVIII e XIX. Dá aos guias material concreto para explicar como se vivia dentro das casas que o visitante vê pelas ruas.",
          "agencyRationale": "Dá aos guias material concreto para explicar como se vivia dentro das casas que o visitante vê pelas ruas.",
          "visitType": "Visita turística",
          "estimatedDuration": "1 h",
          "publishedDuration": "—",
          "oneYearOld": "—",
          "access": {
            "level": "unknown",
            "label": "A confirmar",
            "description": "Visita a um espaço cultural. Confirme entrada, degraus, circulação interna e áreas abertas ao público; o cadastro não detalha o esforço da visita."
          },
          "lat": -21.13597541801312,
          "lon": -44.26123380661011,
          "locationAccuracy": "exact",
          "days": "1 h",
          "relevanceSource": "agency",
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "indeterminado"
          },
          "kind": "atracao",
          "type": "historia"
        },
        {
          "name": "Memorial Tancredo Neves",
          "description": "Espaço dedicado à trajetória de Tancredo Neves, natural de São João del-Rei, e ao processo político brasileiro que culminou na redemocratização. Leva o roteiro do período colonial ao Brasil contemporâneo e explica por que São João del-Rei também é relevante para a história política republicana.",
          "agencyRationale": "Leva o roteiro do período colonial ao Brasil contemporâneo e explica por que São João del-Rei também é relevante para a história política republicana.",
          "visitType": "Visita turística",
          "estimatedDuration": "1 h",
          "publishedDuration": "—",
          "oneYearOld": "—",
          "access": {
            "level": "unknown",
            "label": "A confirmar",
            "description": "Visita a um espaço cultural. Confirme entrada, degraus, circulação interna e áreas abertas ao público; o cadastro não detalha o esforço da visita."
          },
          "lat": -21.137423,
          "lon": -44.262308,
          "locationAccuracy": "exact",
          "days": "1 h",
          "relevanceSource": "agency",
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "indeterminado"
          },
          "kind": "atracao",
          "type": "historia"
        },
        {
          "name": "Solares dos Neves e dos Lustosa (Largo do Rosário)",
          "description": "Dois imóveis históricos distintos no Largo do Rosário: o Solar dos Neves, ligado a Tancredo Neves, e o Solar dos Lustosa. O ponto indica apenas um trecho do largo para observar ambos. Aparecem nos walking tours porque permitem contar história política e arquitetura doméstica enquanto o grupo percorre o centro.",
          "agencyRationale": "Aparecem nos walking tours porque permitem contar história política e arquitetura doméstica enquanto o grupo percorre o centro.",
          "visitType": "Visita turística",
          "estimatedDuration": "1 h",
          "publishedDuration": "—",
          "oneYearOld": "—",
          "access": {
            "level": "unknown",
            "label": "A confirmar",
            "description": "Visita aos imóveis históricos do Largo do Rosário. Confirme possibilidade de visita interna, entrada e condições do percurso externo."
          },
          "lat": -21.1362138,
          "lon": -44.2628311,
          "locationAccuracy": "street-center",
          "days": "1 h",
          "relevanceSource": "agency",
          "mapQuery": "Largo do Rosário São João del-Rei MG",
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "indeterminado"
          },
          "kind": "atracao",
          "type": "historia"
        },
        {
          "name": "Museu da FEB",
          "description": "Acervo dedicado à participação brasileira na Segunda Guerra Mundial e aos expedicionários da região. É incluído em roteiros locais para apresentar uma camada do século XX que normalmente não aparece nos circuitos coloniais.",
          "agencyRationale": "É incluído em roteiros locais para apresentar uma camada do século XX que normalmente não aparece nos circuitos coloniais.",
          "visitType": "Visita turística",
          "estimatedDuration": "1 h",
          "publishedDuration": "—",
          "oneYearOld": "—",
          "access": {
            "level": "unknown",
            "label": "A confirmar",
            "description": "Visita a um espaço cultural. Confirme entrada, degraus, circulação interna e áreas abertas ao público; o cadastro não detalha o esforço da visita."
          },
          "lat": -21.135503,
          "lon": -44.259016,
          "locationAccuracy": "exact",
          "days": "1 h",
          "relevanceSource": "agency",
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "indeterminado"
          },
          "kind": "atracao",
          "type": "historia"
        },
        {
          "name": "Igreja Nossa Senhora do Carmo",
          "description": "Igreja rococó de fachada marcante e importante conjunto de arte sacra, ligada à Ordem Terceira do Carmo. É uma das principais igrejas do walking tour e permite comparar diferentes irmandades e estilos religiosos da cidade.",
          "agencyRationale": "É uma das principais igrejas do walking tour e permite comparar diferentes irmandades e estilos religiosos da cidade.",
          "visitType": "Igreja / interna",
          "estimatedDuration": "30 min",
          "publishedDuration": "—",
          "oneYearOld": "—",
          "access": {
            "level": "easy",
            "label": "Mais fácil na visita",
            "description": "A estimativa considera uma visita curta ao templo. Confirme degraus, entrada e circulação interna, além de calçamento e ladeiras no trajeto; o cadastro não comprova um percurso sem barreiras."
          },
          "lat": -21.133649,
          "lon": -44.260836,
          "locationAccuracy": "exact",
          "days": "30 min",
          "relevanceSource": "agency",
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "indeterminado"
          },
          "kind": "atracao",
          "type": "historia"
        },
        {
          "name": "Catedral Basílica Nossa Senhora do Pilar",
          "description": "Matriz histórica com interior ricamente ornamentado, ligada à formação religiosa e urbana de São João del-Rei. É parada central porque materializa a riqueza do ciclo do ouro e a continuidade das tradições religiosas locais.",
          "agencyRationale": "É parada central porque materializa a riqueza do ciclo do ouro e a continuidade das tradições religiosas locais.",
          "visitType": "Visita turística",
          "estimatedDuration": "1 h",
          "publishedDuration": "—",
          "oneYearOld": "—",
          "access": {
            "level": "unknown",
            "label": "A confirmar",
            "description": "Visita à catedral. Confirme entrada, degraus e circulação interna; as condições de acesso não estão detalhadas no cadastro."
          },
          "lat": -21.135335,
          "lon": -44.261786,
          "locationAccuracy": "exact",
          "days": "1 h",
          "relevanceSource": "agency",
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "indeterminado"
          },
          "kind": "atracao",
          "type": "historia"
        },
        {
          "name": "Casa de Bárbara Heliodora",
          "description": "Imóvel associado à poetisa Bárbara Heliodora, figura ligada ao ambiente intelectual e familiar da Inconfidência Mineira. Entra nos roteiros para conectar a Inconfidência a personagens e residências concretas da cidade, ampliando a narrativa além de Tiradentes.",
          "agencyRationale": "Entra nos roteiros para conectar a Inconfidência a personagens e residências concretas da cidade, ampliando a narrativa além de Tiradentes.",
          "visitType": "Visita turística",
          "estimatedDuration": "1 h",
          "publishedDuration": "—",
          "oneYearOld": "—",
          "access": {
            "level": "unknown",
            "label": "A confirmar",
            "description": "Visita a um espaço cultural. Confirme entrada, degraus, circulação interna e áreas abertas ao público; o cadastro não detalha o esforço da visita."
          },
          "lat": -21.138609,
          "lon": -44.260962,
          "locationAccuracy": "exact",
          "days": "1 h",
          "relevanceSource": "agency",
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "indeterminado"
          },
          "kind": "atracao",
          "type": "historia"
        },
        {
          "name": "Igreja Nossa Senhora do Rosário",
          "lat": -21.1364633,
          "lon": -44.2627521,
          "locationAccuracy": "exact",
          "catalogName": "Igreja Nossa Senhora do Rosário",
          "description": "Igreja histórica citada em city tour de agência.",
          "agencyRationale": "Parada explicitamente incluída em roteiro comercializado por agência de turismo.",
          "visitType": "Religiosa",
          "estimatedDuration": "—",
          "publishedDuration": "—",
          "oneYearOld": "A confirmar",
          "access": {
            "level": "easy",
            "label": "Mais fácil na visita",
            "description": "A estimativa considera uma visita curta ao templo. Confirme degraus, entrada e circulação interna, além de calçamento e ladeiras no trajeto; o cadastro não comprova um percurso sem barreiras."
          },
          "days": "—",
          "relevanceSource": "agency",
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "indeterminado"
          },
          "kind": "atracao",
          "type": "historia"
        },
        {
          "name": "Beco do Cotovelo",
          "lat": -21.1340616,
          "lon": -44.2626937,
          "locationAccuracy": "street-center",
          "catalogName": "Beco do Cotovelo",
          "description": "Passagem tradicional do centro histórico incluída em roteiro de agência.",
          "agencyRationale": "Parada explicitamente incluída em roteiro comercializado por agência de turismo.",
          "visitType": "Histórica",
          "estimatedDuration": "—",
          "publishedDuration": "—",
          "oneYearOld": "A confirmar",
          "access": {
            "level": "unknown",
            "label": "A confirmar",
            "description": "Visita externa ao ponto histórico. Confirme extensão da caminhada e condições do calçamento; o cadastro não detalha desníveis ou esforço do percurso."
          },
          "days": "—",
          "relevanceSource": "agency",
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "indeterminado"
          },
          "kind": "atracao",
          "type": "historia"
        },
        {
          "name": "Largo da Cruz",
          "lat": -21.1336337,
          "lon": -44.2618463,
          "locationAccuracy": "exact",
          "catalogName": "Largo da Cruz",
          "description": "Espaço urbano histórico incluído em circuito panorâmico de agência.",
          "agencyRationale": "Parada explicitamente incluída em roteiro comercializado por agência de turismo.",
          "visitType": "Histórica",
          "estimatedDuration": "—",
          "publishedDuration": "—",
          "oneYearOld": "A confirmar",
          "access": {
            "level": "unknown",
            "label": "A confirmar",
            "description": "Visita externa ao ponto histórico. Confirme extensão da caminhada e condições do calçamento; o cadastro não detalha desníveis ou esforço do percurso."
          },
          "days": "—",
          "relevanceSource": "agency",
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "indeterminado"
          },
          "kind": "atracao",
          "type": "historia"
        }
      ],
      "relevanceSource": "agency",
      "ageClassification": {
        "status": "indeterminada"
      },
      "ticket": {
        "status": "por_passeio"
      },
      "stayDays": [
        1,
        2
      ]
    },
    {
      "id": "tiradentes",
      "name": "Tiradentes",
      "lat": -21.110469,
      "lon": -44.174294,
      "kind": "cidade",
      "canHostStay": true,
      "type": "historia",
      "days": "1–2 dias",
      "sights": [
        "Centro Histórico",
        "Passeio de Maria Fumaça (Tiradentes–São João del-Rei)",
        "Matriz de Santo Antônio",
        "Chafariz de São José",
        "Museu Casa Padre Toledo",
        "Largo das Forras",
        "Museu de Sant'Ana",
        "Museu da Liturgia",
        "Igreja Nossa Senhora do Rosário dos Pretos",
        "Capela dos Passos",
        "Igreja de São Francisco de Paula",
        "Santuário da Santíssima Trindade",
        "Igreja Nossa Senhora das Mercês",
        "Museu da Moto",
        "Capela Bom Jesus da Pobreza",
        "Capela de São João Evangelista",
        "Serra de São José",
        "Travessia Serra de São José",
        "Estrada Parque Passos dos Fundadores",
        "Rua Direita",
        "Gastronomia"
      ],
      "kid": "Ruas de pedra e ladeiras podem dificultar carrinhos; priorize trechos curtos e pausas.",
      "url": "https://www.google.com/maps/search/?api=1&query=Tiradentes+MG",
      "guideBriefing": "Tiradentes nasceu como Arraial de Santo Antônio e depois Vila de São José, no ciclo do ouro. Com a perda de importância econômica no século XIX, grande parte de seu conjunto urbano colonial permaneceu preservada. O nome atual homenageia Joaquim José da Silva Xavier. Igrejas, casas, chafariz e ruas permitem observar a escala de uma vila mineradora setecentista e a posterior construção da memória da Inconfidência.",
      "profile": "História · arquitetura · gastronomia",
      "attractions": [
        {
          "name": "Centro Histórico",
          "description": "Núcleo colonial muito preservado, com ruas de pedra, sobrados e igrejas aos pés da Serra de São José. A escala compacta permite compreender a cidade caminhando. Tiradentes funciona muito bem para pernoite: o centro é caminhável, há restaurantes e vida noturna tranquila, e as atrações podem ser visitadas sem veículo. Por isso aparece frequentemente como base dos circuitos.",
          "agencyRationale": "Tiradentes funciona muito bem para pernoite: o centro é caminhável, há restaurantes e vida noturna tranquila, e as atrações podem ser visitadas sem veículo. Por isso aparece frequentemente como base dos circuitos.",
          "visitType": "A pé / externa",
          "estimatedDuration": "2–3 h",
          "publishedDuration": "—",
          "oneYearOld": "—",
          "access": {
            "level": "easy",
            "label": "Mais fácil em trecho curto",
            "description": "Circuito a pé no centro histórico. A estimativa considera trechos curtos; confirme calçamento, degraus, ladeiras e distância entre os pontos escolhidos."
          },
          "lat": -21.110469,
          "lon": -44.174294,
          "locationAccuracy": "city-center",
          "days": "2–3 h",
          "relevanceSource": "agency",
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "indeterminado"
          },
          "kind": "atracao",
          "type": "historia"
        },
        {
          "name": "Matriz de Santo Antônio",
          "description": "Igreja com interior ricamente dourado e fachada atribuída a Aleijadinho. É o principal monumento religioso da cidade e domina a paisagem urbana. Concentra arte barroca e uma vista privilegiada do núcleo histórico.",
          "agencyRationale": "Concentra arte barroca e uma vista privilegiada do núcleo histórico.",
          "visitType": "Igreja / interna",
          "estimatedDuration": "45 min",
          "publishedDuration": "—",
          "oneYearOld": "—",
          "access": {
            "level": "unknown",
            "label": "A confirmar",
            "description": "Visita interna à igreja. Confirme entrada, degraus e alternativas sem escadas; o esforço do percurso não está documentado."
          },
          "lat": -21.109993,
          "lon": -44.178145,
          "locationAccuracy": "exact",
          "days": "45 min",
          "relevanceSource": "agency",
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "indeterminado"
          },
          "kind": "atracao",
          "type": "historia"
        },
        {
          "name": "Chafariz de São José",
          "description": "Chafariz setecentista que abastecia moradores, animais e viajantes. Mostra de maneira simples como funcionava a infraestrutura urbana colonial. É uma parada rápida que ajuda o guia a explicar a vida cotidiana do século XVIII.",
          "agencyRationale": "É uma parada rápida que ajuda o guia a explicar a vida cotidiana do século XVIII.",
          "visitType": "Externa",
          "estimatedDuration": "20 min",
          "publishedDuration": "—",
          "oneYearOld": "—",
          "access": {
            "level": "unknown",
            "label": "A confirmar",
            "description": "Visita externa ao ponto histórico. Confirme calçamento, desníveis e extensão do trecho a pé; o esforço não está documentado no cadastro."
          },
          "lat": -21.107439,
          "lon": -44.176274,
          "locationAccuracy": "exact",
          "days": "20 min",
          "relevanceSource": "agency",
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "indeterminado"
          },
          "kind": "atracao",
          "type": "historia"
        },
        {
          "name": "Museu Casa Padre Toledo",
          "description": "Solar ligado ao inconfidente Padre Toledo, onde ocorreram encontros associados à conspiração. A casa dá endereço e ambiente doméstico à conspiração. Para agências que já passaram pelo Museu da Inconfidência, ela continua a mesma narrativa em outro cenário.",
          "agencyRationale": "A casa dá endereço e ambiente doméstico à conspiração. Para agências que já passaram pelo Museu da Inconfidência, ela continua a mesma narrativa em outro cenário.",
          "visitType": "Museu / interna",
          "estimatedDuration": "1 h",
          "publishedDuration": "—",
          "oneYearOld": "—",
          "access": {
            "level": "unknown",
            "label": "A confirmar",
            "description": "Visita ao museu. Confirme entrada, circulação interna, degraus e alternativas sem escadas; o cadastro não documenta o esforço do percurso."
          },
          "lat": -21.110304,
          "lon": -44.177223,
          "locationAccuracy": "exact",
          "days": "1 h",
          "relevanceSource": "agency",
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "indeterminado"
          },
          "kind": "atracao",
          "type": "historia"
        },
        {
          "name": "Serra de São José",
          "description": "Formação montanhosa que envolve a cidade, com trilhas, mirantes e áreas de preservação. Acrescenta natureza à permanência em uma cidade predominantemente histórica.",
          "agencyRationale": "Acrescenta natureza à permanência em uma cidade predominantemente histórica.",
          "visitType": "Trilha / natureza",
          "estimatedDuration": "meio dia",
          "publishedDuration": "—",
          "oneYearOld": "—",
          "access": {
            "level": "unknown",
            "label": "A confirmar",
            "description": "Passeio de trilha e natureza. Confirme o percurso escolhido, distância, terreno e desnível; o cadastro não documenta a dificuldade de uma trilha específica."
          },
          "lat": -21.110469,
          "lon": -44.174294,
          "locationAccuracy": "city-center",
          "days": "meio dia",
          "relevanceSource": "agency",
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "indeterminado"
          },
          "kind": "atracao",
          "type": "natureza"
        },
        {
          "name": "Gastronomia",
          "description": "A cidade concentra restaurantes, chefs e festivais gastronômicos que reinterpretam ingredientes e pratos mineiros. Roteiros organizados conseguem combinar visita histórica com noite livre e experiência gastronômica.",
          "agencyRationale": "As agências conseguem combinar visita histórica com noite livre e experiência gastronômica.",
          "visitType": "Refeição / experiência",
          "estimatedDuration": "2 h",
          "publishedDuration": "—",
          "oneYearOld": "—",
          "access": {
            "level": "unknown",
            "label": "A confirmar",
            "description": "Refeição ou experiência gastronômica no estabelecimento escolhido. Confirme entrada e circulação; o cadastro não define um local único nem o esforço de acesso."
          },
          "lat": -21.110469,
          "lon": -44.174294,
          "locationAccuracy": "city-center",
          "days": "2 h",
          "relevanceSource": "agency",
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "indeterminado"
          },
          "kind": "atracao",
          "type": "gastronomia"
        },
        {
          "name": "Largo das Forras",
          "description": "Praça central e tradicional ponto de encontro da cidade. Além do casario, restaurantes e comércio, seu nome é associado à presença de pessoas negras alforriadas e o espaço recebeu paisagismo de Burle Marx no século XX. Roteiros organizados o usam como ponto de chegada, orientação e tempo livre: dali o visitante entra a pé no centro histórico e também percebe a Tiradentes viva, não apenas monumental.",
          "agencyRationale": "Agências o usam como ponto de chegada, orientação e tempo livre: dali o visitante entra a pé no centro histórico e também percebe a Tiradentes viva, não apenas monumental.",
          "visitType": "Visita turística",
          "estimatedDuration": "1 h",
          "publishedDuration": "—",
          "oneYearOld": "—",
          "access": {
            "level": "unknown",
            "label": "A confirmar",
            "description": "Visita externa ao ponto histórico. Confirme calçamento, desníveis e extensão do trecho a pé; o esforço não está documentado no cadastro."
          },
          "lat": -21.11058,
          "lon": -44.173649,
          "locationAccuracy": "exact",
          "days": "1 h",
          "relevanceSource": "agency",
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "indeterminado"
          },
          "kind": "atracao",
          "type": "historia"
        },
        {
          "name": "Rua Direita",
          "description": "Principal eixo histórico, cercado por sobrados, ateliês, lojas e restaurantes. Caminhar por ela permite observar a arquitetura doméstica e comercial, não apenas edifícios religiosos. Faz parte dos passeios porque conecta várias atrações importantes e concentra artesanato e gastronomia no próprio percurso.",
          "agencyRationale": "Faz parte dos passeios porque conecta várias atrações importantes e concentra artesanato e gastronomia no próprio percurso.",
          "visitType": "Visita turística",
          "estimatedDuration": "1 h",
          "publishedDuration": "—",
          "oneYearOld": "—",
          "access": {
            "level": "unknown",
            "label": "A confirmar",
            "description": "Visita externa ao ponto histórico. Confirme calçamento, desníveis e extensão do trecho a pé; o esforço não está documentado no cadastro."
          },
          "lat": -21.1097152,
          "lon": -44.1762681,
          "locationAccuracy": "street-center",
          "days": "1 h",
          "relevanceSource": "agency",
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "indeterminado"
          },
          "kind": "atracao",
          "type": "historia"
        },
        {
          "name": "Museu de Sant'Ana",
          "description": "Funciona na antiga cadeia e reúne centenas de representações de Sant'Ana produzidas em diferentes regiões e períodos. O contraste entre arte sacra e o antigo espaço carcerário também faz parte da experiência. É usado para aprofundar arte sacra sem repetir uma visita a igreja e para aproveitar um edifício histórico central da cidade.",
          "agencyRationale": "É usado para aprofundar arte sacra sem repetir uma visita a igreja e para aproveitar um edifício histórico central da cidade.",
          "visitType": "Visita turística",
          "estimatedDuration": "1 h",
          "publishedDuration": "—",
          "oneYearOld": "—",
          "access": {
            "level": "unknown",
            "label": "A confirmar",
            "description": "Visita ao museu. Confirme entrada, circulação interna, degraus e alternativas sem escadas; o cadastro não documenta o esforço do percurso."
          },
          "lat": -21.1093903,
          "lon": -44.1764425,
          "locationAccuracy": "exact",
          "days": "1 h",
          "relevanceSource": "agency",
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "bilheteria",
            "url": "https://museudesantana.org.br/visite/planeje-sua-visita/"
          },
          "kind": "atracao",
          "type": "historia"
        },
        {
          "name": "Museu da Liturgia",
          "description": "Museu dedicado aos objetos, ritos e símbolos da liturgia católica, com centenas de peças sacras. Ajuda o visitante a compreender para que serviam muitos objetos e práticas encontrados nas igrejas visitadas ao longo do circuito mineiro.",
          "agencyRationale": "Ajuda o visitante a compreender para que serviam muitos objetos e práticas encontrados nas igrejas visitadas ao longo do circuito mineiro.",
          "visitType": "Visita turística",
          "estimatedDuration": "1 h",
          "publishedDuration": "—",
          "oneYearOld": "—",
          "access": {
            "level": "unknown",
            "label": "A confirmar",
            "description": "Visita ao museu. Confirme entrada, circulação interna, degraus e alternativas sem escadas; o cadastro não documenta o esforço do percurso."
          },
          "lat": -21.1089727,
          "lon": -44.1774604,
          "locationAccuracy": "exact",
          "days": "1 h",
          "relevanceSource": "agency",
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "indeterminado"
          },
          "kind": "atracao",
          "type": "historia"
        },
        {
          "name": "Passeio de Maria Fumaça (Tiradentes–São João del-Rei)",
          "description": "Trem a vapor no trecho turístico da antiga Estrada de Ferro Oeste de Minas entre Tiradentes e São João del-Rei. O percurso tem cerca de 12,8 km; cada trecho dura aproximadamente 40 minutos e pode ser feito só de ida ou ida e volta. Em Tiradentes, o embarque é na estação ferroviária da Praça da Estação.",
          "agencyRationale": "Experiência ferroviária histórica identificada no Portal Minas Gerais e na operadora atual; inclusão em roteiro comercial de agência não confirmada.",
          "visitType": "Passeio de trem a vapor / ida ou ida e volta",
          "estimatedDuration": "Cerca de 40 min por trecho",
          "publishedDuration": "Cerca de 40 min por trecho",
          "oneYearOld": "Regra etária e condições para criança pequena a confirmar com a operadora.",
          "access": {
            "level": "unknown",
            "label": "Embarque a confirmar",
            "description": "A estação e os carros são históricos. Acessibilidade da plataforma, degraus do embarque e espaço para carrinho não foram confirmados; consulte a ABPF antes de comprar."
          },
          "lat": -21.1147886,
          "lon": -44.1676973,
          "locationAccuracy": "exact",
          "locationSourceUrl": "https://maps.app.goo.gl/4eryAbwEjUkceBiZ7",
          "mapQuery": "Estação Ferroviária de Tiradentes, Praça da Estação, Tiradentes MG",
          "sourceUrl": "https://efom.org.br/informacoes/",
          "researchedAt": "2026-10-15",
          "days": "Cerca de 40 min por trecho",
          "relevanceSource": "guide",
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "online",
            "url": "https://efom.org.br/compra-de-bilhetes/",
            "note": "Consulte as datas e condições vigentes no site da operadora; horários variam conforme dia da semana e feriados."
          },
          "visitLinks": [
            {
              "label": "ABPF — horários e informações do passeio",
              "url": "https://efom.org.br/informacoes/"
            },
            {
              "label": "ABPF — compra de bilhetes",
              "url": "https://efom.org.br/compra-de-bilhetes/"
            },
            {
              "label": "ABPF — localização da estação de Tiradentes",
              "url": "https://efom.org.br/localizacao/"
            }
          ],
          "scheduleNote": "Pesquisa em 15/10/2026: a programação regular publicada informa saídas de Tiradentes às sextas e sábados às 11h30 e 15h30, e aos domingos às 11h30; feriados têm programação própria. Para a estadia de 14–16/10, a sexta-feira 16/10 aparece na grade regular; a quinta-feira 15/10 não. Confirme assentos e horários atuais com a ABPF. A operação foi transferida à ABPF em outubro de 2026.",
          "kind": "atracao",
          "type": "historia",
          "initialDate": "2026-10-16",
          "selectedByDefault": true,
          "required": false
        },
        {
          "name": "Capela dos Passos",
          "description": "Conjunto de seis pequenas capelas dos Passos distribuídas pelo centro histórico e ligadas à Via Sacra. É um circuito de vários pontos, não uma única parada; a posição e a abertura de cada capela devem ser confirmadas antes de planejar o percurso.",
          "agencyRationale": "Atrativo listado no Portal Minas Gerais; inclusão em roteiro comercial de agência não confirmada.",
          "visitType": "Circuito religioso a pé",
          "estimatedDuration": "Duração a confirmar",
          "publishedDuration": "—",
          "oneYearOld": "Regra etária não publicada; confirme as condições do percurso.",
          "access": {
            "level": "unknown",
            "label": "Circuito a confirmar",
            "description": "São vários pontos no centro histórico; trajeto, calçamento, degraus e abertura das capelas não foram verificados individualmente."
          },
          "lat": -21.110469,
          "lon": -44.174294,
          "locationAccuracy": "city-center",
          "locationNote": "Referência no centro de Tiradentes; o circuito não tem um ponto único ou traçado verificado.",
          "mapQuery": "Capela dos Passos, Tiradentes MG",
          "sourceUrl": "https://www.minasgerais.com.br/pt/destinos/tiradentes",
          "researchedAt": "2026-10-15",
          "days": "Duração a confirmar",
          "relevanceSource": "guide",
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "indeterminado"
          },
          "visitLinks": [
            {
              "label": "Portal Minas Gerais — atrativos de Tiradentes",
              "url": "https://www.minasgerais.com.br/pt/destinos/tiradentes"
            }
          ],
          "kind": "atracao",
          "type": "historia"
        },
        {
          "name": "Igreja de São Francisco de Paula",
          "description": "Igreja histórica situada em posição elevada no conjunto urbano de Tiradentes, destacada no inventário turístico estadual. Confirme a abertura interna e o percurso de subida antes da visita.",
          "agencyRationale": "Atrativo listado no Portal Minas Gerais; inclusão em roteiro comercial de agência não confirmada.",
          "visitType": "Igreja / visita interna a confirmar",
          "estimatedDuration": "Duração a confirmar",
          "publishedDuration": "—",
          "oneYearOld": "Regra etária não publicada; confirme com o responsável.",
          "access": {
            "level": "unknown",
            "label": "A confirmar",
            "description": "Confirme horário, acesso interno, degraus e percurso de subida; a coordenada do cadastro é apenas uma referência municipal."
          },
          "lat": -21.110469,
          "lon": -44.174294,
          "locationAccuracy": "city-center",
          "locationNote": "Ponto individual ainda não confirmado; coordenada de referência no centro de Tiradentes.",
          "mapQuery": "Igreja de São Francisco de Paula, Tiradentes MG",
          "sourceUrl": "https://www.minasgerais.com.br/pt/destinos/tiradentes",
          "researchedAt": "2026-10-15",
          "days": "Duração a confirmar",
          "relevanceSource": "guide",
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "indeterminado"
          },
          "visitLinks": [
            {
              "label": "Portal Minas Gerais — atrativos de Tiradentes",
              "url": "https://www.minasgerais.com.br/pt/destinos/tiradentes"
            }
          ],
          "kind": "atracao",
          "type": "historia"
        },
        {
          "name": "Santuário da Santíssima Trindade",
          "description": "Santuário de devoção à Santíssima Trindade. O inventário turístico estadual registra uma capela original do fim do século XVIII; confirme calendário religioso, horário e visitação interna.",
          "agencyRationale": "Atrativo listado no Portal Minas Gerais; inclusão em roteiro comercial de agência não confirmada.",
          "visitType": "Santuário / visita religiosa",
          "estimatedDuration": "Duração a confirmar",
          "publishedDuration": "—",
          "oneYearOld": "Regra etária não publicada; confirme com o responsável.",
          "access": {
            "level": "unknown",
            "label": "A confirmar",
            "description": "Horário, acesso interno, degraus e condições para visitantes não foram verificados; a coordenada do cadastro é apenas uma referência municipal."
          },
          "lat": -21.110469,
          "lon": -44.174294,
          "locationAccuracy": "city-center",
          "locationNote": "Ponto individual ainda não confirmado; coordenada de referência no centro de Tiradentes.",
          "mapQuery": "Santuário da Santíssima Trindade, Tiradentes MG",
          "sourceUrl": "https://www.minasgerais.com.br/pt/destinos/tiradentes",
          "researchedAt": "2026-10-15",
          "days": "Duração a confirmar",
          "relevanceSource": "guide",
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "indeterminado"
          },
          "visitLinks": [
            {
              "label": "Portal Minas Gerais — atrativos de Tiradentes",
              "url": "https://www.minasgerais.com.br/pt/destinos/tiradentes"
            }
          ],
          "kind": "atracao",
          "type": "historia"
        },
        {
          "name": "Igreja Nossa Senhora das Mercês",
          "description": "Igreja histórica ligada à devoção de Nossa Senhora das Mercês, com elementos barrocos e rococós apontados no inventário turístico estadual. Confirme abertura, horário e acesso interno.",
          "agencyRationale": "Atrativo listado no Portal Minas Gerais; inclusão em roteiro comercial de agência não confirmada.",
          "visitType": "Igreja / visita interna a confirmar",
          "estimatedDuration": "Duração a confirmar",
          "publishedDuration": "—",
          "oneYearOld": "Regra etária não publicada; confirme com o responsável.",
          "access": {
            "level": "unknown",
            "label": "A confirmar",
            "description": "Confirme horário, degraus, acesso interno e condições de visita; a coordenada do cadastro é apenas uma referência municipal."
          },
          "lat": -21.110469,
          "lon": -44.174294,
          "locationAccuracy": "city-center",
          "locationNote": "Ponto individual ainda não confirmado; coordenada de referência no centro de Tiradentes.",
          "mapQuery": "Igreja Nossa Senhora das Mercês, Tiradentes MG",
          "sourceUrl": "https://www.minasgerais.com.br/pt/destinos/tiradentes",
          "researchedAt": "2026-10-15",
          "days": "Duração a confirmar",
          "relevanceSource": "guide",
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "indeterminado"
          },
          "visitLinks": [
            {
              "label": "Portal Minas Gerais — atrativos de Tiradentes",
              "url": "https://www.minasgerais.com.br/pt/destinos/tiradentes"
            }
          ],
          "kind": "atracao",
          "type": "historia"
        },
        {
          "name": "Museu da Moto",
          "description": "Museu dedicado à história das motocicletas, listado entre os atrativos culturais de Tiradentes. Funcionamento, acervo disponível, ingresso e necessidade de agendamento precisam ser confirmados diretamente com o espaço.",
          "agencyRationale": "Atrativo listado no Portal Minas Gerais; inclusão em roteiro comercial de agência não confirmada.",
          "visitType": "Museu / visita a confirmar",
          "estimatedDuration": "Duração a confirmar",
          "publishedDuration": "—",
          "oneYearOld": "Regra etária não publicada; confirme com o responsável.",
          "access": {
            "level": "unknown",
            "label": "A confirmar",
            "description": "Endereço exato, funcionamento, degraus e circulação interna não foram verificados; a coordenada do cadastro é apenas uma referência municipal."
          },
          "lat": -21.110469,
          "lon": -44.174294,
          "locationAccuracy": "city-center",
          "locationNote": "Endereço e ponto individual não confirmados; coordenada de referência no centro de Tiradentes.",
          "mapQuery": "Museu da Moto, Tiradentes MG",
          "sourceUrl": "https://www.minasgerais.com.br/pt/destinos/tiradentes",
          "researchedAt": "2026-10-15",
          "days": "Duração a confirmar",
          "relevanceSource": "guide",
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "indeterminado"
          },
          "visitLinks": [
            {
              "label": "Portal Minas Gerais — atrativos de Tiradentes",
              "url": "https://www.minasgerais.com.br/pt/destinos/tiradentes"
            }
          ],
          "kind": "atracao",
          "type": "historia"
        },
        {
          "name": "Capela Bom Jesus da Pobreza",
          "description": "Capela histórica de fachada simples, incluída no conjunto religioso do centro de Tiradentes. Confirme se está aberta à visitação e se a visita interna é permitida no dia.",
          "agencyRationale": "Atrativo listado no Portal Minas Gerais; inclusão em roteiro comercial de agência não confirmada.",
          "visitType": "Capela / visita interna a confirmar",
          "estimatedDuration": "Duração a confirmar",
          "publishedDuration": "—",
          "oneYearOld": "Regra etária não publicada; confirme com o responsável.",
          "access": {
            "level": "unknown",
            "label": "A confirmar",
            "description": "Confirme abertura, degraus, circulação interna e regras de visita; a coordenada do cadastro é apenas uma referência municipal."
          },
          "lat": -21.110469,
          "lon": -44.174294,
          "locationAccuracy": "city-center",
          "locationNote": "Ponto individual ainda não confirmado; coordenada de referência no centro de Tiradentes.",
          "mapQuery": "Capela Bom Jesus da Pobreza, Tiradentes MG",
          "sourceUrl": "https://www.minasgerais.com.br/pt/destinos/tiradentes",
          "researchedAt": "2026-10-15",
          "days": "Duração a confirmar",
          "relevanceSource": "guide",
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "indeterminado"
          },
          "visitLinks": [
            {
              "label": "Portal Minas Gerais — atrativos de Tiradentes",
              "url": "https://www.minasgerais.com.br/pt/destinos/tiradentes"
            }
          ],
          "kind": "atracao",
          "type": "historia"
        },
        {
          "name": "Capela de São João Evangelista",
          "description": "Capela histórica dedicada a São João Evangelista, incluída entre os atrativos religiosos de Tiradentes. Confirme abertura, horário e acesso interno antes de se deslocar.",
          "agencyRationale": "Atrativo listado no Portal Minas Gerais; inclusão em roteiro comercial de agência não confirmada.",
          "visitType": "Capela / visita interna a confirmar",
          "estimatedDuration": "Duração a confirmar",
          "publishedDuration": "—",
          "oneYearOld": "Regra etária não publicada; confirme com o responsável.",
          "access": {
            "level": "unknown",
            "label": "A confirmar",
            "description": "Confirme horário, degraus, acesso interno e condições de visita; a coordenada do cadastro é apenas uma referência municipal."
          },
          "lat": -21.110469,
          "lon": -44.174294,
          "locationAccuracy": "city-center",
          "locationNote": "Ponto individual ainda não confirmado; coordenada de referência no centro de Tiradentes.",
          "mapQuery": "Capela de São João Evangelista, Tiradentes MG",
          "sourceUrl": "https://www.minasgerais.com.br/pt/destinos/tiradentes",
          "researchedAt": "2026-10-15",
          "days": "Duração a confirmar",
          "relevanceSource": "guide",
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "indeterminado"
          },
          "visitLinks": [
            {
              "label": "Portal Minas Gerais — atrativos de Tiradentes",
              "url": "https://www.minasgerais.com.br/pt/destinos/tiradentes"
            }
          ],
          "kind": "atracao",
          "type": "historia"
        },
        {
          "name": "Travessia Serra de São José",
          "description": "Travessia guiada que cruza a Serra de São José e pode incluir trechos como a Trilha do Carteiro e a Calçada dos Escravos, conforme o percurso contratado. Não há um único traçado ou tempo universal; confirme guia, ponto de saída, extensão, desnível e condições do dia.",
          "agencyRationale": "Atividade de natureza listada no Portal Minas Gerais; inclusão em roteiro comercial de agência não confirmada.",
          "visitType": "Travessia / caminhada guiada",
          "estimatedDuration": "Duração a confirmar",
          "publishedDuration": "—",
          "oneYearOld": "Adequação para criança pequena deve ser confirmada com o guia responsável.",
          "access": {
            "level": "unknown",
            "label": "Percurso a confirmar",
            "description": "Trilha em serra; extensão, desnível, terreno, guia, autorização e ponto de início dependem do percurso. Confirme todos esses dados antes de sair."
          },
          "lat": -21.110469,
          "lon": -44.174294,
          "locationAccuracy": "city-center",
          "locationNote": "A coordenada municipal não é o início da trilha; ponto de encontro e traçado precisam ser confirmados com o guia.",
          "mapQuery": "Travessia Serra de São José, Tiradentes MG",
          "sourceUrl": "https://www.minasgerais.com.br/pt/destinos/tiradentes",
          "researchedAt": "2026-10-15",
          "days": "Duração a confirmar",
          "relevanceSource": "guide",
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "indeterminado"
          },
          "visitLinks": [
            {
              "label": "Portal Minas Gerais — atrativos de Tiradentes",
              "url": "https://www.minasgerais.com.br/pt/destinos/tiradentes"
            }
          ],
          "kind": "atracao",
          "type": "natureza"
        },
        {
          "name": "Estrada Parque Passos dos Fundadores",
          "description": "Percurso rodoviário panorâmico associado à Serra de São José e listado entre as experiências de natureza da região. É um trecho, não um ponto único de parada; confirme o trajeto, as condições da estrada e os locais permitidos para parar.",
          "agencyRationale": "Experiência de natureza listada no Portal Minas Gerais; inclusão em roteiro comercial de agência não confirmada.",
          "visitType": "Percurso rodoviário panorâmico",
          "estimatedDuration": "Duração a confirmar",
          "publishedDuration": "—",
          "oneYearOld": "A confirmar conforme trajeto e condições da estrada.",
          "access": {
            "level": "unknown",
            "label": "Trajeto a confirmar",
            "description": "O cadastro não define início, fim, pavimentação nem pontos autorizados de parada. Confirme o percurso e as condições atuais antes de seguir."
          },
          "lat": -21.110469,
          "lon": -44.174294,
          "locationAccuracy": "city-center",
          "locationNote": "A coordenada municipal é apenas referência; o percurso não foi mapeado como uma linha viária.",
          "mapQuery": "Estrada Parque Passos dos Fundadores, Tiradentes MG",
          "sourceUrl": "https://www.minasgerais.com.br/pt/destinos/tiradentes",
          "researchedAt": "2026-10-15",
          "days": "Duração a confirmar",
          "relevanceSource": "guide",
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "indeterminado"
          },
          "visitLinks": [
            {
              "label": "Portal Minas Gerais — atrativos de Tiradentes",
              "url": "https://www.minasgerais.com.br/pt/destinos/tiradentes"
            }
          ],
          "kind": "atracao",
          "type": "natureza"
        },
        {
          "name": "Igreja Nossa Senhora do Rosário dos Pretos",
          "description": "Uma das igrejas mais antigas da cidade, construída pela irmandade negra. Sua história revela a organização religiosa da população negra durante a escravidão e amplia a leitura social da cidade colonial. É incluída porque oferece uma narrativa diferente da Matriz de Santo Antônio: em vez da riqueza das elites, permite discutir irmandades negras, escravidão e devoção.",
          "agencyRationale": "É incluída porque oferece uma narrativa diferente da Matriz de Santo Antônio: em vez da riqueza das elites, permite discutir irmandades negras, escravidão e devoção.",
          "visitType": "Visita turística",
          "estimatedDuration": "1 h",
          "publishedDuration": "—",
          "oneYearOld": "—",
          "access": {
            "level": "easy",
            "label": "Mais fácil na visita",
            "description": "A estimativa considera uma visita curta ao templo. Confirme degraus, entrada e circulação interna, além de calçamento e ladeiras no trajeto; o cadastro não comprova um percurso sem barreiras."
          },
          "lat": -21.1097417,
          "lon": -44.1767476,
          "locationAccuracy": "exact",
          "days": "1 h",
          "relevanceSource": "agency",
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "indeterminado"
          },
          "kind": "atracao",
          "type": "historia"
        }
      ],
      "relevanceSource": "agency",
      "ageClassification": {
        "status": "indeterminada"
      },
      "ticket": {
        "status": "por_passeio"
      },
      "stayDays": [
        1,
        2
      ],
      "initialDate": "2026-10-14",
      "selectedByDefault": true,
      "availableDates": [
        "2026-10-15",
        "2026-10-16"
      ]
    },
    {
      "id": "bichinho",
      "name": "Prados · Bichinho",
      "lat": -21.099115,
      "lon": -44.117586,
      "kind": "cidade",
      "canHostStay": true,
      "type": "historia",
      "days": "½–1 dia",
      "sights": [
        "Oficina de Agosto",
        "Ateliês e oficinas",
        "Cachaçarias e produtos locais"
      ],
      "kid": "O passeio é principalmente em ruas e ateliês; confirme horários e acesso local.",
      "url": "https://www.google.com/maps/search/?api=1&query=Bichinho+Prados+MG",
      "guideBriefing": "Bichinho, distrito de Prados oficialmente chamado Vitoriano Veloso, está ligado ao antigo caminho entre os núcleos mineradores do Campo das Vertentes. A região preservou tradições artesanais que ganharam nova projeção no fim do século XX com oficinas de madeira, metal, pintura e objetos decorativos. A parada mostra a continuidade e reinvenção do trabalho manual mineiro fora dos grandes centros históricos.",
      "profile": "Artesanato · cultura popular",
      "attractions": [
        {
          "name": "Oficina de Agosto",
          "description": "Oficina que ajudou a transformar Bichinho em polo de artesanato e design, trabalhando madeira, metal, tecido e materiais reaproveitados. É um dos nomes que consolidaram a vila como extensão artística de Tiradentes.",
          "agencyRationale": "É um dos nomes que consolidaram a vila como extensão artística de Tiradentes.",
          "visitType": "Ateliê / compras",
          "estimatedDuration": "1 h",
          "publishedDuration": "—",
          "oneYearOld": "—",
          "access": {
            "level": "unknown",
            "label": "A confirmar",
            "description": "Visita a ateliê para conhecer o trabalho e fazer compras. Confirme o estabelecimento, entrada, degraus e circulação; as condições de acesso não estão detalhadas."
          },
          "lat": -21.0915526,
          "lon": -44.1272952,
          "locationAccuracy": "exact",
          "days": "1 h",
          "relevanceSource": "agency",
          "mapQuery": "Oficina de Agosto, Rua São Bento 668, Bichinho, Prados MG",
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "indeterminado"
          },
          "locality": "Bichinho",
          "kind": "atracao",
          "type": "historia"
        },
        {
          "name": "Ateliês e oficinas",
          "description": "Pequenos produtores trabalham móveis, esculturas, cerâmica, madeira e objetos decorativos; a graça é visitar os locais de produção. Mostra uma cultura artesanal viva, e não apenas patrimônio antigo.",
          "agencyRationale": "Mostra uma cultura artesanal viva, e não apenas patrimônio antigo.",
          "visitType": "Ateliês / compras",
          "estimatedDuration": "1h30–2 h",
          "publishedDuration": "—",
          "oneYearOld": "—",
          "access": {
            "level": "unknown",
            "label": "A confirmar",
            "description": "Visita a ateliê para conhecer o trabalho e fazer compras. Confirme o estabelecimento, entrada, degraus e circulação; as condições de acesso não estão detalhadas."
          },
          "lat": -21.099115,
          "lon": -44.117586,
          "locationAccuracy": "city-center",
          "days": "1h30–2 h",
          "relevanceSource": "agency",
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "indeterminado"
          },
          "locality": "Bichinho",
          "mapQuery": "Ateliês e oficinas, Prados MG",
          "kind": "atracao",
          "type": "historia"
        },
        {
          "name": "Cachaçarias e produtos locais",
          "description": "Produção artesanal regional que pode ser conhecida e degustada no próprio distrito. Complementa o passeio com gastronomia e produção local.",
          "agencyRationale": "Complementa o passeio com gastronomia e produção local.",
          "visitType": "Degustação / compras",
          "estimatedDuration": "1 h",
          "publishedDuration": "—",
          "oneYearOld": "—",
          "access": {
            "level": "unknown",
            "label": "A confirmar",
            "description": "Degustação e compras no produtor ou estabelecimento escolhido. Confirme estrada, entrada e circulação; não há um percurso único documentado."
          },
          "lat": -21.099115,
          "lon": -44.117586,
          "locationAccuracy": "city-center",
          "days": "1 h",
          "relevanceSource": "agency",
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "indeterminado"
          },
          "locality": "Bichinho",
          "mapQuery": "Cachaçarias e produtos locais, Prados MG",
          "kind": "atracao",
          "type": "gastronomia"
        }
      ],
      "relevanceSource": "agency",
      "ageClassification": {
        "status": "indeterminada"
      },
      "ticket": {
        "status": "por_passeio"
      },
      "stayDays": [
        0.5,
        1
      ],
      "municipality": "Prados",
      "mapQuery": "Bichinho, Prados MG"
    },
    {
      "id": "catasaltas",
      "name": "Catas Altas",
      "lat": -20.074754,
      "lon": -43.408165,
      "kind": "cidade",
      "canHostStay": true,
      "type": "historia",
      "days": "½–1 dia",
      "sights": [
        "Centro Histórico",
        "Matriz de Nossa Senhora da Conceição",
        "Serra do Caraça",
        "Santuário e igreja neogótica · Caraça",
        "Ruínas do antigo colégio · Caraça",
        "Trilhas, cachoeiras e grutas · Caraça",
        "Observação do lobo-guará · Caraça"
      ],
      "kid": "Centro tem calçamento; trilhas na serra exigem checagem individual de percurso e esforço.",
      "url": "https://www.google.com/maps/search/?api=1&query=Catas+Altas+MG",
      "guideBriefing": "Catas Altas surgiu no início do século XVIII com a exploração de ouro aos pés da Serra do Caraça. O núcleo histórico preserva a relação entre mineração, religiosidade e uma paisagem montanhosa que sempre condicionou a cidade. A proximidade do Caraça e a tradição posterior de produção de vinho e outros produtos rurais ampliam essa leitura histórica.\n\nCaraça: O Caraça reúne história religiosa, educação e conservação ambiental em uma antiga propriedade transformada em centro de formação no século XIX. O colégio recebeu gerações de alunos até o incêndio de 1968, cujas ruínas permanecem preservadas. Ao redor do santuário, a reserva protege Mata Atlântica, Cerrado e campos rupestres; a presença do lobo-guará tornou-se uma das imagens mais conhecidas do lugar.",
      "profile": "História · montanha · gastronomia",
      "attractions": [
        {
          "name": "Centro Histórico",
          "description": "Pequeno núcleo colonial aos pés de enormes paredões da Serra do Caraça. O contraste entre casario e montanha é a principal característica da cidade. É uma parada visualmente forte e fácil de combinar com Caraça e Santa Bárbara.",
          "agencyRationale": "É uma parada visualmente forte e fácil de combinar com Caraça e Santa Bárbara.",
          "visitType": "A pé / externa",
          "estimatedDuration": "2–3 h",
          "publishedDuration": "—",
          "oneYearOld": "—",
          "access": {
            "level": "easy",
            "label": "Mais fácil em trecho curto",
            "description": "Visita externa ao centro histórico. A estimativa considera caminhada curta; confirme calçamento, degraus e desníveis do circuito escolhido."
          },
          "lat": -20.074754,
          "lon": -43.408165,
          "locationAccuracy": "city-center",
          "days": "2–3 h",
          "relevanceSource": "agency",
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "indeterminado"
          },
          "kind": "atracao",
          "type": "historia"
        },
        {
          "name": "Matriz de Nossa Senhora da Conceição",
          "description": "Igreja setecentista que domina a praça central e preserva elementos artísticos do período colonial. É o principal marco histórico do pequeno centro.",
          "agencyRationale": "É o principal marco histórico do pequeno centro.",
          "visitType": "Igreja / interna",
          "estimatedDuration": "30 min",
          "publishedDuration": "—",
          "oneYearOld": "—",
          "access": {
            "level": "unknown",
            "label": "A confirmar",
            "description": "Visita interna à igreja. Confirme entrada, degraus e circulação; o cadastro não documenta as condições de acesso."
          },
          "lat": -20.075071,
          "lon": -43.408285,
          "locationAccuracy": "exact",
          "days": "30 min",
          "relevanceSource": "agency",
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "indeterminado"
          },
          "kind": "atracao",
          "type": "historia"
        },
        {
          "name": "Serra do Caraça",
          "description": "Maciço montanhoso que forma o cenário da cidade e oferece trilhas e paisagens. Liga a cidade histórica ao circuito natural do Caraça.",
          "agencyRationale": "Liga a cidade histórica ao circuito natural do Caraça.",
          "visitType": "Natureza / trilha",
          "estimatedDuration": "meio dia",
          "publishedDuration": "—",
          "oneYearOld": "—",
          "access": {
            "level": "unknown",
            "label": "A confirmar",
            "description": "Passeio de natureza com percursos diferentes. Confirme trilha ou atrativo escolhido, distância, terreno, desnível e condições da visita; não há uma dificuldade única documentada."
          },
          "lat": -20.074754,
          "lon": -43.408165,
          "locationAccuracy": "city-center",
          "days": "meio dia",
          "relevanceSource": "agency",
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "indeterminado"
          },
          "kind": "atracao",
          "type": "natureza"
        },
        {
          "name": "Santuário e igreja neogótica · Caraça",
          "description": "Localidade: Caraça, município de Catas Altas. Complexo religioso isolado em um vale cercado por montanhas. A igreja neogótica contrasta com o barroco predominante nas outras cidades do roteiro. Roteiros organizados reservam tempo ao Caraça porque hospedagem, santuário, história e reserva natural acontecem no mesmo lugar. É uma mudança completa de ritmo em relação aos city tours.",
          "agencyRationale": "Agências reservam tempo ao Caraça porque hospedagem, santuário, história e reserva natural acontecem no mesmo lugar. É uma mudança completa de ritmo em relação aos city tours.",
          "visitType": "Complexo / interna + externa",
          "estimatedDuration": "2 h",
          "publishedDuration": "—",
          "oneYearOld": "—",
          "access": {
            "level": "easy",
            "label": "Mais fácil no santuário",
            "description": "A estimativa considera a visita ao santuário e à igreja, sem incluir trilhas da serra. Confirme entrada, degraus e circulação interna; a classificação não comprova acesso sem barreiras."
          },
          "lat": -20.0975,
          "lon": -43.48842,
          "locationAccuracy": "exact",
          "days": "2 h",
          "relevanceSource": "agency",
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "indeterminado"
          },
          "locality": "Caraça",
          "mapQuery": "Santuário e igreja neogótica, Caraça, Catas Altas MG",
          "catalogName": "Santuário e igreja neogótica · Caraça",
          "kind": "atracao",
          "type": "historia"
        },
        {
          "name": "Ruínas do antigo colégio · Caraça",
          "description": "Localidade: Caraça, município de Catas Altas. Restos preservados do tradicional colégio destruído por incêndio em 1968, que formou figuras importantes da história brasileira. Acrescentam história educacional ao conjunto religioso.",
          "agencyRationale": "Acrescentam história educacional ao conjunto religioso.",
          "visitType": "Histórica / caminhada",
          "estimatedDuration": "40 min",
          "publishedDuration": "—",
          "oneYearOld": "—",
          "access": {
            "level": "unknown",
            "label": "A confirmar",
            "description": "Visita histórica com caminhada pelas áreas permitidas. Confirme terreno, desníveis e limites da visita; as condições de acesso não estão detalhadas."
          },
          "lat": -20.0975,
          "lon": -43.48842,
          "locationAccuracy": "exact",
          "days": "40 min",
          "relevanceSource": "agency",
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "indeterminado"
          },
          "locality": "Caraça",
          "mapQuery": "Ruínas do antigo colégio, Caraça, Catas Altas MG",
          "catalogName": "Ruínas do antigo colégio · Caraça",
          "kind": "atracao",
          "type": "historia"
        },
        {
          "name": "Trilhas, cachoeiras e grutas · Caraça",
          "description": "Localidade: Caraça, município de Catas Altas. A reserva particular protege milhares de hectares de Mata Atlântica e Cerrado em relevo montanhoso. Permite dedicar um ou dois dias a natureza dentro do circuito histórico.",
          "agencyRationale": "Permite dedicar um ou dois dias a natureza dentro do circuito histórico.",
          "visitType": "Natureza / trilha",
          "estimatedDuration": "meio dia",
          "publishedDuration": "—",
          "oneYearOld": "—",
          "access": {
            "level": "unknown",
            "label": "A confirmar",
            "description": "Passeio de natureza com percursos diferentes. Confirme trilha ou atrativo escolhido, distância, terreno, desnível e condições da visita; não há uma dificuldade única documentada."
          },
          "lat": -20.098103,
          "lon": -43.487693,
          "locationAccuracy": "city-center",
          "days": "meio dia",
          "relevanceSource": "agency",
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "indeterminado"
          },
          "locality": "Caraça",
          "mapQuery": "Trilhas, cachoeiras e grutas, Caraça, Catas Altas MG",
          "catalogName": "Trilhas, cachoeiras e grutas · Caraça",
          "kind": "atracao",
          "type": "natureza"
        },
        {
          "name": "Observação do lobo-guará · Caraça",
          "description": "Localidade: Caraça, município de Catas Altas. O santuário tornou-se famoso pela visita noturna de lobos-guarás atraídos para a área próxima à escadaria. A aparição não é garantida, pois são animais silvestres. É uma experiência emblemática que diferencia o Caraça de qualquer outra parada do roteiro.",
          "agencyRationale": "É uma experiência emblemática que diferencia o Caraça de qualquer outra parada do roteiro.",
          "visitType": "Observação noturna",
          "estimatedDuration": "noite / requer pernoite",
          "publishedDuration": "A partir de 19h30; duração indeterminada",
          "oneYearOld": "Sim, acompanhada — Caraça admite crianças e isenta até 5 anos",
          "access": {
            "level": "unknown",
            "label": "Espera noturna",
            "description": "Observação noturna próxima à escadaria do santuário, com espera que pode ser longa e aparição não garantida. Confirme percurso, acomodação e possibilidade de permanecer durante a espera; o esforço físico não está documentado."
          },
          "lat": -20.0975,
          "lon": -43.48842,
          "locationAccuracy": "exact",
          "days": "noite / requer pernoite",
          "relevanceSource": "agency",
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "indeterminado"
          },
          "locality": "Caraça",
          "mapQuery": "Observação do lobo-guará, Caraça, Catas Altas MG",
          "catalogName": "Observação do lobo-guará · Caraça",
          "kind": "atracao",
          "type": "natureza"
        }
      ],
      "relevanceSource": "guide",
      "ageClassification": {
        "status": "indeterminada"
      },
      "ticket": {
        "status": "por_passeio"
      },
      "stayDays": [
        0.5,
        1
      ],
      "municipality": "Catas Altas"
    },
    {
      "id": "santabarbara",
      "name": "Santa Bárbara",
      "lat": -19.958721,
      "lon": -43.413154,
      "kind": "cidade",
      "canHostStay": true,
      "type": "historia",
      "days": "½–1 dia",
      "sights": [
        "Matriz de Santo Antônio",
        "Centro Histórico"
      ],
      "kid": "Confirme abertura das igrejas e condições de acesso antes da visita.",
      "url": "https://www.google.com/maps/search/?api=1&query=Santa+Barbara+MG",
      "guideBriefing": "Santa Bárbara foi fundada no início do século XVIII durante a expansão da mineração pelo vale do Rio das Velhas e pelas encostas do Caraça. Seu centro histórico e a Matriz de Santo Antônio preservam elementos desse período. A cidade também funciona como ligação histórica e geográfica para o Caraça e para antigos distritos mineradores da região.",
      "profile": "História · barroco · natureza",
      "attractions": [
        {
          "name": "Matriz de Santo Antônio",
          "description": "Igreja setecentista cujo teto da capela-mor possui pintura de Mestre Ataíde. Coloca uma obra importante de Ataíde fora do eixo mais óbvio Ouro Preto–Mariana.",
          "agencyRationale": "Coloca uma obra importante de Ataíde fora do eixo mais óbvio Ouro Preto–Mariana.",
          "visitType": "Igreja / interna",
          "estimatedDuration": "45 min",
          "publishedDuration": "—",
          "oneYearOld": "—",
          "access": {
            "level": "unknown",
            "label": "A confirmar",
            "description": "Visita interna à igreja. Confirme entrada, degraus e circulação; o cadastro não documenta as condições de acesso."
          },
          "lat": -19.95968,
          "lon": -43.41726,
          "locationAccuracy": "exact",
          "days": "45 min",
          "relevanceSource": "agency",
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "indeterminado"
          },
          "kind": "atracao",
          "type": "historia"
        },
        {
          "name": "Centro Histórico",
          "description": "Casario e igrejas ligados à expansão da mineração no início do século XVIII. Funciona como cidade histórica e porta de entrada para o Caraça.",
          "agencyRationale": "Funciona como cidade histórica e porta de entrada para o Caraça.",
          "visitType": "A pé / externa",
          "estimatedDuration": "2–3 h",
          "publishedDuration": "—",
          "oneYearOld": "—",
          "access": {
            "level": "easy",
            "label": "Mais fácil em trecho curto",
            "description": "Visita externa ao centro histórico. A estimativa considera caminhada curta; confirme calçamento, degraus e desníveis do circuito escolhido."
          },
          "lat": -19.958721,
          "lon": -43.413154,
          "locationAccuracy": "city-center",
          "days": "2–3 h",
          "relevanceSource": "agency",
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "indeterminado"
          },
          "kind": "atracao",
          "type": "historia"
        }
      ],
      "relevanceSource": "guide",
      "ageClassification": {
        "status": "indeterminada"
      },
      "ticket": {
        "status": "por_passeio"
      },
      "stayDays": [
        0.5,
        1
      ]
    },
    {
      "id": "sabara",
      "name": "Sabará",
      "lat": -19.890037,
      "lon": -43.810792,
      "kind": "cidade",
      "canHostStay": true,
      "type": "historia",
      "days": "½–1 dia",
      "sights": [
        "Igreja Nossa Senhora do Ó",
        "Igreja Nossa Senhora do Carmo",
        "Matriz Nossa Senhora da Conceição",
        "Teatro Municipal",
        "Solar do Padre Correia",
        "Chafariz do Kaquende"
      ],
      "kid": "Centro histórico com calçamento; verifique abertura e acessibilidade de cada edifício.",
      "url": "https://www.google.com/maps/search/?api=1&query=Sabara+MG",
      "guideBriefing": "Sabará, antiga Vila Real de Nossa Senhora da Conceição do Sabará, foi um dos primeiros grandes núcleos do ciclo do ouro em Minas. Sua posição no vale do Rio das Velhas fez dela centro administrativo e comercial. Igrejas, chafarizes, sobrados e teatro permitem acompanhar a riqueza mineradora, as irmandades religiosas, a presença negra e a vida urbana para além dos monumentos mais famosos.",
      "profile": "Barroco · história colonial",
      "attractions": [
        {
          "name": "Igreja Nossa Senhora do Ó",
          "description": "Pequena igreja do início do século XVIII com interior ricamente decorado e pinturas de influência oriental, incomuns no barroco mineiro. É pequena, singular e muito diferente das grandes matrizes do circuito.",
          "agencyRationale": "É pequena, singular e muito diferente das grandes matrizes do circuito.",
          "visitType": "Igreja / interna",
          "estimatedDuration": "30 min",
          "publishedDuration": "—",
          "oneYearOld": "—",
          "access": {
            "level": "easy",
            "label": "Mais fácil na visita",
            "description": "A estimativa considera uma visita curta ao templo. Confirme degraus, entrada e circulação interna, além de calçamento e ladeiras no trajeto; o cadastro não comprova um percurso sem barreiras."
          },
          "lat": -19.884687,
          "lon": -43.796257,
          "locationAccuracy": "exact",
          "days": "30 min",
          "relevanceSource": "agency",
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "indeterminado"
          },
          "kind": "atracao",
          "type": "historia"
        },
        {
          "name": "Igreja Nossa Senhora do Carmo",
          "description": "Igreja com elementos escultóricos associados a Aleijadinho. Permite contato com obras do artista muito perto de Belo Horizonte.",
          "agencyRationale": "Permite contato com obras do artista muito perto de Belo Horizonte.",
          "visitType": "Igreja / interna",
          "estimatedDuration": "30 min",
          "publishedDuration": "—",
          "oneYearOld": "—",
          "access": {
            "level": "easy",
            "label": "Mais fácil na visita",
            "description": "A estimativa considera uma visita curta ao templo. Confirme degraus, entrada e circulação interna, além de calçamento e ladeiras no trajeto; o cadastro não comprova um percurso sem barreiras."
          },
          "lat": -19.889894,
          "lon": -43.806539,
          "locationAccuracy": "exact",
          "days": "30 min",
          "relevanceSource": "agency",
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "indeterminado"
          },
          "kind": "atracao",
          "type": "historia"
        },
        {
          "name": "Matriz Nossa Senhora da Conceição",
          "description": "Grande templo que reúne diferentes fases da decoração colonial e ajuda a perceber a evolução do barroco mineiro. É uma das igrejas historicamente mais importantes da antiga Vila Real de Sabará.",
          "agencyRationale": "É uma das igrejas historicamente mais importantes da antiga Vila Real de Sabará.",
          "visitType": "Igreja / interna",
          "estimatedDuration": "45 min",
          "publishedDuration": "—",
          "oneYearOld": "—",
          "access": {
            "level": "unknown",
            "label": "A confirmar",
            "description": "Visita interna à igreja. Confirme entrada, degraus e circulação; o cadastro não documenta as condições de acesso."
          },
          "lat": -19.885272,
          "lon": -43.799944,
          "locationAccuracy": "exact",
          "days": "45 min",
          "relevanceSource": "agency",
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "indeterminado"
          },
          "kind": "atracao",
          "type": "historia"
        },
        {
          "name": "Teatro Municipal",
          "description": "Teatro histórico do século XIX, raro exemplar preservado desse tipo de equipamento cultural. Diversifica a visita para além de igrejas.",
          "agencyRationale": "Diversifica a visita para além de igrejas.",
          "visitType": "Interna / visita",
          "estimatedDuration": "40 min",
          "publishedDuration": "—",
          "oneYearOld": "—",
          "access": {
            "level": "unknown",
            "label": "A confirmar",
            "description": "Visita ao imóvel histórico. Confirme áreas abertas ao público, entrada, degraus e circulação interna; as condições de acesso não estão detalhadas."
          },
          "lat": -19.891088,
          "lon": -43.810676,
          "locationAccuracy": "exact",
          "days": "40 min",
          "relevanceSource": "agency",
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "indeterminado"
          },
          "kind": "atracao",
          "type": "historia"
        },
        {
          "name": "Solar do Padre Correia",
          "description": "Grande sobrado do século XVIII ligado à elite local e à administração da antiga vila. A arquitetura doméstica mostra como viviam famílias de posição elevada durante o ciclo do ouro. A Primotur o coloca no city tour porque acrescenta arquitetura civil a um roteiro que poderia ficar restrito a igrejas.",
          "agencyRationale": "A Primotur o coloca no city tour porque acrescenta arquitetura civil a um roteiro que poderia ficar restrito a igrejas.",
          "visitType": "Visita turística",
          "estimatedDuration": "1 h",
          "publishedDuration": "—",
          "oneYearOld": "—",
          "access": {
            "level": "unknown",
            "label": "A confirmar",
            "description": "Visita ao imóvel histórico. Confirme áreas abertas ao público, entrada, degraus e circulação interna; as condições de acesso não estão detalhadas."
          },
          "lat": -19.892271,
          "lon": -43.810985,
          "locationAccuracy": "exact",
          "days": "1 h",
          "relevanceSource": "agency",
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "indeterminado"
          },
          "kind": "atracao",
          "type": "historia"
        },
        {
          "name": "Igreja Nossa Senhora do Rosário dos Pretos",
          "description": "Igreja iniciada pela irmandade negra e marcada por uma história construtiva longa. É testemunho material da presença e organização da população negra em Sabará. Roteiros organizados a incluem para contar a cidade também pela experiência das irmandades negras e da sociedade escravista.",
          "agencyRationale": "Agências a incluem para contar a cidade também pela experiência das irmandades negras e da sociedade escravista.",
          "visitType": "Visita turística",
          "estimatedDuration": "1 h",
          "publishedDuration": "—",
          "oneYearOld": "—",
          "access": {
            "level": "easy",
            "label": "Mais fácil na visita",
            "description": "A estimativa considera uma visita curta ao templo. Confirme degraus, entrada e circulação interna, além de calçamento e ladeiras no trajeto; o cadastro não comprova um percurso sem barreiras."
          },
          "lat": -19.889975,
          "lon": -43.810838,
          "locationAccuracy": "exact",
          "days": "1 h",
          "relevanceSource": "agency",
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "indeterminado"
          },
          "kind": "atracao",
          "type": "historia"
        },
        {
          "name": "Chafariz do Kaquende",
          "description": "Chafariz público histórico que abasteceu moradores da antiga vila. É um vestígio simples, mas muito concreto, da infraestrutura cotidiana colonial. Funciona como parada curta que ajuda o guia a explicar como a cidade operava no dia a dia, fora dos edifícios monumentais.",
          "agencyRationale": "Funciona como parada curta que ajuda o guia a explicar como a cidade operava no dia a dia, fora dos edifícios monumentais.",
          "visitType": "Visita turística",
          "estimatedDuration": "1 h",
          "publishedDuration": "—",
          "oneYearOld": "—",
          "access": {
            "level": "unknown",
            "label": "A confirmar",
            "description": "Visita externa ao ponto histórico. Confirme calçamento, desníveis e extensão da caminhada; o cadastro não documenta o esforço do percurso."
          },
          "lat": -19.89292,
          "lon": -43.812866,
          "locationAccuracy": "exact",
          "days": "1 h",
          "relevanceSource": "agency",
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "indeterminado"
          },
          "kind": "atracao",
          "type": "historia"
        },
        {
          "name": "Rua Dom Pedro II",
          "description": "Rua histórica cercada por casario e edifícios civis, usada como eixo de caminhada pelo centro. Está nos roteiros porque conecta as atrações e permite observar a escala urbana e a arquitetura civil de Sabará durante o próprio deslocamento.",
          "agencyRationale": "Está nos roteiros porque conecta as atrações e permite observar a escala urbana e a arquitetura civil de Sabará durante o próprio deslocamento.",
          "visitType": "Visita turística",
          "estimatedDuration": "1 h",
          "publishedDuration": "—",
          "oneYearOld": "—",
          "access": {
            "level": "unknown",
            "label": "A confirmar",
            "description": "Visita externa ao ponto histórico. Confirme calçamento, desníveis e extensão da caminhada; o cadastro não documenta o esforço do percurso."
          },
          "lat": -19.8924009,
          "lon": -43.8110473,
          "locationAccuracy": "street-center",
          "days": "1 h",
          "relevanceSource": "agency",
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "indeterminado"
          },
          "kind": "atracao",
          "type": "historia"
        }
      ],
      "relevanceSource": "agency",
      "ageClassification": {
        "status": "indeterminada"
      },
      "ticket": {
        "status": "por_passeio"
      },
      "stayDays": [
        0.5,
        1
      ]
    },
    {
      "id": "caete",
      "name": "Caeté · Serra da Piedade",
      "lat": -19.897777,
      "lon": -43.670278,
      "kind": "cidade",
      "canHostStay": true,
      "type": "natureza",
      "days": "½–1 dia",
      "sights": [
        "Serra da Piedade",
        "Santuário Nossa Senhora da Piedade"
      ],
      "kid": "A visita ao topo envolve estrada e caminhada; confirme condições de acesso e alternativas sem degraus.",
      "url": "https://www.google.com/maps/search/?api=1&query=Serra+da+Piedade+Caete",
      "guideBriefing": "Caeté nasceu no ciclo do ouro e ocupa uma região dominada pela Serra da Piedade. No alto da serra, a devoção a Nossa Senhora da Piedade consolidou um dos principais santuários de Minas. A montanha reúne patrimônio religioso, história das peregrinações e uma leitura ampla da geografia do Quadrilátero Ferrífero.",
      "profile": "Religiosidade · montanha · história",
      "attractions": [
        {
          "name": "Serra da Piedade",
          "description": "Pico com vista panorâmica excepcional sobre as montanhas mineiras; em dias claros, o horizonte alcança dezenas de quilômetros. É uma das grandes paradas paisagísticas próximas de Belo Horizonte.",
          "agencyRationale": "É uma das grandes paradas paisagísticas próximas de Belo Horizonte.",
          "visitType": "Mirante + caminhada",
          "estimatedDuration": "2 h",
          "publishedDuration": "—",
          "oneYearOld": "—",
          "access": {
            "level": "unknown",
            "label": "A confirmar",
            "description": "Visita ao mirante com caminhada. Confirme estrada, trecho a pé, desníveis e condições do percurso; a dificuldade não está documentada no cadastro."
          },
          "lat": -19.822779,
          "lon": -43.675617,
          "locationAccuracy": "exact",
          "days": "2 h",
          "relevanceSource": "agency",
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "indeterminado"
          },
          "kind": "atracao",
          "type": "natureza"
        },
        {
          "name": "Santuário Nossa Senhora da Piedade",
          "description": "Pequeno santuário histórico no topo da serra, importante centro de peregrinação e sede da padroeira de Minas Gerais. Une paisagem, religiosidade e patrimônio em uma única parada.",
          "agencyRationale": "Une paisagem, religiosidade e patrimônio em uma única parada.",
          "visitType": "Santuário / interna",
          "estimatedDuration": "1 h",
          "publishedDuration": "—",
          "oneYearOld": "—",
          "access": {
            "level": "unknown",
            "label": "A confirmar",
            "description": "Visita interna ao santuário. Confirme chegada, entrada, degraus e circulação; o cadastro não detalha o esforço de acesso."
          },
          "lat": -19.822779,
          "lon": -43.675617,
          "locationAccuracy": "exact",
          "days": "1 h",
          "relevanceSource": "agency",
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "indeterminado"
          },
          "sameSiteAs": "Serra da Piedade",
          "mapQuery": "Santuário Nossa Senhora da Piedade Caeté MG",
          "visitLinks": [
            {
              "label": "Santuário · Arquidiocese de Belo Horizonte",
              "url": "https://arquidiocesebh.org.br/arquidiocese/santuarios/santuario-basilica-nossa-senhora-da-piedade/"
            },
            {
              "label": "Visitação e agendamento · Santuário",
              "url": "https://santuarionossasenhoradapiedade.arquidiocesebh.org.br/santuario/visitas/"
            }
          ],
          "kind": "atracao",
          "type": "historia"
        }
      ],
      "relevanceSource": "guide",
      "ageClassification": {
        "status": "indeterminada"
      },
      "ticket": {
        "status": "por_passeio"
      },
      "stayDays": [
        0.5,
        1
      ],
      "municipality": "Caeté"
    },
    {
      "id": "peiro",
      "name": "Uberaba · Peirópolis",
      "lat": -19.74364,
      "lon": -47.74276,
      "kind": "cidade",
      "canHostStay": true,
      "type": "historia",
      "days": "1–2 h",
      "sights": [
        "Museu dos Dinossauros / Complexo Cultural e Científico de Peirópolis",
        "Geossítio de Peirópolis"
      ],
      "kid": "Visitas externas podem ter piso irregular; confirme acessibilidade e condições do trajeto com o CCCP/UFTM.",
      "url": "https://www.uftm.edu.br/proext/cccp/museu-dos-dinossauros",
      "attractions": [
        {
          "name": "Museu dos Dinossauros / Complexo Cultural e Científico de Peirópolis",
          "description": "Museu ligado à UFTM em uma das áreas paleontológicas mais importantes do Brasil. O acervo e as exposições apresentam fósseis encontrados na região e reconstituições da fauna do Cretáceo, permitindo entender por que o Triângulo Mineiro é referência em paleontologia. É uma parada de alto valor educativo e visual praticamente no eixo da BR-262. Acrescenta ao roteiro um tema completamente diferente do barroco e da mineração colonial: a história natural de Minas milhões de anos antes da ocupação humana.",
          "agencyRationale": "É uma parada de alto valor educativo e visual praticamente no eixo da BR-262. Acrescenta ao roteiro um tema completamente diferente do barroco e da mineração colonial: a história natural de Minas milhões de anos antes da ocupação humana.",
          "visitType": "Museu / exposição interna e externa",
          "estimatedDuration": "1–2 h",
          "publishedDuration": "—",
          "oneYearOld": "Sim",
          "access": {
            "level": "unknown",
            "label": "Áreas internas e externas",
            "description": "O cadastro registra recursos de acessibilidade no estacionamento, na entrada e no sanitário. A exposição inclui áreas internas e externas; confirme circulação e terreno das áreas externas. O esforço físico do conjunto não está documentado."
          },
          "lat": -19.7442903,
          "lon": -47.7424457,
          "days": "1–2 h",
          "locationAccuracy": "exact",
          "relevanceSource": "agency",
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "indeterminado"
          },
          "locality": "Peirópolis",
          "mapQuery": "Museu dos Dinossauros / Complexo Cultural e Científico de Peirópolis, Uberaba MG",
          "kind": "atracao",
          "type": "historia",
          "selectedByDefault": true,
          "required": false
        },
        {
          "name": "Geossítio de Peirópolis",
          "description": "Área onde a paisagem e os achados fósseis ajudam a conectar o museu ao local real das pesquisas paleontológicas. Peirópolis reúne patrimônio científico, antiga estação ferroviária e memória da comunidade que se desenvolveu no entorno. Complementa o museu sem exigir um grande desvio rodoviário e transforma a parada em experiência de território, não apenas de exposição.",
          "agencyRationale": "Complementa o museu sem exigir um grande desvio rodoviário e transforma a parada em experiência de território, não apenas de exposição.",
          "visitType": "Área externa / caminhada",
          "estimatedDuration": "30–60 min",
          "publishedDuration": "—",
          "oneYearOld": "Sim, com acompanhamento",
          "access": {
            "level": "unknown",
            "label": "A confirmar",
            "description": "Área geológica extensa, com acessos por estrada e trilhas. Confirme o ponto de visita, extensão da caminhada, terreno e condições locais; não há esforço único documentado para toda a área."
          },
          "lat": -19.742990494,
          "lon": -47.743080139,
          "days": "30–60 min",
          "type": "natureza",
          "locationAccuracy": "exact",
          "relevanceSource": "agency",
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "indeterminado"
          },
          "locality": "Peirópolis",
          "mapQuery": "Geossítio de Peirópolis, Uberaba MG",
          "kind": "atracao",
          "selectedByDefault": true,
          "required": false
        }
      ],
      "guideBriefing": "Peirópolis, distrito rural de Uberaba, tornou-se referência paleontológica a partir das pesquisas iniciadas na região na década de 1940. As rochas do Triângulo Mineiro preservaram fósseis do Cretáceo, incluindo dinossauros e outros animais. O antigo núcleo ferroviário passou a abrigar pesquisa, museu e educação científica, aproximando o visitante do território onde os fósseis são encontrados e estudados.",
      "profile": "Paleontologia, geologia e história científica",
      "relevanceSource": "guide",
      "ageClassification": {
        "status": "indeterminada"
      },
      "ticket": {
        "status": "por_passeio"
      },
      "municipality": "Uberaba",
      "mapQuery": "Peirópolis, Uberaba MG",
      "initialDate": "2026-10-07",
      "selectedByDefault": true
    },
    {
      "id": "araxa",
      "name": "Araxá",
      "lat": -19.600915,
      "lon": -46.940923,
      "kind": "cidade",
      "canHostStay": true,
      "type": "historia",
      "days": "1 dia",
      "sights": [
        "Grande Hotel e Termas de Araxá",
        "Complexo do Barreiro",
        "Museu Dona Beja",
        "Museu Calmon Barreto / Memorial de Araxá",
        "Igreja de São Domingos",
        "Parque do Cristo",
        "Fontes Dona Beja e Andrade Júnior"
      ],
      "kid": "Confirme horários, serviços termais e acessibilidade diretamente com os atrativos.",
      "url": "https://www.google.com/maps/search/?api=1&query=Arax%C3%A1+MG",
      "attractions": [
        {
          "name": "Grande Hotel e Termas de Araxá",
          "description": "Complexo monumental inaugurado na década de 1940 para transformar Araxá em destino termal de luxo. Arquitetura, jardins e interiores fazem a visita valer mesmo sem usar os serviços termais. Araxá aparece como etapa porque possui infraestrutura e uma atração monumental capaz de justificar o desvio. O Grande Hotel também conta a história do auge brasileiro das estâncias hidrominerais.",
          "agencyRationale": "Araxá aparece como etapa porque possui infraestrutura e uma atração monumental capaz de justificar o desvio. O Grande Hotel também conta a história do auge brasileiro das estâncias hidrominerais.",
          "visitType": "Tour histórico / interna",
          "estimatedDuration": "2 h",
          "publishedDuration": "—",
          "oneYearOld": "—",
          "access": {
            "level": "unknown",
            "label": "A confirmar",
            "description": "Visita histórica interna ao complexo. Confirme entrada, espaços abertos ao público, degraus e circulação; o cadastro não documenta o esforço físico da visita."
          },
          "lat": -19.6469277,
          "lon": -46.9498159,
          "days": "2 h",
          "locationAccuracy": "exact",
          "relevanceSource": "agency",
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "indeterminado"
          },
          "kind": "atracao",
          "type": "historia",
          "initialDate": "2026-10-07",
          "selectedByDefault": true,
          "required": false
        },
        {
          "name": "Complexo do Barreiro",
          "description": "Área de fontes minerais, jardins e edifícios históricos que explica por que Araxá se tornou uma estância hidromineral. Dá contexto ao Grande Hotel e à origem do turismo local.",
          "agencyRationale": "Dá contexto ao Grande Hotel e à origem do turismo local.",
          "visitType": "Caminhada / externa",
          "estimatedDuration": "2 h",
          "publishedDuration": "—",
          "oneYearOld": "—",
          "access": {
            "level": "unknown",
            "label": "A confirmar",
            "description": "Visita externa com caminhada pelo complexo. Confirme o circuito, sua extensão, terreno e desníveis; o esforço depende das áreas escolhidas."
          },
          "lat": -19.6472115,
          "lon": -46.954839,
          "days": "2 h",
          "locationAccuracy": "exact",
          "relevanceSource": "agency",
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "indeterminado"
          },
          "kind": "atracao",
          "type": "historia"
        },
        {
          "name": "Museu Dona Beja",
          "description": "Museu instalado em casarão histórico ligado à memória de Ana Jacinta de São José, a Dona Beja, personagem cercada por história e lendas regionais. Acrescenta narrativa histórica e personagem local ao roteiro termal.",
          "agencyRationale": "Acrescenta narrativa histórica e personagem local ao roteiro termal.",
          "visitType": "Museu / interna",
          "estimatedDuration": "1 h",
          "publishedDuration": "—",
          "oneYearOld": "—",
          "access": {
            "level": "unknown",
            "label": "A confirmar",
            "description": "Visita interna ao museu. Confirme entrada, degraus e circulação; o cadastro não documenta o esforço do percurso."
          },
          "lat": -19.5898756,
          "lon": -46.9380426,
          "days": "1 h",
          "locationAccuracy": "exact",
          "relevanceSource": "agency",
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "indeterminado"
          },
          "kind": "atracao",
          "type": "historia"
        },
        {
          "name": "Museu Calmon Barreto / Memorial de Araxá",
          "description": "Equipamentos culturais dedicados à história local e à produção artística de Calmon Barreto, ajudando a entender Araxá além das termas e da figura de Dona Beja. Aparecem em roteiros turísticos oficiais como parte do núcleo histórico-cultural da cidade e dão contexto ao período anterior e paralelo ao desenvolvimento do Barreiro.",
          "agencyRationale": "Aparecem em roteiros turísticos oficiais como parte do núcleo histórico-cultural da cidade e dão contexto ao período anterior e paralelo ao desenvolvimento do Barreiro.",
          "visitType": "Museu / interna",
          "estimatedDuration": "30–60 min",
          "publishedDuration": "—",
          "oneYearOld": "Sim",
          "access": {
            "level": "unknown",
            "label": "A confirmar",
            "description": "Visita interna ao museu. Confirme entrada, degraus e circulação; o cadastro não documenta o esforço do percurso."
          },
          "lat": -19.586776,
          "lon": -46.9426564,
          "days": "30–60 min",
          "locationAccuracy": "exact",
          "relevanceSource": "agency",
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "indeterminado"
          },
          "kind": "atracao",
          "type": "historia"
        },
        {
          "name": "Igreja de São Domingos",
          "description": "Igreja histórica associada à formação religiosa e urbana de Araxá, preservando referências da arquitetura e religiosidade local. Integra circuitos culturais de Araxá e ajuda a conectar a história urbana ao restante do roteiro mineiro.",
          "agencyRationale": "Integra circuitos culturais de Araxá e ajuda a conectar a história urbana ao restante do roteiro mineiro.",
          "visitType": "Igreja / interna",
          "estimatedDuration": "20–30 min",
          "publishedDuration": "—",
          "oneYearOld": "Sim",
          "access": {
            "level": "easy",
            "label": "Mais fácil na visita",
            "description": "A estimativa considera uma visita curta ao templo. Confirme degraus, entrada e circulação interna, além de calçamento e ladeiras no trajeto; o cadastro não comprova um percurso sem barreiras."
          },
          "lat": -19.5927815,
          "lon": -46.9409702,
          "days": "20–30 min",
          "locationAccuracy": "exact",
          "relevanceSource": "agency",
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "indeterminado"
          },
          "kind": "atracao",
          "type": "historia"
        },
        {
          "name": "Parque do Cristo",
          "description": "Mirante elevado sobre Araxá, com vista panorâmica da cidade e do entorno. Funciona como parada curta de leitura da paisagem e orientação geográfica antes ou depois das atrações históricas.",
          "agencyRationale": "Funciona como parada curta de leitura da paisagem e orientação geográfica antes ou depois das atrações históricas.",
          "visitType": "Mirante / externa",
          "estimatedDuration": "30–60 min",
          "publishedDuration": "—",
          "oneYearOld": "Sim, com acompanhamento",
          "access": {
            "level": "unknown",
            "label": "Mirante elevado",
            "description": "Mirante em área elevada. Confirme a forma de chegada, a rota sem escadas e as condições do trecho a pé; o esforço não está documentado."
          },
          "lat": -19.5837868,
          "lon": -46.9345619,
          "days": "30–60 min",
          "type": "natureza",
          "locationAccuracy": "exact",
          "relevanceSource": "agency",
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "indeterminado"
          },
          "kind": "atracao"
        },
        {
          "name": "Fontes Dona Beja e Andrade Júnior",
          "description": "Fontes minerais do Barreiro ligadas à tradição hidrotermal que transformou Araxá em destino de águas e levou à construção do grande complexo turístico. São parte essencial da narrativa das águas minerais; explicam por que o Barreiro e o Grande Hotel existem naquele local.",
          "agencyRationale": "São parte essencial da narrativa das águas minerais; explicam por que o Barreiro e o Grande Hotel existem naquele local.",
          "visitType": "Fonte / parque / externa",
          "estimatedDuration": "20–40 min",
          "publishedDuration": "—",
          "oneYearOld": "Sim",
          "access": {
            "level": "unknown",
            "label": "A confirmar",
            "description": "Fontes dentro do complexo do Barreiro. Confirme o percurso, a entrada e as condições de circulação com o operador; o esforço não está documentado."
          },
          "lat": -19.64819425,
          "lon": -46.94960645,
          "days": "20–40 min",
          "type": "natureza",
          "locationAccuracy": "exact",
          "relevanceSource": "agency",
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "indeterminado"
          },
          "kind": "atracao"
        }
      ],
      "guideBriefing": "Araxá se desenvolveu em torno de atividades rurais e das águas minerais do Barreiro, conhecidas muito antes da consolidação do turismo termal. No século XX, o Estado transformou essas águas em projeto turístico de grande escala, culminando no Grande Hotel e nas Termas, inaugurados na década de 1940. A cidade permite relacionar história regional, termalismo, arquitetura e a construção de uma estância de luxo no interior do país.",
      "profile": "Termalismo · arquitetura · história",
      "relevanceSource": "guide",
      "ageClassification": {
        "status": "indeterminada"
      },
      "ticket": {
        "status": "por_passeio"
      },
      "stayDays": [
        1,
        1
      ],
      "initialDate": "2026-10-07",
      "selectedByDefault": true
    },
    {
      "id": "camposaltos",
      "name": "Campos Altos",
      "lat": -19.696,
      "lon": -46.171,
      "locationAccuracy": "city-center",
      "locationSourceUrl": "https://geoftp.ibge.gov.br/cartas_e_mapas/mapas_para_fins_de_levantamentos_estatisticos/contagem_da_populacao_e_censo_agropecuario_2007/mapas_municipais_estatisticos/mg/campos_altos.pdf",
      "kind": "cidade",
      "canHostStay": true,
      "type": "historia",
      "days": "1 dia",
      "sights": [
        "Santuário de Nossa Senhora Aparecida",
        "Estação Ferroviária de Campos Altos",
        "Oficina e exposição de Dito Leandro",
        "Cachoeira Olho do Sol",
        "Parque Estadual dos Campos Altos"
      ],
      "kid": "Visitas urbanas e passeios rurais têm acessos diferentes. Confirme horários, condições de acesso e hospedagem antes da viagem.",
      "url": "https://www.minasgerais.com.br/pt/destinos/campos-altos",
      "profile": "Memória ferroviária · turismo religioso · artesanato · natureza",
      "guideBriefing": "Campos Altos tem sua formação ligada à estação inaugurada no início da década de 1910 pela Estrada de Ferro Goyaz. A memória ferroviária se combina com o turismo religioso do Santuário de Nossa Senhora Aparecida e o trabalho em metal do artesão Dito Leandro.\n\nSugestão para a passagem com pernoite: considerar as visitas urbanas se houver tempo e deixar os passeios rurais para uma programação própria. A Cachoeira Olho do Sol tem acesso por estrada de terra; a visitação ao parque estadual precisa ser confirmada com o IEF.\n\nA festa de Nossa Senhora Aparecida tem sua data tradicional em 12 de outubro; consulte a programação vigente. Para refeições, o portal estadual reúne opções como Cafeteria Estação de Minas e Armazém 262. Confirme horários e hospedagem diretamente com os estabelecimentos.",
      "attractions": [
        {
          "name": "Santuário de Nossa Senhora Aparecida",
          "description": "Complexo religioso e mirante no alto de um morro, com capelas de diferentes épocas. A primeira capela surgiu em 1951; o conjunto reúne templos, sala de ex-votos e uma imagem monumental de Nossa Senhora Aparecida. A visita permite conhecer a devoção local e observar a cidade.\n\nA festa tradicional ocorre em outubro; consulte os horários de visita e celebrações para a data da viagem.",
          "agencyRationale": "Complemento documentado em fonte oficial; inclusão em roteiro comercial de agência não confirmada.",
          "visitType": "Templos / mirante",
          "estimatedDuration": "30–60 min (estimativa de planejamento)",
          "publishedDuration": "—",
          "oneYearOld": "Regra etária não publicada; confirmar com o responsável.",
          "access": {
            "level": "unknown",
            "label": "Templos e mirante",
            "description": "Complexo de templos e mirante no alto de um morro. Confirme chegada, rampas, escadas e acesso aos diferentes templos com o santuário; as condições e os horários não estão confirmados."
          },
          "lat": -19.6855953,
          "lon": -46.1806676,
          "locationAccuracy": "exact",
          "locationNote": "Local físico conferido por nome e município no Google Maps, em concordância com a fonte turística. Coordenada cruzada com o cadastro geográfico da Buser.",
          "days": "30–60 min (estimativa de planejamento)",
          "relevanceSource": "guide",
          "mapQuery": "Santuário Diocesano Nossa Senhora Aparecida Campos Altos MG",
          "kind": "atracao",
          "type": "historia",
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "indeterminado"
          },
          "sourceUrl": "https://www.camposaltos.mg.gov.br/portal/santuario-nossa-senhora-aparecida/",
          "researchedAt": "2026-10-02",
          "visitLinks": [
            {
              "label": "Fonte oficial",
              "url": "https://www.camposaltos.mg.gov.br/portal/santuario-nossa-senhora-aparecida/"
            }
          ],
          "locationSourceUrl": "https://www.google.com/maps/search/Santu%C3%A1rio+de+Campos+Altos/",
          "locationPlusCode": "58GM8R79+QP",
          "locationCrossCheckUrl": "https://www.buser.com.br/destinos/pontos-turisticos/mg/campos-altos-mg/cachoeira-olho-do-sol"
        },
        {
          "name": "Estação Ferroviária de Campos Altos",
          "description": "Estação do início da década de 1910 ligada à origem ferroviária e à formação de Campos Altos. O prédio e o armazém podem ser apreciados em uma passagem pelo centro, na Praça Benedito Valadares. A linha permanece usada por trens de carga, sem serviço de passageiros; não há confirmação de visita interna.",
          "agencyRationale": "Complemento documentado em fonte oficial; inclusão em roteiro comercial de agência não confirmada.",
          "visitType": "Patrimônio ferroviário / contemplação externa",
          "estimatedDuration": "20–30 min (estimativa de planejamento)",
          "publishedDuration": "—",
          "oneYearOld": "Regra etária não publicada; confirmar com o responsável.",
          "access": {
            "level": "unknown",
            "label": "A confirmar",
            "description": "Contemplação externa na Praça Benedito Valadares, Centro. Mantenha-se nas áreas públicas, sem entrar na linha ou em áreas operacionais; calçamento e desníveis do percurso não estão documentados."
          },
          "lat": -19.7005625,
          "lon": -46.1730625,
          "locationAccuracy": "exact",
          "locationNote": "Local físico conferido por nome e município no Google Maps, em concordância com a fonte turística. Coordenada obtida do Plus Code do local (célula de aproximadamente 14 m).",
          "days": "20–30 min (estimativa de planejamento)",
          "relevanceSource": "guide",
          "mapQuery": "Estação Ferroviária Campos Altos Praça Benedito Valadares MG",
          "kind": "atracao",
          "type": "historia",
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "gratuito",
            "url": "https://www.minasgerais.com.br/pt/atracoes/campos-altos/arquitetura/estacao-ferroviaria-de-campos-altos",
            "note": "Entrada franca informada pelo portal estadual; confirme condições atuais."
          },
          "sourceUrl": "https://www.minasgerais.com.br/pt/atracoes/campos-altos/arquitetura/estacao-ferroviaria-de-campos-altos",
          "researchedAt": "2026-10-02",
          "visitLinks": [
            {
              "label": "Fonte oficial",
              "url": "https://www.minasgerais.com.br/pt/atracoes/campos-altos/arquitetura/estacao-ferroviaria-de-campos-altos"
            },
            {
              "label": "Patrimônio ferroviário · Prefeitura",
              "url": "https://www.camposaltos.mg.gov.br/portal/estacao-ferroviaria-de-campos-altos/"
            }
          ],
          "address": "Praça Benedito Valadares, Centro, Campos Altos, MG",
          "locationSourceUrl": "https://www.google.com/maps/search/Esta%C3%A7%C3%A3o+Ferrovi%C3%A1ria+Campos+Altos+MG/",
          "locationPlusCode": "58GM7RXG+QQ"
        },
        {
          "name": "Oficina e exposição de Dito Leandro",
          "description": "Oficina de artesanato em sucata metálica onde Dito Leandro transforma metal descartado em esculturas de animais e figuras de grande porte. O espaço reúne produção e exposição, oferecendo contato com o trabalho do artesão.\n\nNa Rua Tiradentes, 175, Centro, o portal estadual informa visita guiada; combine previamente a disponibilidade com o responsável.",
          "agencyRationale": "Complemento documentado em fonte oficial; inclusão em roteiro comercial de agência não confirmada.",
          "visitType": "Oficina / exposição de artesanato",
          "estimatedDuration": "30–60 min (estimativa de planejamento)",
          "publishedDuration": "—",
          "oneYearOld": "Regra etária não publicada; confirmar com o responsável.",
          "access": {
            "level": "unknown",
            "label": "A confirmar",
            "description": "Oficina na Rua Tiradentes, 175, Centro. Confirme a visita, entrada, degraus e circulação com o responsável; horários e condições de acesso não estão publicados."
          },
          "lat": -19.6971875,
          "lon": -46.1731875,
          "locationAccuracy": "exact",
          "locationNote": "Local físico conferido por nome e município no Google Maps, em concordância com a fonte turística. Coordenada obtida do Plus Code do local (célula de aproximadamente 14 m).",
          "days": "30–60 min (estimativa de planejamento)",
          "relevanceSource": "guide",
          "mapQuery": "Dito Leandro Rua Tiradentes 175 Campos Altos MG",
          "kind": "atracao",
          "type": "historia",
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "gratuito",
            "url": "https://www.minasgerais.com.br/pt/atracoes/campos-altos/artesanato/dito-leandro",
            "note": "Entrada franca informada pelo portal estadual; confirme condições atuais."
          },
          "sourceUrl": "https://www.minasgerais.com.br/pt/atracoes/campos-altos/artesanato/dito-leandro",
          "researchedAt": "2026-10-02",
          "visitLinks": [
            {
              "label": "Fonte oficial",
              "url": "https://www.minasgerais.com.br/pt/atracoes/campos-altos/artesanato/dito-leandro"
            }
          ],
          "address": "Rua Tiradentes, 175, Centro, Campos Altos, MG",
          "locationSourceUrl": "https://www.google.com/maps/search/Dito+Leandro+Campos+Altos+MG/",
          "locationPlusCode": "58GM8R3G+4P"
        },
        {
          "name": "Cachoeira Olho do Sol",
          "description": "Quedas e corredeiras do rio Mutuca em área rural, com poço e vegetação nativa. O portal estadual situa a cachoeira a aproximadamente 14,3 km do centro de Campos Altos e descreve acesso por estrada de terra, com trilhas junto ao rio, rochas e desníveis.\n\nReserve tempo próprio para o deslocamento; o tempo publicado de visita não foi encontrado.",
          "agencyRationale": "Complemento documentado em fonte oficial; inclusão em roteiro comercial de agência não confirmada.",
          "visitType": "Estrada rural / caminhada / cachoeira",
          "estimatedDuration": "Duração a confirmar",
          "publishedDuration": "—",
          "oneYearOld": "Regra etária não publicada; confirmar com o responsável.",
          "access": {
            "level": "hard",
            "label": "Terreno irregular",
            "description": "Acesso rural com trilhas, rochas e desníveis descritos na fonte oficial cadastrada. Confirme estrada, percurso, condições da água e alternativas para o grupo antes de visitar."
          },
          "lat": -19.7852832,
          "lon": -46.2362161,
          "locationAccuracy": "exact",
          "locationNote": "Local físico conferido por nome e município no Google Maps, em concordância com a fonte turística. Coordenada cruzada com o cadastro geográfico da Buser.",
          "days": "Duração a confirmar",
          "relevanceSource": "guide",
          "mapQuery": "Cachoeira Olho do Sol Campos Altos MG",
          "kind": "atracao",
          "type": "natureza",
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "gratuito",
            "url": "https://www.minasgerais.com.br/pt/atracoes/campos-altos/cachoeira-olho-do-sol",
            "note": "Entrada franca informada pelo portal estadual; confirme condições atuais."
          },
          "sourceUrl": "https://www.minasgerais.com.br/pt/atracoes/campos-altos/cachoeira-olho-do-sol",
          "researchedAt": "2026-10-02",
          "visitLinks": [
            {
              "label": "Fonte oficial",
              "url": "https://www.minasgerais.com.br/pt/atracoes/campos-altos/cachoeira-olho-do-sol"
            }
          ],
          "locationSourceUrl": "https://www.google.com/maps/search/Cachoeira+Olho+do+Sol+Campos+Altos/",
          "locationPlusCode": "58GM6Q77+VG",
          "locationCrossCheckUrl": "https://www.buser.com.br/destinos/pontos-turisticos/mg/campos-altos-mg/cachoeira-olho-do-sol"
        },
        {
          "name": "Parque Estadual dos Campos Altos",
          "description": "Unidade de conservação criada em 2004, com 782,67 hectares, que protege ambientes e fauna do município em florestas, campos e cerrado. O IEF a relaciona entre os demais parques, fora da lista com infraestrutura para visitação. Sua existência como atrativo não confirma acesso turístico regular; consulte o órgão gestor antes de planejar a visita. Não há horário de visita publicado nas fontes consultadas.",
          "agencyRationale": "Complemento documentado em fonte oficial; inclusão em roteiro comercial de agência não confirmada.",
          "visitType": "Unidade de conservação / visitação a confirmar",
          "estimatedDuration": "Duração a confirmar",
          "publishedDuration": "—",
          "oneYearOld": "Regra etária não publicada; confirmar com o responsável.",
          "access": {
            "level": "unknown",
            "label": "Visitação a confirmar",
            "description": "Confirme com o IEF a possibilidade de visita, autorização, infraestrutura e condições dos percursos. Não há horário de visita publicado nas fontes cadastradas, nem esforço físico documentado."
          },
          "lat": -19.696,
          "lon": -46.171,
          "locationAccuracy": "city-center",
          "locationNote": "Entrada de visitantes não confirmada. Não usar como destino a sede administrativa nem um ponto genérico no interior do parque.",
          "days": "Duração a confirmar",
          "relevanceSource": "guide",
          "mapQuery": "Parque Estadual dos Campos Altos MG",
          "kind": "atracao",
          "type": "natureza",
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "indeterminado"
          },
          "sourceUrl": "https://www.ief.mg.gov.br/w/parque-estadual-dos-campos-altos",
          "researchedAt": "2026-10-02",
          "visitLinks": [
            {
              "label": "Parque · IEF",
              "url": "https://www.ief.mg.gov.br/w/parque-estadual-dos-campos-altos"
            },
            {
              "label": "Condições de visitação · IEF",
              "url": "https://www.ief.mg.gov.br/w/parques-estaduais"
            }
          ]
        }
      ],
      "relevanceSource": "guide",
      "ageClassification": {
        "status": "indeterminada"
      },
      "ticket": {
        "status": "por_passeio"
      },
      "stayDays": [
        1,
        1
      ],
      "municipality": "Campos Altos",
      "mapQuery": "Campos Altos MG",
      "visitLinks": [
        {
          "label": "Turismo e alimentação · Portal Minas Gerais",
          "url": "https://www.minasgerais.com.br/pt/destinos/campos-altos"
        },
        {
          "label": "Turismo municipal",
          "url": "https://www.camposaltos.mg.gov.br/portal/cultura-e-turismo/"
        }
      ],
      "initialDate": "2026-10-07",
      "selectedByDefault": true
    },
    {
      "id": "camposaltos-palace-hotel",
      "name": "Campos Altos Palace Hotel",
      "lat": -19.692769,
      "lon": -46.1655231,
      "locationAccuracy": "exact",
      "locationSourceUrl": "https://www.camposaltospalacehotel.com.br/localizacao.php",
      "locationNote": "Coordenadas do estabelecimento no link Google Maps publicado na página oficial de localização do hotel.",
      "kind": "hospedagem",
      "canHostStay": true,
      "type": "natureza",
      "days": "Pernoite",
      "sights": [],
      "kid": "",
      "url": "https://www.camposaltospalacehotel.com.br/",
      "providedWebsite": "www.camposaltospalacehotel.com.",
      "profile": "Hospedagem em Campos Altos",
      "municipality": "Campos Altos",
      "city": "Campos Altos",
      "address": "Av Vereador Joao Alegre, 728 - Santa Terezinha - Campos Altos/MG - Brasil",
      "cnpj": "32.030.605/0001-11",
      "phone": "3734263606",
      "email": "camposaltospalacehotel@gmail.com",
      "mapQuery": "Campos Altos Palace Hotel Vereador Joao Alegre 728 Campos Altos MG",
      "guideBriefing": "Hospedagem em Campos Altos. Endereço informado na reserva: Av Vereador Joao Alegre, 728 - Santa Terezinha - Campos Altos/MG - Brasil. Telefone: 3734263606. E-mail: camposaltospalacehotel@gmail.com. CNPJ: 32.030.605/0001-11.",
      "attractions": [],
      "ageClassification": {
        "status": "indeterminada"
      },
      "ticket": {
        "status": "indeterminado"
      },
      "initialDate": "2026-10-07",
      "selectedByDefault": true
    },
    {
      "id": "itabirito",
      "name": "Itabirito",
      "lat": -20.251972,
      "lon": -43.802917,
      "kind": "cidade",
      "canHostStay": true,
      "type": "historia",
      "days": "½ dia",
      "sights": [
        "Centro histórico e igrejas",
        "Pastel de angu"
      ],
      "kid": "Parada urbana flexível; confirme horário de igrejas, restaurantes e locais de venda.",
      "url": "https://www.google.com/maps/search/?api=1&query=Itabirito+MG",
      "guideBriefing": "Itabirito surgiu de antigos arraiais mineradores do século XVIII no caminho entre a região de Ouro Preto e o vale do Rio das Velhas. A cidade atravessou a transição da mineração colonial para atividades industriais e ferroviárias. Seu patrimônio histórico e tradições alimentares, como o pastel de angu, registram tanto o passado minerador quanto práticas culturais mantidas pela população.",
      "profile": "Estrada Real · história · gastronomia",
      "attractions": [
        {
          "name": "Centro histórico e igrejas",
          "description": "Antigo núcleo minerador entre Belo Horizonte e Ouro Preto, com patrimônio religioso e urbano ligado ao ciclo do ouro. Itabirito funciona bem como escala de baixo custo logístico no eixo BH–Ouro Preto. Roteiros organizados podem acrescentar patrimônio e gastronomia sem consumir um dia inteiro.",
          "agencyRationale": "Itabirito funciona bem como escala de baixo custo logístico no eixo BH–Ouro Preto. Agências podem acrescentar patrimônio e gastronomia sem consumir um dia inteiro.",
          "visitType": "Caminhada / igrejas",
          "estimatedDuration": "2 h",
          "publishedDuration": "—",
          "oneYearOld": "—",
          "access": {
            "level": "easy",
            "label": "Mais fácil em trecho curto",
            "description": "Circuito a pé pelo centro histórico e igrejas. A estimativa considera trechos curtos; confirme calçamento e desníveis, além da entrada e circulação de cada igreja."
          },
          "lat": -20.251972,
          "lon": -43.802917,
          "locationAccuracy": "city-center",
          "days": "2 h",
          "relevanceSource": "agency",
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "indeterminado"
          },
          "kind": "atracao",
          "type": "historia"
        },
        {
          "name": "Pastel de angu",
          "description": "Especialidade tradicional feita com massa de angu de milho e diferentes recheios, reconhecida como patrimônio cultural local. Dá uma razão gastronômica rápida para interromper o deslocamento.",
          "agencyRationale": "Dá uma razão gastronômica rápida para interromper o deslocamento.",
          "visitType": "Gastronomia",
          "estimatedDuration": "45 min",
          "publishedDuration": "—",
          "oneYearOld": "—",
          "access": {
            "level": "unknown",
            "label": "A confirmar",
            "description": "Experiência gastronômica no estabelecimento escolhido. Confirme endereço, entrada e circulação; o cadastro não define um local único nem condições de acesso."
          },
          "lat": -20.251972,
          "lon": -43.802917,
          "locationAccuracy": "city-center",
          "days": "45 min",
          "relevanceSource": "agency",
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "indeterminado"
          },
          "kind": "atracao",
          "type": "gastronomia"
        }
      ],
      "relevanceSource": "agency",
      "ageClassification": {
        "status": "indeterminada"
      },
      "ticket": {
        "status": "por_passeio"
      },
      "stayDays": [
        0.5,
        0.5
      ]
    },
    {
      "id": "ourobranco",
      "name": "Ouro Branco",
      "lat": -20.5222,
      "lon": -43.6917,
      "kind": "cidade",
      "canHostStay": true,
      "type": "historia",
      "days": "Duração a confirmar",
      "sights": [
        "Matriz de Santo Antônio",
        "Capela Nossa Senhora Mãe dos Homens"
      ],
      "kid": "A confirmar",
      "url": "",
      "attractions": [
        {
          "name": "Matriz de Santo Antônio",
          "lat": -20.521051,
          "lon": -43.691837,
          "locationAccuracy": "exact",
          "catalogName": "Matriz de Santo Antônio",
          "description": "Igreja matriz histórica de Ouro Branco destacada em roteiro comercial do Circuito do Ouro.",
          "agencyRationale": "Parada explicitamente incluída em roteiro comercializado por agência de turismo.",
          "visitType": "Religiosa",
          "estimatedDuration": "—",
          "publishedDuration": "—",
          "oneYearOld": "A confirmar",
          "access": {
            "level": "unknown",
            "label": "A confirmar",
            "description": "Visita religiosa. Confirme entrada, degraus e circulação interna; as condições de acesso não estão detalhadas no cadastro."
          },
          "days": "—",
          "relevanceSource": "agency",
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "indeterminado"
          },
          "kind": "atracao",
          "type": "historia"
        },
        {
          "name": "Capela Nossa Senhora Mãe dos Homens",
          "lat": -20.526391,
          "lon": -43.693918,
          "locationAccuracy": "exact",
          "catalogName": "Capela Nossa Senhora Mãe dos Homens",
          "description": "Capela histórica de Ouro Branco citada pela Primotur entre os atrativos da cidade.",
          "agencyRationale": "Parada explicitamente incluída em roteiro comercializado por agência de turismo.",
          "visitType": "Religiosa",
          "estimatedDuration": "—",
          "publishedDuration": "—",
          "oneYearOld": "A confirmar",
          "access": {
            "level": "unknown",
            "label": "A confirmar",
            "description": "Visita religiosa. Confirme entrada, degraus e circulação interna; as condições de acesso não estão detalhadas no cadastro."
          },
          "days": "—",
          "relevanceSource": "agency",
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "indeterminado"
          },
          "kind": "atracao",
          "type": "historia"
        }
      ],
      "guideBriefing": "Ouro Branco integra o Circuito do Ouro entre Congonhas e Ouro Preto e aparece em roteiro comercial da Primotur.",
      "profile": "Parada presente em roteiro comercial de agência",
      "relevanceSource": "agency",
      "ageClassification": {
        "status": "indeterminada"
      },
      "ticket": {
        "status": "por_passeio"
      }
    },
    {
      "id": "setelagoas",
      "name": "Sete Lagoas",
      "lat": -19.4661,
      "lon": -44.2469,
      "kind": "cidade",
      "canHostStay": true,
      "type": "historia",
      "days": "Duração a confirmar",
      "sights": [
        "Serra de Santa Helena",
        "Memorial do Humorista Zacarias",
        "Gruta Rei do Mato"
      ],
      "kid": "A confirmar",
      "url": "",
      "attractions": [
        {
          "name": "Serra de Santa Helena",
          "lat": -19.4475,
          "lon": -44.270833,
          "locationAccuracy": "exact",
          "catalogName": "Serra de Santa Helena",
          "description": "Mirante e área serrana usada como parada de pôr do sol por roteiro comercial.",
          "agencyRationale": "Parada explicitamente incluída em roteiro comercializado por agência de turismo.",
          "visitType": "Mirante / natureza",
          "estimatedDuration": "—",
          "publishedDuration": "—",
          "oneYearOld": "A confirmar",
          "access": {
            "level": "unknown",
            "label": "A confirmar",
            "description": "Visita a mirante e área de natureza. Confirme estrada, trecho a pé, terreno e desníveis; a dificuldade não está documentada no cadastro."
          },
          "days": "—",
          "relevanceSource": "agency",
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "indeterminado"
          },
          "kind": "atracao",
          "type": "natureza"
        },
        {
          "name": "Memorial do Humorista Zacarias",
          "lat": -19.4660631,
          "lon": -44.2476263,
          "locationAccuracy": "exact",
          "catalogName": "Memorial do Humorista Zacarias",
          "description": "Espaço de memória dedicado ao humorista Zacarias, visitado em roteiro de agência.",
          "agencyRationale": "Parada explicitamente incluída em roteiro comercializado por agência de turismo.",
          "visitType": "Cultural",
          "estimatedDuration": "—",
          "publishedDuration": "—",
          "oneYearOld": "A confirmar",
          "access": {
            "level": "unknown",
            "label": "A confirmar",
            "description": "Visita ao memorial. Confirme entrada, degraus, circulação e áreas abertas ao público; as condições de acesso não estão detalhadas."
          },
          "days": "—",
          "relevanceSource": "agency",
          "mapQuery": "Memorial Trapalhão Zacarias, Praça Tiradentes 257, Sete Lagoas MG",
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "indeterminado"
          },
          "kind": "atracao",
          "type": "historia",
          "selectedByDefault": true,
          "required": false
        },
        {
          "name": "Monumento Natural Estadual Gruta Rei do Mato",
          "lat": -19.49504,
          "lon": -44.28304,
          "locationAccuracy": "exact",
          "catalogName": "Monumento Natural Estadual Gruta Rei do Mato",
          "description": "Gruta calcária de Sete Lagoas incluída entre atrações de roteiro comercial.",
          "agencyRationale": "Parada explicitamente incluída em roteiro comercializado por agência de turismo.",
          "visitType": "Natureza / geologia",
          "estimatedDuration": "—",
          "publishedDuration": "—",
          "oneYearOld": "Não — idade mínima 6 anos",
          "access": {
            "level": "unknown",
            "label": "A confirmar",
            "description": "Visita à gruta. Confirme percurso, distância, degraus e restrições com o responsável; o esforço não está documentado no cadastro."
          },
          "days": "—",
          "relevanceSource": "agency",
          "ageClassification": {
            "status": "idade_minima",
            "sourceUrl": "https://ingressos.urbanesparques.com.br/unit/4213/gruta-rei-do-mato/",
            "note": "Menores de 6 anos não podem subir à gruta, inclusive bebês no colo ou canguru.",
            "minimumAge": 6
          },
          "ticket": {
            "status": "online",
            "url": "https://ingressos.urbanesparques.com.br/unit/4213/gruta-rei-do-mato/",
            "note": "Compra on-line com pelo menos 48 h de antecedência, segundo a bilheteria oficial."
          },
          "kind": "atracao",
          "type": "natureza",
          "selectedByDefault": true,
          "required": false
        }
      ],
      "guideBriefing": "Sete Lagoas aparece em roteiro comercial ligado à Vesperata de Diamantina, com paradas culturais, geológicas e panorâmicas.",
      "profile": "Parada presente em roteiro comercial de agência",
      "relevanceSource": "agency",
      "ageClassification": {
        "status": "indeterminada"
      },
      "ticket": {
        "status": "por_passeio"
      },
      "initialDate": "2026-10-10",
      "selectedByDefault": true
    },
    {
      "id": "presidentekubitschek",
      "name": "Presidente Kubitschek · Cânion do Funil",
      "lat": -18.61417,
      "lon": -43.56167,
      "kind": "cidade",
      "canHostStay": true,
      "type": "natureza",
      "days": "Duração a confirmar",
      "sights": [
        "Cânion do Funil"
      ],
      "kid": "A confirmar",
      "url": "",
      "attractions": [
        {
          "name": "Cânion do Funil",
          "lat": -18.668164,
          "lon": -43.5998,
          "locationAccuracy": "exact",
          "catalogName": "Cânion do Funil",
          "description": "Cânion na zona rural de Presidente Kubitschek explorado em passeio comercial a partir de Diamantina.",
          "agencyRationale": "Parada explicitamente incluída em roteiro comercializado por agência de turismo.",
          "visitType": "Natureza / trilha",
          "estimatedDuration": "—",
          "publishedDuration": "—",
          "oneYearOld": "A confirmar",
          "access": {
            "level": "hard",
            "label": "Exigente",
            "description": "Passeio de natureza com possibilidade de trilha, degraus e terreno irregular. A dificuldade cadastrada é uma estimativa; confirme o trecho, a duração, o desnível e alternativas de acesso."
          },
          "days": "—",
          "relevanceSource": "agency",
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "indeterminado"
          },
          "kind": "atracao",
          "type": "natureza"
        }
      ],
      "guideBriefing": "Município usado como acesso ao Cânion do Funil em passeio comercializado a partir de Diamantina.",
      "profile": "Parada presente em roteiro comercial de agência",
      "relevanceSource": "agency",
      "ageClassification": {
        "status": "indeterminada"
      },
      "ticket": {
        "status": "por_passeio"
      }
    },
    {
      "id": "ipoema",
      "name": "Itabira · Ipoema",
      "lat": -19.62142,
      "lon": -43.43524,
      "kind": "cidade",
      "canHostStay": true,
      "type": "historia",
      "days": "Duração a confirmar",
      "sights": [
        "Museu do Tropeiro"
      ],
      "kid": "A confirmar",
      "url": "",
      "attractions": [
        {
          "name": "Museu do Tropeiro",
          "lat": -19.6216064,
          "lon": -43.434711,
          "locationAccuracy": "exact",
          "catalogName": "Museu do Tropeiro",
          "description": "Museu dedicado à cultura tropeira e às rotas de circulação do interior mineiro.",
          "agencyRationale": "Parada explicitamente incluída em roteiro comercializado por agência de turismo.",
          "visitType": "Museu",
          "estimatedDuration": "—",
          "publishedDuration": "—",
          "oneYearOld": "A confirmar",
          "access": {
            "level": "unknown",
            "label": "A confirmar",
            "description": "Visita ao museu em Ipoema. Confirme entrada, degraus e circulação interna; as condições de acesso não estão detalhadas no cadastro."
          },
          "days": "—",
          "relevanceSource": "agency",
          "mapQuery": "Museu do Tropeiro, Travessa Professor Manoel Soares 217, Ipoema MG",
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "indeterminado"
          },
          "locality": "Ipoema",
          "kind": "atracao",
          "type": "historia"
        }
      ],
      "guideBriefing": "Distrito ligado à cultura tropeira e incluído em roteiro comercial da Estrada Real entre Diamantina e Belo Horizonte.",
      "profile": "Parada presente em roteiro comercial de agência",
      "relevanceSource": "agency",
      "ageClassification": {
        "status": "indeterminada"
      },
      "ticket": {
        "status": "por_passeio"
      },
      "municipality": "Itabira",
      "mapQuery": "Ipoema, Itabira MG"
    },
    {
      "id": "itambemato",
      "name": "Itambé do Mato Dentro",
      "lat": -19.41444,
      "lon": -43.32231,
      "kind": "cidade",
      "canHostStay": true,
      "type": "historia",
      "days": "Duração a confirmar",
      "sights": [
        "Núcleo histórico e paisagem do Espinhaço"
      ],
      "kid": "A confirmar",
      "url": "",
      "attractions": [],
      "guideBriefing": "Município incluído no corredor comercial da Estrada Real entre Diamantina e Belo Horizonte.",
      "profile": "Parada presente em roteiro comercial de agência",
      "relevanceSource": "agency",
      "ageClassification": {
        "status": "indeterminada"
      },
      "ticket": {
        "status": "indeterminado"
      }
    },
    {
      "id": "raposos",
      "name": "Raposos",
      "lat": -19.9672,
      "lon": -43.8042,
      "kind": "cidade",
      "canHostStay": true,
      "type": "historia",
      "days": "Duração a confirmar",
      "sights": [
        "Passagem pelo núcleo de Raposos"
      ],
      "kid": "A confirmar",
      "url": "",
      "attractions": [
        {
          "name": "Núcleo de Raposos",
          "lat": -19.9672,
          "lon": -43.8042,
          "locationAccuracy": "city-center",
          "catalogName": "Núcleo de Raposos",
          "description": "Passagem pelo município no roteiro de cicloviagem comercializado pela Primotur.",
          "agencyRationale": "Parada explicitamente incluída em roteiro comercializado por agência de turismo.",
          "visitType": "Histórica / percurso",
          "estimatedDuration": "—",
          "publishedDuration": "—",
          "oneYearOld": "A confirmar",
          "access": {
            "level": "unknown",
            "label": "A confirmar",
            "description": "Percurso histórico pelo núcleo de Raposos. Confirme o trecho escolhido, extensão da caminhada, calçamento e desníveis; o esforço não está documentado."
          },
          "days": "—",
          "relevanceSource": "agency",
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "indeterminado"
          },
          "kind": "atracao",
          "type": "historia"
        }
      ],
      "guideBriefing": "Raposos integra o roteiro comercial Entre Trilhas, Sabores e Aromas da Primotur, no antigo corredor ferroviário e do Rio das Velhas entre Sabará e Rio Acima.",
      "profile": "Parada presente em roteiro comercial de agência",
      "relevanceSource": "agency",
      "ageClassification": {
        "status": "indeterminada"
      },
      "ticket": {
        "status": "por_passeio"
      }
    },
    {
      "id": "novalima",
      "name": "Nova Lima · Honório Bicalho",
      "lat": -20.021382,
      "lon": -43.8180973,
      "kind": "cidade",
      "canHostStay": true,
      "type": "historia",
      "days": "Duração a confirmar",
      "sights": [
        "Honório Bicalho",
        "Antigo leito ferroviário do Sabarabuçu"
      ],
      "kid": "A confirmar",
      "url": "",
      "attractions": [
        {
          "name": "Honório Bicalho",
          "lat": -20.021382,
          "lon": -43.8180973,
          "locationAccuracy": "city-center",
          "catalogName": "Honório Bicalho",
          "description": "Distrito de Nova Lima atravessado pelo roteiro comercial ao longo do Rio das Velhas.",
          "agencyRationale": "Parada explicitamente incluída em roteiro comercializado por agência de turismo.",
          "visitType": "Histórica / percurso",
          "estimatedDuration": "—",
          "publishedDuration": "—",
          "oneYearOld": "A confirmar",
          "access": {
            "level": "unknown",
            "label": "A confirmar",
            "description": "Percurso histórico pela localidade de Honório Bicalho. Confirme o trecho escolhido, extensão da caminhada e terreno; o esforço não está documentado."
          },
          "days": "—",
          "relevanceSource": "agency",
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "indeterminado"
          },
          "kind": "atracao",
          "type": "historia"
        },
        {
          "name": "Antigo leito da Ferrovia do Sabarabuçu",
          "lat": -20.021382,
          "lon": -43.8180973,
          "locationAccuracy": "city-center",
          "catalogName": "Antigo leito da Ferrovia do Sabarabuçu",
          "description": "Trecho ferroviário desativado usado como eixo do roteiro entre Sabará, Raposos e Rio Acima.",
          "agencyRationale": "Parada explicitamente incluída em roteiro comercializado por agência de turismo.",
          "visitType": "Histórica / percurso",
          "estimatedDuration": "—",
          "publishedDuration": "—",
          "oneYearOld": "A confirmar",
          "access": {
            "level": "unknown",
            "label": "A confirmar",
            "description": "Percurso histórico no antigo leito ferroviário. Confirme o trecho visitável, terreno, extensão e condições locais; o cadastro não documenta o esforço físico."
          },
          "days": "—",
          "relevanceSource": "agency",
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "indeterminado"
          },
          "kind": "atracao",
          "type": "historia"
        }
      ],
      "guideBriefing": "Nova Lima aparece no roteiro comercial Entre Trilhas, Sabores e Aromas por meio de Honório Bicalho, antigo núcleo ferroviário às margens do Rio das Velhas.",
      "profile": "Parada presente em roteiro comercial de agência",
      "relevanceSource": "agency",
      "ageClassification": {
        "status": "indeterminada"
      },
      "ticket": {
        "status": "por_passeio"
      },
      "municipality": "Nova Lima"
    },
    {
      "id": "rioacima",
      "name": "Rio Acima",
      "lat": -20.0875,
      "lon": -43.7892,
      "kind": "cidade",
      "canHostStay": true,
      "type": "historia",
      "days": "Duração a confirmar",
      "sights": [
        "Núcleo urbano",
        "Antigo corredor ferroviário"
      ],
      "kid": "A confirmar",
      "url": "",
      "attractions": [
        {
          "name": "Núcleo de Rio Acima",
          "lat": -20.0875,
          "lon": -43.7892,
          "locationAccuracy": "city-center",
          "catalogName": "Núcleo de Rio Acima",
          "description": "Parada com pernoite no roteiro comercial Entre Trilhas, Sabores e Aromas.",
          "agencyRationale": "Parada explicitamente incluída em roteiro comercializado por agência de turismo.",
          "visitType": "Histórica / percurso",
          "estimatedDuration": "—",
          "publishedDuration": "—",
          "oneYearOld": "A confirmar",
          "access": {
            "level": "unknown",
            "label": "A confirmar",
            "description": "Percurso histórico pelo núcleo de Rio Acima. Confirme o trecho escolhido, extensão da caminhada, calçamento e desníveis; o esforço não está documentado."
          },
          "days": "—",
          "relevanceSource": "agency",
          "ageClassification": {
            "status": "indeterminada"
          },
          "ticket": {
            "status": "indeterminado"
          },
          "kind": "atracao",
          "type": "historia"
        }
      ],
      "guideBriefing": "Rio Acima é parada e pernoite do roteiro comercial Entre Trilhas, Sabores e Aromas, conectando o corredor do Rio das Velhas a Itabirito.",
      "profile": "Parada presente em roteiro comercial de agência",
      "relevanceSource": "agency",
      "ageClassification": {
        "status": "indeterminada"
      },
      "ticket": {
        "status": "por_passeio"
      }
    },
    {
      "id": "boa-casa-do-rei-bistro",
      "name": "Casa do Rei Bistrô",
      "lat": -20.0435266,
      "lon": -44.2606966,
      "kind": "restaurante",
      "canHostStay": false,
      "type": "gastronomia",
      "days": "1 h (refeição; confirme reserva)",
      "sights": [],
      "kid": "Avenida Maria do Carmo, 250, Tereza Cristina, São Joaquim de Bicas. Confirme horário e reserva com o restaurante.",
      "url": "https://boalembranca.com.br/restaurantes/casa-do-rei-bistro",
      "profile": "Restaurante da Associação dos Restaurantes da Boa Lembrança em São Joaquim de Bicas, MG. Prato da edição de 2026: Cumé que Podi.",
      "guideBriefing": "Casa do Rei Bistrô · São Joaquim de Bicas, MG.\n\nPrato Boa Lembrança 2026: Cumé que Podi. Ragu de cordeiro sobre purê de batatas, com farofa de amendoim, jabuticaba em calda e salada fresca.\n\nEndereço: Avenida Maria do Carmo, 250, Tereza Cristina. Consulte o restaurante para confirmar disponibilidade do prato, horário e reserva.",
      "relevanceSource": "guide",
      "locationAccuracy": "exact",
      "address": "Avenida Maria do Carmo, 250, Tereza Cristina, São Joaquim de Bicas, MG",
      "mapQuery": "Casa do Rei Bistrô Avenida Maria do Carmo, 250, Tereza Cristina São Joaquim de Bicas MG",
      "dish": {
        "year": 2026,
        "name": "Cumé que Podi",
        "description": "Ragu de cordeiro sobre purê de batatas, com farofa de amendoim, jabuticaba em calda e salada fresca.",
        "url": "https://boalembranca.com.br/pratos/cume-que-podi",
        "image": "assets/dishes/2026/casa-do-rei-bistro.png",
        "credit": "Associação dos Restaurantes da Boa Lembrança"
      },
      "attractions": [],
      "ageClassification": {
        "status": "indeterminada"
      },
      "ticket": {
        "status": "reserva_indeterminada"
      },
      "city": "São Joaquim de Bicas",
      "mealService": "Jantar; almoço sáb/dom",
      "hours": "Qua–sex: 18h–23h. Sáb: 12h–16h e 18h–23h. Dom: 12h–16h. Seg/ter: fechado.",
      "hoursSources": [
        {
          "url": "https://boalembranca.com.br/restaurantes/casa-do-rei-bistro",
          "sourceName": "Boa Lembrança",
          "evidence": "Quarta a sexta: 18:00 - 23:00. Sábado: 12:00 - 16:00 / 18:00 - 23:00. Domingo: 12:00 - 16:00."
        }
      ],
      "hoursCheckedAt": "2026-10-09",
      "hoursStatus": "published",
      "hoursNote": "Horários publicados; feriados, reserva e disponibilidade do prato precisam de confirmação com o restaurante."
    },
    {
      "id": "boa-dartagnan",
      "name": "D'artagnan Bistrô",
      "lat": -19.9321736,
      "lon": -43.9446274,
      "kind": "restaurante",
      "canHostStay": false,
      "type": "gastronomia",
      "days": "1 h (refeição; confirme reserva)",
      "sights": [],
      "kid": "Rua Tomaz Gonzaga, 593 - Lourdes, Belo Horizonte. Confirme horário e reserva com o restaurante.",
      "url": "https://boalembranca.com.br/restaurantes/dartagnan",
      "profile": "Restaurante da Associação dos Restaurantes da Boa Lembrança em Belo Horizonte, MG. Prato da edição de 2026: Ravioli de Pato \"In Brodo\".",
      "guideBriefing": "D'artagnan Bistrô · Belo Horizonte, MG.\n\nPrato Boa Lembrança 2026: Ravioli de Pato \"In Brodo\". Ravioli recheado de pato servido em consommé com vinho Madeira.\n\nEndereço: Rua Tomaz Gonzaga, 593 - Lourdes. Consulte o restaurante para confirmar disponibilidade do prato, horário e reserva.",
      "relevanceSource": "guide",
      "locationAccuracy": "exact",
      "address": "Rua Tomaz Gonzaga, 593 - Lourdes, Belo Horizonte, MG",
      "mapQuery": "D'artagnan Bistrô Rua Tomaz Gonzaga, 593 - Lourdes Belo Horizonte MG",
      "dish": {
        "year": 2026,
        "name": "Ravioli de Pato \"In Brodo\"",
        "description": "Ravioli recheado de pato servido em consommé com vinho Madeira.",
        "url": "https://boalembranca.com.br/pratos/ravioli-de-pato-in-brodo",
        "image": "assets/dishes/2026/dartagnan.png",
        "credit": "Associação dos Restaurantes da Boa Lembrança"
      },
      "attractions": [],
      "ageClassification": {
        "status": "indeterminada"
      },
      "ticket": {
        "status": "reserva_indeterminada"
      },
      "city": "Belo Horizonte",
      "mealService": "Almoço e jantar; terça só jantar",
      "hours": "Ter: 19h–0h. Qua/qui: 12h–16h e 19h–0h. Sex/sáb: 12h–0h. Dom: 12h–17h (só almoço). Seg: fechado.",
      "hoursSources": [
        {
          "url": "https://boalembranca.com.br/restaurantes/dartagnan",
          "sourceName": "Boa Lembrança",
          "evidence": "Terça: 19:00 - 00:00. Quarta e quinta: 12:00 - 16:00 / 19:00 - 00:00. Sexta e sábado: 12:00 - 00:00."
        }
      ],
      "hoursCheckedAt": "2026-10-09",
      "hoursStatus": "published",
      "hoursNote": "Horários publicados do bistrô da Rua Tomaz Gonzaga; não confirmação de funcionamento excepcional."
    },
    {
      "id": "boa-divinorestaurante",
      "name": "diVino Restaurante",
      "lat": -20.089679,
      "lon": -43.968111,
      "kind": "restaurante",
      "canHostStay": false,
      "type": "gastronomia",
      "days": "1 h (refeição; confirme reserva)",
      "sights": [],
      "kid": "Avenida Quinta Avenida, 739 casa - Vale do Sol - loja 6, Nova Lima. Confirme horário e reserva com o restaurante.",
      "url": "https://boalembranca.com.br/restaurantes/divinorestaurante",
      "profile": "Restaurante da Associação dos Restaurantes da Boa Lembrança em Nova Lima, MG. Prato da edição de 2026: Filé Oriental.",
      "guideBriefing": "diVino Restaurante · Nova Lima, MG.\n\nPrato Boa Lembrança 2026: Filé Oriental. Tornedores de filé grelhados com molho agridoce de shoyu e ostra, acompanhados de risoto frito com açafrão-da-terra.\n\nEndereço: Avenida Quinta Avenida, 739 casa - Vale do Sol - loja 6. Consulte o restaurante para confirmar disponibilidade do prato, horário e reserva.",
      "relevanceSource": "guide",
      "locationAccuracy": "exact",
      "address": "Avenida Quinta Avenida, 739 casa - Vale do Sol - loja 6, Nova Lima, MG",
      "mapQuery": "diVino Restaurante Avenida Quinta Avenida, 739 casa - Vale do Sol - loja 6 Nova Lima MG",
      "dish": {
        "year": 2026,
        "name": "Filé Oriental",
        "description": "Tornedores de filé grelhados com molho agridoce de shoyu e ostra, acompanhados de risoto frito com açafrão-da-terra.",
        "url": "https://boalembranca.com.br/pratos/file-oriental",
        "image": "assets/dishes/2026/divinorestaurante.png",
        "credit": "Associação dos Restaurantes da Boa Lembrança"
      },
      "attractions": [],
      "ageClassification": {
        "status": "indeterminada"
      },
      "ticket": {
        "status": "reserva_indeterminada"
      },
      "city": "Nova Lima",
      "mealService": "Jantar qua–sex; almoço sáb/dom",
      "hours": "Qua/qui: a partir de 19h30 (fechamento não informado). Sex: 19h30–23h30. Sáb: 12h30–17h. Dom: 12h30–17h30. Seg/ter: fechado.",
      "hoursSources": [
        {
          "url": "https://boalembranca.com.br/restaurantes/divinorestaurante",
          "sourceName": "Boa Lembrança",
          "evidence": "Quarta: 19:30. Quinta: 19:30. Sexta: 19:30 - 23:30. Sábado: 12:30 - 17:00. Domingo: 12:30 - 17:30."
        }
      ],
      "hoursCheckedAt": "2026-10-09",
      "hoursStatus": "published_partial",
      "hoursNote": "A ficha publica apenas a abertura na quarta e quinta; não foi inventado horário de encerramento nesses dias.",
      "initialDate": "2026-10-12",
      "selectedByDefault": true
    },
    {
      "id": "boa-domenico-pizzeria-e-trattoria",
      "name": "Domenico Pizzeria e Trattoria",
      "lat": -19.934248,
      "lon": -43.9306323,
      "kind": "restaurante",
      "canHostStay": false,
      "type": "gastronomia",
      "days": "1 h (refeição; confirme reserva)",
      "sights": [],
      "kid": "Rua Claudio Manoel, 583 Funcionários, Belo Horizonte. Confirme horário e reserva com o restaurante.",
      "url": "https://boalembranca.com.br/restaurantes/domenico-pizzeria-e-trattoria",
      "profile": "Restaurante da Associação dos Restaurantes da Boa Lembrança em Belo Horizonte, MG. Prato da edição de 2026: Ndunderi Alla Sorrentina.",
      "guideBriefing": "Domenico Pizzeria e Trattoria · Belo Horizonte, MG.\n\nPrato Boa Lembrança 2026: Ndunderi Alla Sorrentina. Massa artesanal macia de ricota fresca, inspirada no ndunderi da Campânia, no sul da Itália.\n\nEndereço: Rua Claudio Manoel, 583 Funcionários. Consulte o restaurante para confirmar disponibilidade do prato, horário e reserva.",
      "relevanceSource": "guide",
      "locationAccuracy": "exact",
      "address": "Rua Claudio Manoel, 583 Funcionários, Belo Horizonte, MG",
      "mapQuery": "Domenico Pizzeria e Trattoria Rua Claudio Manoel, 583 Funcionários Belo Horizonte MG",
      "dish": {
        "year": 2026,
        "name": "Ndunderi Alla Sorrentina",
        "description": "Massa artesanal macia de ricota fresca, inspirada no ndunderi da Campânia, no sul da Itália.",
        "url": "https://boalembranca.com.br/pratos/ndunderi-alla-sorrentina",
        "image": "assets/dishes/2026/domenico-pizzeria-e-trattoria.png",
        "credit": "Associação dos Restaurantes da Boa Lembrança"
      },
      "attractions": [],
      "ageClassification": {
        "status": "indeterminada"
      },
      "ticket": {
        "status": "reserva_indeterminada"
      },
      "city": "Belo Horizonte",
      "mealService": "Jantar; almoço sáb/dom",
      "hours": "Seg–sex: 18h30–0h. Sáb: 12h–15h e 18h30–0h. Dom: 12h–15h e 18h–23h.",
      "hoursSources": [
        {
          "url": "https://boalembranca.com.br/restaurantes/domenico-pizzeria-e-trattoria",
          "sourceName": "Boa Lembrança",
          "evidence": "Sábado: 12:00 - 15:00 / 18:30 - 00:00. Domingo: 12:00 - 15:00 / 18:00 - 23:00."
        }
      ],
      "hoursCheckedAt": "2026-10-09",
      "hoursStatus": "published",
      "hoursNote": "Horários publicados; feriados e disponibilidade do prato precisam de confirmação com o restaurante."
    },
    {
      "id": "boa-maria-das-trancas",
      "name": "Maria das Tranças",
      "lat": -19.874571,
      "lon": -43.956485,
      "kind": "restaurante",
      "canHostStay": false,
      "type": "gastronomia",
      "days": "1 h (refeição; confirme reserva)",
      "sights": [],
      "kid": "Rua Estoril, 938 - São Francisco, Belo Horizonte. Confirme horário e reserva com o restaurante.",
      "url": "https://boalembranca.com.br/restaurantes/maria-das-trancas",
      "profile": "Restaurante da Associação dos Restaurantes da Boa Lembrança em Belo Horizonte, MG. Prato da edição de 2026: Entre Ossos e Raízes.",
      "guideBriefing": "Maria das Tranças · Belo Horizonte, MG.\n\nPrato Boa Lembrança 2026: Entre Ossos e Raízes. Ossobuco assado lentamente com vinho tinto e legumes, servido com purê de mandioca e açafrão, farofa crocante, cenouras e PANCs.\n\nEndereço: Rua Estoril, 938 - São Francisco. Consulte o restaurante para confirmar disponibilidade do prato, horário e reserva.",
      "relevanceSource": "guide",
      "locationAccuracy": "exact",
      "address": "Rua Estoril, 938 - São Francisco, Belo Horizonte, MG",
      "mapQuery": "Maria das Tranças Rua Estoril, 938 - São Francisco Belo Horizonte MG",
      "dish": {
        "year": 2026,
        "name": "Entre Ossos e Raízes",
        "description": "Ossobuco assado lentamente com vinho tinto e legumes, servido com purê de mandioca e açafrão, farofa crocante, cenouras e PANCs.",
        "url": "https://boalembranca.com.br/pratos/entre-ossos-e-raizes",
        "image": "assets/dishes/2026/maria-das-trancas.png",
        "credit": "Associação dos Restaurantes da Boa Lembrança"
      },
      "attractions": [],
      "ageClassification": {
        "status": "indeterminada"
      },
      "ticket": {
        "status": "reserva_indeterminada"
      },
      "city": "Belo Horizonte",
      "mealService": "Almoço e jantar",
      "hours": "Seg–sáb: 11h–21h. Dom: 11h–18h (almoço).",
      "hoursSources": [
        {
          "url": "https://www.mariadastrancas.com.br/",
          "sourceName": "Maria das Tranças — unidade São Francisco",
          "evidence": "Horário de funcionamento presencial: Segunda a sábado ---- 11 às 21h. Domingo ---- 11 às 18h."
        },
        {
          "url": "https://boalembranca.com.br/restaurantes/maria-das-trancas",
          "sourceName": "Boa Lembrança — unidade Rua Estoril",
          "evidence": "Segunda a sábado: 11:00 - 21:00. Domingo: 11:00 - 18:00."
        }
      ],
      "hoursCheckedAt": "2026-10-09",
      "hoursStatus": "published",
      "hoursNote": "Unidade Rua Estoril, 938, São Francisco; horários publicados, não confirmação de reserva ou funcionamento excepcional."
    },
    {
      "id": "boa-relicario-gastronomia",
      "name": "Relicário Gastronomia",
      "lat": -18.2436917,
      "lon": -43.5966378,
      "kind": "restaurante",
      "canHostStay": false,
      "type": "gastronomia",
      "days": "1 h (refeição; confirme reserva)",
      "sights": [],
      "kid": "Rua Joaquim Gomes da Costa, 59, Diamantina. Confirme horário e reserva com o restaurante.",
      "url": "https://boalembranca.com.br/restaurantes/relicario-gastronomia",
      "profile": "Restaurante da Associação dos Restaurantes da Boa Lembrança em Diamantina, MG. Prato da edição de 2026: Filet à Baronesa.",
      "guideBriefing": "Relicário Gastronomia · Diamantina, MG.\n\nPrato Boa Lembrança 2026: Filet à Baronesa. Steak de filé mignon ao molho amanteigado de cogumelos frescos e ervas, com purê de batata-baroa e requeijão moreno, vagens salteadas e baroa palha. O prato aproxima ingredientes brasileiros de uma apresentação contemporânea.\n\nEndereço: Rua Joaquim Gomes da Costa, 59. Consulte o restaurante para confirmar disponibilidade do prato, horário e reserva.",
      "relevanceSource": "guide",
      "locationAccuracy": "exact",
      "address": "Rua Joaquim Gomes da Costa, 59, Diamantina, MG",
      "mapQuery": "Relicário Gastronomia Rua Joaquim Gomes da Costa, 59 Diamantina MG",
      "dish": {
        "year": 2026,
        "name": "Filet à Baronesa",
        "description": "Steak de filé mignon ao molho amanteigado de cogumelos frescos e ervas, com purê de batata-baroa e requeijão moreno, vagens salteadas e baroa palha. O prato aproxima ingredientes brasileiros de uma apresentação contemporânea.",
        "url": "https://boalembranca.com.br/pratos/filet-a-baronesa",
        "image": "assets/dishes/2026/relicario-gastronomia.png",
        "credit": "Associação dos Restaurantes da Boa Lembrança"
      },
      "attractions": [],
      "ageClassification": {
        "status": "indeterminada"
      },
      "ticket": {
        "status": "reserva_indeterminada"
      },
      "city": "Diamantina",
      "mealService": "Jantar; almoço sáb/dom",
      "hours": "Ter–qui: 18h–23h. Sex: 18h–0h. Sáb: 12h–15h e 18h30–0h. Dom: 12h–16h. Seg: confirmar (fonte divergente).",
      "hoursSources": [
        {
          "url": "https://boalembranca.com.br/restaurantes/relicario-gastronomia",
          "sourceName": "Boa Lembrança",
          "evidence": "Sábado: 12:00 - 15:00 / 18:30 - 00:00. Domingo: 12:00 - 16:00. Descrição: jantar de terça a sábado."
        }
      ],
      "hoursCheckedAt": "2026-10-09",
      "hoursStatus": "conflicting",
      "hoursNote": "A tabela informa segunda 18h–23h, mas a descrição anuncia jantar de terça a sábado. Segunda não é apresentada como confirmada."
    },
    {
      "id": "boa-taste-vin",
      "name": "Taste-Vin",
      "lat": -19.9311922,
      "lon": -43.9445019,
      "kind": "restaurante",
      "canHostStay": false,
      "type": "gastronomia",
      "days": "1 h (refeição; confirme reserva)",
      "sights": [],
      "kid": "Rua Curitiba, 2105 - Lourdes, Belo Horizonte. Confirme horário e reserva com o restaurante.",
      "url": "https://boalembranca.com.br/restaurantes/taste-vin",
      "profile": "Restaurante da Associação dos Restaurantes da Boa Lembrança em Belo Horizonte, MG. Prato da edição de 2026: Bavette en Sauce.",
      "guideBriefing": "Taste-Vin · Belo Horizonte, MG.\n\nPrato Boa Lembrança 2026: Bavette en Sauce. Carne bovina em molho aromático com pimenta-do-reino, acompanhada de pastel de espinafre em massa folhada.\n\nEndereço: Rua Curitiba, 2105 - Lourdes. Consulte o restaurante para confirmar disponibilidade do prato, horário e reserva.",
      "relevanceSource": "guide",
      "locationAccuracy": "exact",
      "address": "Rua Curitiba, 2105 - Lourdes, Belo Horizonte, MG",
      "mapQuery": "Taste-Vin Rua Curitiba, 2105 - Lourdes Belo Horizonte MG",
      "dish": {
        "year": 2026,
        "name": "Bavette en Sauce",
        "description": "Carne bovina em molho aromático com pimenta-do-reino, acompanhada de pastel de espinafre em massa folhada.",
        "url": "https://boalembranca.com.br/pratos/bavette-en-sauce",
        "image": "assets/dishes/2026/taste-vin.png",
        "credit": "Associação dos Restaurantes da Boa Lembrança"
      },
      "attractions": [],
      "ageClassification": {
        "status": "indeterminada"
      },
      "ticket": {
        "status": "reserva_indeterminada"
      },
      "city": "Belo Horizonte",
      "mealService": "Jantar; almoço aos sábados",
      "hours": "Seg/ter: 19h–23h. Qua/sáb: 19h–23h30. Qui/sex: 19h–0h. Almoço sáb: 12h30–15h45. Dom: fechado.",
      "hoursSources": [
        {
          "url": "https://www.tastevinbh.com.br/contato.html",
          "sourceName": "Taste-Vin — contato e horários",
          "evidence": "Almoço: sábado das 12h30 às 15h45. Sábado de 19h às 23h30 (encerramento da cozinha às 23h15)."
        },
        {
          "url": "https://boalembranca.com.br/restaurantes/taste-vin",
          "sourceName": "Boa Lembrança",
          "evidence": "Domingo: Fechado."
        }
      ],
      "hoursCheckedAt": "2026-10-09",
      "hoursStatus": "published",
      "hoursNote": "Horários publicados; feriados e datas especiais precisam de confirmação com o restaurante."
    },
    {
      "id": "boa-xapuri-2",
      "name": "Xapuri",
      "lat": -19.8417303,
      "lon": -44.0035455,
      "kind": "restaurante",
      "canHostStay": false,
      "type": "gastronomia",
      "days": "1 h (refeição; confirme reserva)",
      "sights": [],
      "kid": "Rua Mandacaru, 260 - Pampulha, Belo Horizonte. Confirme horário e reserva com o restaurante.",
      "url": "https://boalembranca.com.br/restaurantes/xapuri-2",
      "profile": "Restaurante da Associação dos Restaurantes da Boa Lembrança em Belo Horizonte, MG. Prato da edição de 2026: Cheirin no Cangote.",
      "guideBriefing": "Xapuri · Belo Horizonte, MG.\n\nPrato Boa Lembrança 2026: Cheirin no Cangote. Copa-lombo suíno defumado e grelhado com molho de laranja, purê de legumes assados, repolho roxo fermentado e farofa crocante de cebola.\n\nEndereço: Rua Mandacaru, 260 - Pampulha. Consulte o restaurante para confirmar disponibilidade do prato, horário e reserva.",
      "relevanceSource": "guide",
      "locationAccuracy": "exact",
      "address": "Rua Mandacaru, 260 - Pampulha, Belo Horizonte, MG",
      "mapQuery": "Xapuri Rua Mandacaru, 260 - Pampulha Belo Horizonte MG",
      "dish": {
        "year": 2026,
        "name": "Cheirin no Cangote",
        "description": "Copa-lombo suíno defumado e grelhado com molho de laranja, purê de legumes assados, repolho roxo fermentado e farofa crocante de cebola.",
        "url": "https://boalembranca.com.br/pratos/cheirin-no-cangote",
        "image": "assets/dishes/2026/xapuri-2.png",
        "credit": "Associação dos Restaurantes da Boa Lembrança"
      },
      "attractions": [],
      "ageClassification": {
        "status": "indeterminada"
      },
      "ticket": {
        "status": "reserva_indeterminada"
      },
      "city": "Belo Horizonte",
      "mealService": "Almoço e jantar",
      "hours": "Ter–sáb: 11h–22h. Dom: 11h–17h (só almoço). Seg: fechado.",
      "hoursSources": [
        {
          "url": "https://www.instagram.com/xapurirestaurante/",
          "sourceName": "Xapuri — perfil oficial",
          "evidence": "Ter à Sáb: 11h às 22h | Domingos: 11h às 17h"
        },
        {
          "url": "https://boalembranca.com.br/restaurantes/xapuri-2",
          "sourceName": "Boa Lembrança",
          "evidence": "Segunda: Fechado. Terça a sábado: 11:00 - 22:00. Domingo: 11:00 - 17:00."
        }
      ],
      "hoursCheckedAt": "2026-10-09",
      "hoursStatus": "published",
      "hoursNote": "Horários publicados pela associação; não confirmação de horários especiais ou disponibilidade do prato."
    },
    {
      "id": "almoco-cupim-grill-uberaba",
      "name": "Cupim Grill Churrascaria",
      "lat": -19.7699365,
      "lon": -47.9464522,
      "address": "Praça Vicentino Rodrigues da Cunha, 110 — São Benedito, Uberaba/MG",
      "phone": "(34) 3336-4691",
      "food": "Churrascaria com rodízio. Site oficial informa espaço kids.",
      "hours": "Todos os dias, almoço das 11h às 15h.",
      "sources": [
        {
          "url": "https://cupimgrill.com/",
          "label": "Site oficial: almoço, endereço e contato"
        },
        {
          "url": "https://www.google.com/maps/search/Cupim+Grill+Churrascaria+Uberaba/",
          "label": "Ficha cartográfica do estabelecimento: coordenadas, endereço e telefone"
        }
      ],
      "municipality": "Uberaba/MG",
      "verifiedAt": "2026-10-07",
      "locationAccuracy": "exact",
      "availabilityNote": "Horário publicado, não confirmação de atendimento ou mesas em tempo real. Preços não confirmados.",
      "kind": "restaurante",
      "city": "Uberaba",
      "canHostStay": false,
      "type": "gastronomia",
      "days": "1 h (estimativa de refeição)",
      "sights": [],
      "kid": "Site oficial informa espaço kids; confirme condições de uso.",
      "url": "https://cupimgrill.com/",
      "profile": "Churrascaria com rodízio. Site oficial informa espaço kids.",
      "guideBriefing": "Churrascaria com rodízio. Site oficial informa espaço kids.\n\nHorário publicado: Todos os dias, almoço das 11h às 15h.\nHorário publicado, não confirmação de atendimento ou mesas em tempo real. Preços não confirmados.",
      "relevanceSource": "guide",
      "attractions": [],
      "ageClassification": {
        "status": "indeterminada"
      },
      "ticket": {
        "status": "reserva_indeterminada"
      },
      "mapQuery": "Cupim Grill Churrascaria Praça Vicentino Rodrigues da Cunha, 110 — São Benedito, Uberaba/MG"
    },
    {
      "id": "almoco-zebu-uberaba",
      "name": "Churrascaria Zebu",
      "lat": -19.7782479,
      "lon": -47.945217,
      "address": "Av. Tonico dos Santos, 880 — Jardim Induberaba, Uberaba/MG",
      "phone": "(34) 3336-4666",
      "food": "Churrascaria com variedade de cortes e acompanhamentos.",
      "hours": "Segunda a sábado, almoço das 11h às 15h; domingo, das 11h às 16h.",
      "sources": [
        {
          "url": "https://churrascariazebu.com.br/",
          "label": "Site oficial: almoço, endereço e contato"
        },
        {
          "url": "https://www.google.com/maps/search/Churrascaria+Zebu+Uberaba/",
          "label": "Ficha cartográfica do estabelecimento: coordenadas, endereço e telefone"
        }
      ],
      "municipality": "Uberaba/MG",
      "verifiedAt": "2026-10-07",
      "locationAccuracy": "exact",
      "availabilityNote": "Horário publicado, não confirmação de atendimento ou mesas em tempo real. Preços não confirmados.",
      "kind": "restaurante",
      "city": "Uberaba",
      "canHostStay": false,
      "type": "gastronomia",
      "days": "1 h (estimativa de refeição)",
      "sights": [],
      "kid": "Estrutura infantil não confirmada; consulte o restaurante.",
      "url": "https://churrascariazebu.com.br/",
      "profile": "Churrascaria com variedade de cortes e acompanhamentos.",
      "guideBriefing": "Churrascaria com variedade de cortes e acompanhamentos.\n\nHorário publicado: Segunda a sábado, almoço das 11h às 15h; domingo, das 11h às 16h.\nHorário publicado, não confirmação de atendimento ou mesas em tempo real. Preços não confirmados.",
      "relevanceSource": "guide",
      "attractions": [],
      "ageClassification": {
        "status": "indeterminada"
      },
      "ticket": {
        "status": "reserva_indeterminada"
      },
      "mapQuery": "Churrascaria Zebu Av. Tonico dos Santos, 880 — Jardim Induberaba, Uberaba/MG"
    },
    {
      "id": "almoco-nossa-casa-uberaba",
      "name": "Restaurante Nossa Casa",
      "lat": -19.7776699,
      "lon": -47.9440928,
      "address": "Rua Arlinda Cruvinel Borges, 542 — Jardim Induberaba, Uberaba/MG",
      "phone": "(34) 3336-9849",
      "food": "Self-service de comida caseira; também oferece marmitex.",
      "hours": "Segunda a sábado, das 10h30 às 14h, conforme perfil do restaurante.",
      "sources": [
        {
          "url": "https://www.facebook.com/RestauranteNossaCasaUberaba/",
          "label": "Perfil do restaurante: horário publicado e self-service"
        },
        {
          "url": "https://www.google.com/maps/search/Restaurante+Nossa+Casa+Uberaba/",
          "label": "Ficha cartográfica do estabelecimento: coordenadas, endereço e telefone"
        }
      ],
      "municipality": "Uberaba/MG",
      "verifiedAt": "2026-10-07",
      "locationAccuracy": "exact",
      "availabilityNote": "Horário publicado, não confirmação de atendimento ou mesas em tempo real. Preços não confirmados.",
      "kind": "restaurante",
      "city": "Uberaba",
      "canHostStay": false,
      "type": "gastronomia",
      "days": "1 h (estimativa de refeição)",
      "sights": [],
      "kid": "Estrutura infantil não confirmada; consulte o restaurante.",
      "url": "https://www.facebook.com/RestauranteNossaCasaUberaba/",
      "profile": "Self-service de comida caseira; também oferece marmitex.",
      "guideBriefing": "Self-service de comida caseira; também oferece marmitex.\n\nHorário publicado: Segunda a sábado, das 10h30 às 14h, conforme perfil do restaurante.\nHorário publicado, não confirmação de atendimento ou mesas em tempo real. Preços não confirmados.",
      "relevanceSource": "guide",
      "attractions": [],
      "ageClassification": {
        "status": "indeterminada"
      },
      "ticket": {
        "status": "reserva_indeterminada"
      },
      "mapQuery": "Restaurante Nossa Casa Rua Arlinda Cruvinel Borges, 542 — Jardim Induberaba, Uberaba/MG"
    }
  ],
  "visitedAttractions": [
    {
      "stopId": "ouropreto",
      "name": "Igreja de São Francisco de Assis",
      "date": "2026-10-13"
    },
    {
      "stopId": "ouropreto",
      "name": "Igreja de Nossa Senhora das Mercês e Perdões",
      "date": "2026-10-13"
    },
    {
      "stopId": "ouropreto",
      "name": "Igreja de Santa Efigênia",
      "date": "2026-10-13"
    },
    {
      "stopId": "ouropreto",
      "name": "Igreja Nossa Senhora da Conceição",
      "date": "2026-10-13"
    }
  ],
  "accessAlerts": [
    {
      "title": "⚠ Acesso à Canastra e Capitólio",
      "text": "Capitólio tem acesso pela MG‑050. A balsa fica entre Cássia e Delfinópolis; a ponte da BR‑464 tem desvio provisório informado pelo DNIT em 11/09/2026.",
      "url": "https://www.gov.br/dnit/pt-br/central-de-conteudos/noticias-alerta-de-servicos/dnit-alerta-para-desvio-provisorio-na-br-464-mg-entre-sacramento-e-delfinopolis",
      "linkLabel": "Aviso do DNIT ↗"
    }
  ],
  "sources": [
    {
      "url": "https://www.gov.br/dnit/pt-br/central-de-conteudos/noticias-alerta-de-servicos/dnit-alerta-para-desvio-provisorio-na-br-464-mg-entre-sacramento-e-delfinopolis",
      "label": "DNIT"
    },
    {
      "url": "https://www.der.mg.gov.br/",
      "label": "DER‑MG"
    },
    {
      "url": "https://www.gov.br/icmbio/pt-br/assuntos/biodiversidade/unidade-de-conservacao/unidades-de-biomas/cerrado/lista-de-ucs/parna-da-serra-da-canastra",
      "label": "ICMBio"
    },
    {
      "url": "https://visitediamantina.com.br/",
      "label": "Visit Diamantina"
    },
    {
      "label": "Mapa turístico municipal de Ouro Preto — inventário e referência de localização",
      "url": "https://www.ouropreto.mg.gov.br/turismo/arquivos/Mapa_Tur%C3%ADstico_Ouro_Preto_MG.pdf"
    },
    {
      "label": "Prefeitura de Ouro Preto — inventário municipal de capelas",
      "url": "https://www.ouropreto.mg.gov.br/turismo/atrativo/139"
    },
    {
      "label": "Prefeitura de Ouro Preto — situação das obras em igrejas e museus (02/09/2026)",
      "url": "https://www.ouropreto.mg.gov.br/noticia/5756"
    },
    {
      "label": "Prefeitura de Ouro Preto — início das obras na Capela da Piedade (07/08/2026)",
      "url": "https://www.ouropreto.mg.gov.br/noticia/5692"
    },
    {
      "label": "Prefeitura — Passo de Antônio Dias",
      "url": "https://www.ouropreto.mg.gov.br/turismo/atrativo-item/1015"
    },
    {
      "label": "Prefeitura — Igreja Queimada de Nossa Senhora da Conceição",
      "url": "https://www.ouropreto.mg.gov.br/turismo/atrativo-item/1198"
    }
  ]
};
