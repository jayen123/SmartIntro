"use client"
import { useEffect } from "react"
import {motion} from "framer-motion"

export default function Home() {
  return (
    <>
        <div className="container">
          <motion.h1 className="text-xl"
            initial={{x: -200, opacity: 0}}
            animate={{ x: 0, opacity: 1 }}
            transition={{ ease: "easeOut", duration: 1 }}
          >
            This Is Heading one 
          </motion.h1>
          <motion.button
          whileHover={{scale: 1.1}}
           className="px-5 py-2 text-white bg-teal-500">
              click Me
          </motion.button>
        </div>
    </>
  )
}
