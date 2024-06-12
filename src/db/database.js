import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

export const dbConnect = async () => {
    mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
    .then(console.log("DB Connection Established"))
    .catch((error) => {
        console.log("DB Connection Failed")
        console.log(error);
        process.exit(1);
       
    })
}