'use client';

import React, { useState } from 'react';

type Service = {
	id: number;
	label: string;
	title: string;
	description: string;
	gradient: string; // 🔥 NEW — gradient background
	textColor?: string;
};

const services: Service[] = [
	{
		id: 1,
		label: '01',
		title: 'Serverless Backend Transformation Kit',
		description:
			'Modernize your backend with AWS Lambda, API Gateway, DynamoDB, and event-driven patterns for fast delivery and ultra-low costs.',
		gradient: 'bg-gradient-to-br from-[#0EA5E9] via-[#22D3EE] to-[#67E8F9]', // blue/cyan
	},
	{
		id: 2,
		label: '02',
		title: 'AI Support Suite (ChatGPT + Llama 3)',
		description:
			'Deploy AI chatbots, suggested replies, support copilot, ticket deflection, and smart automations trained on your data.',
		gradient: 'bg-gradient-to-br from-[#A855F7] via-[#D946EF] to-[#F472B6]', // purple/pink
		textColor: '#ffffff',
	},
	{
		id: 3,
		label: '03',
		title: 'AWS Cost Reduction & Optimization',
		description:
			'Cut your AWS bill by 40–70% using right-sizing, autoscaling, serverless migration, caching layers, and optimized API patterns.',
		gradient: 'bg-gradient-to-br from-[#F59E0B] via-[#F97316] to-[#EF4444]', // yellow → orange → red
		textColor: '#111111',
	},
	{
		id: 4,
		label: '04',
		title: 'AI Workflow Automation',
		description:
			'Automate document parsing, onboarding, FAQ bots, reporting, approvals, and custom business workflows using AI.',
		gradient: 'bg-gradient-to-br from-[#3B82F6] via-[#6366F1] to-[#8B5CF6]', // blue → indigo → violet
		textColor: '#ffffff',
	},
	{
		id: 5,
		label: '05',
		title: 'Serverless SaaS Architecture',
		description:
			'Scalable backend foundations using Lambda, DynamoDB, EventBridge, Step Functions, SQS, Cognito — built for millions of users.',
		gradient: 'bg-gradient-to-br from-[#10B981] via-[#34D399] to-[#6EE7B7]', // green gradients
		textColor: '#052e16',
	},
	{
		id: 6,
		label: '06',
		title: 'E-commerce Integrations + AI',
		description:
			'AI automation for product images, listings, catalog updates, orders, fulfillment, and custom workflow integrations.',
		gradient: 'bg-gradient-to-br from-[#EC4899] via-[#F43F5E] to-[#FB7185]', // pink/red
		textColor: '#ffffff',
	},
	{
		id: 7,
		label: '07',
		title: 'Full AI-Powered Web App Development',
		description:
			'Next.js + TypeScript + AWS-powered apps with serverless APIs, vector search, AI workflows, and production-grade scalability.',
		gradient: 'bg-gradient-to-br from-[#6366F1] via-[#8B5CF6] to-[#D946EF]', // deep purple
		textColor: '#ffffff',
	},
	{
		id: 8,
		label: '08',
		title: 'Content Automation & AI Agents',
		description:
			'Automate 70% of content operations using AI agents for writing, reformatting, scheduling, SEO workflows, and publishing.',
		gradient: 'bg-gradient-to-br from-[#14B8A6] via-[#2DD4BF] to-[#99F6E4]', // teal
		textColor: '#0d1717',
	},
	{
		id: 9,
		label: '09',
		title: 'Digital Solution Development',
		description:
			'Custom built systems, AI pipelines, integrations, backend automations, and complete digital transformation solutions.',
		gradient: 'bg-gradient-to-br from-[#4F46E5] via-[#6366F1] to-[#818CF8]', // blue/purple
		textColor: '#ffffff',
	},
];

export const ServicesSection: React.FC = () => {
	const [activeIndex, setActiveIndex] = useState(0);

	const activeService = services[activeIndex];
	const prevIndex = (activeIndex - 1 + services.length) % services.length;
	const nextIndex = (activeIndex + 1) % services.length;

	return (
		<section className="w-full bg-white">
			<div className="mx-auto flex min-h-[520px] max-w-6xl flex-col md:flex-row">
				{/* LEFT */}
				<div className="flex-1 px-6 py-12 sm:px-10 lg:px-12">
					<p className="mb-6 text-xs font-medium uppercase tracking-[0.2em] text-gray-500">
						Production and Technology
					</p>

					<h2 className="mb-6 text-5xl font-semibold leading-none tracking-tight sm:text-6xl">
						Services
					</h2>

					<p className="mb-10 max-w-sm text-sm leading-relaxed text-gray-600">
						We provide high-performance AWS serverless, AI automation, and full-stack solutions
						designed to scale your business with speed, reliability, and lower cloud costs.
					</p>

					{/* GRID */}
					{/* GRID */}
<div className="grid gap-y-10 gap-x-20 text-sm text-gray-700 sm:grid-cols-2 lg:grid-cols-3">
	{services.map((service, index) => {
		const isActive = index === activeIndex;
		return (
			<button
				key={service.id}
				onClick={() => setActiveIndex(index)}
				className="group flex flex-col items-start text-left transition-all"
			>
				{/* NUMBER */}
				<span
					className={`
						text-[11px] uppercase tracking-[0.25em]
						${isActive ? 'text-gray-900' : 'text-gray-400 group-hover:text-gray-600'}
					`}
				>
					{service.label}
				</span>

				{/* TITLE */}
				<span
					className={`
						mt-3 text-[15px] leading-snug
						${isActive 
							? 'font-semibold text-gray-900' 
							: 'text-gray-500 group-hover:text-gray-800'}
					`}
				>
					{service.title}
				</span>

				{/* ACTIVE INDICATOR (subtle underline) */}
				{isActive && (
					<div className="mt-2 h-[1px] w-8 bg-gray-900 rounded-full" />
				)}
			</button>
		);
	})}
</div>

				</div>

				{/* RIGHT GRADIENT PANEL */}
				<div className={`relative flex min-h-[420px] flex-1 items-stretch ${activeService.gradient}`}>
					<div
						className="flex w-full flex-col justify-between px-8 py-10 sm:px-12 lg:px-16"
						style={{ color: activeService.textColor ?? '#111827' }}
					>
						{/* TITLE + DESC */}
						<div>
							<div className="mb-8 inline-flex h-16 w-16 items-center justify-center rounded-lg border-2 border-current">
								<span className="text-xl font-semibold">{'</>'}</span>
							</div>

							<h3 className="mb-4 text-2xl font-semibold leading-snug">
								{activeService.title}
							</h3>

							<p className="max-w-md text-sm leading-relaxed opacity-90">
								{activeService.description}
							</p>
						</div>

						{/* NAVIGATION */}
						<div className="mt-10 flex items-center justify-between gap-6 text-xs font-medium">
							<button onClick={() => setActiveIndex(prevIndex)} className="group flex items-center gap-3">
								<span className="flex h-9 w-9 items-center justify-center rounded-full border border-current transition-transform group-hover:-translate-x-1">
									<span className="text-base">&larr;</span>
								</span>
								<span className="flex flex-col text-left leading-tight">
									<span className="opacity-70">Previous</span>
									<span>{services[prevIndex].title}</span>
								</span>
							</button>

							<button onClick={() => setActiveIndex(nextIndex)} className="group flex items-center gap-3 text-right">
								<span className="flex flex-col leading-tight">
									<span className="opacity-70">Next</span>
									<span>{services[nextIndex].title}</span>
								</span>
								<span className="flex h-9 w-9 items-center justify-center rounded-full border border-current transition-transform group-hover:translate-x-1">
									<span className="text-base">&rarr;</span>
								</span>
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ServicesSection;