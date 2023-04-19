import mongoose from "mongoose"

const Schema = mongoose.Schema

const ticketSchema = new Schema ({
  seat: {
    type: String,
    required: true,
    match: /[A-F][1-9]\d?/,
  },
  price: {
    type:Number,
    min: 0,
  }
})

const flightsSchema = new Schema({
  airline: {
    type: String, 
    required: true, 
    enum: ['American', 'Southwest', 'United']
  },
  airport: {
    type: String,
    required: true,
    default: 'DEN',
    enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN']
  },
  flightNo: {
    type: Number,
    min: 10,
    max: 9999,
    required: true,
  },
  departs: {
    type: Date,
    required: true,
    default: Date.now,
  }, 
  tickets: {
    type: [ticketSchema]
  },
  meals: [{
    type: Schema.Types.ObjectId,
    ref: 'Meal'
  }]
}, {
  timestamps: true
})

const Flight = mongoose.model('Flight', flightsSchema)

export {
  Flight
}