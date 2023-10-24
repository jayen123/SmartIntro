"use client"
import { useEffect } from "react"
import ProductCard from "../components/card"
export default function Card() {
  return (
    <>
        <section className="bg-lblack py-[50px]">
        <div className="container">
            <div className="grid grid-cols-1 gap-x-5 gap-y-10 px-[10px] md:px-0 md:grid-cols-3 lg:grid-cols-4">
                <ProductCard bg="bg-[url('/images/white-card.png')]" quality="Premium" />
                <ProductCard bg="bg-[url('/images/red-card.png')]" quality="Premium" />
                <ProductCard bg="bg-[url('/images/gradient-card.png')]" quality="Premium" />
                <ProductCard bg="bg-[url('/images/red-card.png')]" quality="Premium" />
            </div>
        </div>
        </section>
    </>
  )
}
