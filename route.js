const express = require('express');
const router = express.Router();
const Car = require('./model/model')
const booking = require('./model/booking')

router.post('/', (req, res) => {
    const car = new Car(req.body);
    car.save();
    res.send(car)
})

router.post('/book', (req, res) => {
    const book = new booking(req.body);
    book.save();
    res.status(201).send(book)
});

router.get('/getcar',(req,res)=>{
    Car.find().then((result)=>{
        res.send(result)
    })
})

module.exports = router;