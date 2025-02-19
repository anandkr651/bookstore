import dotenv from "dotenv";
import express from "express"
import connectdb from "./db/database.js"
import cors from "cors"

const app = express()
app.use(
    cors({
        origin: process.env.CORS_ORIGN,
        credentials: true,
    })
);
app.use(express.json())

dotenv.config({
    path: "../.env", //package.json file mi "dev": '-r dotenv/config --experimental-json-modules' add karna hota hai
});
connectdb()
    .then(() => {
        app.listen(process.env.PORT || 8000, () => {
            console.log(`Server is running at Port: ${process.env.PORT}`);
        });
        app.on("err",(error)=>{
            console.log("My application is not talk to database",error);
        })
    })
    .catch((err) => {
        console.log("Mongo db connection failed !!! ", err);
    });

import bookroute from "./routes/book.route.js"
app.use("/book",bookroute)

import userroute from "./routes/user.route.js"
app.use("/user",userroute)