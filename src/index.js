import 'dotenv/config'
import connectDB from "./db/index.js";
import { app } from './app.js';
const PORT =process.env.PORT || 8000

connectDB()
.then(()=>{
  app.listen(PORT,()=>{
    console.log(`Server is running at http://localhost:${PORT}`)
  })
})
.catch((err)=>{
  console.log('MONGO db Connection failed !!!',err)
})


















/*
import express from 'express'
const app = express()
(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    app.on('error',(error)=>{
        console.log('Error:',error);
        throw error
    })

    app.listen(process.env.PORT,()=>{
        console.log(`App is listening on port ${process.env.PORT}`);
    })
  } catch (error) {
    console.log("Error:", error);
    throw new Error();
  }
})();
*/
