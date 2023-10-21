'use client'
import Link from "next/link"
import { useRouter } from "next/navigation"
import Image from "next/image"
import ToggleMenu from "./toggleMenu"

export default function Navbar() {
    const router = useRouter();
  return (
    <section className="bg-lblack">
    <div className="container relative" id="area">
        <nav className="flex justify-between items-center px-[10px] py-5 lg:px-0">
            <div>
                <Link href="/">
                    <Image src="/next.svg" height={100} width={100} alt="logo" />
                </Link>
            </div>
            <div className="flex items-center gap-10 lg:gap-20">
                <div>
                    <ul className="hidden md:flex gap-5">
                        <li><Link className="link group" href="/">Home</Link></li>
                        <li><Link className="link group" href="/src/pages/products.html">Cards</Link></li>
                        <li><Link className="link group" href="#">Features</Link></li>
                        <li><Link className="link group" href="#">FAQs</Link></li>
                        <li><Link className="link group" href="/contact">Contact Us</Link></li>
                    </ul>
                </div>
                <div className="hidden md:flex">
                    <button onClick={()=>router.push("/login")} className="btn-primary">Login</button>
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
