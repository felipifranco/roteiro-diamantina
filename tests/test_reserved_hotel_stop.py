import importlib.util
import json
import pathlib
import unittest

ROOT = pathlib.Path(__file__).resolve().parents[1]
spec = importlib.util.spec_from_file_location('hotel_route_generator', ROOT / 'scripts/generate_route_data.py')
assert spec is not None and spec.loader is not None
generator = importlib.util.module_from_spec(spec)
spec.loader.exec_module(generator)

class ReservedHotelStopTests(unittest.TestCase):
    def test_reserved_hotel_is_a_selected_overnight_stop(self):
        catalog = json.loads((ROOT / 'data/pontos-de-parada.json').read_text())
        plan = json.loads((ROOT / 'data/roteiro.json').read_text())
        hotels = [s for s in catalog['routeStops'] if s['id'] == 'camposaltos-palace-hotel']
        self.assertEqual(len(hotels), 1, 'Hotel deve ter uma única parada própria')
        hotel = hotels[0]
        self.assertEqual(hotel['kind'], 'hospedagem')
        self.assertEqual(hotel['cnpj'], '32.030.605/0001-11')
        self.assertEqual(hotel['phone'], '3734263606')
        self.assertEqual(hotel['email'], 'camposaltospalacehotel@gmail.com')
        self.assertEqual(hotel['address'], 'Av Vereador Joao Alegre, 728 - Santa Terezinha - Campos Altos/MG - Brasil')
        data = generator.assemble_data(catalog, plan)
        resolved = next(s for s in data['routeStops'] if s['id'] == hotel['id'])
        self.assertTrue(resolved['selectedByDefault'])
        self.assertEqual(resolved['initialDate'], '2026-10-07')
        stay = next(s for s in data['schedule']['stays'] if s['checkIn'] == '2026-10-07')
        self.assertEqual(stay['stopId'], hotel['id'])
        self.assertEqual(stay['checkOut'], '2026-10-08')
        self.assertEqual(stay['checkInTime'], '12:00')
        self.assertEqual(stay['checkOutTime'], '12:00')
        self.assertEqual(stay['nights'], 1)
        self.assertEqual(stay['reservationStatus'], 'informed_by_owner')
        order = data['schedule']['initialStopOrder']
        self.assertEqual(order[order.index('camposaltos') + 1], hotel['id'])
        self.assertTrue(next(s for s in data['routeStops'] if s['id'] == 'camposaltos')['attractions'])

    def test_hotel_popup_displays_reservation_details(self):
        html = (ROOT / 'index.html').read_text()
        self.assertIn('hotelReservationMarkup', html)
        self.assertIn('checkInTime', html)
        self.assertIn('checkOutTime', html)
