import Link from "next/link"
import Image from "next/image"
import ToggleMenu from "./toggleMenu"
export default function Navbar() {
  return (
    <section className="bg-lblack">
    <div className="container relative" id="area">
        <nav className="flex justify-between items-center px-5 py-5 lg:px-0">
            <div>
                <Link href="/">
                    <Image src="/next.svg" height={100} width={100} alt="logo" />
                </Link>
            </div>
            <div className="flex items-center gap-10 lg:gap-20">
                <div>
                    <ul className="hidden md:flex gap-5">
                        <li><a className="link group" href="/src/pages/index.html">Home</a></li>
                        <li><a className="link group" href="/src/pages/products.html">Cards</a></li>
                        <li><a className="link group" href="#">Features</a></li>
                        <li><a className="link group" href="#">FAQs</a></li>
                        <li><a className="link group" href="/src/pages/contact.html">Contact Us</a></li>
                    </ul>
                </div>
                <div className="hidden md:flex">
                    <a className="btn-primary" href="/src/pages/login.html">Login</a>
                </div>      
                <div className="md:hidden">
                    <ToggleMenu />
                </div>
            </div>
        </nav>
    </div>
</section>
  )
}
