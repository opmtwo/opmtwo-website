// app/components/ReelsSection.tsx
'use client';

import { MailIcon } from 'lucide-react';
import React from 'react';

import FiverrIcon from '@/icons/FiverrIcon';
import WhatsappIcon from '@/icons/WhatsappIcon';

interface ReelsSectionProps {
	emailLabel?: string;
	whatsappLabel?: string;
	fiverrLabel?: string;
	email?: string;
	whatsapp?: string;
	fiverr?: string;
}

export const ReelsSection: React.FC<ReelsSectionProps> = ({
	emailLabel = 'Book a Free 15-Minute Call',
	whatsappLabel = 'Chat on WhatsApp',
	fiverrLabel = 'View My Fiverr Profile',
	email = 'you@example.com',
	whatsapp,
	fiverr = 'onepunchmantwo',
}) => {
	return (
		<section className="relative flex items-center px-20">
			<div className="flex max-w-6xl flex-col gap-12 lg:flex-row lg:items-center">
				{/* LEFT CONTENT */}
				<div className="max-w-xl space-y-8">
					{/* Rating */}
					<div className="inline-flex items-center gap-3 rounded-full bg-white/70 px-4 py-2 text-sm shadow-sm backdrop-blur">
						<div className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-xs font-semibold text-white">
							<span>★</span>
						</div>
						<div className="space-y-0.5 leading-snug">
							<p className="text-xs font-medium uppercase tracking-[0.16em] text-slate-600">120+ Five-Star Reviews</p>
							<button className="text-xs font-semibold text-slate-900 underline decoration-slate-400 underline-offset-2">
								Read Client Success Stories
							</button>
						</div>
					</div>

					{/* Heading */}
					<div className="space-y-5">
						{/* <h1 className="font-serif text-6xl leading-none text-slate-900 sm:text-7xl">Serverless</h1> */}
						<h1 className="text-6xl leading-none text-slate-900 bg-linear-to-r from-emerald-300 via-cyan-300 to-sky-300 bg-clip-text text-transparent">
							Serverless AWS &amp; AI Automation
						</h1>

						<p className="max-w-lg text-base leading-relaxed text-slate-700 sm:text-lg">
							Optimize, automate, and scale your backend with AWS Lambda, DynamoDB & AI —{' '}
							<span className="font-semibold">10× faster and up to 70% cheaper.</span>
						</p>
					</div>

					{/* Stats */}
					<div className="space-y-4">
						<div className="h-px w-full bg-linear-to-r from-slate-200/80 via-slate-300/70 to-transparent" />
						<div className="flex flex-wrap items-center gap-6 text-sm text-slate-800">
							{/* Cost Savings */}
							<div className="flex items-center gap-3">
								<div className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-400/40 bg-white">
									<span className="text-lg">💰</span>
								</div>
								<div className="leading-tight">
									<p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-500">AWS Cost Reduction</p>
									<p className="text-sm font-semibold text-slate-900">Up to 70% Savings</p>
								</div>
							</div>

							{/* Rating */}
							<div className="flex items-center gap-2 text-sm">
								<span className="text-lg">⭐</span>
								<span className="font-semibold text-slate-900">5.0</span>
								<span className="text-xs text-slate-500">Average Rating</span>
							</div>
						</div>
						<div className="h-px w-full bg-gradient-to-r from-slate-200/80 via-slate-300/70 to-transparent" />
					</div>

					{/* Buttons */}
					<div className="flex flex-wrap items-center gap-4 pt-2">
						{/* Email Button */}
						{email && (
							<a
								href={`mailto:${email}?subject=Serverless%20%2B%20AI%20Consultation`}
								className="inline-flex items-center gap-2 rounded-full bg-black px-5 py-2.5 text-sm font-semibold text-white border-2 border-transparent transition hover:bg-transparent hover:text-black hover:border-black"
							>
								<MailIcon className="h-4 w-4" />
								{emailLabel}
							</a>
						)}
						{/* WhatsApp Button */}
						{whatsapp && (
							<a
								href={`https://wa.me/${whatsapp}`}
								target="_blank"
								rel="noreferrer"
								className="inline-flex items-center gap-2 rounded-full border border-emerald-400/60 bg-white px-5 py-2.5 text-sm font-semibold text-emerald-600 transition hover:bg-[#25D366] hover:text-white hover:border-[#25D366] dark:bg-slate-950 dark:text-emerald-300 dark:hover:bg-[#25D366] dark:hover:text-white dark:hover:border-[#25D366]"
							>
								<WhatsappIcon className="h-4 w-4" />
								{whatsappLabel}
							</a>
						)}
						{/* Fiverr Button */}
						{fiverr && (
							<a
								href={`https://www.fiverr.com/${fiverr}`}
								target="_blank"
								rel="noreferrer"
								className="inline-flex items-center gap-2 rounded-full border border-black bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-[#1DBF73] hover:text-white hover:border-[#1DBF73] dark:border-black dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-[#1DBF73] dark:hover:text-white dark:hover:border-[#1DBF73]"
							>
								<FiverrIcon className="h-4 w-4" />
								{fiverrLabel}
							</a>
						)}
					</div>
				</div>

				<div
					className="absolute top-0 right-0 bottom-0 left-0 w-full h-full bg-cover md:w-[40%] ml-auto"
					style={{
						// backgroundColor: '#fbf5e3',
						// backgroundBlendMode: 'hard-light',
						// backgroundBlendMode: 'color-dodge',
						// backgroundColor: '#1d27bd',
						backgroundImage: 'url(/sketch.png)',
						backgroundPosition: 'top right',
						backgroundRepeat: 'no-repeat',
						// filter: 'blur(1px)',
						// filter: 'opacity(60%)',
						// filter: 'grayscale(50%)',
					}}
				></div>
			</div>
		</section>
	);
};
