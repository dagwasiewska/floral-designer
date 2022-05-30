import Link from "next/link"
import React, { useState } from "react"
import Background from "./Background"
import { AnimatePresence, motion } from "framer-motion"
import { FaBars, FaTimes } from "react-icons/fa"

// animate__animated animate__fadeIn animate__delay-3s animation-duration-1s

const Navbar = ({ setNav, nav }) => {
  const handleClick = () => setNav(!nav)

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 3 }}
      >
        <div className="fixed w-full h-46 px-8 z-[100] text-center font-poppins">
          <h2 className="relative text-left font-serif font-light mt-8 text-white">
            S Y D N E Y B L O O M S
            <div className="justify-between items-center  h-full px-2 2xl:px-16 my-8">
              <div className="space-between text-left">
                <ul className="hidden md:flex space-x-8 text-center">
                  <Link href="/">
                    <li className="text-sm opacity-50 hover:opacity-100 font-bold uppercase">
                      Home
                    </li>
                  </Link>
                  <Link href="/about">
                    <li className="text-sm opacity-50 hover:opacity-100 font-bold uppercase">
                      About
                    </li>
                  </Link>
                  <Link href="/projects">
                    <li className="text-sm opacity-50 hover:opacity-100 font-bold uppercase">
                      Projects
                    </li>
                  </Link>
                  <Link href="/contact">
                    <li className="text-sm opacity-50 hover:opacity-100 font-bold uppercase">
                      Contact
                    </li>
                  </Link>
                </ul>
              </div>
            </div>
          </h2>
        </div>

        <div className="fixed z-10 w-full h-[80px] flex justify-between tracking-wider items-center px-4  text-gray-300">
          {/* Hamburger */}
          <div onClick={handleClick} className="md:hidden z-10">
            {!nav ? <FaBars /> : <FaTimes />}
          </div>

          {/* Mobile menu */}
          {/* <ul
            className={
              !nav
                ? "hidden"
                : "absolute top-32 left-0 w-full h-screen  flex flex-col justify-center items-center"
            }
          > */}
          {/* <li className="py-6 text-4xl hover:cursor-pointer">Home</li>
            <ul className="hidden md:flex space-x-14 text-center">
              <Link onClick={handleClick} href="/">
                <li className="py-6 text-4xl hover:cursor-pointer">Home</li>
              </Link>
              <Link onClick={handleClick} href="/about">
                <li className="py-6 text-4xl hover:cursor-pointer">Home</li>
              </Link>
              <Link onClick={handleClick} href="/projects">
                <li className="py-6 text-4xl hover:cursor-pointer">Home</li>
              </Link>
              <Link onClick={handleClick} href="/contact">
                <li className="py-6 text-4xl hover:cursor-pointer">Home</li>
              </Link>
              <Link onClick={handleClick} href="/other">
                <li className="py-6 text-4xl hover:cursor-pointer">Home</li>
              </Link>
            </ul>
          </ul> */}
        </div>
        <Background />
      </motion.div>
    </>
  )
}

export default Navbar
