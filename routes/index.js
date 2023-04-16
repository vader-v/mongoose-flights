import { Router } from 'express'

const router = Router()

// GET localhost:3000/
router.get('/', moviesCtrl.index)

export { router }
