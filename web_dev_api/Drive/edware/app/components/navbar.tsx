"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Add scroll listener for that "Pro" header shrink effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { name: string; href: string }[] = [
    { name: 'Services', href: '#services' },
    { name: 'Case Studies', href: '#work' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-[100] transition-all duration-300 ${
      scrolled ? 'bg-black/90 backdrop-blur-xl py-3' : 'bg-black py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* Logo - Minimalist approach */}
        <Link href="/" className="text-white text-xl font-black tracking-tighter uppercase">
          Edward<span className="text-[#FF1E56]">.</span>Okigbo
        </Link>

        {/* Desktop Nav: Clean spacing & subtle hover */}
        <div className="hidden md:flex items-center space-x-12">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className="text-gray-400 text-xs uppercase tracking-[0.2em] font-bold hover:text-white transition-all"
            >
              {link.name}
            </Link>
          ))}
          
          <a href="#contact" className="bg-[#FF1E56] hover:bg-[#D91547] text-white text-xs uppercase tracking-widest font-black px-8 py-3 rounded-sm transition-all transform hover:-translate-y-1 active:scale-95 shadow-[0_0_20px_rgba(255,30,86,0.3)]">
            Get in Touch
          </a>
        </div>

        {/* Mobile Toggle - Custom minimalist icon */}
        <button 
          className="md:hidden group flex flex-col items-end space-y-1.5 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className={`h-0.5 bg-white transition-all duration-300 ${isOpen ? 'w-8 rotate-45 translate-y-2' : 'w-8'}`}></div>
          <div className={`h-0.5 bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : 'w-5'}`}></div>
          <div className={`h-0.5 bg-[#FF1E56] transition-all duration-300 ${isOpen ? 'w-8 -rotate-45 -translate-y-2' : 'w-8'}`}></div>
        </button>
      </div>

      {/* Mobile Menu - Full screen dramatic overlay */}
      <div className={`
        fixed inset-0 bg-black z-[-1] flex flex-col justify-center items-center space-y-12 transition-all duration-500 ease-[cubic-bezier(0.85,0,0.15,1)]
        ${isOpen ? 'translate-y-0' : '-translate-y-full'}
      `}>
        {navLinks.map((link, i) => (
          <Link 
            key={link.name} 
            href={link.href}
            onClick={() => setIsOpen(false)}
            className={`text-white text-lg md:text-base font-bold uppercase tracking-widest hover:text-[#FF1E56] transition-colors ${isOpen ? 'opacity-100 translate-y-0 delay-200' : 'opacity-0 translate-y-10'}`}
          >
            {link.name}
          </Link>
        ))}
       
      </div>
    </nav>
  );
};

export default Navbar;
