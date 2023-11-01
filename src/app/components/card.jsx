"use client"
import Link from 'next/link'
import {motion} from "framer-motion"
export default function ProductCard(props) {
  const cardVarients = {
    hidden : {
      scale: 0,
      opacity: .3
    },
    visible : {
      scale: 1,
      opacity: 1,
      transition :{
        duration: 1
      }
    }
  }
  return (
    <>
      <div class="group flex flex-col gap-3">
          <motion.div
          variants={cardVarients}
          initial="hidden"
          whileInView="visible"
          viewport={{once: true}}
           className={props.bg + ' bg-no-repeat  bg-cover bg-center aspect-square'}>
              <div class="flex justify-center items-center p-1 opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 w-full h-full bg-lblack/30 transition-all duration-300 ease-in-out">
                  <Link class="btn-primary" href="#">VIEW</Link>
              </div>
          </motion.div>
          <div class="flex flex-col items-center text-white">
              <span class="text-lred text-xs font-bold">{props.quality}</span>
              <h5 class="text-2xl">{props.name}</h5>
              <span className='flex items-center gap-1'>
                <span class="text-[22px] font-medium">{props.currentPrice}</span>
                <span class="text-dgray line-through">{props.allTimePrice}</span>
              </span>
          </div>
      </div>
    </>
  )
}
