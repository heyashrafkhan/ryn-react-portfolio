/**
 * Works component displays a portfolio of projects in a responsive grid layout.
 * Each project card includes an image, title, description, and tags.
 * @returns {JSX.Element} The Works section of the portfolio
 */

import React from 'react';
import works1 from '../assets/works1.jpg';
import works2 from '../assets/works2.jpg';
import works3 from '../assets/works3.jpg';

// Project data for the works section
const projectData = [
	{
		image: works1,
		title: 'Analysis Application',
		description:
			'With user-centered approach, the goals was to create an intuitive interface for enhanced financial intelligence.',
		tags: ['figma', 'ux'],
	},
	{
		image: works2,
		title: 'Fortknox Application',
		description:
			'With user-centered approach, the goals was to create an intuitive interface for enhanced financial intelligence.',
		tags: ['mobile', 'web'],
	},
	{
		image: works3,
		title: 'Zenocide Application',
		description:
			'With user-centered approach, the goals was to create an intuitive interface for enhanced financial intelligence.',
		tags: ['app', 'web'],
	},
];

export default function Works() {
	return (
		<section className="w-full flex justify-center bg-[#010208]">
			<div className="w-full max-w-[1440px] sm:px-8 lg:px-[100px] sm:py-12 lg:py-16 flex flex-col items-center">
				<div className="max-w-[1240px] w-full flex flex-col gap-6 sm:gap-8 items-center">
					<div className="flex items-center gap-2 w-full justify-between">
						<div className="flex items-center gap-2">
							<svg
								className="w-6 h-6 sm:w-8 sm:h-8"
								viewBox="0 0 32 32"
								fill="none"
							>
								<path
									d="M16 0L17.89 10.19L25.4 3.06L20.94 12.41L31.22 11.06L22.11 16L31.22 20.94L20.94 19.59L25.4 28.94L17.89 21.81L16 32L14.11 21.81L6.6 28.94L11.06 19.59L0.78 20.94L9.89 16L0.78 11.06L11.06 12.41L6.6 3.06L14.11 10.19L16 0Z"
									fill="#CBCBCB"
								/>
							</svg>
							<h2 className="font-syne font-bold text-2xl sm:text-3xl lg:text-[40px] text-white">
								Works
							</h2>
						</div>
						<span className="font-syne font-medium text-sm sm:text-base lg:text-[18px] text-white underline cursor-pointer">
							view all
						</span>
					</div>
					{/* Work Cards */}
					<div className="flex flex-col gap-4 sm:gap-6 lg:gap-8 w-full">
						{projectData.map((project, index) => (
							<div
								key={index}
								className="bg-[rgba(203,203,203,0.48)] rounded-[20px] sm:rounded-[30px] lg:rounded-[40px] w-full flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-8 items-center lg:items-end justify-center p-4 sm:p-6 lg:p-8"
							>
								<div
									className="bg-center bg-cover bg-no-repeat h-[200px] sm:h-[300px] lg:h-[429px] rounded-2xl sm:rounded-3xl w-full lg:w-[572px] flex-shrink-0"
									style={{
										backgroundImage: `url(${project.image})`,
									}}
								/>
								<div className="flex flex-col justify-between h-full flex-1">
									<div className="flex flex-col gap-3 sm:gap-4">
										<span className="font-syne font-semibold text-2xl sm:text-3xl lg:text-[40px] text-white">
											{project.title}
										</span>
										<span className="font-poppins text-white text-sm sm:text-base lg:text-[18px]">
											{project.description}
										</span>
										<div className="flex flex-wrap gap-2">
											{project.tags.map((tag, i) => (
												<span
													key={i}
													className="border border-white rounded-full px-4 sm:px-6 py-1.5 sm:py-2 text-white uppercase font-syne font-semibold text-[10px] sm:text-[12px]"
												>
													{tag}
												</span>
											))}
										</div>
									</div>
									<div className="mt-4 sm:mt-6 lg:mt-8 flex">
										<button className="bg-white rounded-full px-6 sm:px-8 py-3 sm:py-4 text-[#010208] font-syne font-semibold text-xs sm:text-sm lg:text-[14px]">
											View Case Study
										</button>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}