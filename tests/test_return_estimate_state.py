import re
import unittest
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
PAGE = (ROOT / "index.html").read_text(encoding="utf-8")


class ReturnEstimateStateTests(unittest.TestCase):
    def test_return_date_is_unknown_without_a_successful_route_duration(self):
        self.assertIsNotNone(
            re.search(r"function returnDate\(order\)\{return returnDriveHours===null\?null:add", PAGE),
            "a visit end date is not a return estimate",
        )

    def test_route_recalculation_clears_the_previous_duration_before_fetch(self):
        draw_line = PAGE.rsplit("window.drawLine=async function(){", 1)[1]
        clear = draw_line.find("returnDriveHours=null;")
        fetch = draw_line.find("await fetch(")
        self.assertGreaterEqual(clear, 0, "each route request must invalidate its old return duration")
        self.assertGreater(fetch, clear, "the old estimate must be cleared before the network request")

    def test_failed_current_request_clears_duration_even_after_late_success_error(self):
        self.assertIsNotNone(
            re.search(r"catch\{if\(request===routeRequest\)\{returnDriveHours=null;", PAGE),
            "a post-fetch error must not expose a partially calculated return estimate",
        )

    def test_unknown_return_date_is_not_rendered_as_an_estimate(self):
        self.assertTrue(
            "date===null?`RETORNO A ${origin.name.split(' · ')[0].toUpperCase()} · DATA NÃO ESTIMADA`" in PAGE,
            "the return card must not show a date without a current route estimate",
        )
        self.assertTrue(
            "home===null?'a estimar':" in PAGE,
            "the trip summary must not show a date without a current route estimate",
        )
        self.assertIn(
            "home===null?'Retorno ainda não estimado.':",
            PAGE,
            "the summary must explain why a return date is unavailable",
        )

    def test_origin_popup_tracks_pending_failed_and_successful_return_estimates(self):
        self.assertTrue(
            "marker.setPopupContent(popup(origin)+`<div class=\"pop-note\">${note}</div>`)" in PAGE,
            "the origin popup must refresh its return note instead of retaining old HTML",
        )
        self.assertTrue(
            "setOriginReturnNote('Recalculando rota; estimativa indisponível.')" in PAGE,
            "a route refresh must clear the old origin-popup estimate",
        )
        self.assertTrue(
            "setOriginReturnNote('Rota indisponível; estimativa de retorno não calculada.')" in PAGE,
            "a failed route must not leave an old estimate in the origin popup",
        )
        self.assertTrue(
            "setOriginReturnNote(`Saída ${fmt(schedule.startDate)} · retorno estimado" in PAGE,
            "a successful route must restore its newly calculated origin-popup estimate",
        )


if __name__ == "__main__":
    unittest.main()
