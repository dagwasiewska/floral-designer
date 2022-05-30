import "../styles/globals.css"
import { AnimatePresence } from "framer-motion"
// import { useLocation } from "next/router"

function MyApp({ Component, pageProps }) {
  // const location = useLocation()
  return (
    <>
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} />
      </AnimatePresence>
    </>
  )
}

export default MyApp
