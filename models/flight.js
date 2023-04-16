import mongoose from "mongoose"

const Schema = mongoose.Schema

const flightsSchema = new Schema({
  airline: {
    type: String, 
    required: true, 
    enum: ['American', 'Southwest', 'United']
  },
  airport: {
    type: String,
    required: true,
    enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN']
  },
  flightNo: {
    type: Number,
    min: 10,
    max: 9999
  },
  departs: {
    type: Date
  }
})