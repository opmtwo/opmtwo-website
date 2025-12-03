// app/components/CaseStudiesSection.tsx
import React from 'react';
import { Star } from 'lucide-react';

type CaseStudy = {
	title: string;
	tagline: string;
	details: string;
};

const caseStudies: CaseStudy[] = [
	{
		title: '⭐ SaaS Product (US)',
		tagline: 'AWS Cost Optimization & Serverless Migration',
		details:
			'Cut AWS bill by 72%, removed ECS bottlenecks, migrated to Lambda + DynamoDB, and improved performance by 3×.',
	},
	{
		title: '⭐ FinTech Team (EU)',
		tagline: 'AI Document Pipeline for Ops Teams',
		details:
			'Built an AI-based document extraction pipeline. Reduced manual review time from 8 minutes → 12 seconds.',
	},
	{
		title: '⭐ Marketing Agency',
		tagline: 'White-Label AI Support Chatbot',
		details:
			'Built a white-label AI chatbot for client support. Achieved 50–60% reduction in repetitive tickets.',
	},
	{
		title: '⭐ High-Traffic App (1M+ users)',
		tagline: 'Serverless Core Backend for Scale',
		details:
			'Rebuilt core backend into a fully serverless stack. Zero scaling issues, with 95% lower ops overhead.',
	},
];

export const CaseStudiesSection: React.FC = () => {
	return (
		<section className="relative mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
			{/* Background gradient glow (subtle in light, stronger in dark) */}
			<div className="pointer-events-none absolute inset-0 -z-10 opacity-70">
				<div className="absolute inset-0 bg-gradient-to-tr from-sky-500/5 via-purple-500/5 to-emerald-500/5 blur-3xl dark:from-sky-500/10 dark:via-purple-500/10 dark:to-emerald-500/10" />
			</div>

			<div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
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
			</div>

			<div className="mt-8 grid gap-6 md:grid-cols-2">
				{caseStudies.map((item, index) => (
					<div
						key={index}
						className="group relative rounded-2xl bg-gradient-to-br from-sky-500/15 via-slate-100/80 to-emerald-500/15 p-[1px] shadow-[0_18px_45px_rgba(15,23,42,0.15)] dark:via-slate-800/60 dark:shadow-[0_18px_45px_rgba(15,23,42,0.8)]"
					>
						<div className="flex h-full flex-col justify-between rounded-2xl bg-white/90 p-5 backdrop-blur sm:p-6 dark:bg-slate-950/90">
							<div className="flex items-start gap-3">
								<div className="mt-1 flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-sky-500 via-purple-500 to-emerald-500 shadow-lg shadow-sky-500/30">
									<Star className="h-4 w-4 text-white" />
								</div>
								<div>
									<h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100">
										{item.title}
									</h3>
									<p className="mt-1 text-xs font-medium text-sky-600 dark:text-sky-300/90">
										{item.tagline}
									</p>
								</div>
							</div>

							<p className="mt-4 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
								{item.details}
							</p>

							<div className="mt-4 h-px w-full bg-gradient-to-r from-transparent via-sky-500/40 to-transparent opacity-70 transition-all group-hover:via-emerald-400/70 group-hover:opacity-100" />

							<p className="mt-3 text-[11px] uppercase tracking-[0.18em] text-slate-500 dark:text-slate-500/80">
								Result-Driven • Serverless • AI-Powered
							</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default CaseStudiesSection;
