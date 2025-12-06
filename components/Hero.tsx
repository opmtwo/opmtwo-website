'use client';

import FiverrIcon from '@/icons/FiverrIcon';
import WhatsappIcon from '@/icons/WhatsappIcon';
import { MailIcon } from 'lucide-react';
import React, { useEffect, useState } from 'react';

const phrases = [
	// 'sorting emails', 'writing replies', 'taking notes', 'scheduling',
	'AWS Serverless',
	'AI Automation',
	'Backend Optimization',
	'Cost Reduction',
	'Workflow Automation',
];

interface ReelsSectionProps {
	emailLabel?: string;
	whatsappLabel?: string;
	fiverrLabel?: string;
	email?: string;
	whatsapp?: string;
	fiverr?: string;
}

export const Hero: React.FC<ReelsSectionProps> = ({
	emailLabel = 'Book a Free 15-Minute Call',
	whatsappLabel = 'Chat on WhatsApp',
	fiverrLabel = 'View My Fiverr Profile',
	email = 'you@example.com',
	whatsapp,
	fiverr = 'onepunchmantwo',
}) => {
	const [index, setIndex] = useState(0);
	const [visible, setVisible] = useState(true);

	useEffect(() => {
		const interval = setInterval(() => {
			// fade out
			setVisible(false);

			// after fade-out, switch text and fade in
			setTimeout(() => {
				setIndex((prev) => (prev + 1) % phrases.length);
				setVisible(true);
			}, 250);
		}, 2500);

		return () => clearInterval(interval);
	}, []);

	return (
		<section id="hero" className="min-h-screen flex flex-col items-center text-slate-900">
			{/* Top nav */}
			<header className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-5 sm:px-8">
				<div className="flex items-center gap-2">
					<span className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-300 text-xs font-semibold tracking-[0.2em] uppercase">
						AI
					</span>
					<span className="text-lg font-semibold tracking-tight">ReplyMate</span>
				</div>

				<nav className="hidden items-center gap-8 text-sm text-slate-600 md:flex">
					<button className="hover:text-slate-900">Pricing</button>
					<button className="hover:text-slate-900">Security</button>
					<button className="hover:text-slate-900">For Teams</button>
					<button className="hover:text-slate-900">Support</button>
				</nav>

				<div className="flex items-center gap-3">
					<button className="hidden text-sm text-slate-700 hover:text-slate-900 md:inline">Log in</button>
					<button className="rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow-md hover:bg-slate-800">
						Start free trial
					</button>
				</div>
			</header>

			{/* Hero */}
			<main className="mx-auto my-auto flex w-full max-w-4xl flex-col items-center text-center px-4 sm:px-8">
				{/* <div
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
				></div> */}

				{/* Badge */}
				{/* <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-xs font-medium text-slate-600 shadow-sm">
					<span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
					<span>Trusted by 100,000+ professionals</span>
				</div> */}

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
				<h1 className="mb-3 text-4xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-5xl md:text-6xl mt-8">
					{/* Your white-label partner for */}I Specialize in
				</h1>

				{/* Animated second line */}
				<div className="mb-6 flex min-h-[3.2rem] items-center justify-center sm:min-h-[3.8rem] md:min-h-[4.2rem]">
					<span
						className={`inline-block text-4xl font-semibold  tracking-tight text-slate-900 sm:text-5xl md:text-6xl transition-opacity duration-300 ${
							visible ? 'opacity-100' : 'opacity-0'
						}`}
					>
						<span className="bg-linear-to-r from-sky-400 via-emerald-400 to-violet-400 bg-clip-text text-transparent">{phrases[index]}</span>
					</span>
				</div>

				{/* Heading */}
				<div className="space-y-5">
					{/* <h1 className="font-serif text-6xl leading-none text-slate-900 sm:text-7xl">Serverless</h1> */}
					{/* <h1 className="text-6xl leading-none text-slate-900 bg-linear-to-r from-emerald-300 via-cyan-300 to-sky-300 bg-clip-text text-transparent">
							Serverless AWS &amp; AI Automation
						</h1> */}

					<p className="max-w-lg text-base leading-relaxed text-slate-700 dark:text-white sm:text-lg">
						Optimize, automate, and scale your backend with AWS Lambda, DynamoDB & AI —{' '}
						<span className="font-semibold">10× faster and up to 70% cheaper.</span>
					</p>
				</div>

				{/* Stats */}
				<div className="space-y-4 mt-8">
					<div className="h-px w-full bg-linear-to-r from-slate-200/80 via-slate-300/70 to-transparent" />
					<div className="flex flex-wrap items-center gap-6 text-sm text-slate-800 dark:text-white">
						{/* Cost Savings */}
						<div className="flex items-center gap-3 text-slate-900 dark:text-white">
							<div className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-400/40 bg-white">
								<span className="text-lg">💰</span>
							</div>
							<div className="leading-tight">
								<p className="text-xs font-medium uppercase tracking-[0.18em] ">AWS Cost Reduction</p>
								<p className="text-sm font-semibold">Up to 70% Savings</p>
							</div>
						</div>

						{/* Rating */}
						<div className="flex items-center gap-2 text-sm">
							<span className="text-lg">⭐</span>
							<span className="font-semibold">5.0</span>
							<span className="text-xs">Average Rating</span>
						</div>
					</div>
					<div className="h-px w-full bg-gradient-to-r from-slate-200/80 via-slate-300/70 to-transparent" />
				</div>

				{/* Buttons */}
				<div className="flex flex-wrap items-center gap-4 pt-2 mt-8">
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
			</main>
		</section>
	);
};

export default Hero;
