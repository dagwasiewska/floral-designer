import React, { useEffect } from "react"
// import { HiOutlineArrowNarrowRight } from "react-icons/hi"
import Link from "next/link"
import { motion } from "framer-motion"
import Navbar from "./Navbar"
import ImageSlider from "./ImageSlider"
import Image from "next/image"

// import ImageSlider from "./ImageSlider"



function Second() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2 }}
      >
        <div className="sticky w-full h-46 px-8 z-[100] text-center font-poppins">
          <h2 className="relative text-left font-serif font-light mt-8 text-green-900">
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
        {/* nie wiem o co chodzi tutaj  */}
        <ImageSlider />

        {/* <div className="w-full h-full pt-32 pb-64 ">
          <div className="container grid grid-rows-5 mx-auto sm:column-1">
            <div className="mx-auto">
              <Image
                src="/photo1.JPG"
                className="w-2/3 mx-auto mt-0 border-solid border-2 border-black"
                layout="fill"
              />
            </div>
            <div className="mx-auto">
              <Image
                src="/IMG_2816.JPG"
                className="w-2/3 mx-auto mt-0 border-solid border-2 border-black"
                layout="fill"
              />
            </div>
            <div className="mx-auto">
              <Image
                src="/photo1.JPG"
                className="w-2/3 mx-auto mt-0 border-solid border-2 border-black"
                layout="fill"
              />
            </div>
            <div className="mx-auto">
              <Image
                src="/photo1.JPG"
                className="w-2/3 mx-auto mt-0 border-solid border-2 border-black"
                layout="fill"
              />
            </div>
            <div className="mx-auto">
              <Image
                src="/photo1.JPG"
                className="w-2/3 mx-auto mt-0 border-solid border-2 border-black"
                layout="fill"
              />
            </div>
          </div>
        </div> */}
      </motion.div>
    </>
  )
}

export default Second
