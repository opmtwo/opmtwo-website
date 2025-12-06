// app/components/ProblemSolutionSection.tsx
'use client';

import React from 'react';

import HappyIcon from '@/icons/HappyIcon';
import SadIcon from '@/icons/SadIcon';

export const ProblemSolutionSection: React.FC = () => {
	return (
		<section className="relative mx-auto flex max-w-6xl flex-col gap-10 px-4 sm:px-6 lg:px-8">
			{/* Section heading */}
			<div className="space-y-3">
				<p className="inline-flex items-center rounded-full border border-slate-200/70 bg-white/70 px-3 py-1 text-xs font-medium tracking-wide text-slate-700 dark:border-slate-700/80 dark:bg-slate-900/80 dark:text-slate-200">
					<span className="mr-2 inline-block h-2 w-2 rounded-full bg-linear-to-r from-emerald-400 to-sky-500" />
					Serverless &amp; AI, without the chaos
				</p>
				<h2 className="text-balance text-2xl font-semibold text-slate-900 sm:text-3xl lg:text-4xl dark:text-slate-50">
					<span className="bg-linear-to-r from-emerald-400 via-sky-400 to-purple-500 bg-clip-text text-transparent">
						From “everything is on fire”
					</span>{' '}
					to lean, scalable AWS &amp; AI systems.
				</h2>
				<p className="text-sm text-slate-600 sm:text-base dark:text-slate-400">
					I help teams escape slow releases, noisy AWS bills, and messy AI experiments — and move into scalable, cost-efficient, serverless
					architectures.
				</p>
			</div>

			{/* Problem & Solution cards */}
			<div className="grid items-stretch gap-8 lg:grid-cols-2">
				{/* Problem Card */}
				<div className="group relative h-full">
					<div className="relative flex h-full flex-col rounded-3xl p-px border-2 border-red-500 dark:from-slate-900/95 dark:via-slate-950/95 dark:to-slate-900/95">
						<div className="flex h-full flex-col gap-5 rounded-[1.45rem] bg-white/95 p-6 text-slate-900 sm:p-7 dark:bg-slate-950/95 dark:text-slate-100">
							{/* Header row — unified style */}
							<div className="inline-flex items-center justify-between gap-3">
								<div className="inline-flex items-center gap-2">
									<span className="inline-flex h-7 w-7 items-center justify-center rounded-[1.45rem] text-sm text-white">
										<SadIcon />
									</span>
									<span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-rose-600 dark:text-rose-200">Problem</span>
								</div>
								<span className="rounded-[1.45rem] border-2 border-red-500 bg-transparent px-3 py-1 text-[11px] font-medium text-rose-700 dark:text-rose-100">
									Speak to the Pain
								</span>
							</div>

							<div className="space-y-3">
								<h3 className="text-lg font-semibold leading-snug text-slate-900 sm:text-xl dark:text-slate-50">
									Struggling with slow development, high AWS bills, or legacy infrastructure?
								</h3>
								<p className="text-sm text-slate-600 sm:text-[15px] dark:text-slate-400">You&apos;re not alone. Most teams are held back by:</p>
							</div>

							<ul className="space-y-2.5- text-sm text-slate-800 dark:text-slate-100">
								<li className="flex gap-3">
									<span className="mt-0.5 text-base">❌</span>
									<span>Rising AWS costs with no visibility</span>
								</li>
								<li className="flex gap-3">
									<span className="mt-0.5 text-base">❌</span>
									<span>Slow deployments and fragile backends</span>
								</li>
								<li className="flex gap-3">
									<span className="mt-0.5 text-base">❌</span>
									<span>Outdated architectures that can&apos;t scale</span>
								</li>
								<li className="flex gap-3">
									<span className="mt-0.5 text-base">❌</span>
									<span>Lack of in-house AI expertise</span>
								</li>
								<li className="flex gap-3">
									<span className="mt-0.5 text-base">❌</span>
									<span>Difficulty integrating ChatGPT, Bedrock, or Llama</span>
								</li>
								<li className="flex gap-3">
									<span className="mt-0.5 text-base">❌</span>
									<span>Support teams overwhelmed by repetitive tickets</span>
								</li>
							</ul>

							<div className="mt-3 rounded-2xl border-2 border-red-500 bg-transparent p-4 text-sm text-rose-900 dark:border-rose-500 dark:text-rose-50">
								<p className="font-medium">Talent search slow? Senior AWS/AI experts cost $200K+ and take months to hire.</p>
							</div>
						</div>
					</div>
				</div>

				{/* Solution Card */}
				<div className="group relative h-full">
					<div className="relative flex h-full flex-col rounded-3xl p-px border-2 border-emerald-400 dark:from-emerald-400/80 dark:via-sky-500/80 dark:to-purple-500/80 dark:border-emerald-400">
						<div className="flex h-full flex-col gap-5 rounded-[1.45rem] bg-white/95 p-6 text-slate-900 sm:p-7 dark:bg-slate-950/95 dark:text-slate-100">
							{/* Header row — EXACT same structure & font as Problem */}
							<div className="inline-flex items-center justify-between gap-3">
								<div className="inline-flex items-center gap-2">
									<span className="inline-flex h-7 w-7 items-center justify-center rounded-[1.45rem] text-sm text-white">
										<HappyIcon />
									</span>
									<span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-emerald-700 dark:text-emerald-200">
										Solution
									</span>
								</div>
								<span className="rounded-[1.45rem] border-2 border-emerald-400 bg-transparent px-3 py-1 text-[11px] font-medium text-emerald-700 dark:border-emerald-400 dark:text-emerald-100">
									What You Get With Me
								</span>
							</div>

							<div className="space-y-3">
								<h3 className="text-lg font-semibold leading-snug text-slate-900 sm:text-xl dark:text-slate-50">
									I help build lean, scalable, AI-powered systems with AWS Serverless and modern AI models.
								</h3>
								<p className="text-sm font-semibold text-emerald-700 sm:text-[15px] dark:text-emerald-100">You get:</p>
							</div>

							<ul className="space-y-2.5- text-sm text-slate-900 dark:text-slate-50">
								<li className="flex gap-3">
									<span className="mt-0.5 text-base">✔</span>
									<span>
										{/* Ultra-scalable backend with Lambda, API Gateway, DynamoDB, SQS, EventBridge */}
										Ultra-scalable serverless backends
									</span>
								</li>
								<li className="flex gap-3">
									<span className="mt-0.5 text-base">✔</span>
									<span>40–70% reduction in AWS costs with focused optimization</span>
								</li>
								<li className="flex gap-3">
									<span className="mt-0.5 text-base">✔</span>
									<span>
										{/* AI automation workflows powered by ChatGPT / Llama 3 / Bedrock / Gemini */}
										AI automation workflows powered by ChatGPT, Bedrock or Llama
									</span>
								</li>
								<li className="flex gap-3">
									<span className="mt-0.5 text-base">✔</span>
									<span>Reliable infrastructure with near-zero DevOps overhead</span>
								</li>
								<li className="flex gap-3">
									<span className="mt-0.5 text-base">✔</span>
									<span>Fast delivery — days, not months</span>
								</li>
								<li className="flex gap-3">
									<span className="mt-0.5 text-base">✔</span>
									<span>Architecture designed to be extended by your internal team</span>
								</li>
								{/* <li className="flex gap-3">
									<span className="mt-0.5 text-base">✔</span>
									<span>Perfect for CTOs, founders, agencies &amp; SaaS companies</span>
								</li> */}
							</ul>

							{/* <div className="mt-4 flex flex-wrap gap-2 text-[11px] font-medium text-slate-800 dark:text-slate-200">
								<span className="rounded-full bg-emerald-50 px-3 py-1 ring-1 ring-emerald-200 dark:bg-slate-900/70 dark:ring-emerald-400/50">
									⚡ AWS Serverless
								</span>
								<span className="rounded-full bg-sky-50 px-3 py-1 ring-1 ring-sky-200 dark:bg-slate-900/70 dark:ring-sky-400/50">
									🤖 AI Workflows
								</span>
								<span className="rounded-full bg-purple-50 px-3 py-1 ring-1 ring-purple-200 dark:bg-slate-900/70 dark:ring-purple-400/50">
									💸 Cost Optimization
								</span>
							</div> */}

							<div className="mt-3 rounded-2xl border-2 border-emerald-400 bg-transparent p-4 text-sm text-green-900 dark:border-emerald-400 dark:text-green-50">
								<p className="font-medium">Skip the talent hunt and start scaling today with an expert who delivers immediately.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ProblemSolutionSection;
