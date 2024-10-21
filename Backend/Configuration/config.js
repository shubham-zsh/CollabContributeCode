import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

export const connectMongo = async () => {
     try {
          const Connect = await mongoose.connect(process.env.MONGO_URI);

          console.log("Connected to database Successfully at port no. " + process.env.PORT);
     } catch (error) {
          console.log("Connection Failed..." + error.message);
     }
}


