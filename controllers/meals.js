import { Meal } from "../models/meal.js"

function newMeal(req, res) {
  Meal.find({})
  .then(meals => {
    res.render('/meals/new', {
      title: 'Add Meal',
      meals,
    })
  })
  .catch(error => { // If there's an error, console.log it and redirect back home!
    console.log(error)
    res.redirect('/flights')
  })
}

export {
  newMeal as new,
}