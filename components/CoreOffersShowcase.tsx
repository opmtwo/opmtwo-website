// app/components/CoreOffersSection.tsx
'use client';

import React from 'react';

const coreOffers = [
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

type IconProps = React.SVGProps<SVGSVGElement>;

const InfraIcon: React.FC<IconProps> = (props) => (
	<svg viewBox="0 0 32 32" fill="none" {...props}>
		<rect x="5" y="6" width="22" height="6" rx="2" stroke="currentColor" />
		<rect x="7" y="14" width="18" height="5" rx="1.5" stroke="currentColor" />
		<rect x="9" y="21" width="14" height="4" rx="1.5" stroke="currentColor" />
	</svg>
);

const SupportIcon: React.FC<IconProps> = (props) => (
	<svg viewBox="0 0 32 32" fill="none" {...props}>
		<circle cx="16" cy="16" r="9" stroke="currentColor" />
		<path d="M10 16a6 6 0 0 1 12 0v1.5a2.5 2.5 0 0 1-2.5 2.5H19" stroke="currentColor" strokeLinecap="round" />
		<path d="M13 21.5 15.5 23l3.5-1.5" stroke="currentColor" strokeLinecap="round" />
	</svg>
);

const DataIcon: React.FC<IconProps> = (props) => (
	<svg viewBox="0 0 32 32" fill="none" {...props}>
		<rect x="6" y="7" width="20" height="18" rx="2" stroke="currentColor" />
		<path d="M11 21v-7" stroke="currentColor" strokeLinecap="round" />
		<path d="M16 21v-4" stroke="currentColor" strokeLinecap="round" />
		<path d="M21 21v-9" stroke="currentColor" strokeLinecap="round" />
		<path d="M10 12h12" stroke="currentColor" strokeLinecap="round" />
	</svg>
);

const ToolsIcon: React.FC<IconProps> = (props) => (
	<svg viewBox="0 0 32 32" fill="none" {...props}>
		<path d="M11 7 9 9l3 4-2 2-4-3-2 2 4 6a4 4 0 0 0 3.2 1.8L17 22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
		<path d="M21.5 9.5 19 7l-3 3 1.5 1.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
		<circle cx="22" cy="20" r="4" stroke="currentColor" />
		<path d="M22 18v2l1 1" stroke="currentColor" strokeLinecap="round" />
	</svg>
);

const iconMap: Record<string, React.FC<IconProps>> = {
	'01': InfraIcon,
	'02': SupportIcon,
	'03': DataIcon,
	'04': ToolsIcon,
};

const accentMap: Record<string, { halo: string; dot: string; text: string; readMore: string }> = {
	'01': {
		halo: 'from-pink-400/40 to-pink-300/0',
		dot: 'bg-pink-500',
		text: 'text-pink-500',
		readMore: 'text-pink-600',
	},
	'02': {
		halo: 'from-emerald-400/40 to-emerald-300/0',
		dot: 'bg-emerald-500',
		text: 'text-emerald-500',
		readMore: 'text-emerald-600',
	},
	'03': {
		halo: 'from-indigo-400/40 to-indigo-300/0',
		dot: 'bg-indigo-500',
		text: 'text-indigo-500',
		readMore: 'text-indigo-600',
	},
	'04': {
		halo: 'from-amber-400/40 to-amber-300/0',
		dot: 'bg-amber-500',
		text: 'text-amber-500',
		readMore: 'text-amber-600',
	},
};

export const CoreOffersShowcase: React.FC = () => {
	return (
		<section id="offers" className="relative mx-auto max-w-6xl space-y-10 rounded-3xl bg-slate-50 px-4 py-12 sm:px-8 lg:px-10">
			{/* Heading */}
			<header className="text-center space-y-4">
				<p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Services</p>

				<div className="relative inline-block">
					<span className="relative z-10 text-3xl font-semibold text-slate-900 sm:text-4xl">
						My&nbsp;
						<span className="relative">
							<span className="relative z-10">Core Offers</span>
							<span className="absolute inset-x-0 bottom-0 h-3 translate-y-1 rounded-full bg-pink-200/70" />
						</span>
					</span>
				</div>

				<p className="mx-auto max-w-3xl text-sm text-slate-500 sm:text-base">
					Serverless backends, AI workflows, and AWS cost optimization — packaged into focused engagements your team can execute on quickly.
				</p>
			</header>

			{/* Cards */}
			<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
				{coreOffers.map((offer) => {
					const Icon = iconMap[offer.id] ?? InfraIcon;
					const accent = accentMap[offer.id];

					return (
						<article
							key={offer.id}
							className="group relative flex h-full flex-col rounded-3xl bg-white p-6 shadow-[0_18px_60px_rgba(15,23,42,0.06)] transition-transform hover:-translate-y-1"
						>
							{/* Icon halo */}
							<div className="absolute -top-6 left-6">
								<div className="relative">
									<div className={`pointer-events-none absolute inset-0 -z-10 rounded-full bg-gradient-to-br blur`} />
									<div className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md">
										<div className={`flex h-8 w-8 items-center justify-center rounded-full ${accent?.dot ?? 'bg-pink-500'} text-white`}>
											<Icon className="h-4 w-4" />
										</div>
									</div>
								</div>
							</div>

							<div className="mt-6 space-y-3">
								<p className={`text-[11px] font-semibold uppercase tracking-[0.16em] ${accent?.text ?? 'text-pink-500'}`}>{offer.tag}</p>
								<h3 className="text-lg font-semibold text-slate-900">{offer.title}</h3>
								<p className="text-sm leading-relaxed text-slate-500">{offer.subtitle}</p>
								<ul className="mt-3 space-y-1 text-sm text-slate-500">
									{offer.points.slice(0, 2).map((point) => (
										<li key={point}>{point}</li>
									))}
								</ul>
							</div>

							<button type="button" className={`mt-6 inline-flex items-center text-sm font-medium ${accent?.readMore ?? 'text-pink-600'}`}>
								Read more
								<span className="ml-2 text-base">→</span>
							</button>
						</article>
					);
				})}
			</div>

			{/* CTA */}
			<div className="flex justify-center pt-4">
				<button
					type="button"
					className="inline-flex items-center rounded-full bg-pink-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-pink-500/40 transition hover:bg-pink-700"
				>
					Hire Me Today
					<span className="ml-2 text-base">→</span>
				</button>
			</div>
		</section>
	);
};

export default CoreOffersShowcase;
