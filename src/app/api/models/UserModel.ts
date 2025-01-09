import mongoose from "mongoose";

const Schema = new mongoose.Schema({
    "username": {
        type: "string",
        required: true,

    },
     "email":{
        type: "string",
        required: true,

    },
     "password": {
        type: "string",
        required: true,

    },
})


const UserDetails = mongoose.model('UserDetails', Schema);

console.log(UserDetails)
