'use client'
import { useState } from 'react';
import { ImEye, ImEyeBlocked } from 'react-icons/im';
import Link from 'next/link'
import React from 'react'

export default function Login() {
    const [icon, setIcon] = useState(false)
    const toggleEye = () => {
        setIcon(!icon);
      };
  return (
    <>
        <section className="bg-dblack py-[50px]">
            <div className="container">
                <div className="row">
                    <div className="font-mont font-bold text-center uppercase pb-[50px]">
                        <p className="text-sm text-lred md:text-base">LOGIN</p>
                        <h2 className="text-base md:text-3xl text-white">HELLO! WELCOME</h2>
                    </div>
                    <div className="max-w-[770px] mx-auto px-[10px] md:px-0">
                        <form action="#">
                            <div className="grid grid-cols-1 gap-5">
                                <div className="flex flex-col gap-1">
                                    <label className="contact-label" for="email">Email Address</label>
                                    <input className="contact-input" type="email" name="email" id="email" />
                                </div>
                                <div id="pass" className="flex flex-col gap-1 relative">
                                    <label className="contact-label" for={"password"}>Password</label>
                                    <input className="contact-input" type={icon ? "text" : "password"} name="password" id="password" />
                                    <div onClick={toggleEye} className="absolute right-2 top-[50%]  text-lgray text-2xl cursor-pointer md:top-[55%]">
                                        {icon ? <ImEye /> : <ImEyeBlocked />} 
                                    </div>
                                </div>
                                <div className="flex justify-between items-center">
                                    <div className='flex gap-1'>
                                        <input className="accent-lred" type="checkbox" name="remember" id="remember" />
                                        <label className="contact-label" for="remember">Remember Me</label>
                                    </div>
                                    <div>
                                        <Link className="contact-label" href="#">Forget Password?</Link>
                                    </div>
                                </div>
                                <div className="flex flex-col">
                                    <input className="btn-primary" type="submit" value="SEND MESSAGE" />
                                </div>
                                <div className="text-center">
                                    <span className="contact-label">Don’t have an account?</span>
                                    <Link className="contact-label text-lred" href="/src/pages/signup.html">Sign Up</Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
