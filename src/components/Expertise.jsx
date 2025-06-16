import React from 'react';

export default function Expertise() {
  return (
    <section className="w-full flex justify-center bg-[#010208]">
      <div className="max-w-[1240px] w-full flex flex-col items-center gap-8">
        <div className="flex items-center gap-2 w-full">
          <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none"><path d="M16 0L17.58 10.1L24 2.14L20.32 11.68L29.86 8L21.9 14.42L32 16L21.9 17.58L29.86 24L20.32 20.32L24 29.86L17.58 21.9L16 32L14.42 21.9L8 29.86L11.68 20.32L2.14 24L10.1 17.58L0 16L10.1 14.42L2.14 8L11.68 11.68L8 2.14L14.42 10.1L16 0Z" fill="#CBCBCB"/></svg>
          <h2 className="font-syne font-bold text-[40px] text-white">Expertise</h2>
        </div>
        <div className="grid grid-cols-2 gap-8 w-full">
          {/* Card 1 */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <svg className="w-2 h-[7px]" viewBox="0 0 8 7" fill="none"><rect width="8" height="7" fill="white"/></svg>
              <span className="font-syne font-semibold text-[24px] text-white">Branding</span>
            </div>
            <p className="font-poppins text-[#cbcbcb] text-[16px]">I create efficient, adaptable, and engaging websites. No predefined patterns. No sluggish, complex code. Webflow forms the foundation of my web development approach. I employ it to provide safe, top-notch bespoke websites.</p>
          </div>
          {/* Card 2 */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <svg className="w-2 h-[7px]" viewBox="0 0 8 7" fill="none"><rect width="8" height="7" fill="white"/></svg>
              <span className="font-syne font-semibold text-[24px] text-white">UI Design</span>
            </div>
            <p className="font-poppins text-[#cbcbcb] text-[16px]">I create efficient, adaptable, and engaging websites. No predefined patterns. No sluggish, complex code. Webflow forms the foundation of my web development approach. I employ it to provide safe, top-notch bespoke websites.</p>
          </div>
          {/* Card 3 */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none"><rect x="4" y="3.5" width="8" height="8" fill="white"/></svg>
              <span className="font-syne font-semibold text-[24px] text-white">UX Design</span>
            </div>
            <p className="font-poppins text-[#cbcbcb] text-[16px]">I comprehend and resolve digital product issues using a user-focused methodology. Investigation, compassion, and visual conveyance are a few techniques I apply to captivate and involve your users while fulfilling your business requirements.</p>
          </div>
          {/* Card 4 */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <svg className="w-2 h-[7px]" viewBox="0 0 8 7" fill="none"><rect width="8" height="7" fill="white"/></svg>
              <span className="font-syne font-semibold text-[24px] text-white">Development</span>
            </div>
            <p className="font-poppins text-[#cbcbcb] text-[16px]">I create user-friendly, adaptive, engaging websites. No cookie-cutters. No cumbersome, complex coding. Webflow forms the foundation of my web development approach, I employ it to produce safe, top-notch personalized websites.</p>
          </div>
        </div>
      </div>
    </section>
  );
}