const {CarSchema} = require('./Car')

// insert query
const insertCar = (userObj) => {
    return new Promise((resolve, reject) => {
        
        CarSchema(userObj).save()
            .then(data => resolve(data))
            .catch(error => reject(error));
    })
}


module.exports = {
    insertCar
}