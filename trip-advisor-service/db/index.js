const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/tripAdvisor')
  .then(() => console.log('Success connecting to mongo Trip Advisor'))
  .catch(()=> console.log('err connecting to mongo', err))

const showcaseSchema = new mongoose.Schema({
  attractionTitle: String,
  country: String,
  relativeRanking: [Number, Number]
  reviews: Number,
  overview: {
    description: String,
    isOpen: Boolean,
    //stretch goal to display all hours on click
    suggestedDuration: Number,
    address: String
    //stretch goal to have map image link you can click on (could be fake map)
  },
  imageUrl: [String, String, String, String, String]
  travelersChoiceAward: Boolean,
  likedStatus: Boolean,
  ticketPrice: Number,
  // availability: Date (Stretch goal)
})

const ShowCase = mongoose.model('Showcase', showcaseSchema);