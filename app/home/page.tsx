'use client';

import React, { useState } from 'react';

import CallToAction from '@/components/CallToAction';
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
import { TechStack } from '@/components/TechStack';
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

			<ReelsSection />

			<TestimonialsSection />

			<CaseStudiesSection />

			<ProblemSolutionSection />

			<FaqSection />

			<ServicesShowcase />

			{/* <ServicesSection /> */}

			{/* <CoreOffersSection /> */}

			{/* <Hero /> */}

			{/* <ReadyToTrySection /> */}

			{/* Page content */}

			{/* Hero Section */}

			<div className="mx-auto max-w-6xl px-4 pb-16 pt-24 sm:px-6 lg:px-8 lg:pt-28 space-y-20">
				{/* <CoreOffers /> */}

				<TechStack />

				{/* <CallToAction /> */}
			</div>

			{/* Creative footer */}
			{/* <footer className="border-t border-slate-800 bg-slate-950/95">
				<div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-5 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
					<p className="flex items-center gap-2">
						<span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-300">⚡</span>
						Serverless backends &amp; AI pipelines that pay for themselves in months, not years.
					</p>
					<p className="text-[11px] sm:text-xs">
						© {new Date().getFullYear()} Serverless &amp; AI Studio. Built with Next.js, Tailwind, and lots of ☕.
					</p>
				</div>
			</footer> */}

			<ReadyToTrySection />

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
