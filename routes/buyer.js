import express from 'express';
import {
    registerBuyer,
    loginUser,
    deleteUserById,
    userProfile,
    getUserById,
    updateBuyerProfile
} from '../controller/buyerController.js'

import {auth} from '../utils/auth.js'

const router = express.Router();


router.get('/' , (req, res) => {
    res.send('hello from buyer')
})

router.route('/register').post(registerBuyer);
router.route('/login').post(loginUser)
router.route('/deleteUser/:id').delete(auth , deleteUserById)
router.route('/profile').get(auth , userProfile);
router.route('/profile/:id').get(auth , getUserById)
router.route('/profile/update').put(auth, updateBuyerProfile)


export default router