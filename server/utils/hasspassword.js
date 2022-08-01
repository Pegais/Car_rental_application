const bcrypt = require("bcrypt");
const { reject } = require("bcrypt/promises");
// const { reject } = require("bcrypt/promises");
const saltRounds = 10;

// Store hash in your password DB.
function hassedPassFunc(password) {
    return new Promise((resolve, reject) => {
        resolve(bcrypt.hashSync(password, saltRounds));
        
   })
}
// password compare through brcrypt.compare();
function ComparePassword(password, passwordDb) {
    return new Promise((resolve, reject) => {
        bcrypt.compare(password, passwordDb, function (error, result) {
            if (error) {
                reject(error);
            } else {
                resolve(result);
            }
        })
    })
}

module.exports = {
    hassedPassFunc,
    ComparePassword

};