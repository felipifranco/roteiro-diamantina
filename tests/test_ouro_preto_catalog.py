import json
from pathlib import Path
import unittest

ROOT = Path(__file__).resolve().parents[1]

CORE_CHURCHES = {
    "Basílica de Nossa Senhora do Pilar",
    "Igreja Nossa Senhora da Conceição",
    "Igreja Nossa Senhora do Carmo",
    "Igreja de São Francisco de Assis",
    "Igreja Nossa Senhora do Rosário",
    "Capela do Nosso Senhor do Bonfim",
    "Igreja de Santa Efigênia",
    "Capela de Nossa Senhora do Rosário do Padre Faria",
    "Igreja Bom Jesus de Matosinhos e São Miguel e Almas",
    "Igreja de Nossa Senhora das Dores do Monte Calvário",
    "Igreja de Nossa Senhora das Mercês e Perdões",
    "Igreja de Nossa Senhora das Mercês e Misericórdia",
    "Igreja de São Francisco de Paula",
    "Igreja de São José",
}

CITY_CHAPELS = {
    "Capela do Nosso Senhor do Bonfim",
    "Capela de Nossa Senhora do Rosário do Padre Faria",
    "Capela de Nossa Senhora da Piedade - Ouro Preto",
    "Capela de Santana - Ouro Preto",
    "Capela de Santana do Paço da Misericórdia - Ouro Preto",
    "Capela de São João Batista - Ouro Preto",
    "Capela de São Sebastião - Ouro Preto",
    "Capela do Bom Jesus da Pedra Fria - Ouro Preto",
    "Capela do Bom Jesus das Flores - Ouro Preto",
    "Capela do Palácio dos Governadores - Ouro Preto",
    "Capela de Nossa Senhora das Dores OP",
}

OFFICIAL_DISTRICT_CHURCHES = {"Igreja Queimada de Nossa Senhora da Conceição · Antônio Pereira"}
OFFICIAL_CITY_PASSOS = {"Passo de Antônio Dias"}
OFFICIAL_RESTORATION_SITES = {"Chafariz do Antônio Dias"}

OFFICIAL_MINES = {
    "Grande Mina Central",
    "Mina 13 de Maio",
    "Mina do Bijoca",
    "Mina do Chico Rei",
    "Mina do Jeje",
    "Mina Du Veloso",
    "Mina Santa Rita",
    "Minas do Palácio Velho",
}

OFFICIAL_MUSEUMS = {
    "Museu da Inconfidência",
    "Casa dos Contos",
    "Museu de Mineralogia / Museu de Ciência e Técnica",
    "Museu Aleijadinho",
    "Museu do Oratório",
    "Ecomuseu Morro da Queimada",
    "Memorial do Tropeiro · Santo Antônio do Salto",
    "Museu Boulieu",
    "Museu Casa dos Inconfidentes",
    "Museu Casa Guignard",
    "Museu de Arte Sacra de Ouro Preto",
    "Museu de Farmácia",
}

OFFICIAL_MAP_SITES = {"Casa de Tomás Antônio Gonzaga"}


class OuroPretoCatalogAuditTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        catalog = json.loads((ROOT / "data/pontos-de-parada.json").read_text())
        cls.city = next(stop for stop in catalog["routeStops"] if stop["id"] == "ouropreto")
        cls.by_name = {item["name"]: item for item in cls.city["attractions"]}

    def test_all_main_historic_churches_from_municipal_inventory_are_named(self):
        self.assertTrue(CORE_CHURCHES <= self.by_name.keys(), CORE_CHURCHES - self.by_name.keys())
        self.assertEqual(len(CORE_CHURCHES), 14)

    def test_municipal_ouro_preto_chapels_and_dores_chapel_are_named(self):
        self.assertTrue(CITY_CHAPELS <= self.by_name.keys(), CITY_CHAPELS - self.by_name.keys())
        for name in CITY_CHAPELS:
            with self.subTest(chapel=name):
                item = self.by_name[name]
                self.assertTrue(item.get("mapQuery"))
                self.assertTrue(item.get("visitLinks"))
                self.assertTrue(any("ouropreto.mg.gov.br" in link["url"] for link in item["visitLinks"]))

    def test_district_church_and_seasonally_closed_passo_are_specific(self):
        self.assertTrue(OFFICIAL_DISTRICT_CHURCHES <= self.by_name.keys())
        self.assertTrue(OFFICIAL_CITY_PASSOS <= self.by_name.keys())
        self.assertTrue(OFFICIAL_RESTORATION_SITES <= self.by_name.keys())
        church = self.by_name[next(iter(OFFICIAL_DISTRICT_CHURCHES))]
        passo = self.by_name[next(iter(OFFICIAL_CITY_PASSOS))]
        chafariz = self.by_name[next(iter(OFFICIAL_RESTORATION_SITES))]
        self.assertEqual(church["locality"], "Antônio Pereira")
        self.assertIn("obra", church["scheduleNote"].lower())
        self.assertIn("Semana Santa", passo["scheduleNote"])
        self.assertEqual(chafariz["locationAccuracy"], "city-center")
        self.assertIn("outubro de 2026", chafariz["scheduleNote"].lower())

    def test_each_municipal_gold_mine_has_its_own_routeable_record(self):
        self.assertTrue(OFFICIAL_MINES <= self.by_name.keys(), OFFICIAL_MINES - self.by_name.keys())
        self.assertNotIn("Mina de ouro visitável", self.by_name)
        for name in OFFICIAL_MINES:
            item = self.by_name[name]
            with self.subTest(mine=name):
                self.assertIn(item["locationAccuracy"], {"exact", "street-center", "trail-point"})
                self.assertIn("ouro preto", item["mapQuery"].lower())
                self.assertNotEqual((item["lat"], item["lon"]), (self.city["lat"], self.city["lon"]))
                self.assertTrue(any("ouropreto.mg.gov.br" in link["url"] for link in item["visitLinks"]))

    def test_municipal_museum_inventory_is_complete_and_visit_sites_are_distinguished(self):
        self.assertTrue((OFFICIAL_MUSEUMS - {"Museu Aleijadinho"}) <= self.by_name.keys(), (OFFICIAL_MUSEUMS - {"Museu Aleijadinho"}) - self.by_name.keys())
        self.assertTrue(OFFICIAL_MAP_SITES <= self.by_name.keys(), OFFICIAL_MAP_SITES - self.by_name.keys())
        self.assertNotIn("Museu Aleijadinho", self.by_name, "The museum belongs within the church circuit, not as a separate tour")
        church = self.by_name["Igreja Nossa Senhora da Conceição"]
        self.assertTrue(any(link["url"].endswith("/atrativo-item/590") for link in church["visitLinks"]))
        self.assertIn("nos fundos", church["description"])
        for phrase in ("São Francisco de Assis", "Mercês e Perdões"):
            self.assertIn(phrase, church["description"])
        for name in ("Igreja de São Francisco de Assis", "Igreja de Nossa Senhora das Mercês e Perdões"):
            with self.subTest(church=name):
                self.assertIn("Museu Aleijadinho", self.by_name[name]["description"])
                self.assertTrue(any(link["url"].endswith("/atrativo-item/584") for link in self.by_name[name]["visitLinks"]))
        self.assertEqual(self.by_name["Museu de Arte Sacra de Ouro Preto"]["sameSiteAs"], "Basílica de Nossa Senhora do Pilar")

    def test_new_attractions_have_specific_descriptions_and_official_sources(self):
        audited = (CORE_CHURCHES | CITY_CHAPELS | OFFICIAL_DISTRICT_CHURCHES | OFFICIAL_CITY_PASSOS | OFFICIAL_RESTORATION_SITES | OFFICIAL_MINES | OFFICIAL_MUSEUMS | OFFICIAL_MAP_SITES) - {
            "Museu Aleijadinho",
            "Basílica de Nossa Senhora do Pilar",
            "Igreja Nossa Senhora da Conceição",
            "Igreja Nossa Senhora do Carmo",
            "Igreja de São Francisco de Assis",
            "Igreja Nossa Senhora do Rosário",
            "Museu da Inconfidência",
            "Casa dos Contos",
            "Museu de Mineralogia / Museu de Ciência e Técnica",
            "Museu Aleijadinho",
            "Museu do Oratório",
        }
        for name in audited:
            item = self.by_name[name]
            with self.subTest(attraction=name):
                self.assertGreaterEqual(len(item["description"].strip()), 100)
                self.assertTrue(item.get("mapQuery", "").strip())
                self.assertTrue(item.get("visitLinks"))
                self.assertTrue(all(link["url"].startswith("https://") for link in item["visitLinks"]))

    def test_amarantina_generic_placeholder_is_replaced_with_a_named_landmark(self):
        self.assertNotIn("Núcleo histórico · Amarantina", self.by_name)
        church = self.by_name["Igreja Matriz de São Gonçalo do Amarante · Amarantina"]
        self.assertEqual(church["locality"], "Amarantina")
        self.assertEqual(church["locationAccuracy"], "exact")
        self.assertIn("São Gonçalo", church["mapQuery"])

    def test_summary_names_the_actual_inventory_instead_of_generic_categories(self):
        joined = self.city["guideBriefing"] + " " + " ".join(self.city["sights"])
        for phrase in ("Praça Tiradentes", "19 locais", "10 entradas", "8 minas", "Museu Boulieu", "Santo Antônio do Salto", "Capela de Nossa Senhora da Piedade", "Capela de Nossa Senhora das Dores OP", "Igreja Queimada", "Passo de Antônio Dias", "Chafariz do Antônio Dias"):
            with self.subTest(phrase=phrase):
                self.assertIn(phrase, joined)


if __name__ == "__main__":
    unittest.main()
