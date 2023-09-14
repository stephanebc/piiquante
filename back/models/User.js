const mongoose = require('mongoose');

let userSchema = new mongoose.Schema
({
    email : 
    {
        type : String,
        unique: true 
    },
    
    password : {type : String}
});

const User = mongoose.model('User', userSchema);



