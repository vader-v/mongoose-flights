import { Flight } from "../models/flight.js"
import { Meal } from "../models/meal.js"

function index(req, res) {
  Flight.find({})
  .then(flights => {
    console.log(flights)
    res.render('flights/index', {
      flights,
      time: req.time,
      title: 'All Flights'
    })
  })
  .catch(error => { // If there's an error, console.log it and redirect back home!
    console.log(error)
    res.redirect('/')
  })
}
function newFlight(req, res) {
  res.render('flights/new', {
    title: 'Add Flight'
  })
  .catch(err => {
    console.log(err)
    res.redirect('/flights')
  })
}
function addTicket(req, res) {
    Flight.findById(req.params.flightId)
      .then(flight => {
        flight.tickets.push(req.body)
        return flight.save()
      })
      .then(() => {
        res.redirect(`/flights/${req.params.flightId}`)
      })
    .catch(err => {
      console.log(err)
      res.redirect(`/flights/${req.params.flightId}/tickets/new`)
    })
}


function show(req, res) {
  Flight.findById(req.params.flightId)
  .populate('tickets')
  .populate('meals')
  .then(flight => {
    Meal.find({flight: {$nin: flight.meals}})
    .then(meals => {
      res.render('flights/show', {
        flight: flight,
        title: 'Flights Details',
        meals,
      })
    })
    .catch(err => {
      console.log(err)
      res.redirect('/flights')
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/flights')
  })
}

function create(req, res) {
  Flight.create(req.body)
  .then(flight => {
    return Flight.findByIdAndUpdate(req.params.flightId, req.body, {new: true})
    .then(flight => {
      res.redirect(`/flights/${flight._id}`)
    })
  })
  .catch(error => {
    console.log(error)
    res.redirect('/flights')
  })
}

function update(req, res) {
  Flight.findByIdAndUpdate(req.params.flightId, req.body, {new: true})
  .then((flight)=> {
    res.redirect(`/flights/${flight._id}`)
  })
  .catch(error => {
    console.log(error)
    res.redirect('/flights')
  })
}

function deleteFlight(req, res) {
  Flight.findByIdAndDelete(req.params.flightId)
  .then(flight => {
    res.redirect('/flights')
  })
  .catch(error => {
    console.log(error)
    res.redirect('/flights')
  })
}

function edit(req, res) {
  Flight.findById(req.params.flightId)
  .then((flight) => {
    res.render('flights/edit', {
      flight,
      title: 'Edit Flight'
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/flights')
  })
}

function newTicket(req, res) {
  Flight.findById(req.params.flightId)
    .then(flight => {
      res.render('tickets/new', {
        title: 'Add Ticket',
        flight: flight
      })
    })
    .catch(err => {
      console.log(err)
      res.redirect('/flights')
    })
}
function addMeal(req, res) {
  Flight.findById(req.params.flightId)
  .then(flight => {
    Meal.findById(req.body.meal)
    .then(meal => {
      flight.meals.push(meal)
      return flight.save()
    })
    .then(() =>{
      res.redirect(`/flights/${flight._id}`)
    })
    .catch(err => {
      console.log(err)
      res.redirect(`/flights/${flight._id}`)
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/flights')
  })
}
export {
  index,
  newFlight as new,
  create,
  show,
  update,
  deleteFlight as delete,
  edit,
  addTicket,
  newTicket,
  addMeal,
}