// here in user.model ,we will write queries to the database;
const { UserSchema } = require('./user.schema')

// insert query
const insert = (userObj) => {
    return new Promise((resolve, reject) => {
        
        UserSchema(userObj).save()
            .then(data => resolve(data))
            .catch(error => reject(error));
    })
}

// getting userEmail from Database;

const getUserByEmail = (email) => {
    return new Promise((resolve, reject) => {
        try {
            if (!email) {
                return false;
            }
            UserSchema.findOne({ email }, (error, data) => {
                if (error) {
                    reject(error)
                }
                else {
                    resolve(data)
                }
            })
            
        } catch (error) {
            console.log(error)
            
        }
        
        
    })
}

const getallData = () => {
    return new Promise((resolve, reject) => {
       try {
        let data = UserSchema.find();
        resolve(data)
       } catch (error) {
        reject(error)
       }
   })
}
const Manage= (id) => {
    return new Promise((resolve, reject) => {
       try {
           let data = UserSchema.deleteOne({ "_id" : id }  );
           console.log("this is delete",data);
        resolve(data)
       } catch (error) {
        reject(error)
       }
   })
}
module.exports = {
    insert,
    getUserByEmail,
    getallData,
    Manage
};
