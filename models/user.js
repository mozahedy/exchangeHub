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
        maxlength: 10
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

exports.User = User;