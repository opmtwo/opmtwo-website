// app/components/ReadyToTrySection.tsx
'use client';

import FiverrIcon from '@/icons/FiverrIcon';
import MailIcon from '@/icons/MailIcon';
import WhatsappIcon from '@/icons/WhatsappIcon';
import React from 'react';

interface ReadyToTrySectionProps {
	headline?: string;
	subheadline?: string;
	emailLabel?: string;
	whatsappLabel?: string;
	fiverrLabel?: string;
	email?: string;
	whatsapp?: string;
	fiverr?: string;
	description?: string;
}

export const ReadyToTrySection: React.FC<ReadyToTrySectionProps> = ({
	headline = 'Ready to explore',
	subheadline = 'AI & Serverless',
	emailLabel = 'Email Me Your Use Case',
	whatsappLabel = 'Chat on WhatsApp',
	fiverrLabel = 'View My Fiverr Profile',
	email = 'you@example.com',
	whatsapp = '1234567890',
	fiverr = 'onepunchmantwo',
	description = "Send a quick note with your current stack and challenges.\nI'll reply with a short, actionable plan and possible next steps.",
}) => {
	return (
		<section className="relative overflow-hidden bg-[#EEF3FB] dark:bg-slate-950">
			{/* Soft cloud-ish background */}
			<div className="relative mx-auto flex min-h-[420px] max-w-4xl flex-col items-center justify-center px-4 py-16 text-center sm:px-6 lg:px-8">
				<h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-5xl dark:text-white">
					<span>{headline}</span>
					{/* serverless & AI  */}
					<span className="bg-linear-to-r from-sky-400 via-emerald-400 to-violet-400 bg-clip-text text-transparent dark:from-sky-500 dark:via-emerald-500 dark:to-violet-500">
						{' '}
						{subheadline}{' '}
					</span>
					<span>for your team?</span>
				</h2>

				{/* Main CTAs */}
				{/* <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
					<button className="inline-flex items-center justify-center rounded-full bg-slate-900 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-slate-900/10 transition hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900/80 focus-visible:ring-offset-2 focus-visible:ring-offset-[#EEF3FB] dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700 dark:focus-visible:ring-slate-700 dark:focus-visible:ring-offset-slate-950"
						onClick={() => window.location.href = `mailto:${email}?subject=Serverless%20%2B%20AI%20Consultation`}>
						<span className="mr-3 flex h-6 w-6 items-center justify-center rounded-md bg-white dark:bg-slate-900">
							<span className="text-[13px] leading-none">✉️</span>
						</span>
						{emailLabel}
					</button>
					<button className="inline-flex items-center justify-center rounded-full bg-[#25D366] px-8 py-4 text-base font-semibold text-white shadow-lg shadow-slate-900/10 transition hover:bg-[#1ebe57] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22b356]/80 focus-visible:ring-offset-2 focus-visible:ring-offset-[#EEF3FB] dark:focus-visible:ring-[#25D366] dark:focus-visible:ring-offset-slate-950"
						onClick={() => window.open(`https://wa.me/${whatsapp}`, '_blank')}>
						<span className="mr-3 flex h-6 w-6 items-center justify-center rounded-md bg-white/95 dark:bg-slate-900/90">
							<span className="text-[13px] leading-none">💬</span>
						</span>
						{whatsappLabel}
					</button>
					<button className="rounded-full border border-slate-300 bg-white/70 px-5 py-2 text-sm font-medium text-slate-700 shadow-sm hover:bg-white dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-100 dark:hover:bg-slate-900"
						onClick={() => window.open(`https://www.fiverr.com/${fiverr}`, '_blank')}>
						<span>{fiverrLabel}</span>
					</button>
				</div> */}

				<div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
					{/* Email Button */}
					{email && (
						<a
							href={`mailto:${email}?subject=Serverless%20%2B%20AI%20Consultation`}
							className="inline-flex items-center gap-2 rounded-full bg-black dark:bg-white px-5 py-2.5 text-sm font-semibold text-white dark:text-black border-2 border-transparent transition hover:bg-transparent dark:hover:bg-transparent hover:text-black dark:hover:text-white hover:border-black dark:hover:bg-black dark:hover:border-white"
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
							className="inline-flex items-center gap-2 rounded-full border-2 border-emerald-400/60 bg-white px-5 py-2.5 text-sm font-semibold text-emerald-600 transition hover:bg-[#25D366] hover:text-white hover:border-[#25D366] dark:bg-slate-950 dark:text-emerald-300 dark:hover:bg-[#25D366] dark:hover:border-[#25D366]"
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
							className="inline-flex items-center gap-2 rounded-full border-2 border-black bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-[#1DBF73] hover:text-white hover:border-[#1DBF73] dark:border-white dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-[#1DBF73] dark:hover:text-white dark:hover:border-[#1DBF73]"
						>
							<FiverrIcon className="h-4 w-4" />
							{fiverrLabel}
						</a>
					)}
				</div>

				{/* Subtext */}
				<p className="mt-6 text-sm text-slate-500 dark:text-slate-300">
					{description.split('\n').map((line, i) => (
						<React.Fragment key={i}>
							{line}
							<br />
						</React.Fragment>
					))}
				</p>
			</div>
		</section>
	);
};

export default ReadyToTrySection;
