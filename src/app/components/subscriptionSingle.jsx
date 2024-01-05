import React from 'react'

export default function SubscriptionSingle({icon,title,text,price,date}) {
  return (
    <>
        <div className="flex items-center aspect-square p-[50px]">
            <div className="flex flex-col items-center gap-5 text-center p-3">
                <div className="text-2xl md:text-6xl">
                    <span>{icon}</span>
                </div>
                <div>
                    <h6 className="text-lg md:text-[26px] font-bold tracking-widest uppercase">{title}</h6>
                    <p className="text-base md:text-[22px]">{text}</p>
                </div>
                <div className="flex flex-col">
                    <span className="text-lg font-semibold md:text-[26px]">{price}</span>
                    <span className="text-base md:text-[22px] tracking-widest uppercase">{date}</span>
                </div>
            </div>
        </div>
    </>
  )
}
