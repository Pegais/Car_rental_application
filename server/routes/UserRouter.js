const express = require("express");
const LoginRouter = express.Router();
const { createAccessJwt, createRefreshJwt } = require('../utils/jwt')
const {verifyJWT} =require("../utils/verifyJWT")




// requiring the insert query from user/modal/user.modal
const { insert, getUserByEmail, getallData ,Manage } = require('../modal/user.query')

LoginRouter.all("/", (req, res, next) => {
    // res.json({
    //     message:"return user router"
    // })
    next();
})

// import hassedpasswordfunc
const {hassedPassFunc} = require('../utils/hasspassword.js')

// create new user coming to webPage;
LoginRouter.post('/', async (req, res) => {
    const { name, email, password,role } = req.body;
    let hasedPassword = await hassedPassFunc(password)
    console.log(hasedPassword)
    try {

        const result = await insert({ name, email, password: hasedPassword,role })
        console.log(result);
        res.json({
            message: 'user inserted', result
        })
    } catch (error) {
        console.log(error);
        res.json({
            message: 'error in inserting data', hasedPassword
        })

    }
})


// create  userLogin Route
// check if user is there in DB through email and bcrypt compare
const {ComparePassword} = require('../utils/hasspassword.js')
LoginRouter.post('/login', async (req, res) => {
    console.log(ComparePassword,"this is comparePassword function");
    try {

        const { email, password } = req.body
        if (!email || !password) {
            return res.json({ message: "login unsuccessful" })
        }
        const user = await getUserByEmail(email);
        console.log("user from database is:", user);
        const passwordFromDatabase = user && user._id ? user.password : null;
        console.log(passwordFromDatabase, email);

        // if user and user's passsword exists than comparePassword using bcrypt
        if (user && user.password) {
            console.log("in compare");
            const result = await ComparePassword(password, passwordFromDatabase)
            console.log("result is",result);
            if (result) {
                
                
                const accessToken = await createAccessJwt(user.email);
                // const refreshToken = await createRefreshJwt(user.email);
                res.json({
                    user,
                    accessToken,
                    // refreshToken
                    
                })
            } else {
                res.json({message:"error"})
            }
            
           
        } else {
            console.log("User not Found or User password invalid");
            res.json({message:'error'})
        }

    } catch (error) {
        console.log(error)
    }
    // res.json({status:"success",message:"login successully"})

})

LoginRouter.get('/data', async(req, res) => {
    try {
        let data =await getallData()
        res.json({
           data
        })
        console.log(data);
    } catch (error) {
        console.log(error);
    }
})

// delete the ower/user from database by admin

LoginRouter.post('/remove', async (req, res) => {
    let { id } = req.body;
    console.log(id);
    try {
        let data =await Manage(id)
        res.json({
           data
        })
        console.log(data);
    } catch (error) {
        console.log(error);
    }
})
LoginRouter.get("/userauth", verifyJWT,(req,res) => {
    res.json({
         auth:true
     })
 })



module.exports = LoginRouter