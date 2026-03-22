import dotenv from 'dotenv'
dotenv.config()

import mongoose from 'mongoose'

// connecting our app to mongodb database using mongoose
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI)
    console.log('MongoDB Connected Successfully!')
  } catch (error) {
    console.log('MongoDB Connection Failed!', error)
    process.exit(1)
  }
}

export default connectDB