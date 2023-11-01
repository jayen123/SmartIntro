import {motion} from "framer-motion"
export default function HeroFeature(props) {
    const cardVarients = {
        hidden : {
          x: 150,
          opacity: .3
        },
        visible : {
          x: 0,
          opacity: 1
        }
      }
  return (
    <>
        <motion.div
        variants={cardVarients}
        initial="hidden"
        whileInView="visible"
        viewport={{once: true}}
         className="flex items-center bg-lblack rounded-md aspect-square hover:bg-gradient-to-r from-lred hover:bg-lpink duration-1000">
            <div className="flex flex-col items-center gap-5 font-mont text-white text-center p-3">
                <div className="text-2xl md:text-6xl">
                     {props.icon}
                </div>
                <div>
                    <h6 className="text-base md:text-[22px] font-medium tracking-widest uppercase">{props.heading}</h6>
                    <p className="text-sm md:text-lg">{props.text}</p>
                </div>
            </div>
        </motion.div>
    </>
  )
}
