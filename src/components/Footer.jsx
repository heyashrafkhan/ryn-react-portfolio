import React from 'react';
import webflow from '../assets/WEBFLOW.png';
import figma from '../assets/FIGMA.png';
import designer from '../assets/DESIGNER.png';
import developer from '../assets/DEVELOPER.png';
import star from '../assets/star.png';

export default function Footer() {
  return (
    <footer className="bg-[#010208] px-4 sm:px-8 lg:px-[100px] py-8 sm:py-12 lg:py-16 flex justify-center">
      <div className="w-full max-w-[1240px] flex flex-col items-center">
        {/* Marquee Section */}
        <div className="overflow-hidden w-full pb-8 sm:pb-12 lg:pb-16">
          <div className="flex gap-4 sm:gap-6 lg:gap-10 items-center animate-marquee whitespace-nowrap">
            <img src={webflow} alt="Webflow" className="h-8 sm:h-10 lg:h-[56px] object-contain inline-block" />
            <img src={star} alt="Star" className="w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8 inline-block mx-2 sm:mx-3 lg:mx-4" />
            <img src={figma} alt="Figma" className="h-8 sm:h-10 lg:h-[56px] object-contain inline-block" />
            <img src={star} alt="Star" className="w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8 inline-block mx-2 sm:mx-3 lg:mx-4" />
            <img src={designer} alt="Designer" className="h-8 sm:h-10 lg:h-[56px] object-contain inline-block" />
            <img src={star} alt="Star" className="w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8 inline-block mx-2 sm:mx-3 lg:mx-4" />
            <img src={developer} alt="Developer" className="h-8 sm:h-10 lg:h-[56px] object-contain inline-block" />
            {/* Repeat for smooth marquee */}
            <img src={star} alt="Star" className="w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8 inline-block mx-2 sm:mx-3 lg:mx-4" />
            <img src={webflow} alt="Webflow" className="h-8 sm:h-10 lg:h-[56px] object-contain inline-block" />
            <img src={star} alt="Star" className="w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8 inline-block mx-2 sm:mx-3 lg:mx-4" />
            <img src={figma} alt="Figma" className="h-8 sm:h-10 lg:h-[56px] object-contain inline-block" />
            <img src={star} alt="Star" className="w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8 inline-block mx-2 sm:mx-3 lg:mx-4" />
            <img src={designer} alt="Designer" className="h-8 sm:h-10 lg:h-[56px] object-contain inline-block" />
            <img src={star} alt="Star" className="w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8 inline-block mx-2 sm:mx-3 lg:mx-4" />
            <img src={developer} alt="Developer" className="h-8 sm:h-10 lg:h-[56px] object-contain inline-block" />
          </div>
        </div>
        {/* End Marquee Section */}
        <div className="flex flex-col items-center gap-6 sm:gap-8 w-full">
          <h2 className="font-syne font-extrabold text-3xl sm:text-5xl lg:text-[64px] text-white uppercase text-center">LET'S TALK!</h2>
          <div className="flex items-center gap-2">
            <a href='mailto:rehanurraihan@gmail.com'>
              <span className="font-poppins text-white text-sm sm:text-base lg:text-[18px]">rehanurraihan@gmail.com</span>
            </a>
            <svg className="w-3 h-3 sm:w-4 sm:h-4" viewBox="0 0 17 17" fill="none">
              <path d="M1.67 4.67H12.33M12.33 4.67V15.33M12.33 4.67L1.67 15.33" stroke="white" strokeWidth="2"/>
            </svg>
          </div>
          <div className="flex flex-col sm:flex-row justify-between w-full border-t border-[#CBCBCB]/20 pt-6 sm:pt-8 mt-6 sm:mt-8 gap-4 sm:gap-0">
            <span className="text-white text-xs sm:text-sm lg:text-[14px] text-center sm:text-left">© Rehan Raihan - 2023</span>
            <div className="flex flex-wrap sm:flex-nowrap justify-center sm:justify-end gap-4 sm:gap-6 lg:gap-8">
              <a href="#" className="text-white text-xs sm:text-sm lg:text-[14px] hover:text-[#CBCBCB] transition-colors">Dribbble</a>
              <a href="#" className="text-white text-xs sm:text-sm lg:text-[14px] hover:text-[#CBCBCB] transition-colors">Behance</a>
              <a href="#" className="text-white text-xs sm:text-sm lg:text-[14px] hover:text-[#CBCBCB] transition-colors">Twitter</a>
              <a href="#" className="text-white text-xs sm:text-sm lg:text-[14px] hover:text-[#CBCBCB] transition-colors">Instagram</a>
            </div>
          </div>
        </div>
      </div>
      {/* Marquee animation styles */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </footer>
  );
}