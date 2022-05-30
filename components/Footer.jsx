import React from 'react'
import { AiOutlineMail } from "react-icons/ai"
// import { BsFillPersonLinesFill } from "react-icons/bs"
import { FaGithub, FaLinkedinIn } from "react-icons/fa"

function Footer() {
  return (
    <>
    <div className="text-center font-serif mt-32">
    Designed by Dagmara Wasiewska
    </div>
    <div className="text-center font-serif">
    2022
    </div>

    <div className="flex items-center justify-between max-w-[230px] m-auto py-4">
    <div className="rounded-full shadow-lg border border-solid border-black p-6 cursor-pointer hover:scale-110 ease-in duration-300">
      <FaLinkedinIn />
    </div>
    <div className="rounded-full shadow-lg border border-solid border-black p-6 cursor-pointer hover:scale-110 ease-in duration-300">
      <FaGithub />
    </div>
    <div className="rounded-full shadow-lg border border-solid border-black p-6 cursor-pointer hover:scale-110 ease-in duration-300">
      <AiOutlineMail />
    </div>
    {/* <div className="rounded-full shadow-lg border border-solid border-black p-6 cursor-pointer hover:scale-110 ease-in duration-300">
      <BsFillPersonLinesFill />
    </div> */}
  </div>
  </>
  )
}

export default Footer