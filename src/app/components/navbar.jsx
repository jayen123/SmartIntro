'use client'
import Link from "next/link"
import { useRouter } from "next/navigation"
import Image from "next/image"
import Logo from "../../../public/next.svg"
import ToggleBar from "./toggleMenu"

export default function Navbar() {
    const menuItems = [
        { id: 1, text: 'Home', path: '/' },
        { id: 2, text: 'Cards', path: '/card' },
        { id: 4, text: 'Features', path: '/features' },
        { id: 3, text: 'Faqs', path: '/faqs' },
        { id: 5, text: 'Contact', path: '/contact' }
        // Add more menu items as needed
      ];
    const router = useRouter();
  return (
    <section className="bg-lblack">
    <div className="container relative" id="area">
        <nav className="flex justify-between items-center px-[10px] py-5 lg:px-0">
            <div>
                <Link href="/">
                    <Image src={Logo} width={150} alt="logo" />
                </Link>
            </div>
            <div className="flex items-center gap-10 lg:gap-20">
                <div>
                    <ul className="hidden md:flex gap-5">
                        {menuItems.map((item) => (
                            <li key={item.id}>
                                <Link className="link group" href={item.path}>{item.text}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="hidden md:flex">
                    <button onClick={()=>router.push("/login")} className="btn-primary">Login</button>
                </div>      
                <div className="md:hidden">
                    <ToggleBar />
                </div>
            </div>
        </nav>
    </div>
    </section>
  )
}




