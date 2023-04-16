import { Router } from 'express'

const router = Router()

// GET localhost:3000/
router.get('/', flightsCtrl.index)

export { router }
