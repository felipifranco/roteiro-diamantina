import json
import subprocess
import unittest
from test_reserved_hotel_stop import ROOT, generator


class BookingHotelStopTests(unittest.TestCase):
    def test_booking_hotel_replaces_only_diamantina_lodging(self):
        catalog = json.loads((ROOT / 'data/pontos-de-parada.json').read_text())
        plan = json.loads((ROOT / 'data/roteiro.json').read_text())
        hotels = [s for s in catalog['routeStops'] if s['id'] == 'hotel-estilo-de-minas']
        self.assertEqual(len(hotels), 1)
        hotel = hotels[0]
        self.assertEqual(hotel['name'], 'Hotel Estilo de Minas')
        self.assertEqual(hotel['kind'], 'hospedagem')
        self.assertTrue(hotel['canHostStay'])
        self.assertEqual(hotel['bookingUrl'], 'https://www.booking.com/Share-StFWLx6')
        data = generator.assemble_data(catalog, plan)
        resolved = next(s for s in data['routeStops'] if s['id'] == hotel['id'])
        self.assertTrue(resolved['selectedByDefault'])
        self.assertEqual(resolved['initialDate'], '2026-10-08')
        stay = next(s for s in data['schedule']['stays'] if s['checkIn'] == '2026-10-08')
        self.assertEqual(stay, {'stopId': hotel['id'], 'checkIn': '2026-10-08',
                                'checkOut': '2026-10-10', 'reservationStatus': 'planned'})
        self.assertEqual(len(data['schedule']['stays']), 3)
        self.assertTrue(next(s for s in data['routeStops'] if s['id'] == 'diamantina')['selectedByDefault'])
        self.assertTrue(next(s for s in data['routeStops'] if s['id'] == 'diamantina')['attractions'])

    def test_popup_keeps_booking_link_and_does_not_invent_reservation_or_cnpj(self):
        script = """
const fs=require('fs');
const page=fs.readFileSync('index.html','utf8');
const catalog=JSON.parse(fs.readFileSync('data/pontos-de-parada.json','utf8'));
const plan=JSON.parse(fs.readFileSync('data/roteiro.json','utf8'));
const schedule={stays:plan.stays},stops=catalog.routeStops;
const TripCalendar={nightCount:()=>2};
const placeLabel=()=>'',escapeCardText=value=>String(value||'');
eval(page.slice(page.indexOf('function hotelReservationMarkup'),page.indexOf('function effortFor')));
console.log(popup(stops.find(s=>s.id==='hotel-estilo-de-minas')));
"""
        output = subprocess.run(['node', '-e', script], cwd=ROOT, capture_output=True, text=True, check=True).stdout
        self.assertIn('Hospedagem planejada', output)
        self.assertIn('08/10/2026', output)
        self.assertIn('10/10/2026', output)
        self.assertIn('https://www.booking.com/Share-StFWLx6', output)
        self.assertNotIn('Reserva informada', output)
        self.assertNotIn('CNPJ:', output)
