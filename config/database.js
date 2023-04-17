import mongoose from 'mongoose'

// shortcut to mongoose.connection object
const flights = mongoose.connection

mongoose.connect(process.env.DATABASE_URL)

flights.on('connected', function() {
  console.log(`Connected to MongoDB ${flights.name} at ${flights.host}:${flights.port}`)
})