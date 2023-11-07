"use client"
import SingleCard from "./SingleCard";
import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

export default function Productcard() {
    const projectsData = [
        {
          id: 1,
          name: "White Card",
          quality: "Premium",
          image: "/images/white-card.png",
          currentPrice: "1800$",
          allTimePrice: "2500$",
        },
        {
          id: 2,
          name: "Red Card",
          quality: "Regular",
          image: "/images/red-card.png",
          currentPrice: "1800$",
          allTimePrice: "2500$",
        },
        {
          id: 3,
          name: "Black Card",
          quality: "Premium",
          image: "/images/gradient-card.png",
          currentPrice: "1800$",
          allTimePrice: "2500$",
        },
        {
          id: 4,
          name: "White Card",
          quality: "Premium",
          image: "/images/white-card.png",
          currentPrice: "1800$",
          allTimePrice: "2500$",
        },
        {
          id: 5,
          name: "Red Card",
          quality: "Premium",
          image: "/images/red-card.png",
          currentPrice: "1800$",
          allTimePrice: "2500$",
        },
        {
          id: 6,
          name: "Black Card",
          quality: "Premium",
          image: "/images/gradient-card.png",
          currentPrice: "1800$",
          allTimePrice: "2500$",
        },
      ];
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
      const ref = useRef(null);
      const isInview = useInView(ref, {once : true})
  return (
    <>
        <section className="bg-lblack py-[50px]">
            <div className="container">
                <div ref={ref} className="grid grid-cols-1 gap-x-5 gap-y-10 px-[10px] md:px-0 md:grid-cols-3 lg:grid-cols-4">
                    {projectsData.map((item,index) => (
                        <motion.div
                        variants={cardVarients}
                        initial="hidden"
                        animate={isInview ? "visible" : "hidden"}
                        transition={{ duration: 0.5, delay: index * 0.5 }}
                        >
                            <SingleCard 
                            key={item.id}
                            bg={item.image}
                            quality={item.quality}
                            name={item.name}
                            currentPrice={item.currentPrice}
                            allTimePrice={item.allTimePrice}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    </>
  )
}
