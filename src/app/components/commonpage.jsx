"use client"
import {motion} from "framer-motion"
const CommonHero = ({heading}) => {
    const h1Varients = {
        hidden : {
            y: 20,
            opacity: .1
        },
        visible : {
            y: 0,
            opacity: 1,
            transition : {
                duration : 0.5,
                stiffness : 100
            }
        }
    }
    return(
        <>
            {/* Hero Section */}
            <section className="bg-dblack py-[50px] md:py-[100px]">
                <div className="container">
                    <div className="row">
                        <motion.h1
                        variants={h1Varients}
                        initial="hidden"
                        animate="visible"
                        
                         className="bg-gradient-to-b from-lred bg-lpink bg-clip-text text-transparent text-2xl font-bold text-center uppercase md:text-[40px]">{heading}</motion.h1>
                    </div>
                </div>
            </section>
        </>
    )
}
export default CommonHero;