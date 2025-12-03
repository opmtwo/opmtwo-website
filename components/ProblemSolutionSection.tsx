// app/components/ProblemSolutionSection.tsx
'use client';

import React from 'react';

export const ProblemSolutionSection: React.FC = () => {
	return (
		<section
			id="problem-solution"
			className="relative mx-auto flex max-w-6xl flex-col gap-10 px-4 py-16 sm:px-6 lg:px-8"
		>
			{/* Soft background glow */}
			<div className="pointer-events-none absolute inset-0 -z-10">
				<div className="absolute -left-10 top-0 h-40 w-40 rounded-full bg-gradient-to-br from-emerald-400/40 via-cyan-400/30 to-purple-500/40 blur-3xl" />
				<div className="absolute bottom-0 right-0 h-52 w-52 rounded-full bg-gradient-to-tr from-sky-500/30 via-violet-500/30 to-fuchsia-500/30 blur-3xl" />
			</div>

			{/* Section heading */}
			<div className="max-w-3xl space-y-3">
				<p className="inline-flex items-center rounded-full border border-slate-200/70 bg-white/70 px-3 py-1 text-xs font-medium tracking-wide text-slate-700 shadow-sm backdrop-blur-sm dark:border-slate-700/80 dark:bg-slate-900/80 dark:text-slate-200">
					<span className="mr-2 inline-block h-2 w-2 rounded-full bg-gradient-to-r from-emerald-400 to-sky-500" />
					Serverless &amp; AI, without the chaos
				</p>
				<h2 className="text-balance text-2xl font-semibold text-slate-900 sm:text-3xl lg:text-4xl dark:text-slate-50">
					<span className="bg-gradient-to-r from-emerald-400 via-sky-400 to-purple-500 bg-clip-text text-transparent">
						From “everything is on fire”
					</span>{' '}
					to lean, scalable AWS &amp; AI systems.
				</h2>
				<p className="text-sm text-slate-600 sm:text-base dark:text-slate-400">
					I help teams escape slow releases, noisy AWS bills, and messy AI experiments — and move into
					scalable, cost-efficient, serverless architectures.
				</p>
			</div>

			{/* Problem & Solution cards */}
			<div className="grid items-stretch gap-8 lg:grid-cols-2">
				{/* Problem Card */}
				<div className="group relative h-full">
					<div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-rose-400/35 via-orange-300/30 to-amber-300/35 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100 dark:from-rose-500/40 dark:via-orange-400/30 dark:to-amber-400/40" />
					<div className="relative flex h-full flex-col rounded-3xl bg-gradient-to-br from-slate-200 via-slate-100 to-slate-50 p-[1px] shadow-xl shadow-black/10 dark:from-slate-900/95 dark:via-slate-950/95 dark:to-slate-900/95">
						<div className="flex h-full flex-col gap-5 rounded-[1.45rem] bg-white/95 p-6 text-slate-900 sm:p-7 dark:bg-slate-950/95 dark:text-slate-100">
							{/* Header row — unified style */}
							<div className="inline-flex items-center justify-between gap-3">
								<div className="inline-flex items-center gap-2">
									<span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-rose-500 to-orange-400 text-sm text-white">
										😣
									</span>
									<span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-rose-600 dark:text-rose-200">
										Problem
									</span>
								</div>
								<span className="rounded-full bg-rose-100 px-3 py-1 text-[11px] font-medium text-rose-700 ring-1 ring-rose-300 dark:bg-rose-500/10 dark:text-rose-100 dark:ring-rose-500/40">
									Speak to the Pain
								</span>
							</div>

							<div className="space-y-3">
								<h3 className="text-lg font-semibold leading-snug text-slate-900 sm:text-xl dark:text-slate-50">
									Struggling with slow development, high AWS bills, or legacy infrastructure?
								</h3>
								<p className="text-sm text-slate-600 sm:text-[15px] dark:text-slate-400">
									You&apos;re not alone. Most teams are held back by:
								</p>
							</div>

							<ul className="space-y-2.5 text-sm text-slate-800 dark:text-slate-100">
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
									<span>Support teams overwhelmed by repetitive tickets</span>
								</li>
								<li className="flex gap-3">
									<span className="mt-0.5 text-base">❌</span>
									<span>Lack of in-house AI expertise</span>
								</li>
								<li className="flex gap-3">
									<span className="mt-0.5 text-base">❌</span>
									<span>Difficulty integrating ChatGPT, Bedrock, or Llama</span>
								</li>
							</ul>

							<div className="mt-3 rounded-2xl border border-rose-200 bg-rose-50 p-4 text-sm text-rose-900 shadow-inner dark:border-rose-500/40 dark:bg-rose-500/10 dark:text-rose-50">
								<p className="font-medium">
									And hiring a full-time senior dev?{' '}
									<span className="whitespace-nowrap">$200,000+/year,</span> without the flexibility
									your team needs.
								</p>
							</div>
						</div>
					</div>
				</div>

				{/* Solution Card */}
				<div className="group relative h-full">
					<div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-emerald-300/35 via-sky-300/30 to-purple-300/35 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100 dark:from-emerald-400/40 dark:via-sky-400/30 dark:to-purple-500/40" />
					<div className="relative flex h-full flex-col rounded-3xl bg-gradient-to-br from-emerald-300/80 via-sky-300/80 to-purple-300/80 p-[1px] shadow-xl shadow-black/10 dark:from-emerald-400/80 dark:via-sky-500/80 dark:to-purple-500/80">
						<div className="flex h-full flex-col gap-5 rounded-[1.45rem] bg-white/95 p-6 text-slate-900 sm:p-7 dark:bg-slate-950/95 dark:text-slate-100">
							{/* Header row — EXACT same structure & font as Problem */}
							<div className="inline-flex items-center justify-between gap-3">
								<div className="inline-flex items-center gap-2">
									<span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-sky-500 text-sm text-white">
										🚀
									</span>
									<span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-emerald-700 dark:text-emerald-200">
										Solution
									</span>
								</div>
								<span className="rounded-full bg-emerald-100 px-3 py-1 text-[11px] font-medium text-emerald-700 ring-1 ring-emerald-300 dark:bg-emerald-500/10 dark:text-emerald-100 dark:ring-emerald-400/60">
									What You Get With Me
								</span>
							</div>

							<div className="space-y-3">
								<h3 className="text-lg font-semibold leading-snug text-slate-900 sm:text-xl dark:text-slate-50">
									I help you build lean, scalable, AI-powered systems with AWS Serverless and modern
									AI models.
								</h3>
								<p className="text-sm font-semibold text-emerald-700 sm:text-[15px] dark:text-emerald-100">
									You get:
								</p>
							</div>

							<ul className="space-y-2.5 text-sm text-slate-900 dark:text-slate-50">
								<li className="flex gap-3">
									<span className="mt-0.5 text-base">✔</span>
									<span>
										Ultra-scalable backend with Lambda, API Gateway, DynamoDB, SQS, EventBridge
									</span>
								</li>
								<li className="flex gap-3">
									<span className="mt-0.5 text-base">✔</span>
									<span>40–70% reduction in AWS costs with focused optimization</span>
								</li>
								<li className="flex gap-3">
									<span className="mt-0.5 text-base">✔</span>
									<span>
										AI automation workflows powered by ChatGPT / Llama 3 / Bedrock / Gemini
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
								<li className="flex gap-3">
									<span className="mt-0.5 text-base">✔</span>
									<span>Perfect for CTOs, founders, agencies &amp; SaaS companies</span>
								</li>
							</ul>

							<div className="mt-4 flex flex-wrap gap-2 text-[11px] font-medium text-slate-800 dark:text-slate-200">
								<span className="rounded-full bg-emerald-50 px-3 py-1 ring-1 ring-emerald-200 dark:bg-slate-900/70 dark:ring-emerald-400/50">
									⚡ AWS Serverless
								</span>
								<span className="rounded-full bg-sky-50 px-3 py-1 ring-1 ring-sky-200 dark:bg-slate-900/70 dark:ring-sky-400/50">
									🤖 AI Workflows
								</span>
								<span className="rounded-full bg-purple-50 px-3 py-1 ring-1 ring-purple-200 dark:bg-slate-900/70 dark:ring-purple-400/50">
									💸 Cost Optimization
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ProblemSolutionSection;
