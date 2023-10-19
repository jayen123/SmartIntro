import { SlSocialFacebook,SlSocialTwitter,SlSocialLinkedin,SlSocialInstagram } from 'react-icons/sl'
import { TiArrowRightThick } from 'react-icons/ti'
import Link from 'next/link'
import Image from 'next/image'
export default function Footer() {
  return (
    <>
        <section className="bg-lblack px-[10px] md:px-0 py-[50px]">
        <div className="container">
            <div className="row">
                <div className="grid lg:grid-cols-4 gap-5">
                    <div className="flex flex-col gap-5">
                        <div>
                            <Link href="/">
                                <Image src="/next.svg" height={100} width={100} alt="footer-logo" />
                            </Link>
                        </div>
                        <div>
                            <p className="font-light text-white opacity-70"> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                        </div>
                        <div className="flex gap-2">
                            <Link className="footer-icon" href="https://www.facebook.com/shadapixel"> <SlSocialFacebook /> </Link>
                            <Link className="footer-icon" href="https://twitter.com/jayen_hasan"> <SlSocialTwitter /> </Link>
                            <Link className="footer-icon" href="https://www.linkedin.com/company/shadapixel/"> <SlSocialLinkedin /> </Link>
                            <Link className="footer-icon" href="https://instagram.com/"> <SlSocialInstagram /> </Link>
                        </div>
                    </div>
                    <div className="flex flex-col gap-5">
                        <h5 className="font-bold text-white text-xl">QUICK LINKS</h5>
                        <div>
                            <ul className="flex flex-col gap-[10px]">
                                <li><a className="footer-link group" href="#"> <TiArrowRightThick className='footer-arrow'/> About Us</a></li>
                                <li><a className="footer-link group" href="#"> <TiArrowRightThick className='footer-arrow'/> Privacy Policy</a></li>
                                <li><a className="footer-link group" href="#"> <TiArrowRightThick className='footer-arrow'/> Terms & Conditions</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <ul className="flex flex-col gap-[10px]">
                            <li><a className="footer-link group" href="/src/pages/products.html"> <TiArrowRightThick className='footer-arrow'/> Products</a></li>
                            <li><a className="footer-link group" href="#"> <TiArrowRightThick className='footer-arrow'/> Features</a></li>
                            <li><a className="footer-link group" href="/src/pages/contact.html"> <TiArrowRightThick className='footer-arrow'/> Contact Us</a></li>
                        </ul>
                    </div>
                    <div className="flex flex-col justify-center">
                        <form className="flex flex-col gap-5" action="#">
                            <input className=" footer-input" type="search" name="search" id="search" placeholder="Write SomethinG" />
                            <input className="secondary-btn" type="submit" value="SEND MESSAGE" name="submit" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}