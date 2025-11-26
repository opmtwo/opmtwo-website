'use client';

import React, { useEffect, useState } from 'react';

const phrases = ['sorting emails', 'writing replies', 'taking notes', 'scheduling'];

const Hero: React.FC = () => {
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
		<div className="min-h-screen bg-gradient-to-b from-[#f4f7fb] to-[#e3edf7] text-slate-900">
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
			<main className="mx-auto flex w-full max-w-4xl flex-col items-center px-4 pb-16 pt-10 text-center sm:px-8 sm:pt-16">

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



				{/* Badge */}
				<div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-xs font-medium text-slate-600 shadow-sm">
					<span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
					<span>Trusted by 100,000+ professionals</span>
				</div>

				{/* Heading */}
				<h1 className="mb-3 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl md:text-6xl">Your assistant for</h1>

				{/* Animated second line */}
				<div className="mb-6 flex min-h-[3.2rem] items-center justify-center sm:min-h-[3.8rem] md:min-h-[4.2rem]">
					<span
						className={`inline-block text-4xl font-semibold italic tracking-tight text-slate-900 sm:text-5xl md:text-6xl transition-opacity duration-300 ${
							visible ? 'opacity-100' : 'opacity-0'
						}`}
					>
                        <span className="bg-linear-to-r from-sky-400 via-emerald-400 to-violet-400 bg-clip-text text-transparent">

						{phrases[index]}
                        </span>
					</span>
				</div>

				{/* Subheading */}
				<p className="mb-10 max-w-xl text-base text-slate-600 sm:text-lg">
					Stop starting from a blank screen. Draft smart, on-brand email responses in seconds—directly inside your inbox.
				</p>

				{/* CTAs */}
				<div className="mb-4 flex flex-col gap-3 sm:flex-row">
					<button className="flex items-center justify-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-medium text-white shadow-md hover:bg-slate-800">
						<span className="h-2.5 w-2.5 rounded-full bg-red-500" />
						<span>Start with Gmail</span>
					</button>

					<button className="flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-slate-900 shadow-md shadow-slate-200 hover:bg-slate-50">
						<span className="h-2.5 w-2.5 rounded-full bg-blue-500" />
						<span>Start with Outlook</span>
					</button>
				</div>

				<p className="mb-6 text-xs text-slate-500 sm:text-sm">Free 7-day trial • Works with Gmail &amp; Outlook</p>

				<button className="rounded-full border border-slate-300 bg-white/70 px-5 py-2 text-sm font-medium text-slate-700 shadow-sm hover:bg-white">
					Speak to sales
				</button>
			</main>
		</div>
	);
};

export default Hero;
