import { Router } from 'express'
import * as flightsCtrl from '../controllers/flights.js'

const router = Router()

// GET localhost:3000/flights
router.get('/', flightsCtrl.index)
//GET localhost:3000/flights/new
router.get('/new', flightsCtrl.new)
// POST localhost:3000/movies
router.post('/', flightsCtrl.create)
//PUT localhost:3000/flights/:flightId
router.put('/:flightId', flightsCtrl.update)
router.get('/:flightId', flightsCtrl.show)
router.delete('/:flightId', flightsCtrl.delete)
router.get('/:flightId/edit', flightsCtrl.edit)
router.post('/:flightId/tickets', flightsCtrl.addTicket)
router.get('/:flightId/tickets/new', flightsCtrl.newTicket)
router.post('/:flightId/meals', flightsCtrl.addMeal);


export { router }
