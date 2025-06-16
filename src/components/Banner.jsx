import React from 'react'
import imgBannerTitle1 from '../assets/img-banner-title-1.png';
import imgBannerTitle2 from '../assets/img-banner-title-2.png';
import imgBrandLogo1 from '../assets/doradesign.png';
import imgBrandLogo2 from '../assets/wavefun.png';
import imgBrandLogo3 from '../assets/silsila.png';

export default function Banner() {
  return (
    <section className="w-full flex justify-center bg-[#010208]">
      <div className="w-full max-w-[1440px] px-4 sm:px-8 lg:px-[100px] py-16 sm:py-24 lg:py-44 flex flex-col items-center lg:items-end">
        <div className="max-w-[1240px] w-full flex flex-col gap-12 sm:gap-16 lg:gap-28 items-center lg:items-end">
          <div className="w-full flex flex-col items-center">
            <div className="w-full flex flex-wrap gap-2 sm:gap-[17px] items-center justify-center">
              <span className="font-syne font-extrabold text-3xl sm:text-5xl lg:text-[64px] text-white uppercase">I AM A</span>
              <img
                src={imgBannerTitle1}
                alt="Banner Title"
                className="h-10 w-24 sm:h-12 sm:w-28 lg:h-16 lg:w-32 rounded-full object-cover"
              />
              <span className="font-syne font-extrabold text-3xl sm:text-5xl lg:text-[64px] text-white uppercase">FREELANCE</span>
              <span className="font-syne font-extrabold text-3xl sm:text-5xl lg:text-[64px] text-white uppercase">DESIGNER</span>
              <img
                src={imgBannerTitle2}
                alt="Banner Title"
                className="h-10 w-24 sm:h-12 sm:w-28 lg:h-16 lg:w-32 rounded-full object-cover"
              />
              <span className="font-syne font-extrabold text-3xl sm:text-5xl lg:text-[64px] text-white uppercase">FROM</span>
              <span className="font-syne font-extrabold text-3xl sm:text-5xl lg:text-[64px] text-white uppercase">San Francisco</span>
            </div>
          </div>
          <div className="w-full flex flex-col lg:flex-row gap-8 items-center lg:items-end">
            <div className="w-full lg:w-[716px] flex flex-row items-center justify-center overflow-x-auto lg:overflow-clip px-4 sm:px-6 lg:px-8 py-4 gap-8">
              <img
                src={imgBrandLogo1}
                alt="Dora Design"
                className="h-8 sm:h-10 lg:h-12 w-auto object-contain"
              />
              <img
                src={imgBrandLogo2}
                alt="Wavefun"
                className="h-8 sm:h-10 lg:h-12 w-auto object-contain"
              />
              <img
                src={imgBrandLogo3}
                alt="Silsila"
                className="h-8 sm:h-10 lg:h-12 w-auto object-contain"
              />
            </div>
            <div className="w-full lg:w-[492px] text-[#cbcbcb] text-sm sm:text-base lg:text-[16px] font-poppins text-center lg:text-left">
              Welcome to my portfolio. Here, artistry meets functionality. Dive into a curated showcase of distinctive branding and web designs, each crafted to captivate and inspire.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}