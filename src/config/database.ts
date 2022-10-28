// const mogoose = require('mongoose')

// const { DB_CON_STRING } = process.env

// module.exports = () => {
//     // mogoose.connect("mongodb://localhost/lezzo")
//     mogoose.connect("mongodb+srv://abidrazaa:Abcd1234@cluster0.lr2rk.mongodb.net/lezzo")
//         .then(() => console.log('DB Connection Successfull'))
//         .catch(err => console.log(err.message))
// }

import mongoose from "mongoose"

const database = () => {
    // mogoose.connect("mongodb://localhost/lezzo")
    mongoose.connect("mongodb+srv://abidrazaa:Abcd1234@cluster0.lr2rk.mongodb.net/lezzo")
        .then(() => console.log('DB Connection Successfull'))
        .catch(err => console.log(err.message))
}

export default database;