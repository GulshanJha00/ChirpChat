'use client'
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation"; // import useRouter for redirect

const SignUpPage = () => {
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter(); // Create router instance for redirect

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/auth/signup", {
        name,
        username,
        email,
        password,
      });

      console.log("Response:", response);
      // Store token in localStorage without extra space
      localStorage.setItem("Token", response.data.token);
      // Redirect to home page or any other page after signup
      router.push("/"); // or router.push("/dashboard");
    } catch (error) {
      console.log("Error while sending data to backend", error);
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
          <h2 className="text-2xl font-semibold text-[#242038]">
            Sign Up to ChirpChat
          </h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <input
              type="text"
              className="w-full p-3 bg-[#CAC4CE] text-[#242038] rounded-md border-none focus:outline-none"
              placeholder="Enter your UserName"
              value={name}
              name="name"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <input
              type="text"
              className="w-full p-3 bg-[#CAC4CE] text-[#242038] rounded-md border-none focus:outline-none"
              placeholder="Enter your UserName"
              value={username}
              name="username"
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <input
              type="email"
              className="w-full p-3 bg-[#CAC4CE] text-[#242038] rounded-md border-none focus:outline-none"
              placeholder="Enter your email"
              value={email}
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <input
              type="password"
              name="password"
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
            Sign Up
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-[#242038]">
            Already have an account?{" "}
            <Link href="/login" className="text-[#8D86C9] hover:underline">
              Log In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
