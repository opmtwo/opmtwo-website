'use client';

import FiverrIcon from '@/icons/FiverrIcon';
import { MailIcon } from 'lucide-react';
import { AnimatePresence, motion, useScroll, useTransform } from 'motion/react';
import dynamic from 'next/dynamic';
import React, { useEffect, useState } from 'react';

import { fiverrUrl, hero, mailto } from '@/content/site';

import { MagneticButton } from './ui/Buttons';
import CountUp from './ui/CountUp';

// WebGL only runs in the browser
const HeroScene = dynamic(() => import('./three/HeroScene'), { ssr: false });

const EASE = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
	hidden: { opacity: 0, y: 30, filter: 'blur(10px)' },
	visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 1, ease: EASE } },
};

export const Hero: React.FC = () => {
	const [index, setIndex] = useState(0);
	const { scrollY } = useScroll();
	const contentY = useTransform(scrollY, [0, 600], [0, -80]);
	const contentOpacity = useTransform(scrollY, [0, 500], [1, 0]);

	useEffect(() => {
		const interval = setInterval(() => setIndex((prev) => (prev + 1) % hero.rotating.length), 2600);
		return () => clearInterval(interval);
	}, []);

	const phrase = hero.rotating[index];

	return (
		<section id="hero" className="relative isolate flex min-h-[100svh] flex-col overflow-hidden">
			{/* Ambient light */}
			<div aria-hidden className="pointer-events-none absolute inset-0 -z-20">
				<div className="absolute left-1/2 top-[-20%] h-[60rem] w-[60rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(34,211,238,0.14),transparent_60%)]" />
				<div className="absolute right-[-10%] top-[20%] h-[40rem] w-[40rem] rounded-full bg-[radial-gradient(circle,rgba(167,139,250,0.14),transparent_60%)]" />
				<div
					className="absolute inset-0 opacity-[0.18] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]"
					style={{
						backgroundImage:
							'linear-gradient(to right, rgb(255 255 255 / 0.12) 1px, transparent 1px), linear-gradient(to bottom, rgb(255 255 255 / 0.12) 1px, transparent 1px)',
						backgroundSize: '72px 72px',
					}}
				/>
			</div>

			{/* 3D scene: full-bleed behind on mobile, right half on desktop */}
			<motion.div
				initial={{ opacity: 0, scale: 0.9 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ duration: 2, ease: EASE, delay: 0.3 }}
				className="absolute inset-0 -z-10 opacity-60 lg:left-[38%] lg:opacity-100"
			>
				<HeroScene />
			</motion.div>
			<div aria-hidden className="pointer-events-none absolute inset-0 -z-10 bg-linear-to-r from-background via-background/70 to-transparent lg:via-background/40" />
			<div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-40 bg-linear-to-t from-background to-transparent" />

			<motion.div style={{ y: contentY, opacity: contentOpacity }} className="mx-auto flex w-full max-w-7xl flex-1 items-center px-5 pb-24 pt-36 sm:px-8">
				<motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.12, delayChildren: 0.4 } } }} className="max-w-2xl">
					{/* Eyebrow */}
					<motion.a variants={fadeUp} href={fiverrUrl} target="_blank" rel="noreferrer" className="glass group relative inline-flex items-center gap-3 rounded-full py-1.5 pl-1.5 pr-4 text-xs">
						<span aria-hidden className="border-beam pointer-events-none absolute inset-0 rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
						<span className="rounded-full bg-emerald-400/15 px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-emerald-300">★ 5.0</span>
						<span className="text-white/80">{hero.eyebrow}</span>
						<span className="text-muted transition-transform duration-300 group-hover:translate-x-1 group-hover:text-white">→</span>
					</motion.a>

					{/* Headline */}
					<motion.h1 variants={fadeUp} className="mt-8 text-[clamp(2.75rem,7vw,5.75rem)] font-medium leading-[0.95] text-shine">
						{hero.titleLead}{' '}
						<span className="font-serif font-normal italic tracking-normal text-gradient pr-2">{hero.titleAccent}</span>
						<br className="hidden sm:block" /> {hero.titleTail}
					</motion.h1>

					{/* Rotating level */}
					<motion.div variants={fadeUp} className="mt-7 flex h-9 items-center gap-3 font-mono text-sm text-muted sm:text-base">
						<span className="flex gap-1" aria-hidden>
							{hero.rotating.map((_, i) => (
								<span key={i} className={`h-1.5 w-5 rounded-full transition-colors duration-500 ${i <= index ? 'bg-emerald-400' : 'bg-white/10'}`} />
							))}
						</span>
						<span>L{index + 1}</span>
						<span className="relative block h-[1.6em] min-w-[18ch] overflow-hidden">
							<AnimatePresence mode="wait">
								<motion.span
									key={phrase}
									className="absolute inset-x-0 top-0 block whitespace-nowrap leading-[1.6em] text-white"
									initial={{ y: '110%', opacity: 0 }}
									animate={{ y: '0%', opacity: 1 }}
									exit={{ y: '-110%', opacity: 0 }}
									transition={{ duration: 0.45, ease: EASE }}
								>
									{phrase}
								</motion.span>
							</AnimatePresence>
						</span>
					</motion.div>

					<motion.p variants={fadeUp} className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
						{hero.description}
					</motion.p>

					<motion.div variants={fadeUp} className="mt-10 flex flex-wrap items-center gap-3">
						<MagneticButton href={mailto} icon={<MailIcon className="h-4 w-4" />}>
							{hero.primaryCta}
						</MagneticButton>
						<MagneticButton href={fiverrUrl} target="_blank" rel="noreferrer" variant="ghost" icon={<FiverrIcon className="h-4 w-4" />}>
							{hero.secondaryCta}
						</MagneticButton>
					</motion.div>

					{/* Stats */}
					<motion.dl variants={fadeUp} className="mt-14 grid max-w-xl grid-cols-2 gap-x-8 gap-y-6 border-t border-line pt-8 sm:grid-cols-4">
						{hero.stats.map((s) => (
							<div key={s.label}>
								<dt className="sr-only">{s.label}</dt>
								<dd className="text-2xl font-medium text-white sm:text-3xl">
									<CountUp value={s.value} decimals={s.decimals} suffix={s.suffix} />
								</dd>
								<p className="mt-1 text-xs text-muted">
									{s.prefix}
									{s.label}
								</p>
							</div>
						))}
					</motion.dl>
				</motion.div>
			</motion.div>

			{/* Scroll cue */}
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 2 }}
				className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-muted sm:flex"
			>
				Scroll
				<span className="relative h-10 w-px overflow-hidden bg-white/10">
					<motion.span className="absolute inset-x-0 top-0 h-4 bg-emerald-400" animate={{ y: [-16, 40] }} transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }} />
				</span>
			</motion.div>
		</section>
	);
};

export default Hero;
