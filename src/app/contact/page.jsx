import CommonHero from "../components/commonpage"
import Input from "../components/input"
import Label from "../components/inputlabel"
import ContactInfo from "../components/contactInfo"

export default function ContactUs() {
  return (
    <>
        <CommonHero heading="CONTACT US"/>
        {/* Contact Form Here */}
        <section class="bg-lblack py-[50px]">
            <div class="container">
                <div class="row">
                    <div class="font-mont font-bold text-center capitalize">
                        <p class="text-sm md:text-base text-lred">CONTACT NOW</p>
                        <h2 class="text-base md:text-3xl text-white">Get In Touch With Us</h2>
                    </div>
                    <div class="py-[50px]">
                        <form action="#" class="px-[10px] md:px-0">
                            <div class="grid grid-cols-2 gap-5">
                                <div class="flex flex-col gap-1 col-span-2 md:col-span-1">
                                    <Label target="name" label="Name"/>
                                    <Input class="contact-input" type="text" id="name"/>
                                </div>
                                <div class="flex flex-col gap-1 col-span-2 md:col-span-1">
                                    <Label target="email" label="Email Address"/>
                                    <Input class="contact-input" type="email" name="email"/>
                                </div>
                                <div class="flex flex-col gap-1 col-span-2 md:col-span-1">
                                    <Label target="subject" label="Subject"/>
                                    <Input class="contact-input" type="text" name="subject"/>
                                </div>
                                <div class="flex flex-col gap-1 col-span-2 md:col-span-1">
                                    <Label target="phone" label="Phone"/>
                                    <Input class="contact-input" type="text" name="Phone"/>
                                </div>
                                <div class="flex flex-col gap-1 col-span-2">
                                    <Label target="messege" label="Message"/>
                                    <textarea class="contact-input resize-none" name="messege" id="messege" cols="30" rows="10"></textarea>
                                </div>
                                <div class="flex flex-col col-span-2">
                                    <Input class="btn-primary" type="submit" value="SEND MESSAGE"/>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
        <ContactInfo />
    </>
  )
}
