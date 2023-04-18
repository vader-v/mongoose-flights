import { Router } from 'express'
import * as flightsCtrl from '../controllers/flights.js'

const router = Router()

// GET localhost:3000/flights
router.get('/', flightsCtrl.index)
//GET localhost:3000/flights/new
router.get('/new', flightsCtrl.new)
// POST localhost:3000/movies
router.post('/', flightsCtrl.create)
//
router.get('/:flightId', flightsCtrl.show)
router.delete('/:flightId', flightsCtrl.delete)
export { router }
