import mongoose from "mongoose";



const Schema = new mongoose.Schema({
    "sender": {
        type: "string",
        required: true,

    },
     "receiver":{
        type: "string",
        required: true,

    },
     "message": {
        type: "string",
        required: true,
    },
    
},
{ timestamps: true })


const MessageModel = mongoose.model('MessageModel', Schema);
console.log(MessageModel)