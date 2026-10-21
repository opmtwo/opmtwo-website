'use client';

import { ArrowLeft, ArrowRight } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import React, { useCallback, useEffect, useRef, useState } from 'react';

import { fiverrUrl, testimonials } from '@/content/site';

import SectionHeading from './ui/SectionHeading';

const EASE = [0.22, 1, 0.36, 1] as const;
const INTERVAL = 7000;

export const CustomerTestimonials: React.FC = () => {
	const [[index, direction], setState] = useState([0, 1]);
	const [paused, setPaused] = useState(false);
	const touchX = useRef<number | null>(null);
	const len = testimonials.length;
	const t = testimonials[index];

	const go = useCallback((dir: number) => setState(([i]) => [(i + dir + len) % len, dir]), [len]);

	useEffect(() => {
		if (paused) return;
		const id = setTimeout(() => go(1), INTERVAL);
		return () => clearTimeout(id);
	}, [index, paused, go]);

	return (
		<section id="testimonials" className="relative overflow-hidden py-32">
			<div aria-hidden className="pointer-events-none absolute left-1/2 top-1/2 h-[40rem] w-[60rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(167,139,250,0.1),transparent_60%)]" />

			<div className="relative mx-auto max-w-5xl px-5 sm:px-8">
				<SectionHeading
					eyebrow="120+ five-star reviews"
					title="Trusted by founders"
					accent="& CTOs worldwide."
					align="center"
				/>

				<div
					className="relative mt-16 [perspective:1400px]"
					onMouseEnter={() => setPaused(true)}
					onMouseLeave={() => setPaused(false)}
					onTouchStart={(e) => (touchX.current = e.changedTouches[0].clientX)}
					onTouchEnd={(e) => {
						if (touchX.current === null) return;
						const d = touchX.current - e.changedTouches[0].clientX;
						if (Math.abs(d) > 50) go(d > 0 ? 1 : -1);
						touchX.current = null;
					}}
				>
					<div className="glass relative min-h-[22rem] overflow-hidden rounded-[2rem] px-6 py-12 sm:px-14 sm:py-16">
						<span aria-hidden className="absolute left-6 top-2 font-serif text-[10rem] leading-none text-white/[0.04] sm:left-10">
							“
						</span>

						<AnimatePresence mode="wait" custom={direction}>
							<motion.figure
								key={index}
								custom={direction}
								initial={{ opacity: 0, rotateY: direction * 25, x: direction * 60, filter: 'blur(8px)' }}
								animate={{ opacity: 1, rotateY: 0, x: 0, filter: 'blur(0px)' }}
								exit={{ opacity: 0, rotateY: direction * -25, x: direction * -60, filter: 'blur(8px)' }}
								transition={{ duration: 0.6, ease: EASE }}
								className="relative"
							>
								<div className="flex gap-1 text-emerald-300" aria-label="5 out of 5 stars">
									{Array.from({ length: 5 }).map((_, i) => (
										<span key={i}>★</span>
									))}
								</div>
								<blockquote className="mt-6 font-serif text-2xl leading-snug text-white sm:text-3xl md:text-[2.1rem]">{t.quote}</blockquote>
								<figcaption className="mt-10 flex items-center gap-4">
									<span className="flex h-11 w-11 items-center justify-center rounded-full bg-linear-to-br from-emerald-400/30 via-cyan-400/20 to-violet-400/30 text-sm font-medium text-white">
										{t.name[0]}
									</span>
									<div>
										<div className="text-sm font-medium text-white">{t.name}</div>
										<div className="text-xs text-muted">
											{t.role} · {t.location}
										</div>
									</div>
								</figcaption>
							</motion.figure>
						</AnimatePresence>
					</div>

					{/* Controls + progress */}
					<div className="mt-6 flex items-center justify-between gap-4">
						<div className="flex flex-1 gap-2">
							{testimonials.map((item, i) => (
								<button
									key={item.name}
									onClick={() => setState([i, i > index ? 1 : -1])}
									aria-label={`Show review from ${item.name}`}
									className="relative h-1 flex-1 cursor-pointer overflow-hidden rounded-full bg-white/10"
								>
									{i === index && (
										<motion.span
											key={`${index}-${paused}`}
											className="absolute inset-y-0 left-0 bg-emerald-400"
											initial={{ width: '0%' }}
											animate={{ width: paused ? '0%' : '100%' }}
											transition={{ duration: paused ? 0 : INTERVAL / 1000, ease: 'linear' }}
										/>
									)}
									{i < index && <span className="absolute inset-0 bg-white/30" />}
								</button>
							))}
						</div>
						<div className="flex gap-2">
							<button aria-label="Previous review" onClick={() => go(-1)} className="glass flex h-10 w-10 cursor-pointer items-center justify-center rounded-full transition hover:bg-white/10">
								<ArrowLeft className="h-4 w-4" />
							</button>
							<button aria-label="Next review" onClick={() => go(1)} className="glass flex h-10 w-10 cursor-pointer items-center justify-center rounded-full transition hover:bg-white/10">
								<ArrowRight className="h-4 w-4" />
							</button>
						</div>
					</div>

					<p className="mt-8 text-center text-sm text-muted">
						Read every review on{' '}
						<a href={fiverrUrl} target="_blank" rel="noreferrer" className="text-white underline decoration-white/30 underline-offset-4 hover:decoration-emerald-400">
							Fiverr
						</a>
					</p>
				</div>
			</div>
		</section>
	);
};

export default CustomerTestimonials;
