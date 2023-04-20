import { Meal } from "../models/meal.js"

function newMeal(req, res) {
  Meal.find({})
  .then(meals => {
    res.render('meals/new', {
      title: 'Add Meal',
      meals,
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/meals/new')
  })
}
function create(req, res) {
  Meal.create(req.body)
    .then(() => {
      Meal.find({})
        .then(meals => {
          res.render('meals/new', {
            title: 'Add Meal',
            meals,
            success: 'Meal added successfully!',
          })
        })
        .catch(err => {
          console.log(err)
          res.redirect('/meals/new')
        })
    })
    .catch(err => {
      console.log(err)
      res.redirect('/meals/new', {
        title: 'Add Meal',
        error: 'Error creating meal. Please try again.'
      })
    })
}

export {
  newMeal as new,
  create,
}