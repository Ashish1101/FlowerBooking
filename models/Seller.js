import mongoose from 'mongoose';

const sellerSchema = new mongoose.Schema({
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
        maxlength: 10
    },
    address:[String],

    isAdmin : {
        type: Boolean,
        default : true
    },
    products: [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'Product'
        }
    ],
    date : {
        type : Date,
        default : Date.now()
    }
})

const Seller = mongoose.model('Seller' ,sellerSchema);

export default Seller;

