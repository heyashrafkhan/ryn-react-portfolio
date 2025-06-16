import React, { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-[#010208] px-4 sm:px-8 lg:px-[100px] py-6 lg:py-8 flex justify-center relative">
      <div className="w-full max-w-[1240px] flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center h-8 w-[103px]">
          <a href="#"><svg className="h-8 w-[46px]" viewBox="0 0 47 32" fill="none">
            <rect width="9.48" height="32" fill="#fff" />
            <rect x="23.7" width="9.48" height="32" fill="#fff" />
            <ellipse cx="16.59" cy="7.11" rx="5.93" ry="5.93" fill="#fff" />
            <ellipse cx="40.3" cy="24.89" rx="5.93" ry="5.93" fill="#fff" />
          </svg></a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden z-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="white" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Desktop Menu */}
        <div className="hidden lg:flex gap-2">
          <a href="#" className="bg-white text-[#010208] rounded-3xl px-6 py-2 font-syne text-[16px]">Home</a>
          <a href="#" className="text-white rounded-3xl px-6 py-2 font-syne text-[16px]">About</a>
          <a href="#" className="text-white rounded-3xl px-6 py-2 font-syne text-[16px]">Projects</a>
          <a href="#" className="text-white rounded-3xl px-6 py-2 font-syne text-[16px]">Contact</a>
        </div>

        {/* Hire Me Button - Hidden on mobile, visible on desktop */}
        <a href="#" className="hidden lg:block border border-white rounded-full px-6 py-2 text-white uppercase font-syne font-medium text-[14px]">
          HIRE ME
        </a>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-[#010208] z-40 lg:hidden">
            <div className="flex flex-col items-center justify-center h-full gap-8">
              <a href="#" className="text-white text-2xl font-syne">Home</a>
              <a href="#" className="text-white text-2xl font-syne">About</a>
              <a href="#" className="text-white text-2xl font-syne">Projects</a>
              <a href="#" className="text-white text-2xl font-syne">Contact</a>
              <a href="#" className="border border-white rounded-full px-8 py-3 text-white uppercase font-syne font-medium text-[16px]">
                HIRE ME
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}