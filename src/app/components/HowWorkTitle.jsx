"use client"
import {motion} from "framer-motion"
export default function HowWorkTitle ({number,title,text}) {
  const varients = {
    hidden:{
      y : 150,
      opacity: 0
    },
    visible:{
      y : 0,
      opacity: 1,
      transition:{
        duration: 1
      }
    }
  }
  return (
    <>
        <motion.div
        variants={varients}
        initial="hidden"
        whileInView="visible"
        viewport={{once:true}}
         className="flex flex-col gap-[10px] font-mont">
            <div>
                <span className="text-lg text-lred font-semibold tracking-wider">{number}</span>
                <h5 className="text-lg md:text-2xl text-dblack font-semibold tracking-widest uppercase">{title}</h5>
            </div>
            <div>
                <p className="text-base md:text-lg">{text}</p>
            </div>
        </motion.div>
    </>
  )
}
