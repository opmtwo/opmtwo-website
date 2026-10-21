'use client';

import classNames from 'classnames';
import { Check } from 'lucide-react';
import { motion } from 'motion/react';

import { engagements, mailto } from '@/content/site';

import SectionHeading from './ui/SectionHeading';
import TiltCard from './ui/TiltCard';

const EASE = [0.22, 1, 0.36, 1] as const;

const EngagementsSection = () => {
	return (
		<section id="engagements" className="relative mx-auto max-w-7xl px-5 py-32 sm:px-8">
			<SectionHeading
				eyebrow="Ways to work together"
				title="Start small. Prove value."
				accent="Then scale."
				description="Every engagement is scoped to one goal: get you to the next level of AI with measurable results."
			/>

			<div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
				{engagements.map((e, i) => (
					<motion.div
						key={e.name}
						initial={{ opacity: 0, y: 50, rotateY: -25 }}
						whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
						viewport={{ once: true, amount: 0.3 }}
						transition={{ duration: 0.9, delay: i * 0.1, ease: EASE }}
						className="[perspective:1200px]"
					>
						<div className={classNames('h-full rounded-3xl', e.featured && 'conic-border')}>
							<TiltCard className="h-full" innerClassName={classNames(e.featured && '!border-transparent !bg-[#070a10]')} intensity={9}>
								<div className="flex h-full flex-col p-7">
									<div className="flex items-center justify-between">
										<span className="font-mono text-[11px] text-muted">0{i + 1}</span>
										<span
											className={classNames(
												'rounded-full px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider',
												e.featured ? 'bg-emerald-400 text-black' : 'bg-white/5 text-white/60'
											)}
										>
											{e.duration}
										</span>
									</div>
									<h3 className="mt-10 text-2xl font-medium text-white">{e.name}</h3>
									<p className="mt-3 text-sm leading-relaxed text-muted">{e.description}</p>
									<ul className="mt-8 space-y-2.5 border-t border-line pt-6">
										{e.points.map((p) => (
											<li key={p} className="flex items-center gap-2.5 text-sm text-white/80">
												<Check className="h-3.5 w-3.5 text-emerald-300" />
												{p}
											</li>
										))}
									</ul>
									<div className="mt-auto pt-8">
										<a
											href={mailto}
											className={classNames(
												'flex items-center justify-center rounded-full px-4 py-2.5 text-sm font-medium transition',
												e.featured ? 'bg-white text-black hover:bg-emerald-300' : 'bg-white/5 text-white hover:bg-white/10'
											)}
										>
											Get started
										</a>
									</div>
								</div>
							</TiltCard>
						</div>
					</motion.div>
				))}
			</div>
		</section>
	);
};

export default EngagementsSection;
