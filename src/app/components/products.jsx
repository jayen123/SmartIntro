"use client"
import SingleCard from './SingleCard';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

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
                <div className="row flex flex-col gap-[50px]">
                    <div className="font-mont font-bold text-center uppercase">
                        <p className="text-sm text-lred md:text-base">Products</p>
                        <h2 className="text-base md:text-3xl text-white">Our Digital Visiting Cards</h2>
                    </div>
                    <div>
                        <Swiper
                        modules={[Navigation]}
                        spaceBetween={20}
                        slidesPerView={4}
                        navigation
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
