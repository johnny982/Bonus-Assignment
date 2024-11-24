const mongoose = require('mongoose');

let bookModel = mongoose.Schema({
    Title: String,
    Genre: String,
    Rating: Number,
    Review: String
},
{
    collection: "MovieCollection"
}
);

module.exports = mongoose.model('Book', bookModel);