import jwt from 'jsonwebtoken';

export const auth =  async (req, res, next) => {
   try {
       const token = req.header('x-auth-token');
       if(!token) {
           throw new Error('Access Denied')
       }

       const decoded = jwt.verify(token , process.env.JWT_SECRET);

    //    console.log(decoded)

       // @ts-ignore
       req.user = decoded.id;

       next();

   } catch (err) {
       console.log(err)
   }
}

export const admin = async (req , res , next) => {
  if(req.user.isAdmin) {
      next();
  } else {
      throw new Error('Permission denied')
  }
}