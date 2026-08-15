import mongoose from "mongoose"

export const connect = async (): Promise<void> => {
  try {
    await mongoose.connect(process.env.MONGO_URL || "")
    console.log("Database connected")
  }
  catch (err) {
    console.log("Connection error")
    console.log(err)
  }
}