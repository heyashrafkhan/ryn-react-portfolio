import React from 'react';
import blog1 from '../assets/blog1.jpg';
import blog2 from '../assets/blog2.jpg';
import blog3 from '../assets/blog3.jpg';

const blogData = [
  {
    image: blog1,
    date: "Nov 9, 2023",
    title: "How UX works in web",
    tags: ["ui", "ux"]
  },
  {
    image: blog2,
    date: "Aug 18, 2023",
    title: "Case study - Analysis Application.",
    tags: ["design", "print"]
  },
  {
    image: blog3,
    date: "Feb 16, 2023",
    title: "3 ways to develop your skill",
    tags: ["figma", "web"]
  }
];

export default function Blog() {
  return (
    <section className="w-full flex justify-center bg-[#010208]">
      <div className="w-full max-w-[1440px] lg:px-[100px] lg:py-16 flex flex-col items-center">
        <div className="max-w-[1240px] w-full flex flex-col gap-6 sm:gap-8 items-center">
          <div className="flex items-center gap-2 w-full justify-between">
            <div className="flex items-center gap-2">
              <svg className="w-6 h-6 sm:w-8 sm:h-8" viewBox="0 0 32 32" fill="none"><path d="M16 0L17.89 10.19L25.4 3.06L20.94 12.41L31.22 11.06L22.11 16L31.22 20.94L20.94 19.59L25.4 28.94L17.89 21.81L16 32L14.11 21.81L6.6 28.94L11.06 19.59L0.78 20.94L9.89 16L0.78 11.06L11.06 12.41L6.6 3.06L14.11 10.19L16 0Z" fill="#CBCBCB"/></svg>
              <h2 className="font-syne font-bold text-2xl sm:text-3xl lg:text-[40px] text-white">Blog</h2>
            </div>
            <span className="font-syne font-medium text-sm sm:text-base lg:text-[18px] text-white underline cursor-pointer">view all</span>
          </div>
          {/* Blog Cards */}
          <div className="flex flex-col gap-6 sm:gap-8 w-full">
            {blogData.map((post, index) => (
              <div key={index} className="flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-8 items-start lg:items-center w-full">
                <div 
                  className="bg-center bg-cover bg-no-repeat h-[180px] sm:h-[214px] rounded-2xl sm:rounded-3xl w-full lg:w-[286px] flex-shrink-0" 
                  style={{backgroundImage: `url(${post.image})`}}
                />
                <div className="flex flex-col gap-3 sm:gap-4 w-full lg:w-[710px]">
                  <span className="font-poppins text-[#cbcbcb] text-sm sm:text-base lg:text-[18px] font-[400]">{post.date}</span>
                  <span className="font-syne font-semibold text-xl sm:text-2xl lg:text-[40px] text-white">{post.title}</span>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag, i) => (
                      <span key={i} className="border border-white rounded-full px-4 sm:px-6 py-1.5 sm:py-2 text-white uppercase font-syne font-semibold text-[10px] sm:text-[12px]">{tag}</span>
                    ))}
                  </div>
                </div>
                <div className="w-full lg:w-[180px] flex lg:items-end justify-start lg:justify-end">
                  <button className="bg-white rounded-full px-6 sm:px-8 py-3 sm:py-4 text-[#010208] font-syne font-semibold text-xs sm:text-sm lg:text-[14px]">Read</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}