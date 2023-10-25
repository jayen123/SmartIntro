"use client"
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Link from 'next/link';
const ProductCard = (props) => {
    const [scrollY, setScrollY] = useState(0);
  
    useEffect(() => {
      const handleScroll = () => {
        setScrollY(window.scrollY);
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
    const opacityVariants = {
        hidden: { opacity: 0.3,
            y: 50,
         },
        visible: { opacity: 1,
            y: 0,

         },
      };
  return (
                <motion.div
                initial="hidden"
                animate={scrollY > 50 ? "visible" : "hidden"}
                variants={opacityVariants}
                 class="group flex flex-col gap-3">
                <div className={props.bg + ' bg-no-repeat  bg-cover bg-center aspect-square'}>
                            <div class="flex justify-center items-center p-1 opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 w-full h-full bg-lblack/30 transition-all duration-300 ease-in-out">
                                <Link class="btn-primary" href="#">VIEW</Link>
                            </div>
                </div>
                <div class="flex flex-col items-center text-white">
                    <span class="text-lred text-xs font-bold">{props.quality}</span>
                    <h5 class="text-2xl">Black Card</h5>
                    <span>
                        <span class="text-[22px] font-medium">$ 1800</span>
                        <span class="text-dgray line-through">$ 2500</span>
                    </span>
                </div>
                </motion.div>
  );
};

export default ProductCard;