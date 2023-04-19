import { Router } from 'express'
import * as mealCtrl from '../controllers/meals.js'

const router = Router()

router.get('/meals/new', mealCtrl.new)

export { router }