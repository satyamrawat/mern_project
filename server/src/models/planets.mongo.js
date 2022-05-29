const mongoose = require('mongoose');

const planetSchemna = new mongoose.Schema({
    keplerName:{
        type:String,
        required: true,
    }
});

module.exports = mongoose.model('Planet', planetSchemna);