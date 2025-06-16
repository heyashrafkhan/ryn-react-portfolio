import React from 'react';

const experienceData = [
  {
    title: 'Lead Product Designer',
    company: 'Fortknox',
    date: 'Mar 2022 - Oct 2023',
  },
  {
    title: 'Intern Designer',
    company: 'OmniSafe',
    date: 'Mar 2022 - Oct 2023',
  },
  {
    title: 'UI Designer',
    company: 'Doradesign',
    date: 'Mar 2022 - Oct 2023',
  },
  {
    title: 'Frontend Developer',
    company: 'OpacityAuthor',
    date: 'Mar 2022 - Oct 2023',
  }
];

export default function Experience() {
  return (
    <section className="w-full flex justify-center bg-[#010208] py-12 sm:py-16 lg:py-24">
      <div className="max-w-[1240px] w-full flex flex-col items-start gap-8 sm:gap-12 lg:gap-16">
        <div className="flex items-center gap-3 w-full group">
          <svg 
            className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 transform transition-transform duration-300 group-hover:rotate-180" 
            viewBox="0 0 32 32" 
            fill="none"
          >
            <path 
              d="M16 0L17.89 10.19L25.4 3.06L20.94 12.41L31.22 11.06L22.11 16L31.22 20.94L20.94 19.59L25.4 28.94L17.89 21.81L16 32L14.11 21.81L6.6 28.94L11.06 19.59L0.78 20.94L9.89 16L0.78 11.06L11.06 12.41L6.6 3.06L14.11 10.19L16 0Z" 
              fill="#CBCBCB"
              className="transition-colors duration-300 group-hover:fill-white"
            />
          </svg>
          <h2 className="font-syne font-bold text-2xl sm:text-3xl lg:text-[40px] text-white">
            Experience
          </h2>
        </div>
        
        <div className="flex flex-col w-full divide-y divide-white/20">
          {experienceData.map((exp, idx) => (
            <div 
              key={idx} 
              className="group py-6 sm:py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-6
                        transition-all duration-300 hover:bg-white/5 -mx-4 sm:-mx-8 lg:-mx-[100px] px-4 sm:px-8 lg:px-[100px]"
            >
              <span className="font-syne font-medium text-xl sm:text-2xl lg:text-[32px] xl:text-[36px] text-white
                             transition-transform duration-300 group-hover:translate-x-2">
                {exp.title}
              </span>
              <div className="flex flex-col items-start sm:items-end text-left sm:text-right gap-1">
                <span className="font-syne font-semibold text-lg sm:text-xl lg:text-[24px] text-white/90
                               transition-colors duration-300 group-hover:text-white">
                  {exp.company}
                </span>
                <span className="font-poppins text-sm sm:text-base text-white/70
                               transition-colors duration-300 group-hover:text-white/90">
                  {exp.date}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}