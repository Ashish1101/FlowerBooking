import jwt from 'jsonwebtoken';
const error = new Error()

export const auth =  async (req, res, next) => {
   try {
       const token = req.header('x-auth-token');
       if(!token) {
        //    throw new Error('Access Denied')
        error.message = 'Access Denied!'
        error.name = "Token Error"
        return res.status(401).json(error);
       }

       const decoded = jwt.verify(token , process.env.JWT_SECRET);

    //    console.log(decoded)

       // @ts-ignore
       req.user = decoded.id;

       next();

   } catch (error) {
       error.message = 'Invalid Token'
       return res.status(500).json(error);
   }
}

export const admin = async (req , res , next) => {
  if(req.user.isAdmin) {
      next();
  } else {
    //   throw new Error('Permission denied')
    error.message = "Permission Denied"
    return res.status(400).json(error)
  }
}