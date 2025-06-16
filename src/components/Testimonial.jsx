import React, { useState } from 'react';
import floydMiles from '../assets/Floyd-Miles.png';
import quote from '../assets/quote.png';

const testimonials = [
	{
		image: floydMiles,
		name: 'Floyd Miles',
		company: 'eBay',
		quote: "Synergy's resume builder is fantastic. It helped me create a professional resume that stood out to employers. Synergy's resume builder is fantastic. It helped me create a professional resume that stood out to employers.",
	},
	{
		image: floydMiles,
		name: 'Sarah Johnson',
		company: 'Google',
		quote: "Working with this team has been an incredible experience. Their attention to detail and creative solutions have transformed our user interface completely.",
	},
	{
		image: floydMiles,
		name: 'Michael Chen',
		company: 'Microsoft',
		quote: "The design process was smooth and professional. They understood our requirements perfectly and delivered beyond our expectations.",
	},
];

export default function Testimonial() {
	const [currentIndex, setCurrentIndex] = useState(0);

	const handlePrevious = () => {
		setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
	};

	const handleNext = () => {
		setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
	};

	return (
		<section className="w-full flex justify-center bg-[#010208] overflow-hidden">
			<div className="max-w-[1240px] w-full px-4 sm:px-8 lg:px-[100px] py-8 sm:py-12 lg:py-16 flex flex-col items-center gap-6 sm:gap-8">
				<div className="flex items-center gap-2 w-full">
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
						What they say
					</h2>
				</div>
				<div className="w-full relative">
					<div
						className="flex transition-transform duration-500 ease-in-out"
						style={{ transform: `translateX(-${currentIndex * 100}%)` }}
					>
						{testimonials.map((testimonial, index) => (
							<div
								key={index}
								className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start w-full flex-shrink-0"
								style={{ transform: `translateX(${index * 100}%)` }}
							>
								<div className="w-full lg:w-[498px] flex flex-col gap-4">
									<div className="flex flex-row gap-4 items-center">
										<img
											src={testimonial.image}
											alt={testimonial.name}
											className="rounded-full w-12 h-12 sm:w-16 sm:h-16 object-cover"
										/>
										<div className="flex flex-col gap-1">
											<span className="font-syne font-semibold text-lg sm:text-xl lg:text-[24px] text-white">
												{testimonial.name}
											</span>
											<span className="font-poppins text-sm sm:text-base lg:text-[18px] text-[#cbcbcb]">
												{testimonial.company}
											</span>
										</div>
									</div>
								</div>
								<div className="w-full lg:w-[710px] flex flex-col gap-4 items-start relative mt-8 lg:mt-0">
									<img
										src={quote}
										alt="Quote"
										className="w-12 h-12 sm:w-16 sm:h-16 absolute -left-4 sm:-left-8 lg:-left-20 top-0 opacity-50"
									/>
									<span className="font-syne font-medium text-xl sm:text-2xl lg:text-[32px] text-white relative z-10">
										{testimonial.quote}
									</span>
								</div>
							</div>
						))}
					</div>
				</div>
				<div className="flex flex-row gap-4 items-end justify-end w-full">
					<button
						onClick={handlePrevious}
						className="w-8 h-8 sm:w-10 sm:h-10 bg-[#CBCBCB] rounded-full flex items-center justify-center hover:bg-white transition-colors"
					>
						<svg width="20" height="20" sm:width="24" sm:height="24" fill="none" viewBox="0 0 24 24">
							<path d="M16 12H8M8 12L12 16M8 12L12 8" stroke="#010208" strokeWidth="1.5"/>
						</svg>
					</button>
					<button
						onClick={handleNext}
						className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center hover:bg-[#CBCBCB] transition-colors"
					>
						<svg width="20" height="20" sm:width="24" sm:height="24" fill="none" viewBox="0 0 24 24">
							<path d="M8 12H16M16 12L12 8M16 12L12 16" stroke="#010208" strokeWidth="1.5"/>
						</svg>
					</button>
				</div>
			</div>
		</section>
	);
}