import Buyer from '../models/Buyer.js'
import bcryptjs from 'bcryptjs'
import generateToken from '../utils/generateToken.js'

let error = new Error();


//creating new buyer

export const registerBuyer = async (req, res , next) => {
   const {name , email , password} = req.body 
   try {
       let user = await Buyer.findOne({email : email});

       if(user) {
        //    throw new Error('User already exists')
        error.message = 'User Already Exists';
        error.name = 'Register Buyer Error';
        return res.status(404).json(error);
       }

       user = await Buyer.create({
           name, 
           email,
           password
       });

       const salt = await bcryptjs.genSalt(10);

       const hash = await bcryptjs.hash(password , salt);

       // @ts-ignore
       user.password = hash;

       await user.save();

       if(user) {
           res.json({
               // @ts-ignore
               name : user.name,
               // @ts-ignore
               email : user.email,
               _id : user._id,
               token : generateToken(user._id)
           })
       }
       next()
   } catch (err) {
       console.log(err);
       error.message = 'Server Error';
        error.name = 'Server Register Buyer Error';
        return res.status(500).json(error);
   }
}

//Login User
// @ts-ignore
export const loginUser = async (req, res , next) => {
  try {
      const {email , password} = req.body;
      const user = await Buyer.findOne({email});

      if(!user) {
    //    throw new Error('No user Found')
        error.message = 'No User Found';
        error.name = 'Login Buyer Error';
        return res.status(404).json(error);
      }

      // @ts-ignore
      const isMatch = await bcryptjs.compare(password , user.password);

      if(!isMatch) {
        //   throw new Error('Password incorrect...');
        error.message = 'Incorrect Credentials';
        error.name = 'Register Buyer Error';
        return res.status(404).json(error);
      }

      if(isMatch) {
          res.json({
              // @ts-ignore
              name : user.name,
              // @ts-ignore
              email : user.email,
              _id: user._id,
              // @ts-ignore
              token : generateToken(user._id),

              // @ts-ignore
              isAdmin : user.isAdmin
          })
      }
      next()
  } catch (err) {
      console.log(err);
        error.message = 'Server Error';
        error.name = 'Server Login Buyer Error';
        return res.status(500).json(error);
  }
}

//delete User
//delete only when user is authenticated
// @ts-ignore
// @ts-ignore
export const deleteUserById = async (req, res, next) => {
    try {
         const user = await Buyer.findById(req.params.id);

         if(!user) {
            //  throw new Error('No user found')
            error.message = 'No User Found';
            error.name = 'Delete User Error';
            return res.status(404).json(error);
         }

         user.remove();

         res.send('user removed')
     } catch (err) {
        console.log(err);
        error.message = 'Server Error';
        error.name = 'Server Error Delete User';
        return res.status(500).json(error);
    }
}

//get user Profile
// @ts-ignore
// @ts-ignore
export const userProfile = async (req , res , next) => { 
   try {
       console.log('req.user' , req.user);
    //    console.log('req.user.id' , req.user.id)
       const user = await Buyer.findById(req.user).select('-password -__v');

       if(!user ) {
        //    throw new Error('User not found');
        error.message = 'User Not Found';
        error.name = 'User Profile Error';
        return res.status(404).json(error);
       }

       res.status(200).json(user);
   } catch (err) {
       console.log(err);
        error.message = 'Server Error';
        error.name = 'Server User Profile Error';
        return res.status(500).json(error);
   }
}

//get userByID
//@ts-ignore
// @ts-ignore
// @ts-ignore
export const getUserById = async (req, res , next) => {
    try {
        const user = await Buyer.findById(req.params.id).select('-password');

        if(!user) {
            // throw new Error('No user found');
            error.message = 'No User Found';
            error.name = 'User By Id Error';
            return res.status(404).json(error);
        }

        res.status(200).json(user);
    } catch (err) {
        console.log(err);
        error.message = 'Server Error';
        error.name = 'Server User ID';
        return res.status(500).json(error);
    }
}

//update user data
// @ts-ignore
// @ts-ignore
export const updateBuyerProfile = async (req, res , next) => {
    try {
        const user = await Buyer.findById(req.user);

        if(!user) {
            // throw new Error('no user found');
        error.message = 'No User Found';
        error.name = 'Update Profile Error';
        return res.status(404).json(error);
        }

        const tempAddress = {}

        if (user) {
            // @ts-ignore
            user.name = req.body.name || user.name
            // @ts-ignore
            user.email = req.body.email || user.email

            tempAddress.pincode = req.body.pincode

            tempAddress.street = req.body.street

            tempAddress.landmark = req.body.landmark

            // @ts-ignore
            user.mobile = req.body.mobile || user.mobile

            if (req.body.password) {
              // @ts-ignore
              user.password = req.body.password
            }

            // @ts-ignore
            user.address.push(tempAddress);
        
            const updatedUser = await user.save()
        
            res.json({
              _id: updatedUser._id,
              // @ts-ignore
              name: updatedUser.name,
              // @ts-ignore
              email: updatedUser.email,
              // @ts-ignore

              mobile : updatedUser.mobile,
              // @ts-ignore
              isAdmin: updatedUser.isAdmin,
              // @ts-ignore
              address: updatedUser.address,
              token: generateToken(updatedUser._id),
              
            })
          }
    } catch (err) {
        console.log(err)
        error.message = 'Server Error';
        error.name = 'Server Error Update Profile';
        return res.status(500).json(error);
    }
}

