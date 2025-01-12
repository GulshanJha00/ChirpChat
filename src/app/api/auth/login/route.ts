//import everything and connect to data base
//get the payloads
//get the userdata and check if email is in database or not
//using that userdata compare it with hashed password


import mongoose from "mongoose";
import { NextResponse, NextRequest } from "next/server";
import { UserDetails } from "../../models/UserModel";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"


const KEY = "ABCDDCBA";


export async function POST(req: NextRequest) {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/chirpchat");
    console.log("Mongo DB Connected");
  } catch (error) {
    console.log("Error while connection " + error);
  }

  const { email, password } = await req.json();
  if (!email || !password) {
    return NextResponse.json(
      { error: "All fields are required" },
      { status: 400 }
    );
  }

  try {
    const userData = await UserDetails.findOne({ email });
    console.log("user data is:- " + userData)

    if (!userData) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 }
      );
    }


    const isMatch = await bcrypt.compare(password, userData.password);
      if (isMatch) {
        // Passwords match, grant access
         const token = jwt.sign(
              { email },
              KEY,
              { expiresIn: "15d" }
         );


    return NextResponse.json(
      { message: "User login successfully", token: token },
      { status: 200 }
    );
            

      } else {
        // Passwords don't match, deny access
        return NextResponse.json({ error: "Invalid credentials" }, { status: 402 });

      }
  } catch (error) {
    console.log("Nothing Found "+ error);
    return NextResponse.json({ message: "Email Not found" });
  }

}
