import express from 'express';
import {
  auth
} from '../utils/auth.js'
import {
 addProduct,
 deleteById,
 updateById,
 AllProducts,
 getProductById
} from '../controller/productController.js'

const router = express();


router.route('/addProduct').post(auth , addProduct);
router.route('/deleteProduct/:id').delete(auth , deleteById)
router.route('/updateProduct/:id').put(auth , updateById);
router.route('/').get(auth , AllProducts)
router.route('/:id').get(auth , getProductById)

export default router;