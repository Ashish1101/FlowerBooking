import mongoose from 'mongoose'
import chalk from 'chalk'
const mongoDB = async () => {
  try {
      await mongoose.connect(process.env.MONGOURL , {
          useCreateIndex: true,
          useUnifiedTopology: true,
          useNewUrlParser: true,
          useFindAndModify: true
      })

      console.log(chalk.yellow.bold('connected to database'))
  } catch (err) {
      console.log(err)
  }
}

export default mongoDB