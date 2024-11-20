const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    id : {
        type:String ,
        required : true
    },
    firstName : {
        type:String,
        require: true
    },
    lastName : {
        type:String,
        required : true
    },
    email:{
        type:String,
        required : true
    },
    department : [
        {
            type : String,
            enum : ['CSE', 'IT', 'ECE' , 'EEE' , 'CIVIL' , 'MECHANICAL']
        }
    ]
},{ timestamps: true })

module.exports = mongoose.model('User', userSchema);