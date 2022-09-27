const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const doctorSchema =new Schema({
    name : {
        type : String,
        required : true,
    },
    age : {
        type : Number,
        required : true
    },
    gender : {
        type : String,
        required : true
    },
    NIC : {
        type : Number,
        required : true
    }
})
const Doctor =  mongoose.model("Doctor",doctorSchema);

module.exports = Doctor;