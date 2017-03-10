const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//Define our model
const TermSchema = new Schema({ //lowercase per trasformarlo in lowercase
    term: {type: String},
    when: {type:Date, default:Date.now}
});

module.exports = mongoose.model("image-search-term", TermSchema);
