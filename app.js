import dotnev from 'dotenv'
import express from 'express'
import mongoDB from './config/db.js'
import buyer from './routes/buyer.js'
import seller from './routes/seller.js'
import product from './routes/product.js'
import chalk  from  'chalk'
//env variables
dotnev.config()



//current user id lives inside req.user

const app = express();
const PORT = process.env.PORT || 5000;

//middleware
app.use(express.json());
app.use(express.urlencoded({extended : false}))

//database
mongoDB();

app.get('/' , (req, res) => {
    console.log(req.body)
    res.send('hello world')
})

//router
app.use('/buyer' , buyer)
app.use('/seller' , seller)
app.use('/product', product)

// @ts-ignore
app.listen(PORT  , () => console.log(chalk.blue('server is running')))




//ToDo write error message in buyer and product controller