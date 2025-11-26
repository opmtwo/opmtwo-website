// app/components/ReadyToTrySection.tsx
'use client';

import React from 'react';

export const ReadyToTrySection: React.FC = () => {
	return (
		<section className="relative overflow-hidden bg-[#EEF3FB]">
			{/* Soft cloud-ish background */}
			<div className="pointer-events-none absolute inset-x-0 bottom-[-10rem] h-[22rem] bg-[radial-gradient(circle_at_20%_0%,#ffffff_0,transparent_55%),radial-gradient(circle_at_80%_10%,#ffffff_0,transparent_55%),radial-gradient(circle_at_50%_80%,#ffffff_0,transparent_60%)] opacity-80" />

			<div className="relative mx-auto flex min-h-[420px] max-w-4xl flex-col items-center justify-center px-4 py-16 text-center sm:px-6 lg:px-8">
				<h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
					<span>Ready to explore</span>
					{/* serverless & AI  */}
					<span className="bg-linear-to-r from-sky-400 via-emerald-400 to-violet-400 bg-clip-text text-transparent"> AI & Serverless </span>
					<span>for your team?</span>
				</h2>

				{/* Main CTAs */}
				<div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
					{/* Gmail button */}
					{/* <button className="inline-flex items-center justify-center rounded-full bg-slate-900 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-slate-900/10 transition hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900/80 focus-visible:ring-offset-2 focus-visible:ring-offset-[#EEF3FB]">
						<span className="mr-3 flex h-6 w-6 items-center justify-center rounded-[6px] bg-white">
							<span className="text-[13px] leading-none">📧</span>
						</span>
						Start with Gmail
					</button> */}

					{/* Outlook button */}
					{/* <button className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-base font-semibold text-slate-900 shadow-lg shadow-slate-900/5 ring-1 ring-slate-200 transition hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#EEF3FB]">
						<span className="mr-3 flex h-6 w-6 items-center justify-center rounded-[6px] bg-[#0F6CBD]/10">
							<span className="text-[13px] leading-none">📨</span>
						</span>
						Start with Outlook
					</button> */}

					<button className="inline-flex items-center justify-center rounded-full bg-slate-900 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-slate-900/10 transition hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900/80 focus-visible:ring-offset-2 focus-visible:ring-offset-[#EEF3FB]">
						<span className="mr-3 flex h-6 w-6 items-center justify-center rounded-[6px] bg-white">
							<span className="text-[13px] leading-none">✉️</span>
						</span>
						Email Me Your Use Case
					</button>

					{/* <button className="flex items-center justify-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-medium text-white shadow-md hover:bg-slate-800">
						<span className="h-2.5 w-2.5 rounded-full bg-red-500" />
						<span>Email Me Your Use Case</span>
					</button> */}

					{/* WhatsApp button */}
					<button className="inline-flex items-center justify-center rounded-full bg-[#25D366] px-8 py-4 text-base font-semibold text-white shadow-lg shadow-slate-900/10 transition hover:bg-[#1ebe57] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22b356]/80 focus-visible:ring-offset-2 focus-visible:ring-offset-[#EEF3FB]">
						<span className="mr-3 flex h-6 w-6 items-center justify-center rounded-[6px] bg-white/95">
							<span className="text-[13px] leading-none">💬</span>
						</span>
						Chat on WhatsApp
					</button>
					{/* <button className="flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-medium text-white shadow-md transition hover:bg-[#1ebe57] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22b356]/80 focus-visible:ring-offset-2 focus-visible:ring-offset-[#EEF3FB]">
						<span className="h-2.5 w-2.5 rounded-full bg-red-500" />
						<span>Chat on WhatsApp</span>
					</button> */}
				</div>

				{/* Subtext */}
				<p className="my-6 text-sm text-slate-500">
					Send a quick note with your current stack and challenges.
					<br />
					I&apos;ll reply with a short, actionable plan and possible next steps.
				</p>

				{/* Secondary CTA */}
				{/* <button className="mt-6 inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-medium text-slate-900 shadow-sm transition hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#EEF3FB]">
					Speak to sales
				</button> */}

				{/* Fiverr button */}
				{/* <button className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-base font-semibold text-slate-900 shadow-lg shadow-slate-900/5 ring-1 ring-[#1DBF73]/70 transition hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1DBF73]/80 focus-visible:ring-offset-2 focus-visible:ring-offset-[#EEF3FB]">
						<span className="mr-3 flex h-6 w-6 items-center justify-center rounded-[6px] bg-[#1DBF73]/10">
							<span className="text-[13px] font-bold leading-none text-[#1DBF73]">F</span>
						</span>
						View My Fiverr Profile
					</button> */}
				<button className="rounded-full border border-slate-300 bg-white/70 px-5 py-2 text-sm font-medium text-slate-700 shadow-sm hover:bg-white">
					<span>View My Fiverr Profile</span>
				</button>
			</div>
		</section>
	);
};

export default ReadyToTrySection;
