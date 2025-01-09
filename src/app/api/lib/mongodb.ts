import mongoose from "mongoose";


try {
    mongoose.connect(`${process.env.MONGODB_URI}`);
    console.log("Connection Established with mongoDB")

    
} catch (error) {
    console.log("Error while connectiong of mongoDB" + error)
}