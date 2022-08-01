const jwt = require("jsonwebtoken")
const verifyJWT = (req, res, next) => {
    const token = req.headers["x-access-token"];
    if (!token) {
        console.log(token);
        res.json({
            auth: false,
            message:"not valid token"
        })
    } else {
        jwt.verify(token, process.env.JWT_ACCESS_TOKEN, (err,decoded) => {
            if (err) {
                res.json({
                    auth:false
                })
            } else {
                req.authId = decoded.id;
                next();
            }
        })
    }
}
module.exports = {
    verifyJWT
}