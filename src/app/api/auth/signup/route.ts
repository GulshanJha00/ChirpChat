//step 1 setup connection with mongodb
//step 2 get payload from frontend
//step 3:- create newuser using new userdetail and then save it user newUser.save();
//step 3:- now create a token using jwt.sign(payload, key, time) and return in to frontend
//step 4:- Now that jwt and connection is done. Lets hash the password



import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import { NextResponse, NextRequest } from "next/server";
import { UserDetails } from "@/app/api/models/UserModel";
import bcrypt from "bcryptjs";

const KEY = "ABCDDCBA";

export async function POST(req: NextRequest) {
  try {
    // Correct MongoDB connection URI
    await mongoose.connect("mongodb://127.0.0.1:27017/chirpchat");
    console.log("Mongo DB Connected");

    const { name, username, email, password } = await req.json();

    if (!name || !username || !email || !password) {
      return NextResponse.json(
        { message: "Please provide all required fields" },
        { status: 400 }
      );
    }

    const salt = bcrypt.genSaltSync(10); // You can adjust the salt rounds
    const hashedPassword = bcrypt.hashSync(password, salt);

    const newUser = new UserDetails({
      name,
      username,
      email,
      password: hashedPassword,
    });
    await newUser.save();

    const token = jwt.sign(
      { name, username, email },
      KEY,
      { expiresIn: "15d" }
    );
    

    return NextResponse.json(
      { message: "User registered successfully", token: token },
      { status: 200 }
    );
  } catch (error) {
    console.log("Error while setting up the jwt" + error);
    return NextResponse.json(
      { message: "Internal server error", error },
      { status: 500 }
    );
  }
}
