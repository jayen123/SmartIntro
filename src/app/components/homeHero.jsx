"use client"
import {motion} from "framer-motion"
import Link from "next/link"
export default function HomeHero() {
    const paraVarients = {
        hidden : {
            x: 100,
            opacity:0
        },
        visible : {
            x: 0,
            opacity:1,
            transition : {
                duration : 1
            }
        }
    }
    const headingVar = {
        hidden : {
            x: 150,
            opacity:0
        },
        visible : {
            x: 0,
            opacity:1,
            transition : {
                duration : 1
            },
        }
    }
    const btnVar = {
        hidden : {
            y: 50,
            opacity:0
        },
        visible : {
            y: 0,
            opacity:1,
            transition : {
                duration : 1
            }
        }
    }
  return (
    <>
        <section className=" flex bg-[url('/images/home-hero.png')] bg-no-repeat bg-center bg-cover py-[50px] md:items-end md:py-0 md:h-[700px]">
            <div className="container flex justify-end items-center">
                <div className="row">
                    <div className="px-[10px] md:px-0">
                        <div className="flex flex-col items-end gap-5 md:gap-10 md:mb-32">
                            <div className="font-mont text-white font-bold text-right">
                                <motion.p
                                variants={paraVarients}
                                initial ="hidden"
                                animate ="visible"
                                className="text-xs font-bold tracking-wide md:tracking-widest mb-2">SMART INTRO DIGITAL VISITING CARD</motion.p>
                                <motion.h1
                                variants={headingVar}
                                initial ="hidden"
                                animate ="visible"
                                className="text-base md:text-5xl">Share Your Contact Info <br/>
                                With Just A Tap</motion.h1>
                            </div>
                            <motion.div
                            variants={btnVar}
                            initial ="hidden"
                            animate ="visible"
                            >
                                <Link className="btn-primary" href="/">ORDER NOW</Link>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
