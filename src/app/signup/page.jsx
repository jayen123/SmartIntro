import Link from "next/link"
import Checkbox from "../components/checkbox"
import Password from "../components/password"
import ContactHeading from "../components/contact"
import Label from "../components/inputlabel"
import Input from "../components/input"
export default function SignUp() {
  return (
    <>
        <section className="bg-dblack py-[50px]">
            <div className="container">
                <div className="row">
                    <ContactHeading text="SIGN UP" heading="WELCOME TO SMART INTRO"/>
                    <div className="max-w-[770px] mx-auto px-[10px] md:px-0">
                        <form action="#">
                            <div className="grid grid-cols-1 gap-5">
                                <div className="flex flex-col gap-1">
                                    <Label target="name" label="Name"/>
                                    <Input class="contact-input" type="text" id="name"/>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <Label target="email" label="Email Address"/>
                                    <Input class="contact-input" type="email" name="email"/>
                                </div>
                                <div className="flex flex-col gap-1">
                                  <Label target="phone" label="Phone"/>
                                  <Input class="contact-input" type="text" name="Phone"/>
                                </div>
                                  <Password password="Password" />
                                  <Password password="Confirm Password" />
                                <div className="flex gap-1 items-center">
                                    <div className='flex gap-1'>
                                        <Checkbox />
                                        <Label target="remember" label="I agree to"/>
                                    </div>
                                    <div>
                                        <Link className="contact-label underline" href="/terms&conditions">the terms and conditions.</Link>
                                    </div>
                                </div>
                                <div className="flex flex-col">
                                    <button className="btn-primary">SIGN UP</button>
                                </div>
                                <div className="text-center">
                                    <span className="contact-label">Don’t have an account?</span>
                                    <Link className="contact-label text-lred" href="/signup">Terms & Conditions</Link>
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
