// this schema is for defining mongo database.

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const CarSchema = new Schema({
    id :ObjectId,
    Cname: {
        type: String,
        maxlength: 40,
        required: true
    },
    Modalname: {
        type: String,
        maxlength: 40,
        required: true
    },
    rent: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        require:true
    }

});
// exporting by making databse model table and passing the schema as second argument;
module.exports = {
    CarSchema:mongoose.model('Car',CarSchema)
}

