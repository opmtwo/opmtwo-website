'use client';

import { Check, X } from 'lucide-react';
import { motion } from 'motion/react';
import React from 'react';

import { problemSolution } from '@/content/site';

import SectionHeading from './ui/SectionHeading';

const EASE = [0.22, 1, 0.36, 1] as const;

const list = {
	hidden: {},
	visible: { transition: { staggerChildren: 0.07, delayChildren: 0.2 } },
};

const row = {
	hidden: { opacity: 0, x: -16 },
	visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: EASE } },
};

export const ProblemSolutionSection: React.FC = () => {
	return (
		<section id="why" className="relative mx-auto max-w-7xl px-5 py-32 sm:px-8">
			<SectionHeading
				eyebrow={problemSolution.eyebrow}
				title={problemSolution.title}
				accent={problemSolution.titleAccent}
				description={problemSolution.description}
			/>

			<div className="mt-16 grid gap-5 [perspective:1400px] lg:grid-cols-2">
				{/* Problem */}
				<motion.div
					initial={{ opacity: 0, y: 40, rotateX: 14 }}
					whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
					viewport={{ once: true, amount: 0.3 }}
					transition={{ duration: 1, ease: EASE }}
					className="glass relative overflow-hidden rounded-3xl p-8 [transform-origin:bottom] sm:p-10"
				>
					<div aria-hidden className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-rose-500/10 blur-3xl" />
					<p className="font-mono text-[11px] uppercase tracking-[0.25em] text-rose-300/80">Without a plan</p>
					<h3 className="mt-4 text-2xl font-medium text-white/90 sm:text-3xl">AI that stalls at the demo.</h3>
					<motion.ul variants={list} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-8 space-y-4">
						{problemSolution.problems.map((p) => (
							<motion.li key={p} variants={row} className="flex items-start gap-3 text-muted">
								<span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-rose-500/10 text-rose-300">
									<X className="h-3 w-3" />
								</span>
								{p}
							</motion.li>
						))}
					</motion.ul>
				</motion.div>

				{/* Solution */}
				<motion.div
					initial={{ opacity: 0, y: 40, rotateX: 14 }}
					whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
					viewport={{ once: true, amount: 0.3 }}
					transition={{ duration: 1, delay: 0.15, ease: EASE }}
					className="conic-border rounded-3xl [transform-origin:bottom]"
				>
					<div className="relative h-full overflow-hidden rounded-[calc(1.5rem-1px)] bg-[#070a10] p-8 sm:p-10">
						<div aria-hidden className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-emerald-400/15 blur-3xl" />
						<p className="relative font-mono text-[11px] uppercase tracking-[0.25em] text-emerald-300">With me</p>
						<h3 className="relative mt-4 text-2xl font-medium text-white sm:text-3xl">AI that climbs the levels in production.</h3>
						<motion.ul variants={list} initial="hidden" whileInView="visible" viewport={{ once: true }} className="relative mt-8 space-y-4">
							{problemSolution.solutions.map((s) => (
								<motion.li key={s} variants={row} className="flex items-start gap-3 text-white/85">
									<span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-400/15 text-emerald-300">
										<Check className="h-3 w-3" />
									</span>
									{s}
								</motion.li>
							))}
						</motion.ul>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default ProblemSolutionSection;
