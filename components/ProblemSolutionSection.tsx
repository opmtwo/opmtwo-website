'use client';

import { ArrowRight, Check, X } from 'lucide-react';
import { motion } from 'motion/react';
import React from 'react';

import { levels, problemSolution } from '@/content/site';

import SectionHeading from './ui/SectionHeading';

const EASE = [0.22, 1, 0.36, 1] as const;

// Five-segment gauge: most teams sit at L1, the band shows where I take them
const LevelGauge = () => (
	<motion.div
		initial={{ opacity: 0, y: 30 }}
		whileInView={{ opacity: 1, y: 0 }}
		viewport={{ once: true, amount: 0.5 }}
		transition={{ duration: 0.9, delay: 0.2, ease: EASE }}
		className="relative overflow-hidden rounded-3xl bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.015))] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.1),inset_0_0_0_1px_rgba(255,255,255,0.06)] sm:p-7"
	>
		<p className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/40">AI maturity · where teams are</p>

		<div className="relative mt-9">
			{/* "most teams" marker above L1 */}
			<span className="absolute -top-7 left-0 flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-rose-300/80">
				<span className="h-1.5 w-1.5 rounded-full bg-rose-400 shadow-[0_0_8px_#fb7185]" />
				Most teams
			</span>
			{/* "where I take you" marker above L3–L5 */}
			<span className="absolute -top-7 right-0 font-mono text-[10px] uppercase tracking-wider text-emerald-300/90">Where I take you</span>

			<div className="grid grid-cols-5 gap-1.5">
				{levels.map((l, i) => (
					<motion.div
						key={l.level}
						initial={{ opacity: 0, scaleY: 0.4 }}
						whileInView={{ opacity: 1, scaleY: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.4 + i * 0.08, ease: EASE }}
						className="h-2.5 origin-bottom rounded-full"
						style={{
							background: i === 0 ? '#fb7185' : `linear-gradient(90deg, ${l.color}, ${levels[Math.min(i + 1, 4)].color})`,
							opacity: i === 0 ? 1 : 0.35 + i * 0.15,
							boxShadow: i >= 2 ? `0 0 18px -2px ${l.color}` : undefined,
						}}
					/>
				))}
			</div>

			<div className="mt-3 grid grid-cols-5 gap-1.5">
				{levels.map((l) => (
					<div key={l.level}>
						<p className="font-mono text-[10px] text-white/50">L{l.level}</p>
						<p className="mt-0.5 hidden text-[11px] leading-tight text-white/35 sm:block">{l.name.replace(' AI', '')}</p>
					</div>
				))}
			</div>
		</div>

		<p className="mt-7 border-t border-white/[0.06] pt-5 text-sm leading-relaxed text-white/55">
			The gap between a demo and a dependable system is reasoning, action and scale — the three levels most teams never reach.
		</p>
	</motion.div>
);

// One ledger row: the problem (struck through on reveal) beside its answer
const LedgerRow = ({ problem, solution, index }: { problem: string; solution: string; index: number }) => (
	<motion.li
		initial="hidden"
		whileInView="visible"
		viewport={{ once: true, amount: 0.6 }}
		className="group relative grid items-center gap-3 px-5 py-5 transition-colors duration-700 hover:bg-white/[0.02] sm:px-8 md:grid-cols-[1fr_auto_1fr] md:gap-8 md:py-6"
	>
		{/* problem */}
		<motion.div
			variants={{ hidden: { opacity: 0, x: -14 }, visible: { opacity: 1, x: 0, transition: { duration: 0.7, delay: index * 0.05, ease: EASE } } }}
			className="flex items-start gap-3.5"
		>
			<span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-rose-500/10 text-rose-300/80 shadow-[inset_0_0_0_1px_rgba(251,113,133,0.2)]">
				<X className="h-3 w-3" />
			</span>
			{/* strike drawn through every wrapped line of the problem as it reveals */}
			<span className="text-[15px] leading-snug text-white/45">
				<motion.span
					variants={{
						hidden: { backgroundSize: '0% 1px' },
						visible: { backgroundSize: '100% 1px', transition: { duration: 1.1, delay: 0.35 + index * 0.05, ease: EASE } },
					}}
					style={{
						backgroundImage: 'linear-gradient(rgba(253,164,175,0.35), rgba(253,164,175,0.35))',
						backgroundRepeat: 'no-repeat',
						backgroundPosition: '0 58%',
					}}
				>
					{problem}
				</motion.span>
			</span>
		</motion.div>

		{/* connector */}
		<div className="flex items-center gap-2 pl-[1.6rem] md:pl-0">
			<motion.span
				aria-hidden
				variants={{ hidden: { scaleX: 0 }, visible: { scaleX: 1, transition: { duration: 0.8, delay: 0.25 + index * 0.05, ease: EASE } } }}
				className="hidden h-px w-14 origin-left bg-linear-to-r from-rose-400/40 via-white/20 to-emerald-400/70 md:block lg:w-20"
			/>
			<span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/[0.04] text-white/50 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)] transition-colors duration-700 group-hover:bg-emerald-400/15 group-hover:text-emerald-300">
				<ArrowRight className="h-3.5 w-3.5 rotate-90 md:rotate-0" />
			</span>
		</div>

		{/* solution */}
		<motion.div
			variants={{ hidden: { opacity: 0, x: 14 }, visible: { opacity: 1, x: 0, transition: { duration: 0.7, delay: 0.3 + index * 0.05, ease: EASE } } }}
			className="flex items-start gap-3.5"
		>
			<span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-400/15 text-emerald-300 shadow-[inset_0_0_0_1px_rgba(52,211,153,0.3),0_0_14px_-4px_rgba(52,211,153,0.7)]">
				<Check className="h-3 w-3" />
			</span>
			<span className="text-[15px] font-medium leading-snug text-white">{solution}</span>
		</motion.div>
	</motion.li>
);

export const ProblemSolutionSection: React.FC = () => {
	return (
		<section id="why" className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
			<div aria-hidden className="pointer-events-none absolute right-0 top-40 h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,rgba(251,113,133,0.06),transparent_65%)]" />
			<div aria-hidden className="pointer-events-none absolute bottom-20 left-0 h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,rgba(52,211,153,0.07),transparent_65%)]" />

			<div className="relative grid items-end gap-10 lg:grid-cols-[1.25fr_1fr] lg:gap-16">
				<SectionHeading
					eyebrow={problemSolution.eyebrow}
					title={problemSolution.title}
					accent={problemSolution.titleAccent}
					description={problemSolution.description}
				/>
				<LevelGauge />
			</div>

			{/* Before → after ledger */}
			<motion.div
				initial={{ opacity: 0, y: 40 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, amount: 0.1 }}
				transition={{ duration: 0.9, ease: EASE }}
				className="relative mt-14 rounded-[28px] bg-linear-to-b from-white/[0.12] via-white/[0.04] to-white/[0.02] p-px sm:mt-20"
			>
				<div aria-hidden className="absolute -top-px left-1/2 h-px w-1/2 -translate-x-1/2 bg-linear-to-r from-rose-300/50 via-white/40 to-emerald-300/60" />

				<div className="overflow-hidden rounded-[27px] bg-[#06080d]/95">
					{/* column heads */}
					<div className="grid gap-6 border-b border-white/[0.06] px-5 py-7 sm:px-8 md:grid-cols-[1fr_auto_1fr] md:gap-8">
						<div>
							<p className="font-mono text-[10px] uppercase tracking-[0.25em] text-rose-300/80">Without a plan</p>
							<h3 className="mt-2.5 text-xl font-medium tracking-tight text-white/60 sm:text-2xl">AI that stalls at the demo.</h3>
						</div>
						<div aria-hidden className="hidden w-[5.25rem] md:block lg:w-[6.75rem]" />
						<div>
							<p className="font-mono text-[10px] uppercase tracking-[0.25em] text-emerald-300">With me</p>
							<h3 className="mt-2.5 text-xl font-medium tracking-tight text-white sm:text-2xl">
								AI that climbs the levels <span className="font-serif font-normal italic text-gradient">in production.</span>
							</h3>
						</div>
					</div>

					<ol className="divide-y divide-white/[0.05]">
						{problemSolution.pairs.map((pair, i) => (
							<LedgerRow key={pair.problem} index={i} {...pair} />
						))}
					</ol>
				</div>
			</motion.div>
		</section>
	);
};

export default ProblemSolutionSection;
