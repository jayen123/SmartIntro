"use client"
import { useState } from 'react';
import React from 'react'
import Link from 'next/link'
import { TfiAngleDown } from "react-icons/tfi";
export default function SingleProductDetails({bg,category,title,discount,daily}) {
    const [toggle, setToggle] = useState(1)
    const updateToggle = (id) => {
        setToggle(id)
    }
  return (
    <>
        <div className="row grid gap-5">
                <div className="flex items-center gap-2 uppercase  font-bold">
                    <h5 className="text-xs">CATEGORY</h5>
                    <TfiAngleDown/>
                </div>
                <div className="grid items-center gap-5 px-[10px] md:px-0 md:grid-cols-2">
                    <div className={'bg-[url(\''+ bg +'\')] bg-no-repeat bg-cover bg-center aspect-square'}></div>
                    <div className="flex flex-col gap-10">
                        <div className=" text-dblack">
                            <h5 className="text-xs font-bold tracking-widest">CATEGORY: <span className="text-lred">{category}</span></h5>
                            <h1 className="font-semibold md:text-[40px] ">{title}</h1>
                        </div>
                        <div className="flex flex-col gap-5">
                            <div className=" flex gap-[10px]">
                                <button className={toggle === 1 ? "text-dblack font-semibold border-b-2 border-dblack" : ""} onClick={()=> updateToggle(1)}>About</button>
                                <button className={toggle === 2 ? "text-dblack font-semibold border-b-2 border-dblack" : ""} onClick={()=> updateToggle(2)}>Specification</button>
                            </div>
                            <div className="text-lblack text-sm">
                                <p className={toggle === 1 ? "show-content" : "content"}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                </p>
                                <p className={toggle === 2 ? "show-content" : "content"}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                    It has survived not only five centuries, typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                </p>
                            </div>
                        </div>
                        <div className="grid gap-4">
                            <div className="flex items-center gap-1">
                                <span className="text-dblack font-bold md:text-[30px]">{discount}</span>
                                <span className="text-lred font-light line-through md:text-lg">{daily}</span>
                            </div>
                            <div>
                                <Link className="btn-primary" href="#">ADD TO CART</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </>
  )
}

