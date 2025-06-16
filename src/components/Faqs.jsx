import React, { useState } from 'react';

const faqData = [
	{
		question: 'What is your design process?',
		answer:
			'My design process typically involves four key phases: research, design, prototype, and test. In the research phase, I gather insights about the user and their needs. In the design phase, I create wireframes and visual designs that meet those needs. In the prototype phase, I create interactive models of the design for testing. In the test phase, I collect feedback from users to refine the design.',
	},
	{
		question: 'What tools and software do you use for UX design?',
		answer:
			'I primarily use industry-standard tools including Figma for UI/UX design and prototyping, Adobe Creative Suite for graphics and illustrations, and various prototyping tools like Principle and Protopie for advanced interactions. I also use research and analytics tools to gather and analyze user data.',
	},
	{
		question: 'How do you measure the success of your UX designs?',
		answer:
			'I measure success through both quantitative and qualitative metrics. This includes user engagement metrics, conversion rates, task completion rates, and user satisfaction scores. I also conduct user interviews and surveys to gather detailed feedback and insights about the user experience.',
	},
];

export default function Faqs() {
	const [openIndex, setOpenIndex] = useState(0);

	return (
		<section className="w-full flex justify-center bg-[#010208]">
			<div className="max-w-[1240px] w-full flex flex-col items-center gap-8">
				<div className="flex items-center gap-2 w-full">
					<svg
						className="w-8 h-8"
						viewBox="0 0 32 32"
						fill="none"
					>
						<path
							d="M16 0L17.89 10.19L25.4 3.06L20.94 12.41L31.22 11.06L22.11 16L31.22 20.94L20.94 19.59L25.4 28.94L17.89 21.81L16 32L14.11 21.81L6.6 28.94L11.06 19.59L0.78 20.94L9.89 16L0.78 11.06L11.06 12.41L6.6 3.06L14.11 10.19L16 0Z"
							fill="#CBCBCB"
						/>
					</svg>
					<h2 className="font-syne font-bold text-2xl sm:text-3xl lg:text-[40px] text-white">
						Frequently asked questions
					</h2>
				</div>
				<div className="flex flex-col gap-8 w-full">
					{faqData.map((faq, index) => (
						<div
							key={index}
							className="flex flex-col gap-4 w-full cursor-pointer"
							onClick={() =>
								setOpenIndex(openIndex === index ? -1 : index)
							}
						>
							<div className="flex justify-between items-center gap-4">
								<span className="font-syne font-medium text-xl sm:text-2xl lg:text-[28px] xl:text-[32px] text-white">
									{faq.question}
								</span>
								<svg
									className={`w-6 h-6 transform transition-transform duration-300 ${
										openIndex === index ? 'rotate-180' : ''
									}`}
									viewBox="0 0 24 24"
									fill="none"
								>
									<path
										d="M6 9L12 15L18 9"
										stroke="#CBCBCB"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</svg>
							</div>
							<div
								className={`overflow-hidden transition-all duration-300 ${
									openIndex === index
										? 'max-h-[500px] opacity-100'
										: 'max-h-0 opacity-0'
								}`}
							>
								<span className="font-poppins text-[18px] text-[#cbcbcb] block">
									{faq.answer}
								</span>
							</div>
							<div className="w-full h-[1px] bg-[#CBCBCB] opacity-20 mt-4"></div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}