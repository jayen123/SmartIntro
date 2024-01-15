import Link from 'next/link'
import React from 'react'

export default function Order() {
  return (
    <>
        <section className="bg-gradient-to-b from-lred bg-lpink py-[50px]">
        <div className="container">
            <div className="row">
                <div className="flex flex-col flex-wrap items-center gap-y-5 px-[10px] md:px-0 md:flex-row md:justify-between">
                    <div className="text-center text-white font-bold md:text-left">
                        <h5 className="tracking-wider">WHY LATE?</h5>
                        <h2 className="text-base md:text-3xl">Unlock Seamless Networking With Our NFC Visiting Cards !</h2>
                    </div>
                    <div>
                        <Link className="secondary-btn" href="/">ORDER NOW</Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}
