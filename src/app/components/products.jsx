"use client"
import SingleCard from './SingleCard';
import Image from 'next/image';
import Left from '../../../public/images/left-arrow.svg'
import Right from '../../../public/images/right-arrow.svg'
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Navigation } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

export default function Products() {
  const [cards, setCards] = useState([])
   const getCards = async () => {
   let data = await fetch("http://localhost:3000/api/cards");
   data = await data.json();
   setCards(data);
} 
useEffect(() => {
    getCards();
}, [])

const router = useRouter();
  return (
    <>
        <section className="bg-lblack py-[50px]">
            <div className="container">
                <div className="row flex flex-col gap-[50px] px-[10px] md:px-0">
                    <div className="font-mont font-bold text-center uppercase">
                        <p className="text-sm text-lred md:text-base">Products</p>
                        <h2 className="text-base md:text-3xl text-white">Our Digital Visiting Cards</h2>
                    </div>
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
                          1024: {
                            slidesPerView: 4,
                            spaceBetween: 20,
                          },
                        }}
                        >
                          {
                            cards.map(({id,image}) => (
                              <SwiperSlide key={id}>
                                  <SingleCard 
                                  key={id}
                                  url={`card/${id}`}
                                  bg={image}
                                  />
                              </SwiperSlide>
                            ))
                          }
                          <button className="arrow-left arrow absolute left-2 top-[45%] z-10">
                              <Image src={Left} alt='left-arrow'/>
                          </button>
                          <button className="arrow-right arrow absolute top-[45%] right-2 z-10">
                              <Image src={Right} alt='right-arrow'/>
                          </button>
                        </Swiper>
                    </div>
                    <div className='flex justify-center'>
                      <button onClick={()=>router.push("/card")} className='btn-primary'>View All Products</button>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
