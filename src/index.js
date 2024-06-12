import dotenv from "dotenv";
import {dbConnect} from "./db/database.js";
import { app } from "./app.js";

dotenv.config({
    path:"./env"
});

dbConnect()
.then(()=> {
    app.listen(process.env.PORT,() => {
        console.log(`Server is started on port ${process.env.PORT}`);
    })
})
