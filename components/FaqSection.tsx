// app/components/FaqSection.tsx
import React from 'react';

const faqs = [
	{
		question: 'What kind of projects do you usually help with as an AWS and AI specialist?',
		answer: 'I design and implement AWS serverless backends, AI-powered web apps and APIs, automation workflows, and modernize legacy systems into scalable, event-driven architectures.',
	},
	{
		question: 'Can you help reduce our AWS bill with a system/architecture redesign?',
		answer: 'Yes. I typically run a cost audit, remove waste, right-size resources, and redesign critical workloads using Lambda, DynamoDB, and other serverless services to cut 40–70% of backend costs.',
	},
	{
		question: 'Can you integrate ChatGPT/Bedrock into our existing systems and workflows?',
		answer: 'Absolutely. I build AI workflows like ticket reduction, document parsing, internal FAQ bots, and help centers using providers such as OpenAI, Bedrock, and Llama 3.',
	},
	{
		question: 'Do you only work with startups, or do you also support larger companies?',
		answer: 'I work with startups, SaaS teams, agencies, and enterprises. The engagement style changes based on your size, but the goal is always the same: fast, lean, production-ready systems.',
	},
	{
		question: 'How does a typical engagement start when a new team reaches out for help?',
		answer: 'We start with a short call to understand your stack and goals. Then I propose a focused plan—often a 1–2 week pilot to prove value before scaling to a larger roadmap.',
	},
	{
		question: 'Do you offer ongoing support after the initial project is complete?',
		answer: 'Yes. I can stay on as an on-demand AWS/AI architect to review designs, ship new features, and keep costs under control via a flexible retainer or part-time engagement.',
	},
];

export const FaqSection: React.FC = () => {
	return (
		<section id="faq" className="relative flex flex-col items-center justify-center pb-16">
			<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
				{/* Header */}
				<div className="mb-10">
					<h2 className="bg-linear-to-r from-indigo-500 via-sky-500 to-emerald-500 bg-clip-text text-3xl font-semibold tracking-tight text-transparent sm:text-4xl dark:from-indigo-400 dark:via-sky-400 dark:to-emerald-400">
						<span className="bg-linear-to-r from-sky-400 via-emerald-400 to-violet-400 bg-clip-text text-transparent">
							{/* The Modern AI & Cloud Tech Stack */}
							Frequently Asked Questions
						</span>
					</h2>
					<p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base dark:text-slate-300">
						Here are the most common questions teams ask before working with me on AWS, serverless, and AI automation projects.
					</p>
				</div>

				{/* FAQ grid */}
				<div className="grid gap-x-12 gap-y-10 md:grid-cols-3">
					{faqs.map((item) => (
						<div key={item.question} className="space-y-2">
							<h3 className="text-lg text-slate-900 dark:text-slate-50">{item.question}</h3>
							<p className="text-sm leading-relaxed text-slate-500 sm:text-[0.95rem] dark:text-slate-400">{item.answer}</p>
						</div>
					))}
				</div>

				{/* Bottom CTA card with gradient border */}
				<div className="mt-14 rounded-3xl p-px border-2">
					<div className="flex flex-col items-start justify-between gap-4 rounded-[1.45rem] bg-white/95 px-6 py-6 backdrop-blur-sm sm:px-8 sm:py-7 md:flex-row md:items-center dark:bg-slate-900/95">
						<div>
							<h3 className="text-base font-semibold text-slate-900 sm:text-lg dark:text-slate-50">Still have questions?</h3>
							<p className="mt-1 text-sm text-slate-600 sm:text-[0.95rem] dark:text-slate-300">
								Send a quick note with your current stack and challenges. I’ll reply with a short, actionable plan and possible next steps.
							</p>
						</div>

						{/* <button
							type="button"
							className="inline-flex items-center gap-2 rounded-full bg-linear-to-r from-indigo-500 via-sky-500 to-emerald-500 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-indigo-500/30 transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-indigo-500 dark:focus-visible:ring-offset-slate-900"
						>
							Contact Me
							<span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/20 dark:bg-slate-800/40">
								<svg
									viewBox="0 0 20 20"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									className="h-3.5 w-3.5 text-indigo-600 dark:text-indigo-300"
								>
									<path
										d="M5 10h8m0 0L9.5 6.5M13 10 9.5 13.5"
										stroke="currentColor"
										strokeWidth="1.6"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</svg>
							</span>
						</button> */}

						<a
							href={`mailto:connect@opmtwo.com?subject=Serverless%20%2B%20AI%20Consultation`}
							target="_blank"
							rel="noreferrer"
							className="inline-flex items-center gap-2 rounded-full border-2 border-black dark:border-white px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-[#1DBF73] hover:text-white hover:border-[#1DBF73]  dark:text-slate-100 dark:hover:bg-[#1DBF73] dark:hover:text-white dark:hover:border-[#1DBF73]"
						>
							{/* <MailIcon className="h-4 w-4" />
													{fiverrLabel} */}
							Contact Me
							<span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/20 dark:bg-slate-800/40">
								<svg
									viewBox="0 0 20 20"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									className="h-3.5 w-3.5 text-indigo-600 dark:text-indigo-300"
								>
									<path
										d="M5 10h8m0 0L9.5 6.5M13 10 9.5 13.5"
										stroke="currentColor"
										strokeWidth="1.6"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</svg>
							</span>
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default FaqSection;
