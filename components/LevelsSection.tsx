'use client';

import { AnimatePresence, motion, useMotionValueEvent, useScroll, useSpring, useTransform } from 'motion/react';
import { useRef, useState } from 'react';

import { levels } from '@/content/site';

import SectionHeading from './ui/SectionHeading';

const EASE = [0.22, 1, 0.36, 1] as const;

// Isometric stack of five glass plates; the active level lifts out and glows
const LevelStack = ({ active, onSelect }: { active: number; onSelect: (i: number) => void }) => {
	return (
		<div className="relative mx-auto aspect-square w-full max-w-[13rem] [perspective:1600px] sm:max-w-[20rem] lg:max-w-[26rem] 3xl:max-w-[32rem]">
			<div className="absolute inset-0 flex items-center justify-center [transform-style:preserve-3d] [transform:rotateX(58deg)_rotateZ(-40deg)]">
				{levels.map((l, i) => {
					const isActive = i === active;
					const z = i * 46 + (isActive ? 40 : 0);
					return (
						<motion.button
							key={l.level}
							aria-label={`Level ${l.level}: ${l.name}`}
							onClick={() => onSelect(i)}
							className="absolute h-[62%] w-[62%] cursor-pointer rounded-[28px] border"
							animate={{
								z,
								scale: isActive ? 1.04 : 1,
								borderColor: isActive ? l.color : 'rgba(255,255,255,0.12)',
								backgroundColor: isActive ? `${l.color}2e` : 'rgba(255,255,255,0.025)',
								boxShadow: isActive ? `0 0 80px -10px ${l.color}, inset 0 0 40px -10px ${l.color}` : '0 0 0 0 rgba(0,0,0,0)',
							}}
							transition={{ duration: 0.7, ease: EASE }}
							style={{ transformStyle: 'preserve-3d' }}
						>
							{/* grid etched into each plate */}
							<span
								aria-hidden
								className="absolute inset-0 rounded-[28px] opacity-40"
								style={{
									backgroundImage: `linear-gradient(to right, ${isActive ? l.color : 'rgba(255,255,255,0.15)'} 1px, transparent 1px), linear-gradient(to bottom, ${isActive ? l.color : 'rgba(255,255,255,0.15)'} 1px, transparent 1px)`,
									backgroundSize: '22px 22px',
									maskImage: 'radial-gradient(circle at center, black 30%, transparent 75%)',
								}}
							/>
							<span className="absolute left-5 top-4 font-mono text-[11px] tracking-widest" style={{ color: isActive ? l.color : 'rgba(255,255,255,0.4)' }}>
								L{l.level}
							</span>
						</motion.button>
					);
				})}
			</div>
		</div>
	);
};

const LevelsSection = () => {
	const ref = useRef<HTMLDivElement>(null);
	const [active, setActive] = useState(0);
	const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] });
	const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });
	const barHeight = useTransform(progress, [0, 1], ['0%', '100%']);

	useMotionValueEvent(scrollYProgress, 'change', (v) => {
		setActive(Math.min(levels.length - 1, Math.max(0, Math.floor(v * levels.length))));
	});

	// clicking a plate scrolls to that level's slice of the pinned section
	const select = (i: number) => {
		const el = ref.current;
		if (!el) return;
		const top = el.getBoundingClientRect().top + window.scrollY;
		const span = el.offsetHeight - window.innerHeight;
		window.scrollTo({ top: top + span * ((i + 0.5) / levels.length), behavior: 'smooth' });
	};

	const level = levels[active];

	return (
		<section id="levels" className="relative">
			<div className="container-page pt-20 sm:pt-24 lg:pt-32 3xl:pt-40">
				<SectionHeading
					eyebrow="The framework"
					title="Five levels of AI."
					accent="One partner."
					description="Every AI capability sits on a ladder — from assistants that talk, to systems that run entire functions. I design and ship at every rung."
				/>
			</div>

			{/* Tall wrapper drives the pinned stage below */}
			<div ref={ref} style={{ height: `${levels.length * 80 + 40}vh` }} className="relative">
				<div className="sticky top-0 flex h-[100svh] items-center overflow-hidden">
					<div className="container-page grid items-center gap-6 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
						<div className="relative">
							<LevelStack active={active} onSelect={select} />
						</div>

						<div className="flex gap-6 sm:gap-10">
							{/* progress rail */}
							<div className="relative hidden w-px shrink-0 bg-white/10 sm:block">
								<motion.div className="absolute inset-x-0 top-0 bg-linear-to-b from-emerald-400 via-cyan-400 to-pink-400" style={{ height: barHeight }} />
							</div>

							<div className="flex-1 sm:min-h-[24rem]">
								<div className="flex flex-wrap gap-2">
									{levels.map((l, i) => (
										<button
											key={l.level}
											onClick={() => select(i)}
											className="cursor-pointer rounded-full border px-3 py-1 font-mono text-[11px] tracking-wider transition-colors"
											style={{
												borderColor: i === active ? l.color : 'rgba(255,255,255,0.1)',
												color: i === active ? l.color : 'rgba(255,255,255,0.5)',
											}}
										>
											L{l.level}
										</button>
									))}
								</div>

								<AnimatePresence mode="wait">
									<motion.div
										key={level.level}
										initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
										animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
										exit={{ opacity: 0, y: -20, filter: 'blur(8px)' }}
										transition={{ duration: 0.5, ease: EASE }}
										className="mt-5 sm:mt-8"
									>
										<p className="font-mono text-xs uppercase tracking-[0.25em]" style={{ color: level.color }}>
											Level {level.level} · {level.tagline}
										</p>
										<h3 className="mt-3 text-3xl font-medium text-white sm:mt-4 sm:text-5xl">{level.name}</h3>
										<p className="mt-3 max-w-lg text-sm leading-relaxed text-muted sm:mt-5 sm:text-lg">{level.description}</p>

										<ul className="mt-5 space-y-2 sm:mt-8 sm:space-y-3">
											{level.builds.map((b) => (
												<li key={b} className="flex items-start gap-3 text-sm text-white/85 sm:text-base">
													<span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: level.color, boxShadow: `0 0 12px ${level.color}` }} />
													{b}
												</li>
											))}
										</ul>

										<div className="glass mt-8 hidden items-center gap-3 rounded-2xl px-4 py-3 text-sm sm:inline-flex">
											<span className="font-mono text-[10px] uppercase tracking-widest text-muted">Outcome</span>
											<span className="text-white">{level.outcome}</span>
										</div>
									</motion.div>
								</AnimatePresence>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default LevelsSection;
