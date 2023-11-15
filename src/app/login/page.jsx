import Password from '../components/password';
import ContactHeading from '../components/contact';
import Label from '../components/inputlabel';
import Checkbox from '../components/checkbox';
import Input from '../components/input';
import Link from 'next/link'

export default function Login() {
  return (
    <>
        <section className="bg-dblack py-[50px]">
            <div className="container">
                <div className="row">
                    <ContactHeading text="LOGIN" heading="HELLO! WELCOME"/>
                    <div className="max-w-[770px] mx-auto px-[10px] md:px-0">
                        <form action="#">
                            <div className="grid grid-cols-1 gap-5">
                                <div className="flex flex-col gap-1">
                                    <Label target="email" label="Email Address"/>
                                    <Input class="contact-input" type="email"/>
                                </div>
                                <Password password="Password" />
                                <div className="flex justify-between items-center">
                                    <div className='flex gap-1'>
                                        <Checkbox />
                                        <Label target="remember" label="Remember Me"/>
                                    </div>
                                    <div>
                                        <Link className="contact-label" href="#">Forget Password?</Link>
                                    </div>
                                </div>
                                <div className="flex flex-col">
                                    <Input class="btn-primary" type="submit" value="SEND MESSAGE"/>
                                </div>
                                <div className="text-center">
                                    <span className="contact-label">Don’t have an account?</span>
                                    <Link className="contact-label text-lred" href="/signup">Sign Up</Link>
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
