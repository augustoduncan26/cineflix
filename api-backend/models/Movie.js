const mongoose = require("mongoose");

const MovieSchema = mongoose.Schema({
    title:{type:String, required: true, unique: true},
    desc: {type:String},
    img: { type:String},
    imgTitle: { type:String},
    imgSm: { type:String},
    triler: { type:String},
    video: { type:String},
    year: { type:String},
    limit: { type:Number},
    genre: { type:String},
    isSerie: {type:Boolean, default: false},
},
{timestamps:true});

module.exports = mongoose.model("Movie", MovieSchema);