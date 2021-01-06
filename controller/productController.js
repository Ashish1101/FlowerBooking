import Product from '../models/Product.js';
import Seller from '../models/Seller.js'

let error = new Error();


//done
export const addProduct = async (req , res , next) => {
   try {
       const seller = await Seller.findById(req.user);
       const {productName , price , details , images , tags} = req.body
       // @ts-ignore
       if(!seller && !seller.isAdmin) {
        //    throw new Error('Access Denied!. Not Authorized to add product');
        error.message = 'Access Denied! Not Authorized to add product';
        error.name = 'Product Add Error';
        return res.status(404).json(error);
       } 

       console.log(typeof tags)

       // @ts-ignore
       if(seller && seller.isAdmin) {
           const product = new Product({
                seller : req.user,
                productName, 
                price,
                details,
                images,
                tags
           })

           // @ts-ignore
        //    product.tags.split(",");

           await product.save();

           // @ts-ignore
           seller.products.push(product);

           await seller.save();

           res.status(201).json({
               successMessage: 'Product Added SuccessFully',
               product : product
           });
       }
       next();
   } catch (err) {
       console.log(err);
       return res.status(500).json(err);
   }
}

//delete a Product
//@ts-ignore
// @ts-ignore
// @ts-ignore
// @ts-ignore
export const deleteById = async (req, res , next) => {
   try {
       const seller = await Seller.findById(req.user);

       // @ts-ignore
       if(!seller || !seller.isAdmin) {
           error.message = 'Delete Permission denied'
           error.name = 'Admin Not Valid'
           return res.status(404).json(error)
       }

       // @ts-ignore
       if(seller && seller.isAdmin) {
           const product = await Product.findById(req.params.id);
           if(!product) {
            error.message = 'Product Not Found'
            error.name = 'Not a Valid Product'
            return res.status(404).json(error)
           }

           product.remove();

           res.status(200).json({
               successMessage : 'Product Deleted SuccessFully'
           });


       }
   } catch (err) {
       console.log(err);
       return res.status(500).json(err);
   }
}

//update Product
// @ts-ignore
// @ts-ignore
export const updateById = async (req, res, next) => {
   try {
       const seller = await Seller.findById(req.user);
       // @ts-ignore
       if(!seller || !seller.isAdmin) {
        error.message = 'Update Permission denied'
        error.name = 'Admin Not Valid'
        return res.status(404).json(error)
       }

       // @ts-ignore
       if(seller && seller.isAdmin) {
           const product = await Product.findById(req.params.id);
           if(!product) {
            error.message = 'Product Not Found'
            error.name = 'Not a Valid Product'
            return res.status(404).json(error)
           }

           if(product) {
               // @ts-ignore
               product.productName = req.body.productName || product.productName
               // @ts-ignore
               product.price = req.body.price || product.price
               // @ts-ignore
               product.details = req.body.details || product.details
               // @ts-ignore
               product.tags = req.body.tags || product.tags

           }

           await product.save();

           res.status(200).json({
               successMessage:"Product Update Successfully",
               product
           })
       }
   } catch (err) {
       console.log(err);
       return res.status(500).json(err)
   }
}

//All Products By Seller Id

// @ts-ignore
export const AllProducts = async (req, res, next) => {
    try {
        const seller = await Seller.findById(req.user);
        // @ts-ignore
        if(!seller || !seller.isAdmin) {
            error.message = ' Permission denied'
            error.name = 'Product Details'
            return res.status(404).json(error)
        }
        // @ts-ignore
        if(seller && seller.isAdmin) {
            const products = await Seller.find().populate('products').select('-password -name -email -__v -date -address -isAdmin -mobile');
            res.status(200).json({products});
        }
    } catch (err) {
        console.log(err);
        return res.status(500).json(err);
    }
}

//Get Product By Id

export const getProductById = async (req, res, next) => {
     try {
        const seller = await Seller.findById(req.user);
        // @ts-ignore
        if(!seller || !seller.isAdmin) {
            error.message = ' Permission denied'
            error.name = 'Product Details'
            return res.status(404).json(error)
        }

        // @ts-ignore
        if(seller && seller.isAdmin) {
            const product = await Product.findById(req.params.id);

            res.json(product);
        }
     } catch (err) {
         console.log(err)
         return res.status(500).json(err)
     }
}