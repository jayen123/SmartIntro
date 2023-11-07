"use client"
import { Ref, useRef } from "react"
import {motion,useInView} from "framer-motion"
import HomeFeatureCard from "./homeFeature"
import {SlWallet,SlCheck} from "react-icons/sl"
import {ImQrcode} from "react-icons/im"
import {RxUpdate} from "react-icons/rx"
import {MdOutlineVerifiedUser,MdOutlinePhoneAndroid} from "react-icons/md"
export default function HomeFeatures() {

    const ref = useRef(null);
  const isInview = useInView(ref, {once : true})
    const cardVarients = {
        hidden : {
          y: 50,
          opacity: 0
        },
        visible : {
          y: 0,
          opacity: 1
        }
      }
    const featuresCard = [
        {
            id : 1,
            heading : "CONTACTLESS",
            icon : <SlWallet />,
            text : "Smart Intro Card can be easily exchanged and accessed through a simple tap of an NFC enabled device.",
        },
        {
            id : 2,
            heading : "CONVENIENT",
            icon : <SlCheck />,
            text : "Information is stored digitally and a Smart Intro card can be used for around 0.1 million times. So no need to carry or store multiple visiting/ business cards.",
        },
        {
            id : 3,
            heading : "QR CODES",
            icon : <ImQrcode />,
            text : "Open camera or QR code reader to scan the QR code to share the Smart Intro Profile if anyone's device don't support NFC.",
        },
        {
            id : 4,
            heading : "UPDATABLE",
            icon : <RxUpdate />,
            text : "You can update the information of your Smart Intro card anytime you want.",
        },
        {
            id : 5,
            heading : "SECURE",
            icon : <MdOutlineVerifiedUser />,
            text : "The information on your Smart Intro Card is stored securely and is only accessible by authorized devices.",
        },
        {
            id : 6,
            heading : "NO APPS NEEDED",
            icon : <MdOutlinePhoneAndroid />,
            text : "You or the receiver doesn't need any apps to share or receive your Smart Intro profile.",
        },
    ]
  return (
    <>
        <section className="bg-dblack py-[50px]">
            <div className="container">
                <div className="row flex flex-col gap-[50px]">
                    <div className="font-mont font-bold text-center uppercase">
                        <p className="text-sm text-lred md:text-base">Features</p>
                        <h2 className="text-base md:text-3xl text-white">Make Your First Impression Special</h2>
                    </div>
                    <div ref={ref} className="grid gap-5 px-[10px] sm:grid-cols-2 lg:grid-cols-3">
                        {
                            featuresCard.map((item,index)=>(
                                <motion.div
                                variants={cardVarients}
                                animate={isInview ? "visible" : "hidden"}
                                transition={{ duration: 0.3, delay: index * 0.3 }}
                                >
                                    <HomeFeatureCard
                                    key={item.id}
                                    heading={item.heading}
                                    icon={item.icon}
                                    text={item.text}
                                />
                                </motion.div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
