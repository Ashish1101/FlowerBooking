import mongoose from 'mongoose';

const buyerSchema = new mongoose.Schema({
    name : {
        type : String,
        required: true
    },
    email : {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type : String,
        required: true,
        minlength: 6
    },
    mobile: {
        type : Number || String,
        minlength : 10,
        maxlength: 10,
        unique : true,
    },
    address:[String],

    isAdmin : {
        type: Boolean,
        default : false
    },
    date : {
        type : Date,
        default : Date.now()
    }
})

const Buyer = mongoose.model('Buyer' , buyerSchema);

export default Buyer;

