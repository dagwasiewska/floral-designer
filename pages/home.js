import React from "react"
// import Navbar from "../components/Navbar"
import { AnimatePresence } from "framer-motion"
// import Background from "../components/Background"
import First from "../components/First"

function home() {
  return (
    <>
      <AnimatePresence>
        <First />
      </AnimatePresence>
    </>
  )
}

export default home
