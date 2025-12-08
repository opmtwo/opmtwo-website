// app/components/CaseStudiesSection.tsx
import React from 'react';
import { Star } from 'lucide-react';

type CaseStudy = {
	title: string;
	tagline: string;
	details: string;
	tech: string;
};

const caseStudies: CaseStudy[] = [
	{
		title: 'SaaS',
		tagline: 'AWS Cost Optimization & Serverless Migration',
		details: 'Cut AWS bill by 70%, removed ECS bottlenecks, migrated to Lambda + DynamoDB, and improved performance by 3×.',
		tech: 'Lambda, DynamoDB, API Gateway',
	},
	{
		title: 'HealthTech',
		tagline: 'AI Document Pipeline for Medical Reports',
		details: 'Built an AI-based system that understands blood reports and automates data extraction and analysis.',
		// AI That Understands Blood Reports: My Case Study on Vision-Powered Health Automation
		tech: 'Lambda, DynamoDB, API Gateway, Bedrock',
	},
	{
		title: 'FinTech',
		tagline: 'AI Support Chatbot',
		details: 'Built AWS-Powered AI Support for client support. Achieved 50–60% reduction in repetitive tickets.',
		tech: 'Lambda, DynamoDB, API Gateway, ChatGPT, Bedrock',
	},
	{
		title: 'High-Traffic',
		tagline: 'Serverless Core Backend for Scale',
		details: 'Rebuilt core backend into a fully serverless stack. Zero scaling issues, with 80% Lower Streaming Costs.',
		tech: 'Lambda, DynamoDB, API Gateway, Bunny Stream',
	},
];

export const CaseStudiesSection: React.FC = () => {
	return (
		<section id="case-studies" className="relative flex flex-col items-center justify-center  px-4 sm:px-6 lg:px-8">
			<div className="mx-auto max-w-6xl">
				{/* Background gradient glow (subtle in light, stronger in dark) */}
				<div className="pointer-events-none absolute inset-0 -z-10 opacity-70">
					<div className="absolute inset-0 bg-gradient-to-tr from-sky-500/5 via-purple-500/5 to-emerald-500/5 blur-3xl dark:from-sky-500/10 dark:via-purple-500/10 dark:to-emerald-500/10" />
				</div>

				{/* <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
				<div>
					<p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-500 dark:text-sky-400">
						Mini Case Studies
					</p>
					<h2 className="mt-2 bg-gradient-to-r from-sky-500 via-purple-500 to-emerald-500 bg-clip-text text-2xl font-semibold text-transparent sm:text-3xl">
						Quick Social Proof from Real Projects
					</h2>
				</div>

				<p className="max-w-md text-sm text-slate-600 dark:text-slate-400">
					Snapshots from recent client work across SaaS, FinTech, agencies, and high-traffic apps —
					all focused on serverless, AI, and AWS cost reduction.
				</p>
			</div> */}

				{/* Header */}
				<div className="mb-10 text-center">
					<h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
						{/* Mini:&nbsp; */}
						<span className="bg-linear-to-r from-sky-400 via-emerald-400 to-violet-400 bg-clip-text text-transparent">Case Studies&nbsp;</span>
						From Recent Projects
					</h2>
					<p className="mt-3 max-w-2xl mx-auto text-base text-slate-700 dark:text-slate-300">
						Snapshots from recent client work across SaaS, FinTech, agencies, and high-traffic apps — all focused on serverless, AI, and AWS cost
						reduction.
					</p>
				</div>

				<div className="mt-8 grid gap-6 md:grid-cols-2">
					{caseStudies.map((item, index) => (
						<div key={index} className="group relative rounded-2xl bg-linear-to-br from-sky-500/15 via-slate-100/80 to-emerald-500/15  border">
							<div className="flex h-full flex-col justify-between rounded-2xl bg-white/90 p-5 backdrop-blur sm:p-6 dark:bg-slate-950/90">
								<div className="flex items-start gap-3">
									<div className="mt-1 flex h-9 w-9 items-center justify-center rounded-full bg-linear-to-br from-sky-500 via-purple-500 to-emerald-500 shadow-lg shadow-sky-500/30">
										<Star className="h-4 w-4 text-white" />
									</div>
									<div>
										<h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100">{item.title}</h3>
										<p className="mt-1 text-xs font-medium text-sky-600 dark:text-sky-300/90">{item.tagline}</p>
									</div>
								</div>

								<p className="mt-4 text-sm leading-relaxed text-slate-700 dark:text-slate-300">{item.details}</p>

								<div className="mt-4 h-px w-full bg-gradient-to-r from-transparent via-sky-500/40 to-transparent opacity-70 transition-all group-hover:via-emerald-400/70 group-hover:opacity-100" />

								<p className="mt-3 text-[11px] uppercase tracking-[0.18em] text-slate-500 dark:text-slate-500/80">
									{/* Result-Driven • Serverless • AI-Powered */}
									{/* Result-Driven • Serverless */}
									{item.tech}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default CaseStudiesSection;
