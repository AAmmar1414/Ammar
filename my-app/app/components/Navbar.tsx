"use client"
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div>
      {/* Top Navbar - Blue Section */}
      <div className="bg-blue-500 text-white text-center py-2">
        <span>Welcome to our website!</span>
      </div>

      {/* Middle Navbar - Logo and Cart Icon */}
      <div className="bg-gray-100 py-4">
        <div className="flex items-center justify-between max-w-7xl mx-auto px-4">
          {/* Logo */}
          <div>
            <Image src="/Logo.png" alt="Logo" width={140} height={140} />
          </div>

          {/* Cart Icon */}
          <div className="lg:hidden">
            <Link href="/cart">
              <Image src="/Cart.png" alt="Cart" width={130} height={130} />
            </Link>
          </div>

          {/* Hamburger Icon for Mobile */}
          <div className="lg:hidden" onClick={toggleMenu}>
            <button className="text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Navbar - Navigation Links */}
      <div
        className={`lg:bg-gray-800 text-white ${isOpen ? 'block' : 'hidden'} lg:block`}
      >
        <div className="max-w-7xl mx-auto px-4 py-2">
          <ul className="flex flex-col lg:flex-row lg:space-x-8 justify-center">
            <li className="py-2 lg:py-0">
              <Link href="/">Home</Link>
            </li>
            <li className="py-2 lg:py-0">
              <Link href="/products">Products</Link>
            </li>
            <li className="py-2 lg:py-0">
              <Link href="/about">Shop</Link>
            </li>
            <li className="py-2 lg:py-0">
              <Link href="/pages">Pages</Link>
            </li>
            <li className="py-2 lg:py-0">
              <Link href="/shop">About</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black opacity-50 z-10 lg:hidden" onClick={() => setIsOpen(false)}></div>
      )}
    </div>
  );
};

export default Navbar;
