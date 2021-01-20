const mongoose = require('mongoose');

module.exports.connect = mongoose.connect('mongodb://localhost/tripAdvisor', {
  useNewUrlParser: true, useUnifiedTopology: true,
})
  .then(() => console.log('Success connecting to mongo Trip Advisor'))
  .catch((err) => console.log('err connecting to mongo', err));

const showcaseSchema = new mongoose.Schema({
  attractionTitle: String,
  city: String,
  reviews: Number,
  relativeRanking: [Number, Number],
  ratio: Number,
  attractionType: String,
  overview: {
    description: String,
    isOpen: Boolean,
    // stretch goal to display all hours on click
    suggestedDuration: Number,
    address: String,
    // stretch goal to have map image link you can click on (could be fake map)
  },
  imageUrl: [String, String, String, String, String],
  travelersChoiceAward: Boolean,
  likedStatus: Boolean,
  ticketPrice: Number,
  // availability: Date (Stretch goal)
});

const ShowCase = mongoose.model('Showcase', showcaseSchema);

const improveFormSchema = new mongoose.Schema({
  description: String,
  isOpen: Boolean,
  suggestedDuration: Number,
  address: String,
});

const Improve = mongoose.model('ImproveForm', improveFormSchema);

module.exports.ShowCase = ShowCase;
module.exports.Improve = Improve;
