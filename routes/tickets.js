import { Router } from "express"
import * as flightsCtrl from '../controllers/flights.js'
const router = Router()

router.get('/:flightId', flightsCtrl.show)
router.post('/:flightId/tickets/new', flightsCtrl.addTicket)
router.get('/:flightId/tickets/new', flightsCtrl.show)

export { router }