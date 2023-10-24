'use client'
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useState } from 'react';
import { RiMenu4Fill, RiCloseFill } from 'react-icons/ri';

const ToggleMenu = () => {
  // js here
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const router = useRouter();
  return (
    <div className="toggle-menu">
      <button onClick={toggleMenu} className="toggle-button text-white">
        {isOpen ? <RiCloseFill /> : <RiMenu4Fill />} 
      </button>

        <div className="menu">
            <ul className={isOpen ? "w-full p-5 absolute top-full right-0 bg-dblack z-10 transition-all duration-500 ease-in-out" : "w-full p-5 absolute top-full right-full bg-dblack z-10 transition-all duration-500 ease-in-out"} id="toggle_menu">
                <li><Link className="link" href="/">Home</Link></li>
                <li><Link className="link" href="#">Cards</Link></li>
                <li><Link className="link" href="#">Features</Link></li>
                <li><Link className="link" href="#">FAQs</Link></li>
                <li><Link className="link" href="/contact">Contact Us</Link></li>
                <li><button onClick={()=>router.push("/login")} className="btn-primary text-center w-full" href="/login">Login</button></li>
            </ul>
        </div>
    </div>
  );
};

export default ToggleMenu;
