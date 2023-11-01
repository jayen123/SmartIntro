"use client"
import HowWorkImage from "./components/howWorkImage"
import HowWork from "./components/howwork"
import {SlWallet,SlCheck} from "react-icons/sl"
import {ImQrcode} from "react-icons/im"
import {RxUpdate} from "react-icons/rx"
import {MdOutlineVerifiedUser,MdOutlinePhoneAndroid} from "react-icons/md"
import HeroFeature from "./components/heroFeature"
import {motion} from "framer-motion"
import Link from "next/link"

export default function Home() {
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
            }
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
        {/* Features Section */}
        <section className="bg-dblack py-[50px]">
        <div className="container">
            <div className="row flex flex-col gap-[50px]">
                <div className="font-mont font-bold text-center uppercase">
                    <p className="text-sm text-lred md:text-base">Features</p>
                    <h2 className="text-base md:text-3xl text-white">Make Your First Impression Special</h2>
                </div>
                <div className="grid gap-5 px-[10px] sm:grid-cols-2 lg:grid-cols-3">
                    <HeroFeature heading="CONTACTLESS" icon={<SlWallet />} text="Smart Intro Card can be easily exchanged and accessed through a simple tap of an NFC enabled device."/>
                    <HeroFeature heading="CONVENIENT" icon={<SlCheck />} text="Information is stored digitally and a Smart Intro card can be used for around 0.1 million times. So no need to carry or store multiple visiting/ business cards."/>
                    <HeroFeature heading="QR CODES" icon={<ImQrcode />} text="Open camera or QR code reader to scan the QR code to share the Smart Intro Profile if anyone's device don't support NFC."/>
                    <HeroFeature heading="UPDATABLE" icon={<RxUpdate />} text="You can update the information of your Smart Intro card anytime you want."/>
                    <HeroFeature heading="SECURE" icon={<MdOutlineVerifiedUser />} text="The information on your Smart Intro Card is stored securely and is only accessible by authorized devices."/>
                    <HeroFeature heading="NO APPS NEEDED" icon={<MdOutlinePhoneAndroid />} text="You or the receiver doesn't need any apps to share or receive your Smart Intro profile."/>
                </div>
            </div>
        </div>
        </section>
        {/* How It Work Section  */}
        <section className="bg-lgray py-[50px]">
        <div className="container">
            <div className="row flex flex-col gap-[50px]">
                <div className="font-mont font-bold text-center uppercase">
                    <p className="text-sm text-lred md:text-base">SUBSCRIPTION</p>
                    <h2 className="text-base md:text-3xl text-dblack">Get Started In Just Few Steps</h2>
                </div>
                <div className="flex justify-center px-[10px]"> 
                    <div className="grid md:grid-cols-2 items-center gap-5 max-w-3xl">
                        <HowWorkImage bg="bg-[url('/images/white-card.png')]"/>
                        <HowWork number="01" title="SELECT YOUR CARD AND SUBSCRIPTION PLAN" text="Select Your Smart Card, Add To Contact form & Complete Checkout Process." />
                        <HowWork number="02" title="MAKE PAYMENT" text="Design Process Starts After Order. Design Team Will Contact For Custom Design" />
                        <HowWorkImage bg="bg-[url('/images/gradient-card.png')]"/>
                        <HowWorkImage bg="bg-[url('/images/red-card.png')]"/>
                        <HowWork number="03" title="GET YOUR CARD" text="Design Process Starts After Order. Design Team Will Contact For Custom Design" />
                        <HowWork number="04" title="CREATE PROFILE AND START SHARING" text="After Receiving Your INTRO Product, Tap Or Scan To Create INTRO Profile." />
                        <HowWorkImage bg="bg-[url('/images/gradient-card.png')]"/>
                    </div>
                </div>
            </div>
        </div>
        </section>
    </>
  )
}
