"use client"
import {motion} from "framer-motion"
export default function HowWorkImage(props) {
  const Image = {
    hidden:{
      scale : .2,
      opacity: 0
    },
    visible:{
      scale: 1,
      opacity: 1,
      transition:{
        duration: 1
      }
    }
  }
  return (
    <>
        <motion.div
        variants={Image}
        initial="hidden"
        whileInView="visible"
        viewport={{once: true}}
        className={props.bg + ' bg-no-repeat  bg-cover bg-center aspect-square'}></motion.div> 
    </>
  )
}
