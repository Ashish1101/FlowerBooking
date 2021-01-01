import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    seller: {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Seller'
    },
    productName :  {
        type : String,
        required: true
    },
    price : {
        type : Number,
        required: true
    },
    details : {
        type : String,
        // required: true
    },
    images : {
        type : String
    },

    quantity: {
        type:Number
    },

    tags : [String],
    date : {
        type : Date,
        default : Date.now()
    }
})

const Product = mongoose.model('Product' , productSchema);

export default Product