import mongoose from 'mongoose';

const playSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Play title is required!'],
        unique:true,
        // minlength: 5
    },
    description: {
        type: String,
        required: [true, 'Description is required!'],
        maxlength: 50,
        // minlength: 20
    },
    imageUrl: {
        type: String,
        required: true,
        validate: /^https?/
    },
    isPublic: {
        type: Boolean,
        default: false
    },
    // price: {
    //     type: Number,
    //     required: [true, 'Price is required!'],
    //     min: 0  
    // },
    // brand: {
    //     type: String,
    //      required: [true, 'Brand is required!'],
    // },
    createdAt: {
        type: Date,
        required: true
    },
    creator: {
        type: mongoose.Types.ObjectId, required: true, ref: 'User'
    },
    usersLiked: [{
        type: mongoose.Types.ObjectId, ref: 'User'
    }]
});

playSchema.pre('validate', function (next) {
    const date = new Date();
    this.createdAt = date;
    next();
});

export default mongoose.model('Play', playSchema);