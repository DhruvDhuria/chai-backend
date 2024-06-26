// require('dotenv').config({path: './env'})
import { app } from "./app.js";
import dotenv from "dotenv"
import connectDB from "./db/index.js";

dotenv.config({
    path: './.env'
})
const port = process.env.PORT || 8000
connectDB()
.then(() => {
    app.on("error", (error) => {
        console.log("Err: ", error);
        throw error
    })

    app.listen(port, () => {
        console.log(`Server is running at port: ${port}`);
    })
})
.catch((err) => {
    console.log("MongoDB connection failed !!", err);
})






/*
import express from 'express'
const app = express()

( async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("Error", (error) => {
            console.log("Errr:", error)
            throw error
        })

        app.listen(process.env.PORT, () => {
            console.log(`App is listening on port ${process.env.PORT}`);
        })

    } catch (error) {
        console.error("ERROR: ", error)
        throw err
    }
} )()
*/