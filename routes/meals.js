import { Router } from 'express'
import * as mealCtrl from '../controllers/meals.js'

const router = Router()

router.get('/new', performersCtrl.new)

export { router }