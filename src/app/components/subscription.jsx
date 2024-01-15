"use client"
import React from 'react'
import {useRouter} from 'next/navigation';
import SubscriptionSingle from './subscriptionSingle';
import { Navigation } from 'swiper/modules';
import Image from 'next/image';
import Left from '../../../public/images/left-arrow.svg'
import Right from '../../../public/images/right-arrow.svg'
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { TbShape } from "react-icons/tb";
import { MdAutoAwesome } from "react-icons/md";
import { MdEco } from "react-icons/md";

export default function Subscription() {
    const router = useRouter();
    const data = [
        {
            id: 1,
            icon: <TbShape />,
            title: "PACKAGE 1",
            text:"Lorem Ipsum is simply dummy text of the printing.",
            price: "$1800/-",
            date:"3 MonTHS"
        },
        {
            id: 2,
            icon: <MdAutoAwesome />,
            title: "PACKAGE 2",
            text:"Lorem Ipsum is simply dummy text of the printing.",
            price: "$1800/-",
            date:"3 MonTHS"
        },
        {
            id: 3,
            icon: <MdEco />,
            title: "PACKAGE 3",
            text:"Lorem Ipsum is simply dummy text of the printing.",
            price: "$1800/-",
            date:"3 MonTHS",
        }
    ];
  return (
    <>
        <section>
                <div className="container">
                    <div className='flex justify-center'>
                        <Swiper
                                modules={[Navigation]}
                                navigation={{ nextEl: ".arrow-left", prevEl: ".arrow-right" }}
                                loop={true}
                                breakpoints={{
                                640: {
                                    slidesPerView: 2,
                                    spaceBetween: 20,
                                },
                                768: {
                                    slidesPerView: 3,
                                    spaceBetween: 20,
                                },
                                }}
                                >
                                {
                                data.map(({id,icon,title,text,price,date})=>(
                                    <SwiperSlide key={id}>
                                        <SubscriptionSingle
                                        key={id}
                                        icon={icon}
                                        title={title}
                                        text={text}
                                        price={price}
                                        date={date}
                                        />
                                    </SwiperSlide>
                                ))
                            }
                                <button className="arrow-left arrow absolute left-10 top-[50%] z-10">
                                    <Image src={Left} alt='left-arrow'/>
                                </button>
                                <button className="arrow-right arrow absolute top-[50%] right-10 z-10">
                                    <Image src={Right} alt='right-arrow'/>
                                </button>
                        </Swiper>
                        
                    </div>
                    <div className='flex justify-center'>
                        <button onClick={()=>router.push("/card")} className='btn-primary'>View All Products</button>
                    </div>
                </div>
        </section>
    </>
  )
}
