// app/components/FaqSection.tsx
import React from 'react';

import Text from './Text';
import Title from './Title';

const faqs = [
	{
		question: 'What kind of projects do you usually help with as an AWS and AI specialist?',
		answer: 'I design and implement AWS serverless backends, AI-powered web apps and APIs, automation workflows, and modernize legacy systems into scalable, event-driven architectures.',
	},
	{
		question: 'Can you help reduce our AWS bill with a system/architecture redesign?',
		answer: 'Yes. I typically run a cost audit, remove waste, resize resources, and redesign critical workloads using Lambda, DynamoDB, and other serverless services to cut 40–70% of backend costs.',
	},
	{
		question: 'Can you integrate LLM based AI into our existing systems and workflows?',
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
				{/* <div className="mb-10">
					<h2 className="bg-linear-to-r from-indigo-500 via-sky-500 to-emerald-500 bg-clip-text text-3xl font-semibold tracking-tight text-transparent sm:text-4xl dark:from-indigo-400 dark:via-sky-400 dark:to-emerald-400">
						<span className="bg-linear-to-r from-sky-400 via-emerald-400 to-violet-400 bg-clip-text text-transparent">
							Frequently Asked Questions
						</span>
					</h2>
					<p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base dark:text-slate-300">
						Here are the most common questions teams ask before working with me on AWS, serverless, and AI automation projects.
					</p>
				</div> */}

				{/* Section heading */}
				<div className="space-y-3 mb-6">
					<p className="inline-flex items-center rounded-full border border-slate-200/70 bg-white/70 px-3 py-1 text-xs font-medium tracking-wide text-slate-700 dark:border-slate-700/80 dark:bg-slate-900/80 dark:text-slate-200">
						<span className="mr-2 inline-block h-2 w-2 rounded-full bg-linear-to-r from-emerald-400 to-sky-500" />
						FAQ
					</p>
					<Title>
						Frequently&nbsp;
						<span className="bg-linear-to-r from-emerald-400 via-sky-400 to-sky-500 bg-clip-text text-transparent">
							{/* From “everything is on fire” */}
							Asked Questions
						</span>
					</Title>
					<p className="text-sm text-slate-600 sm:text-base dark:text-slate-400">
						Here are the most common questions teams ask before working with me on AWS, serverless, and AI automation projects.
					</p>
				</div>

				{/* FAQ grid */}
				{/* <div className="grid gap-x-12 gap-y-10 md:grid-cols-3">
					{faqs.map((item) => (
						<div key={item.question} className="space-y-2">
							<h3 className="text-lg text-slate-900 dark:text-slate-50">{item.question}</h3>
							<p className="text-sm leading-relaxed text-slate-500 sm:text-[0.95rem] dark:text-slate-400">{item.answer}</p>
						</div>
					))}
				</div> */}

				<div className="mt-8 grid gap-6 md:grid-cols-2">
					{faqs.map((item) => (
						// <div key={item.question} className="group rounded-2xl border-2 border-black/10 dark:border-white/10 p-6">

						<div
							key={item.question}
							className="
									relative rounded-3xl p-[2px] 
									bg-linear-to-br from-sky-500/40 via-sky-300/40 to-sky-500/40
									hover:from-sky-400 hover:via-sky-200 hover:to-sky-500 
									transition-all duration-300
								"
						>
							<article
								className="
										h-full rounded-3xl bg-background dark:bg-(--background-dark) p-6 lg:p-8
										backdrop-blur-sm
										hover:shadow-[0_0_28px_rgba(0,0,255,0.14)]
										transition-all duration-300
										space-y-2
									"
							>
								{/* <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-50">{item.question}</h3> */}
								{/* <h4 className="text-md font-semibold">{item.question}</h4> */}
								{/* <h4 className="text-lg font-semibold bg-linear-to-r from-sky-600 to-sky-400 bg-clip-text text-transparent">
									<span className="leading-relaxed">{item.question}</span>
								</h4> */}
								{/* <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{item.answer}</p> */}
								<h4 className="font-medium">{item.question}</h4>
								<Text>{item.answer}</Text>
							</article>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default FaqSection;
