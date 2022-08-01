const express = require("express");
const CarRouter = express.Router();

const { insertCar } = require("../modal/car.query")
console.log(insertCar);

CarRouter.post('/', async (req, res) => {
    const {Cname,Modalname,rent,status } = req.body;
    
    try {

        const result = await insertCar({ Cname,Modalname,rent,status})
        console.log(result);
        res.json({
            message: 'user inserted', result
        })
    } catch (error) {
        console.log(error);
        res.json({
            message: 'error in inserting data'
        })

    }
})

module.exports=CarRouter