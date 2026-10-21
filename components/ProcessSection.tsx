'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

import { process } from '@/content/site';

import SectionHeading from './ui/SectionHeading';

const EASE = [0.22, 1, 0.36, 1] as const;

// Timeline whose connecting line draws itself as you scroll
const ProcessSection = () => {
	const ref = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({ target: ref, offset: ['start 75%', 'end 60%'] });
	const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

	return (
		<section id="process" className="relative mx-auto max-w-7xl px-5 py-32 sm:px-8">
			<SectionHeading eyebrow="How it works" title="From first call to" accent="production." align="center" />

			<div ref={ref} className="relative mt-20">
				{/* connecting line (desktop) */}
				<div className="absolute left-0 right-0 top-6 hidden h-px bg-white/10 lg:block">
					<motion.div className="h-full origin-left bg-linear-to-r from-emerald-400 via-cyan-400 to-violet-400" style={{ scaleX }} />
				</div>

				<div className="grid gap-12 lg:grid-cols-4 lg:gap-8">
					{process.map((p, i) => (
						<motion.div
							key={p.step}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, amount: 0.5 }}
							transition={{ duration: 0.8, delay: i * 0.12, ease: EASE }}
							className="relative"
						>
							<div className="relative flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-background font-mono text-sm text-white">
								<span className="absolute inset-0 animate-ping rounded-full border border-emerald-400/30 [animation-duration:3s]" />
								{p.step}
							</div>
							<h3 className="mt-6 text-2xl font-medium text-white">{p.title}</h3>
							<p className="mt-3 max-w-xs text-sm leading-relaxed text-muted">{p.description}</p>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default ProcessSection;
