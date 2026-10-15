import unittest

from scripts.generate_route_data import load_data


class TiradentesCatalogTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        data = load_data()
        cls.city = next(stop for stop in data["routeStops"] if stop["id"] == "tiradentes")
        cls.by_name = {item["name"]: item for item in cls.city["attractions"]}

    def test_official_tiradentes_highlights_and_maria_fumaca_are_named(self):
        expected = {
            "Passeio de Maria Fumaça (Tiradentes–São João del-Rei)",
            "Capela dos Passos",
            "Igreja de São Francisco de Paula",
            "Santuário da Santíssima Trindade",
            "Igreja Nossa Senhora das Mercês",
            "Museu da Moto",
            "Capela Bom Jesus da Pobreza",
            "Capela de São João Evangelista",
            "Travessia Serra de São José",
            "Estrada Parque Passos dos Fundadores",
        }
        self.assertTrue(expected <= self.by_name.keys(), expected - self.by_name.keys())
        self.assertTrue(expected <= set(self.city["sights"]))
        self.assertEqual(set(self.by_name), set(self.city["sights"]))

    def test_maria_fumaca_has_verified_station_and_operator_details(self):
        train = self.by_name["Passeio de Maria Fumaça (Tiradentes–São João del-Rei)"]
        self.assertEqual(train["locationAccuracy"], "exact")
        self.assertAlmostEqual(train["lat"], -21.1147886, places=5)
        self.assertAlmostEqual(train["lon"], -44.1676973, places=5)
        self.assertEqual(train["estimatedDuration"], "Cerca de 40 min por trecho")
        self.assertEqual(train["ticket"]["status"], "online")
        self.assertEqual(train["ticket"]["url"], "https://efom.org.br/compra-de-bilhetes/")
        self.assertIn("ABPF", train["scheduleNote"])
        self.assertIn("15/10/2026", train["scheduleNote"])
        self.assertTrue(train["selectedByDefault"])
        self.assertEqual(train["initialDate"], "2026-10-16")

    def test_unsurveyed_tiradentes_circuits_are_not_given_false_route_points(self):
        for name in (
            "Capela dos Passos",
            "Travessia Serra de São José",
            "Estrada Parque Passos dos Fundadores",
        ):
            with self.subTest(name=name):
                item = self.by_name[name]
                self.assertEqual(item["locationAccuracy"], "city-center")
                self.assertTrue(item.get("mapQuery"))
                self.assertFalse(item.get("selectedByDefault", False))


if __name__ == "__main__":
    unittest.main()
