const Joi = require('joi');
const mongoose = require('mongoose');

const User = mongoose.model('Users', new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
        trim: true,
        minlength: 2,
        maxlength: 50
    },
    lastname: {
        type: String,
        required: true,
        trim: true,
        minlength: 2,
        maxlength: 50
    },
    username: {
        type: String,
        required: true,
        trim: true,
        minlength: 5,
        maxlength: 10,
        unique: true
    },
    email: {
        type: String,
        required: true,
        minlength:3,
        maxlength:50,
        email: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 1024,
    },
    api: [
        {source: [
            {code: {
                type: String,
                required: true
            },
            key: {
                type: String,
                required: true
            },
            name: {
                type: String,
                required: true
            }
        }]
        }]
}));

function validateUser(user){
    const schema = Joi.object({
        username: Joi.string()
            .alphanum()
            .min(3)
            .max(30)
            .required(),
    
        password: Joi.string()
            .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
            .required(),
    
        repeat_password: Joi.ref('password'),
    
        birth_year: Joi.number()
            .integer()
            .min(1900)
            .max(2013),
    
        email: Joi.string()
            .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
    })
        .with('username', 'birth_year')
        .with('password', 'repeat_password');
    
    return schema.validate(user);
}

exports.User = User;
exports.validate = validateUser;