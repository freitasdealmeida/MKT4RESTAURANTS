'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = !isOpen ? 'hidden' : '';
  };

  const closeMenu = () => {
    setIsOpen(false);
    document.body.style.overflow = '';
  };

  return (
    <header>
      <nav className="navbar">
        <div className="logo">
          <Link href="/">MKT4RESTAURANTS</Link>
        </div>

        <button
          className={`mobile-toggle ${isOpen ? 'is-active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`nav-links ${isOpen ? 'is-active' : ''}`}>
          {/* <li><Link href="/" onClick={closeMenu}>Home</Link></li> */}
          <li><Link href="/services" onClick={closeMenu}>Services</Link></li>
          {/* <li><Link href="/about" onClick={closeMenu}>About</Link></li> */}
          {/* <li><Link href="#contact-service" onClick={closeMenu}>Contact</Link></li> */}
        </ul>
      </nav>
    </header>
  );
}