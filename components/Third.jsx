import React from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"


const zdj = new URL("../public/assets/IMG_4788.JPG", import.meta.url)

function Third() {
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
        {/* <div className="flex w-full h-full mx-auto pt-32 pb-64 font-serif "> */}
        <div className="w-full grid grid-rows-2 gap-4 mx-auto pt-32 pb-64 font-serif ">
          <div className="grid grid-rows-1 md:grid-cols-1 w-full md:w-1/3 ml-32 pt-32">
            <h2 className="font-serif underline underline-offset-8">
              READ OUR STORY
            </h2>
            <p className="font-serif mt-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
              minima earum esse impedit ex ut veritatis fugiat harum animi
              molestiae quaerat, nulla tempora tempore rerum pariatur
              consequuntur quam, praesentium ipsam. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Itaque minima earum esse impedit ex
              ut veritatis fugiat harum animi molestiae quaerat, nulla tempora
              tempore rerum pariatur consequuntur quam, praesentium ipsam.
            </p>
          </div>
          <div className="min-h-2/3 ml-32">
            <Image
              src="/assets/IMG_4788.JPG"
              width="70%" height="50%"
              className="border-solid border-black h-96  border-solid border-black border-2"
            />
          </div>
        </div>
      </motion.div>
    </>
  )
}

export default Third
