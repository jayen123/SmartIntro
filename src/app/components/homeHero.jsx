import Link from "next/link"

export default function HomeHero() {
  return (
    <>
        <section className=" flex bg-[url('/images/home-hero.png')] bg-no-repeat bg-center bg-cover py-[50px] md:items-end md:py-0 md:h-[700px]">
            <div className="container flex justify-end items-center">
                <div className="row">
                    <div className="px-[10px] md:px-0">
                        <div className="flex flex-col items-end gap-5 md:gap-10 md:mb-32">
                            <div className="font-mont text-white font-bold text-right">
                                <p className="text-xs font-bold tracking-wide md:tracking-widest mb-2">SMART INTRO DIGITAL VISITING CARD</p>
                                <h1 className="text-base md:text-5xl">Share Your Contact Info <br/>
                                With Just A Tap</h1>
                            </div>
                            <div>
                                <Link className="btn-primary" href="/">
                                    ORDER NOW
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
