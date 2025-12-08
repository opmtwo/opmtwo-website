// app/components/CoreOffersSection.tsx
'use client';

import React from 'react';
import { useState, useEffect, useCallback } from 'react';

type CoreOffer = {
	id: string;
	tag: string;
	title: string;
	subtitle: string;
	points: string[];
};

const coreOffers: CoreOffer[] = [
	{
		id: '01',
		tag: 'Backend & Infrastructure',
		title: 'Serverless Backend Transformation Kit',
		subtitle: 'Modernize your backend with AWS Lambda, API Gateway, and DynamoDB.',
		points: [
			'40–70% AWS cost reduction on core workloads',
			'No servers, no DevOps fire-fighting, no scaling pain',
			'Ultra-fast feature delivery with event-driven patterns',
			'Clean, modern architecture your team can extend',
		],
	},
	{
		id: '02',
		tag: 'Support & CX Automation',
		title: 'AI Support Suite (ChatGPT + Llama 3)',
		subtitle: 'Automate customer support with AI-powered deflection & smart replies.',
		points: [
			'AI chatbot trained on your docs, FAQs, and tickets',
			'Auto-triage, suggested replies, and internal agent copilot',
			'Optional AI IVR voice assistant for phone support',
			'50–70% reduction in repetitive support volume',
		],
	},
	{
		id: '03',
		tag: 'Data & Operations',
		title: 'AI Automation Pipeline',
		subtitle: 'AI-driven data processing, document extraction, and log intelligence.',
		points: [
			'Automated document ingestion & smart classification',
			'Entity extraction, summarization & compliance checks',
			'Incident & log summarization for faster root-cause',
			'Data cleanup, enrichment, and analytics-ready outputs',
		],
	},
	{
		id: '04',
		tag: 'Team Productivity',
		title: 'Custom AI Tools for Teams',
		subtitle: 'Internal AI tools tailored to marketing, sales, engineering, HR, and legal.',
		points: [
			'AI code reviewer & engineering assistant',
			'AI SEO / blog generator for content teams',
			'AI contract & policy analyzer for legal / HR',
			'AI email writer & training assistant for busy teams',
		],
	},
];

export const CoreOffersSection: React.FC = () => {
	const [activeIndex, setActiveIndex] = useState(0);

	// Optional: auto-rotate offers (matches many “showcase” style videos)
	const rotate = useCallback(() => {
		setActiveIndex((prev) => (prev + 1) % coreOffers.length);
	}, []);

	useEffect(() => {
		const timer = setInterval(rotate, 8000); // 8s per offer
		return () => clearInterval(timer);
	}, [rotate]);

	const activeOffer = coreOffers[activeIndex];

	return (
		<section id="core-offers" className="relative flex items-center mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
			<div className="max-w-6xl mx-auto">
				{/* Background glow / subtle gradient */}
				<div className="pointer-events-none absolute inset-0 -z-10">
					<div className="absolute inset-0 bg-gradient-to-br from-sky-500/10 via-transparent to-purple-500/10 dark:from-sky-500/15 dark:to-purple-500/20" />
					<div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-500/10 blur-3xl dark:bg-sky-400/15" />
				</div>

				<header className="mb-10 space-y-3">
					<p className="inline-flex items-center rounded-full border border-sky-500/30 bg-sky-500/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.16em] text-sky-700 dark:text-sky-300">
						<span className="mr-2 h-1.5 w-1.5 rounded-full bg-sky-500" />
						Core Services
					</p>
					<h2 className="text-2xl font-semibold sm:text-3xl lg:text-4xl">
						<span className="bg-linear-to-r from-sky-500 via-cyan-400 to-purple-500 bg-clip-text text-transparent">
							Serverless & AI, packaged as plug-and-play offers.
						</span>
					</h2>
					<p className="text-sm text-slate-600 dark:text-slate-300 sm:text-base">
						Pick a focused engagement or combine them into a full transformation roadmap for your product, support, and internal teams.
					</p>
				</header>

				<div className="grid gap-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
					{/* Left side — vertical selector */}
					<div className="flex flex-col gap-3">
						{coreOffers.map((offer, index) => {
							const isActive = index === activeIndex;
							return (
								<button
									key={offer.id}
									type="button"
									onClick={() => setActiveIndex(index)}
									className={[
										'group relative flex items-center gap-4 rounded-2xl border px-4 py-4 text-left transition-all',
										'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent',
										isActive
											? // ? 'border-sky-500/70 bg-gradient-to-r from-sky-500/10 via-sky-500/5 to-purple-500/10 shadow-[0_18px_40px_rgba(15,23,42,0.35)] dark:border-sky-400/80 dark:bg-slate-900/80'
											  'border-sky-500/70 bg-gradient-to-r from-sky-500/10 via-sky-500/5 to-purple-500/10 dark:border-sky-400/80 dark:bg-slate-900/80'
											: 'border-slate-200/70 bg-white/50 hover:border-sky-400/60 hover:bg-sky-50/60 dark:border-slate-700/70 dark:bg-slate-900/60 dark:hover:border-sky-400/70 dark:hover:bg-slate-900',
									].join(' ')}
								>
									{/* Left ribbon / id */}
									<div
										className={[
											'flex h-12 w-12 items-center justify-center rounded-2xl border text-xs font-semibold uppercase tracking-[0.2em] transition-all',
											isActive
												? 'border-sky-500/70 bg-sky-500/10 text-sky-400'
												: 'border-slate-200/70 bg-slate-50 text-slate-500 group-hover:border-sky-400/60 group-hover:text-sky-500 dark:border-slate-700/70 dark:bg-slate-900 dark:text-slate-400',
										].join(' ')}
									>
										{offer.id}
									</div>

									<div className="flex flex-1 flex-col">
										<span
											className={[
												'mb-1 text-[0.7rem] font-semibold uppercase tracking-[0.2em]',
												isActive ? 'text-sky-400' : 'text-slate-500 group-hover:text-sky-500 dark:text-slate-400',
											].join(' ')}
										>
											{offer.tag}
										</span>
										<div className="flex items-center justify-between gap-2">
											<p
												className={[
													'text-sm font-medium sm:text-base',
													isActive
														? 'bg-gradient-to-r from-sky-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent'
														: 'text-slate-800 group-hover:text-slate-900 dark:text-slate-100',
												].join(' ')}
											>
												{offer.title}
											</p>
											<div
												className={[
													'h-1.5 w-1.5 rounded-full transition-all',
													isActive
														? 'scale-100 bg-sky-400 shadow-[0_0_0_6px_rgba(56,189,248,0.35)]'
														: 'scale-75 bg-slate-300 group-hover:bg-sky-400 dark:bg-slate-600',
												].join(' ')}
											/>
										</div>
									</div>
								</button>
							);
						})}
					</div>

					{/* Right side — active card */}
					<div className="relative">
						{/* Glow / outline frame behind */}
						<div className="pointer-events-none absolute -inset-1 rounded-3xl bg-gradient-to-br from-sky-500/40 via-cyan-400/20 to-purple-500/40 opacity-40 blur-xl" />
						{/* <div className="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white/80 p-6 shadow-[0_24px_70px_rgba(15,23,42,0.45)] backdrop-blur-xl dark:border-slate-700/80 dark:bg-slate-950/80"> */}
						<div className="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white/80 p-6 backdrop-blur-xl dark:border-slate-700/80 dark:bg-slate-950/80">
							{/* Header pill */}
							<div className="mb-4 flex items-center justify-between gap-3">
								<div className="flex items-center gap-2">
									<span className="inline-flex items-center rounded-full bg-sky-500/10 px-3 py-1 text-xs font-medium text-sky-500 dark:text-sky-300">
										{activeOffer.tag}
									</span>
									<span className="text-xs text-slate-500 dark:text-slate-400">
										{activeOffer.id} / {coreOffers.length}
									</span>
								</div>
								<div className="flex items-center gap-1 text-[0.65rem] uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
									<span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
									Live Offer Overview
								</div>
							</div>

							{/* Title + subtitle */}
							<div className="mb-5 space-y-2">
								<h3 className="text-xl font-semibold sm:text-2xl">
									<span className="bg-gradient-to-r from-sky-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent">
										{activeOffer.title}
									</span>
								</h3>
								<p className="text-sm text-slate-600 dark:text-slate-300 sm:text-base">{activeOffer.subtitle}</p>
							</div>

							{/* Points grid */}
							<ul className="grid gap-3 text-sm text-slate-700 dark:text-slate-200 sm:grid-cols-2">
								{activeOffer.points.map((point, idx) => (
									<li key={idx} className="flex items-start gap-2 rounded-xl bg-slate-50/80 p-3 text-xs sm:text-sm dark:bg-slate-900/70">
										<div className="mt-1 h-5 w-5 flex-shrink-0 rounded-full bg-gradient-to-br from-sky-400 to-cyan-400 text-[0.6rem] font-bold text-white shadow-sm dark:from-sky-400 dark:to-cyan-300 flex items-center justify-center">
											✓
										</div>
										<span>{point}</span>
									</li>
								))}
							</ul>

							{/* Footer hint / CTA-style text */}
							<div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-slate-200/70 pt-4 text-xs text-slate-500 dark:border-slate-800 dark:text-slate-400">
								<p>Blend this with other offers into a single roadmap—or run it as a focused engagement.</p>
								<div className="flex items-center gap-2">
									<div className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-100 text-[0.65rem] font-semibold text-slate-500 dark:bg-slate-800 dark:text-slate-300">
										i
									</div>
									<span>Ask for a quick 15–20 min walkthrough of this offer.</span>
								</div>
							</div>
						</div>
					</div>

					{/* Mobile-only: progress dots */}
					<div className="mt-2 flex justify-center gap-2 lg:hidden">
						{coreOffers.map((_, idx) => {
							const isActive = idx === activeIndex;
							return (
								<button
									key={idx}
									type="button"
									onClick={() => setActiveIndex(idx)}
									className={['h-1.5 rounded-full transition-all', isActive ? 'w-6 bg-sky-400' : 'w-2 bg-slate-300 dark:bg-slate-600'].join(
										' '
									)}
									aria-label={`Go to offer ${idx + 1}`}
								/>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
};
export default CoreOffersSection;
