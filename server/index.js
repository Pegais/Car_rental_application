require('dotenv').config();
const express = require("express")
const app = express();
const cors = require('cors')
const bcrypt = require('bcrypt')
const morgan = require('morgan')
const helmet = require('helmet')
app.use(morgan())
app.use(helmet())
app.use(cors());
app.use(express.json());
const Port = process.env.port || 5000;

let paymentHistory = {};

// *****************************************************************************************************
//  to check if mongo is connected
const mongoose = require("mongoose");
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
   
 });
const mongo =mongoose.connection
mongo.on('open', () => {
    console.log('mongoose is connected');
})
mongo.on('error', (error) => {
    console.log(error)
})
// *****************************************************************************************

app.post("/ownerWallet", (req, res) => {
    let { name, price } = req.body
   
    console.log(name, price);
    paymentHistory.name = name;
    paymentHistory.paid = price;
    res.json({
        message: "paid successfully"
    })
    console.log(paymentHistory);
});

app.get("/payment", (req, res) => {
    res.send(paymentHistory)
    console.log(paymentHistory);
})

const LoginRouter = require('./routes/UserRouter')
const CarRouter =require('./routes/CarRouter')
app.use('/register', LoginRouter)
app.use("/car",CarRouter)
const errorHandler = require("./utils/errorHandler.js")
// to handle errors*************************************************************
app.use('*', (req, res,next) => {
    const error = new Error("resources not found");
    error.status = 404;


    next(error);

})

app.use('*', (error, req, res, next) => {
    errorHandler(error,res)
})
// ********************************************************************************************

app.listen(Port, () => {
    console.log("server is running on port 5000");
})









