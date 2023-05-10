const mongoose=require('mongoose');

const car=mongoose.Schema({
    wheel:Number,
    type:String,
    model:String
})

module.exports=mongoose.model('Car',car);