import { Router } from 'express'

const router = Router()

// GET localhost:3000/users
  router.get('/', flightsCtrl.index)


export { router }
