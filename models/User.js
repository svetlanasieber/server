import mongoose from 'mongoose';
import {
    ENGLISH_ALPHANUMERIC_PATTERN,
    ENGLISH_ALPHANUMERIC_PATTERN_FOR_EMAIL,
    ENGLISH_ALPHANUMERIC_PATTERN_WITH_SPACE
} from '../config/constants.js';

const userSchema = new mongoose.Schema({
    id: mongoose.Types.ObjectId,
    username: {
        type: String,
        required: [true, 'Username is required!'],
        unique: true,
        // minlength: 3,
        // validate: {
        //     validator: (x) => ENGLISH_ALPHANUMERIC_PATTERN.test(x),
        //     message: (x) => `${x.value} schould consist only english letters and digits!`
        // },
    },
    fullName: {
        type: String,
        // required: [true, 'Full name is required!'],
        // unique: true,
        // minlength: 3,
        // validate: {
        //     validator: (x) => ENGLISH_ALPHANUMERIC_PATTERN_WITH_SPACE.test(x),
        //     message: (x) => `${x.value} schould consist only english letters and digits!`
        // },
    },
    email: {
        type: String,
        // required: [true, 'Email is required!'],
        // unique: true,
        // minlength: 3,
        //  validate: {
        //     validator: (x) => ENGLISH_ALPHANUMERIC_PATTERN_FOR_EMAIL.test(x),
        //     message: (x) => `${x.value} schould consist only english letters and digits!`
        // },
    },
    password: {
        type: String,
        minlength: 3,
        required: [true, 'Password is required!'],
    },
    roles: [{ type: String }],
    likedPlays: [{
        type: mongoose.Types.ObjectId, ref: 'Play'
    }],
});

export default mongoose.model('User', userSchema);