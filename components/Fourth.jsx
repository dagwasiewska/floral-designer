import React from "react"
import { motion } from "framer-motion"
import Link from "next/link"

const zdj6 = new URL("../public/assets/IMG_2818.JPG", import.meta.url)

const styling = {
  backgroundImage: `url('${zdj6}')`,
  height: "1080px",
  backgroundSize: "cover",
}

function Fourth() {
  return (
    <>
      {/* <div className="mx-auto">
       
        <img
          src={zdj6}
          className="w-full mx-auto mt-0 border-solid border-2 border-black"
        >
        
        </img>
      </div> */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2 }}
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
        <div
          name="contact"
          className="w-full h-screen mx-auto flex justify-center text-center p-4"
          style={styling}
        >
          <form
            method="POST"
            action=""
            className="flex flex-col max-w-[600px] w-full z-1000 mt-32"
          >
            <div className="pb-8 ">
              <p className="text-xl font-thin inline border-b-2 border-white text-white text-center font-serif uppercase">
                Ask for the offer
              </p>
              <p className="text-white py-4 font-serif">
                Book your memories now
              </p>
            </div>

            <input
              className="my-4 p-2 bg-transparent text-white outline-none border-none underline-offset-1 z-40 placeholder-white font-serif"
              placeholder="NAME"
              color="white"
              opacity="1"
              name="NAME"
            />
            <hr />
            <input
              className="my-4 p-2 bg-transparent text-white outline-none border-none underline-offset-1 placeholder-white font-serif"
              type="email"
              placeholder="EMAIL"
              name="email"
            />
            <hr />
            <input
              className="my-4 p-2 bg-transparent text-white outline-none border-none underline-offset-1 placeholder-white font-serif"
              type=""
              placeholder="WEDDING DATE"
              name="date"
            />
            <hr />
            <textarea
              className="my-4 p-2 bg-transparent text-white outline-none border-none underline-offset-1 placeholder-white font-serif"
              name="message"
              rows="5"
              placeholder="MESSAGE"
            ></textarea>
            <hr />
            <button className="border-2 px-12 py-3 my-8 mx-auto flex items-center rounded-full text-white font-serif hover:bg-white hover:bg-opacity-50 hover:text-gray-600">
              Send
            </button>
          </form>
        </div>
      </motion.div>
    </>
  )
}

export default Fourth
