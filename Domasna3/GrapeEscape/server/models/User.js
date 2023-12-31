const mongoose=require('mongoose')
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema=new mongoose.Schema({
    name: String,
    email: {
        type: String,
        required: true,
        unique: true
    }
});

userSchema.plugin(passportLocalMongoose, { usernameField: 'email', usernameQueryFields: ['email'] });

module.exports=mongoose.model('User', userSchema)