import React from 'react'
import { CiMail,CiMobile2,CiLocationOn } from "react-icons/ci";
export default function ContactInfo() {
  return (
    <>
        <section className="py-[50px]">
            <div className="container">
                <div className="row">
                    <div className="grid grid-cols-1 gap-5 px-[10px] md:px-0 md:grid-cols-3">
                        <div className="flex flex-col justify-center items-center gap-5 bg-lgray p-5 rounded-md aspect-square font-mont font-bold text-lblack">
                            <span className="text-4xl md:text-6xl">
                                <CiMail/>
                            </span>
                            <span className="text-sm md:text-[22px]">smartintro2022@gmail.com</span>
                        </div>
                        <div className="bg-gradient-to-b from-lred bg-lpink flex flex-col justify-center items-center gap-5 p-5 rounded-md aspect-square font-mont font-bold text-white">
                            <span className="text-4xl md:text-6xl">
                                <CiMobile2/>
                            </span>
                            <span className="text-sm md:text-[22px]">+8801327-159115</span>
                        </div>
                        <div className="flex flex-col justify-center items-center gap-5 bg-lgray p-5 rounded-md aspect-square font-mont font-bold text-lblack">
                            <span className="text-4xl md:text-6xl">
                                <CiLocationOn/>
                            </span>
                            <span className="text-sm md:text-[22px]">Khulna,
                                Bangladesh</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
