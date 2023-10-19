'use client'
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; // Import icons from react-icons

const ToggleMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="toggle-menu">
      <button onClick={toggleMenu} className="toggle-button text-white">
        {isOpen ? <FaTimes /> : <FaBars />} {/* Toggle between open and close icons */}
      </button>

      {isOpen && (
        <div className="menu">
          {/* Your menu content goes here */}
          <ul className="w-full p-5 absolute top-full right-0 bg-dblack z-10 transition-all duration-500 ease-in-out" id="toggle_menu">
                        <li><a className="link" href="/src/pages/index.html">Home</a></li>
                        <li><a className="link" href="/src/pages/products.html">Cards</a></li>
                        <li><a className="link" href="#">Features</a></li>
                        <li><a className="link" href="#">FAQs</a></li>
                        <li><a className="link" href="/src/pages/contact.html">Contact Us</a></li>
                        <li><a className="btn-primary block text-center" href="/src/pages/login.html">Login</a></li>
                    </ul>
        </div>
      )}
    </div>
  );
};

export default ToggleMenu;
