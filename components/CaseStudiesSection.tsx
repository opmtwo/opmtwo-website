import { Star } from 'lucide-react';
// app/components/CaseStudiesSection.tsx
import React from 'react';

import Text from './Text';
import Title from './Title';

type CaseStudy = {
	title: string;
	tagline: string;
	details: string;
	tech: string;
};

const caseStudies: CaseStudy[] = [
	{
		title: 'FinTech',
		tagline: 'Real-Time Payment Card Processing Engine',
		details: 'Built a high-speed processing layer for real-time card transactions with instant validation, scoring, and routing across multiple providers.',
		tech: 'Lambda, DynamoDB, API Gateway, Kinesis, Elasticsearch',
	},
	{
		title: 'IoT',
		tagline: 'Real-Time Fuel Pump Data Pipeline',
		details: 'Streams real-time petrol pump telemetry—dispenser flow, tank levels, and sales pulses—into a serverless pipeline.',
		tech: 'Lambda, DynamoDB, Kinesis, IoT Core',
	},
	// {
	// 	title: 'HealthTech',
	// 	tagline: 'AI Document Pipeline for Medical Reports',
	// 	details: 'Built an AI-based system that understands blood reports and automates data extraction and analysis.',
	// 	// AI That Understands Blood Reports: My Case Study on Vision-Powered Health Automation
	// 	tech: 'Lambda, DynamoDB, API Gateway, Bedrock',
	// },
	{
		title: 'FinTech',
		tagline: 'AI Support Chatbot',
		details: 'Built AWS-Powered AI Support for client support. Achieved 50–60% reduction in repetitive tickets.',
		tech: 'Lambda, DynamoDB, API Gateway, ChatGPT, Bedrock',
	},
	{
		title: 'SalesTech',
		tagline: 'AI-Driven Inbox Warm-Up Automation',
		details: 'Built an AI engine that simulates natural conversations, boosts sender reputation, and improves email deliverability across domains.',
		tech: 'Lambda, DynamoDB, API Gateway, Bedrock, SES',
	},
	{
		title: 'High-Traffic',
		tagline: 'Serverless Core Backend for Scale',
		details: 'Rebuilt core backend into a fully serverless stack. Zero scaling issues, with 80% Lower Streaming Costs.',
		tech: 'Lambda, DynamoDB, API Gateway, Bunny Stream',
	},
	{
		title: 'SaaS',
		tagline: 'AWS Cost Optimization & Serverless Migration',
		details: 'Cut AWS bill by 70%, removed ECS bottlenecks, migrated to Lambda + DynamoDB, and improved performance by 3×.',
		tech: 'Lambda, DynamoDB, API Gateway',
	},
	// {
	// 	title: 'PropTech',
	// 	tagline: 'AI Social Media Post Creator for Real Estate Data',
	// 	details:
	// 		'Built AI that converts property data into social posts with pricing insights, neighborhood highlights, and ready-to-publish media assets.',
	// 	tech: 'Lambda, DynamoDB, Bedrock, AI Image Generation',
	// },
];

export const CaseStudiesSection: React.FC = () => {
	return (
		<section id="case-studies" className="relative max-w-6xl mx-auto flex flex-col gap-10 px-4 sm:px-6 lg:px-8">
			<div className="mx-auto max-w-6xl">
				{/* Section heading */}
				<div className="space-y-3">
					<p className="inline-flex items-center rounded-full border border-slate-200/70 bg-white/70 px-3 py-1 text-xs font-medium tracking-wide text-slate-700 dark:border-slate-700/80 dark:bg-slate-900/80 dark:text-slate-200">
						<span className="mr-2 inline-block h-2 w-2 rounded-full bg-linear-to-r from-emerald-400 to-sky-500" />
						Case Studies from real projects
					</p>
					<Title>
						<span className="bg-linear-to-r from-emerald-400 via-sky-400 to-purple-500 bg-clip-text text-transparent">
							{/* From “everything is on fire” */}
							Case Studies&nbsp;
						</span>{' '}
						From Recent Projects
					</Title>
					<p className="text-sm text-slate-600 sm:text-base dark:text-slate-400">
						Snapshots from recent client work across multiple industries — all focused on serverless, AI, and AWS cost reduction.
					</p>
				</div>

				<div className="mt-8 grid gap-6 md:grid-cols-2">
					{caseStudies.map((item, index) => (
						<div
							key={index}
							className="
									relative rounded-3xl p-[2px] 
									bg-linear-to-br from-indigo-500/40 via-indigo-300/40 to-indigo-500/40
									hover:from-indigo-400 hover:via-indigo-200 hover:to-indigo-500 
									transition-all duration-300
								"
						>
							<article
								className="
										h-full rounded-3xl bg-background dark:bg-(--background-dark) p-6 lg:p-8
										backdrop-blur-sm
										hover:shadow-[0_0_28px_rgba(255,0,0,0.14)]
										transition-all duration-300
									"
							>
								<div className="flex h-full flex-col justify-between space-y-2">
									<div className="flex items-start gap-3">
										<div className="mt-1 flex h-9 w-9 items-center justify-center rounded-full bg-linear-to-br from-sky-500 via-purple-500 to-emerald-500">
											<Star className="h-4 w-4 text-white" />
										</div>
										<div className="space-y-2">
											<h4 className="font-medium">{item.title}</h4>
											<p className="mt-1 text-xs font-medium">{item.tagline}</p>
										</div>
									</div>

									{/* <p className="mt-4 text-sm leading-relaxed text-slate-700 dark:text-slate-300">{item.details}</p> */}
									<Text>{item.details}</Text>

									<div className="mt-4 h-px w-full bg-gradient-to-r from-transparent via-sky-500/40 to-transparent opacity-70 transition-all group-hover:via-emerald-400/70 group-hover:opacity-100" />

									<p className="mt-3 text-[11px] uppercase tracking-[0.18em] text-slate-500 dark:text-slate-500/80">{item.tech}</p>
								</div>
							</article>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default CaseStudiesSection;
