"use client"
import { useState,useEffect } from "react";
import SingleCard from "./SingleCard";
import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";


export default function Cards() {
  // animation
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
  // need function
  const [card, setCard] = useState([])
  const getCards = async () => {
    let data = await fetch("http://localhost:3000/api/cards");
    data = await data.json();
    setCard(data);
} 
useEffect(() => {
   getCards();
}, [])
const ref = useRef(null);
const isInview = useInView(ref, {once : true})

// main code
  return (
    <>
        <section className="bg-lblack py-[50px]">
            <div className="container">
                <div ref={ref} className="grid grid-cols-1 gap-x-5 gap-y-10 px-[10px] md:px-0 md:grid-cols-3 lg:grid-cols-4">
                    {
                      card.map(({id,image},index) => (
                        <motion.div
                        variants={cardVarients}
                        initial="hidden"
                        animate={isInview ? "visible" : "hidden"}
                        transition={{ duration: 0.5, delay: index * 0.5 }}
                        >
                            <SingleCard 
                            key={id}
                            url={`card/${id}`}
                            bg={image}
                            />
                        </motion.div>
                      ))
                    }
                </div>
            </div>
        </section>
    </>
  )
}
