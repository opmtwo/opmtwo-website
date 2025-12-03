'use client';

import React, { useState } from 'react';

import CaseStudiesSection from '@/components/CaseStudiesSection';
import CoreOffers from '@/components/CoreOffers';
import CoreOffersSection from '@/components/CoreOffersSection';
import FaqSection from '@/components/FaqSection';
import ReadyToTrySection from '@/components/Footer';
import Hero from '@/components/Hero';
import ProblemSolutionSection from '@/components/ProblemSolutionSection';
import { ReelsSection } from '@/components/ReelsSection';
import ServicesSection from '@/components/ServicesSection';
import ServicesShowcase from '@/components/ServicesShowcase';
import { TechStackShowcase } from '@/components/TechStackShowcase';
import TestimonialsSection from '@/components/TestimonialsSection';

const navLinks = [
	{ href: '#hero', label: 'Home' },
	{ href: '#offers', label: 'Core Offers' },
	{ href: '#stack', label: 'Tech Stack' },
	{ href: '#contact', label: 'Contact' },
];

export default function Home() {
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<main className="min-h-screen">
			{/* Top Navigation */}
			<header className="fixed inset-x-0 top-0 z-40 border-b border-slate-800/60 bg-slate-950/70 backdrop-blur-lg">
				<div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
					{/* Brand */}
					<a href="#hero" className="flex items-center gap-2 text-sm font-semibold tracking-tight">
						<span className="flex h-7 w-7 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400 to-cyan-400 text-slate-950 shadow-md">
							λ
						</span>
						<span className="animate-glow-text bg-gradient-to-r from-emerald-300 via-cyan-300 to-sky-300 bg-clip-text text-base text-transparent">
							Serverless &amp; AI Studio
						</span>
					</a>

					{/* Desktop navigation */}
					<nav className="hidden items-center gap-6 text-xs sm:flex sm:text-sm">
						{navLinks.map((link) => (
							<a key={link.href} href={link.href} className="text-slate-300 transition hover:text-emerald-300">
								{link.label}
							</a>
						))}
						<a
							href="#contact"
							className="rounded-full bg-emerald-500 px-4 py-2 text-xs font-semibold text-slate-950 shadow-md shadow-emerald-500/30 transition hover:bg-emerald-400"
						>
							Free 15-Min Call
						</a>
					</nav>

					{/* Mobile menu toggle */}
					<button
						className="relative flex h-9 w-9 items-center justify-center rounded-full border border-slate-700/70 bg-slate-900/80 sm:hidden"
						onClick={() => setMenuOpen((prev) => !prev)}
						aria-label="Toggle navigation"
						aria-expanded={menuOpen}
						aria-controls="mobile-nav"
					>
						<MobileMenuIcon open={menuOpen} />
					</button>
				</div>

				{/* Mobile dropdown */}
				<div
					id="mobile-nav"
					className={`sm:hidden transition-all duration-300 ease-out ${
						menuOpen ? 'pointer-events-auto translate-y-0 opacity-100' : 'pointer-events-none -translate-y-2 opacity-0'
					}`}
				>
					<nav className="mx-auto max-w-6xl px-4 pb-4 sm:px-6 lg:px-8">
						<div className="rounded-2xl border border-slate-800/80 bg-slate-950/95 p-3 shadow-xl shadow-slate-900/70">
							{navLinks.map((link) => (
								<a
									key={link.href}
									href={link.href}
									onClick={() => setMenuOpen(false)}
									className="block rounded-xl px-3 py-2 text-sm text-slate-100 transition hover:bg-slate-900 hover:text-emerald-300"
								>
									{link.label}
								</a>
							))}

							<a
								href="#contact"
								onClick={() => setMenuOpen(false)}
								className="mt-2 flex w-full items-center justify-center rounded-full bg-emerald-500 px-4 py-2.5 text-sm font-semibold text-slate-950 shadow-md shadow-emerald-500/30 transition hover:bg-emerald-400"
							>
								Book a Free 15-Min Consultation
							</a>
						</div>
					</nav>
				</div>
			</header>

			<TestimonialsSection />

			<CaseStudiesSection />

			<ProblemSolutionSection />

			<FaqSection />

			<ServicesShowcase />

			<ServicesSection />

			<CoreOffersSection />

			<ReelsSection />

			<Hero />

			<ReadyToTrySection />

			{/* Page content */}

			{/* Hero Section */}
			<section
				id="hero"
				// className="relative overflow-hidden min-h-dvh flex items-center rounded-3xl border border-slate-800  from-slate-900 via-slate-950 to-slate-900 px-6 py-12 sm:px-10 sm:py-16 shadow-2xl"
				// className="relative overflow-hidden min-h-dvh flex items-center bg-background px-6 py-12 sm:px-10 sm:py-16"
				className="relative overflow-hidden min-h-dvh flex items-center bg-background"
			>
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
				{/* <SketchImage
						src="/sketch.png"
						alt="My awesome sketch-style hero image"
						width={400}
						height={400}
						className="rounded-xl shadow-lg"
						durationMs={1000}
					/> */}

				<div className="pointer-events-none absolute inset-0">
					<div className="absolute -top-32 -right-32 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" />
					<div className="absolute -bottom-32 -left-24 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
				</div>

				<div className="relative z-10 grid gap-12 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)] bg-white/80 dark:bg-black/80 md:bg-transparen dark:md:bg-transparen rounded-2xl p-12">
					<div className="space-y-8">
						<div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-slate-900/70 px-3 py-1 text-xs font-medium uppercase tracking-wide text-emerald-300 animate-fade-in-up">
							<span className="h-2 w-2 animate-ping rounded-full bg-emerald-400" />
							Serverless AWS • AI Automation • Cost Optimization
						</div>

						<div className="space-y-4">
							<h1 className="animate-fade-in-up-delay text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">
								Transform Your Business with{' '}
								<span className="bg-linear-to-r from-emerald-300 via-cyan-300 to-sky-300 bg-clip-text text-transparent">
									Serverless AWS &amp; AI Automation
								</span>
							</h1>

							<p className="animate-fade-in-up-delay-2 max-w-2xl text-sm sm:text-base">
								Faster development. Lower costs. Higher productivity. I help teams ship modern serverless backends and AI workflows without the
								overhead of managing infrastructure.
							</p>

							<p className="animate-fade-in-up-delay-3 text-sm text-slate-400">
								<span className="font-semibold text-emerald-300">120+ 5-star reviews</span> • Trusted by startups &amp; enterprises worldwide
							</p>
						</div>

						<div className="flex flex-wrap items-center gap-4">
							<a
								href="#contact"
								className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/30 transition hover:bg-emerald-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
							>
								Book a Free 15-Minute Consultation
							</a>
							<p className="text-xs text-slate-400 sm:text-sm">No obligation. Get a clear plan and ballpark savings in one call.</p>
						</div>

						{/* SVG animated accent text */}
						<div className="mt-4">
							<svg viewBox="0 0 420 60" className="w-full animate-stroke-draw">
								<defs>
									<linearGradient id="accentStroke" x1="0%" y1="0%" x2="100%" y2="0%">
										<stop offset="0%" stopColor="#22c55e" />
										<stop offset="50%" stopColor="#22d3ee" />
										<stop offset="100%" stopColor="#38bdf8" />
									</linearGradient>
								</defs>
								<text
									x="0"
									y="40"
									fontSize="26"
									fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'SF Pro Text'"
									fill="none"
									stroke="url(#accentStroke)"
									strokeWidth={1.5}
									className="hero-stroke-text"
								>
									Serverless • AI • Automation
								</text>
							</svg>
						</div>
					</div>

					{/* Social proof card */}
					{/* <div className="flex flex-col justify-between rounded-2xl border border-slate-800 bg-slate-950/70 p-5 shadow-xl animate-fade-in-left">
						<div className="space-y-3 text-sm text-slate-200">
							<p className="flex items-center gap-2 text-emerald-300">
								<span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/10">⭐</span>
								Top-rated AWS Architect
							</p>
							<p>⭐ 120+ Five Star Reviews</p>
							<p>⭐ AWS Serverless + AI Expert</p>
							<p>⭐ 10+ Years of Cloud Experience</p>
							<p>⭐ Trusted by teams in US, Europe, India</p>
						</div>

						<div className="mt-5">
							<p className="mb-3 text-xs uppercase tracking-wide text-slate-500">Preferred Platforms</p>
							<div className="flex flex-wrap gap-2 text-xs text-slate-200">
								<LogoPill label="AWS" />
								<LogoPill label="OpenAI" />
								<LogoPill label="Next.js" />
								<LogoPill label="Node.js" />
								<LogoPill label="Python" />
							</div>
						</div>
					</div> */}
				</div>
			</section>
			<div className="mx-auto max-w-6xl px-4 pb-16 pt-24 sm:px-6 lg:px-8 lg:pt-28 space-y-20">
				{/* Core Offers */}
				<section id="offers" className="space-y-8">
					<div className="space-y-2">
						<h2 className="animate-fade-in-up text-xl font-semibold sm:text-2xl">My Core Offers</h2>
						<p className="animate-fade-in-up-delay text-sm text-slate-400 sm:text-base max-w-2xl">
							Pick a focused engagement or combine them into a full serverless + AI transformation roadmap.
						</p>
					</div>

					<div className="grid gap-6 md:grid-cols-2">
						{/* Offer 1 */}
						<OfferCard
							title="1. Serverless Backend Transformation Kit"
							subtitle="Modernize your backend with AWS Lambda, API Gateway, and DynamoDB."
							points={[
								'40–70% AWS cost reduction',
								'No servers, no DevOps, no scaling issues',
								'Ultra-fast feature delivery',
								'Clean, modern architecture',
							]}
						/>
						{/* Offer 2 */}
						<OfferCard
							title="2. AI Support Suite (ChatGPT + Llama 3)"
							subtitle="Automate customer support with AI-driven deflection & auto-reply."
							points={[
								'AI chatbot trained on your data',
								'Auto-triage & suggested replies',
								'AI IVR voice assistant',
								'50–70% reduction in support volume',
							]}
						/>
						{/* Offer 3 */}
						<OfferCard
							title="3. AI Automation Pipeline"
							subtitle="AI-driven data processing, document extraction, and log intelligence."
							points={['Automated document ingestion', 'Incident summarization', 'Review & feedback analysis', 'Data cleanup & enrichment']}
						/>
						{/* Offer 4 */}
						<OfferCard
							title="4. Custom AI Tools for Teams"
							subtitle="AI tools tailored to marketing, sales, engineering, HR, and legal."
							points={['AI code reviewer', 'AI SEO/blog generator', 'AI contract analyzer', 'AI email writer & training assistant']}
						/>
					</div>
				</section>


				<CoreOffers />

				<TechStackShowcase />

				{/* Contact / CTA */}
				<section id="contact" className="border-t border-slate-800 pt-10 mt-4 space-y-6">
					<div className="space-y-3">
						<h3 className="animate-fade-in-up text-lg font-semibold">Ready to explore serverless &amp; AI for your team?</h3>
						<p className="animate-fade-in-up-delay max-w-xl text-sm text-slate-400">
							Send a quick note with your current stack and challenges. I&apos;ll reply with a short, actionable plan and possible next steps.
						</p>
					</div>

					<div className="flex flex-wrap gap-3">
						<a
							href="mailto:you@example.com?subject=Serverless%20%2B%20AI%20Consultation"
							className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-md shadow-emerald-500/30 transition hover:bg-emerald-400"
						>
							<MailIcon className="h-4 w-4" />
							Email Me Your Use Case
						</a>
						<a
							href="https://wa.me/1234567890"
							target="_blank"
							rel="noreferrer"
							className="inline-flex items-center gap-2 rounded-full border border-emerald-400/60 bg-slate-950 px-5 py-2.5 text-sm font-semibold text-emerald-300 shadow-inner shadow-emerald-500/20 transition hover:bg-emerald-500/10"
						>
							<WhatsappIcon className="h-4 w-4" />
							Chat on WhatsApp
						</a>
						<a
							href="https://www.fiverr.com/onepunchmantwo"
							target="_blank"
							rel="noreferrer"
							className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900 px-5 py-2.5 text-sm font-semibold text-slate-100 shadow-inner shadow-slate-900 transition hover:border-emerald-400 hover:text-emerald-300"
						>
							<FiverrIcon className="h-4 w-4" />
							View My Fiverr Profile
						</a>
					</div>
				</section>
			</div>

			{/* Creative footer */}
			<footer className="border-t border-slate-800 bg-slate-950/95">
				<div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-5 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
					<p className="flex items-center gap-2">
						<span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-300">⚡</span>
						Serverless backends &amp; AI pipelines that pay for themselves in months, not years.
					</p>
					<p className="text-[11px] sm:text-xs">
						© {new Date().getFullYear()} Serverless &amp; AI Studio. Built with Next.js, Tailwind, and lots of ☕.
					</p>
				</div>
			</footer>

			{/* Animations & keyframes */}
			<style jsx global>{`
				/* Text glow */
				.animate-glow-text {
					animation: glowText 4s ease-in-out infinite alternate;
				}
				@keyframes glowText {
					0% {
						text-shadow: 0 0 4px rgba(45, 212, 191, 0.5);
					}
					100% {
						text-shadow: 0 0 16px rgba(56, 189, 248, 0.9);
					}
				}

				/* Fade-up animations */
				.animate-fade-in-up {
					opacity: 0;
					transform: translateY(12px);
					animation: fadeInUp 0.8s ease forwards;
				}
				.animate-fade-in-up-delay {
					opacity: 0;
					transform: translateY(12px);
					animation: fadeInUp 0.9s ease forwards;
				}
				.animate-fade-in-up-delay-2 {
					opacity: 0;
					transform: translateY(12px);
					animation: fadeInUp 1s ease forwards;
				}
				.animate-fade-in-up-delay-3 {
					opacity: 0;
					transform: translateY(12px);
					animation: fadeInUp 1.1s ease forwards;
				}
				@keyframes fadeInUp {
					0% {
						opacity: 0;
						transform: translateY(12px);
					}
					100% {
						opacity: 1;
						transform: translateY(0);
					}
				}

				/* Fade-in-left */
				.animate-fade-in-left {
					opacity: 0;
					transform: translateX(12px);
					animation: fadeInLeft 0.9s ease forwards;
				}
				@keyframes fadeInLeft {
					0% {
						opacity: 0;
						transform: translateX(12px);
					}
					100% {
						opacity: 1;
						transform: translateX(0);
					}
				}

				/* SVG stroke draw */
				.animate-stroke-draw .hero-stroke-text {
					stroke-dasharray: 520;
					stroke-dashoffset: 520;
					animation: strokeDraw 4s ease forwards, strokeGlow 4s ease-in-out 4s infinite alternate;
				}
				@keyframes strokeDraw {
					to {
						stroke-dashoffset: 0;
					}
				}
				@keyframes strokeGlow {
					0% {
						filter: drop-shadow(0 0 4px rgba(16, 185, 129, 0.6));
					}
					100% {
						filter: drop-shadow(0 0 16px rgba(56, 189, 248, 0.9));
					}
				}
			`}</style>
		</main>
	);
}

/* Reusable components */

function OfferCard({ title, subtitle, points }: { title: string; subtitle: string; points: string[] }) {
	return (
		<div className="flex flex-col rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-lg animate-fade-in-up">
			<h3 className="text-lg font-semibold">{title}</h3>
			<p className="mt-2 text-sm">{subtitle}</p>
			<ul className="mt-4 space-y-2 text-sm">
				{points.map((p) => (
					<li key={p} className="flex items-start gap-2">
						<span className="mt-0.5 inline-flex h-4 w-4 flex-none items-center justify-center rounded-full bg-emerald-500/20 text-[10px] text-emerald-300">
							✓
						</span>
						<span>{p}</span>
					</li>
				))}
			</ul>
		</div>
	);
}

function LogoPill({ label }: { label: string }) {
	return <span className="rounded-full bg-slate-900 px-3 py-1 text-[11px] text-slate-200">{label}</span>;
}

/* SVG Icons */

function MobileMenuIcon({ open }: { open: boolean }) {
	return (
		<svg className="h-5 w-5 text-slate-100" viewBox="0 0 24 24" aria-hidden="true">
			<g className="transition-transform duration-300 ease-out">
				{/* Top line */}
				<rect
					x="4"
					y="7"
					width="16"
					height="1.7"
					rx="0.85"
					className="origin-center transition-all duration-300 ease-out"
					style={{
						transform: open ? 'translateY(5px) rotate(45deg)' : 'translateY(0px) rotate(0deg)',
					}}
					fill="currentColor"
				/>
				{/* Middle line */}
				<rect
					x="4"
					y="11.15"
					width="16"
					height="1.7"
					rx="0.85"
					className="origin-center transition-all duration-300 ease-out"
					style={{
						opacity: open ? 0 : 1,
					}}
					fill="currentColor"
				/>
				{/* Bottom line */}
				<rect
					x="4"
					y="15.3"
					width="16"
					height="1.7"
					rx="0.85"
					className="origin-center transition-all duration-300 ease-out"
					style={{
						transform: open ? 'translateY(-5px) rotate(-45deg)' : 'translateY(0px) rotate(0deg)',
					}}
					fill="currentColor"
				/>
			</g>
		</svg>
	);
}

/* Minimal branded SVG icons (simple, not official logos) */

function SQSSimpleIcon(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg viewBox="0 0 24 24" {...props}>
			<rect x="4" y="6" width="16" height="12" rx="2" fill="none" stroke="currentColor" strokeWidth="1.4" />
			<polyline points="7 12 10 12 12 9 14 15 17 15" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
		</svg>
	);
}

/* Footer icons */

function MailIcon(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg viewBox="0 0 24 24" {...props}>
			<rect x="3.5" y="5" width="17" height="14" rx="2" fill="none" stroke="currentColor" strokeWidth="1.4" />
			<polyline points="4.5 7.5 12 12 19.5 7.5" fill="none" stroke="currentColor" strokeWidth="1.2" />
		</svg>
	);
}

function WhatsappIcon(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg viewBox="0 0 24 24" {...props}>
			<path
				d="M4.5 19.5 5.3 16A7.1 7.1 0 0 1 12 4.8a7.2 7.2 0 0 1 7.2 7.2A7.2 7.2 0 0 1 12 19.2 7.3 7.3 0 0 1 8 18.1Z"
				fill="none"
				stroke="currentColor"
				strokeWidth="1.4"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M10.2 9.5c-.1-.4-.3-.4-.5-.4h-.4a.9.9 0 0 0-.7.3 1.8 1.8 0 0 0-.5 1.3 3.1 3.1 0 0 0 .6 1.7 6.3 6.3 0 0 0 2.4 2.2 4.9 4.9 0 0 0 1.5.6 1.8 1.8 0 0 0 1.2-.3 1.4 1.4 0 0 0 .5-.9c.1-.3 0-.5-.1-.6l-.6-.3c-.2-.1-.5-.2-.6 0l-.3.4c-.1.1-.2.2-.4.1a4.8 4.8 0 0 1-2.1-1.8c-.1-.1 0-.2.1-.3l.3-.4c.1-.2.1-.3.1-.5Z"
				fill="currentColor"
			/>
		</svg>
	);
}

function FiverrIcon(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg viewBox="0 0 24 24" {...props}>
			<rect x="3.5" y="4" width="17" height="16" rx="3" fill="none" stroke="currentColor" strokeWidth="1.4" />
			<text x="8" y="15.2" fontSize="7" fontFamily="system-ui, sans-serif" fontWeight="700" fill="currentColor">
				fi
			</text>
		</svg>
	);
}
