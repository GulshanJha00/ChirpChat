"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import "./navbar.css"
const Navbar = () => {
  const [hamburger, setHamburger] = useState(false);

  return (
    <div className="h-16 sticky top-0 z-50 w-full bg-[#725AC1] flex justify-between items-center px-8 sm:px-12 md:px-20">
      <div className="flex items-center">
        <Image src="/logo.png" height={50} width={50} alt="ChirpChat" />
      </div>

      <div className="hidden md:flex gap-8 text-white font-semibold">
        <h1 className="hover:text-[#F7ECE1] cursor-pointer">About Us</h1>
        <h1 className="hover:text-[#F7ECE1] cursor-pointer">Support Us</h1>
      </div>

      <div className="md:flex gap-6 hidden">
        <Link href="/login">
          <button className="rounded-sm font-semibold hover:text-black transition duration-200 bg-[#725AC1] hover:bg-[#F7ECE1] px-3 py-2 h-max w-max border-2 border-[#F7ECE1]">
            {" "}
            Login
          </button>
        </Link>

        <Link href="/signup">
          <button className="rounded-sm text-black font-semibold hover:text-white transition duration-200 bg-[#F7ECE1] hover:bg-black px-3 py-2 h-max w-max border-2 border-white">
            {" "}
            Sign Up
          </button>
        </Link>
      </div>

      <div className="md:hidden block">
        {hamburger ? (
          <div
            onClick={() => {
              setHamburger(!hamburger);
            }}
          >
            <div className="border-b-4 transition-all duration-300 border-black h-2 w-6"></div>
            <div className="border-b-4 transition-all duration-300 border-black h-2 w-6"></div>
            <div className="border-b-4 transition-all duration-300 border-black h-2 w-6"></div>
          </div>
        ) : (
          <div
            onClick={() => {
              setHamburger(!hamburger);
            }}
            className="mobnav"
          >
            <div>
              <div className="border-b-4 absolute top-7 right-6 transition-all duration-300 border-black h-2 w-6 rotate-45"></div>
              <div className="border-b-4 absolute top-7 right-7 transition-all duration-300 border-black h-2 w-6 -rotate-45"></div>
              <div className="border-b-4 hidden transition-all duration-300 border-black h-2 w-6"></div>
            </div>
            <div className="mobnav z-30 absolute top-16 left-0 w-full bg-[#725AC1] p-4 flex flex-col items-center space-y-4 md:hidden">
              <Link href="/login">
                <button className="rounded-sm font-semibold hover:text-black transition duration-200 bg-[#725AC1] hover:bg-[#F7ECE1] px-3 py-2 h-max w-max border-2 border-[#F7ECE1]">
                  {" "}
                  Login
                </button>
              </Link>

              <Link href="/signup">
                <button className="rounded-sm text-black font-semibold hover:text-white transition duration-200 bg-[#F7ECE1] hover:bg-black px-3 py-2 h-max w-max border-2 border-white">
                  {" "}
                  Sign Up
                </button>
              </Link>

              <ul className="mb-10 space-y-4 text-white font-semibold">
                <li className="hover:text-[#F7ECE1] cursor-pointer transition duration-300">
                  About Us
                </li>
                <li className="hover:text-[#F7ECE1] cursor-pointer transition duration-300">
                  Support Us
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
