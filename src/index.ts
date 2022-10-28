import express from "express"
import database from "../src/config/database"
const app = express()

// database connection
database()

app.listen(3001, () => {
    console.log("listening at port 3001")
})

app.get("/" , (req, res) => {
    return res.send("Welcome to the TypeScript Project!!")
})

