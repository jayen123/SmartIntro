"use client"
import { useState } from "react";
import {motion} from "framer-motion"
import Link from "next/link";
const ProductCard = (props) => {
    return(
        <>
            <motion.div
            initial={{y: 50, opacity: 0.2}}
            animate={{ y: 0, opacity: 1}}
            transition={{duration: .5,
                stiffness: 120
            }}
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
        </>
    )
}
export default ProductCard;