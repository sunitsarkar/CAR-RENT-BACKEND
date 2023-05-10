const mongoose=require('mongoose');

const Booking=mongoose.Schema({
    model:String,
    date:String
})

module.exports=mongoose.model('Booking',Booking);