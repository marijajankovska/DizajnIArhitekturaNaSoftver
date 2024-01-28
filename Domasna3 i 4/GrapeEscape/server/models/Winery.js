const mongoose = require('mongoose');

const Winery=new mongoose.Schema({
    latitude: Number,
    longitude: Number,
    title: String,
    city: String,
    description: String,
    category: String
})

module.exports = mongoose.model('Winery', Winery);