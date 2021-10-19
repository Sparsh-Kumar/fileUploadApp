

const mongoose = require ('mongoose');
const path = require ('path');
const uniqueValidator = require ('mongoose-unique-validator');

const UserSchema = new mongoose.Schema ({

    name: {
        type: String,
        required: true,
        trim: true,
        validate: {
            validator: (name) => {

            },
            message: '{VALUE} is not a valid name'
        }
    },

    profileImage: {
        type: String,
        required: true,
        trim: true
    }

});

const User = mongoose.model ('user', UserSchema, 'users');
module.exports = {
    User
}