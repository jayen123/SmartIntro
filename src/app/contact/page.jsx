import CommonHero from "../components/commonpage"

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
                                    <label class="contact-label" for="name">Name</label>
                                    <input class="contact-input" type="text" name="name" id="name" />
                                </div>
                                <div class="flex flex-col gap-1 col-span-2 md:col-span-1">
                                    <label class="contact-label" for="email">Email Address</label>
                                    <input class="contact-input" type="email" name="email" id="email" />
                                </div>
                                <div class="flex flex-col gap-1 col-span-2 md:col-span-1">
                                    <label class="contact-label" for="subject">Subject</label>
                                    <input class="contact-input" type="text" name="subject" id="subject" />
                                </div>
                                <div class="flex flex-col gap-1 col-span-2 md:col-span-1">
                                    <label class="contact-label" for="Phone">Phone</label>
                                    <input class="contact-input" type="text" name="Phone" id="Phone" />
                                </div>
                                <div class="flex flex-col gap-1 col-span-2">
                                    <label class="contact-label" for="messege">Message</label>
                                    <textarea class="contact-input resize-none" name="messege" id="messege" cols="30" rows="10"></textarea>
                                </div>
                                <div class="flex flex-col col-span-2">
                                    <input class="btn-primary" type="submit" value="SEND MESSAGE" />
                                </div>
                            </div>
                            </form>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
