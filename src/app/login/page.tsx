"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from 'react-toastify';

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const  handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const handleForm = await axios.post("/api/auth/login",{email, password})

      localStorage.setItem("Token", handleForm.data.token)
      
  
        router.push("/chat");
        
  
      console.log("Submitted", handleForm);
    } catch (error) {
        toast.error("Please enter valid Email and Password");
        console.log(error)
    }
    
  };

  return (
    <div className="h-screen w-full flex justify-center items-center bg-[#242038]">
      <div className="w-full max-w-md p-8 bg-[#F7ECE1] rounded-xl shadow-lg">
        <div className="text-center mb-8">
          <Image
            src="/logo2.png"
            alt="Logo"
            height={50}
            width={50}
            className="mx-auto"
          />
          <h2 className="text-2xl font-semibold text-[#242038]">Log In to ChirpChat</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <input
              type="email"
              className="w-full p-3 bg-[#CAC4CE] text-[#242038] rounded-md border-none focus:outline-none"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <input
              type="password"
              className="w-full p-3 bg-[#CAC4CE] text-[#242038] rounded-md border-none focus:outline-none"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full p-3 bg-[#725AC1] text-white rounded-md font-semibold hover:bg-[#8D86C9] transition"
          >
            Log In
          </button>
        </form>
        <div className="mt-6 text-center">
          <p className="text-[#242038]">
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="text-[#8D86C9] hover:underline">
              Sign Up
            </Link>
          </p>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default LoginPage;
