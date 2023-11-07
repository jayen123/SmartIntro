import HowWorkTitle from "./HowWorkTitle"
import HowWorkImage from "./howWorkImage"
export default function HomeWork() {
  return (
    <>
        <section className="bg-lgray py-[50px]">
            <div className="container">
                <div className="row flex flex-col gap-[50px]">
                    <div className="font-mont font-bold text-center uppercase">
                        <p className="text-sm text-lred md:text-base">SUBSCRIPTION</p>
                        <h2 className="text-base md:text-3xl text-dblack">Get Started In Just Few Steps</h2>
                    </div>
                    <div className="flex justify-center px-[10px]"> 
                        <div className="grid md:grid-cols-2 items-center gap-5 max-w-3xl">
                            <HowWorkImage bg="bg-[url('/images/white-card.png')]"/>
                            <HowWorkTitle number="01" title="SELECT YOUR CARD AND SUBSCRIPTION PLAN" text="Select Your Smart Card, Add To Contact form & Complete Checkout Process." />
                            <HowWorkTitle number="02" title="MAKE PAYMENT" text="Design Process Starts After Order. Design Team Will Contact For Custom Design" />
                            <HowWorkImage bg="bg-[url('/images/gradient-card.png')]"/>
                            <HowWorkImage bg="bg-[url('/images/red-card.png')]"/>
                            <HowWorkTitle number="03" title="GET YOUR CARD" text="Design Process Starts After Order. Design Team Will Contact For Custom Design" />
                            <HowWorkTitle number="04" title="CREATE PROFILE AND START SHARING" text="After Receiving Your INTRO Product, Tap Or Scan To Create INTRO Profile." />
                            <HowWorkImage bg="bg-[url('/images/gradient-card.png')]"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
