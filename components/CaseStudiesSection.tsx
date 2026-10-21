'use client';

import classNames from 'classnames';
import { motion } from 'motion/react';
import React from 'react';

import { caseStudies } from '@/content/site';

import SectionHeading from './ui/SectionHeading';
import TiltCard from './ui/TiltCard';

const EASE = [0.22, 1, 0.36, 1] as const;

// bento layout on large screens
const spans = ['lg:col-span-4', 'lg:col-span-2', 'lg:col-span-2', 'lg:col-span-4', 'lg:col-span-3', 'lg:col-span-3'];

export const CaseStudiesSection: React.FC = () => {
	return (
		<section id="work" className="relative mx-auto max-w-7xl px-5 py-32 sm:px-8">
			<SectionHeading
				eyebrow="Selected work"
				title="Shipped for real teams,"
				accent="in production."
				description="AI products and the serverless foundations they run on — across FinTech, SaaS, SalesTech, media and IoT."
			/>

			<div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-6">
				{caseStudies.map((item, i) => {
					const isAi = item.level.startsWith('Level');
					return (
						<motion.div
							key={item.title}
							initial={{ opacity: 0, y: 60, rotateX: 20, scale: 0.95 }}
							whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
							viewport={{ once: true, amount: 0.25 }}
							transition={{ duration: 0.9, delay: (i % 2) * 0.1, ease: EASE }}
							className={classNames('[perspective:1200px]', spans[i])}
						>
							<TiltCard className="h-full" intensity={7} glow={isAi ? 'rgba(52,211,153,0.16)' : 'rgba(34,211,238,0.14)'}>
								<article className="flex h-full min-h-[20rem] flex-col p-7 sm:p-8">
									<div className="flex flex-wrap items-center justify-between gap-3">
										<span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">{item.industry}</span>
										<span
											className={classNames(
												'rounded-full border px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider',
												isAi ? 'border-emerald-400/30 text-emerald-300' : 'border-cyan-400/25 text-cyan-300/80'
											)}
										>
											{item.level}
										</span>
									</div>

									<div className="mt-10" style={{ transform: 'translateZ(40px)' }}>
										<p className={classNames('font-medium text-gradient', item.metric.length > 7 ? 'text-4xl sm:text-5xl' : 'text-5xl sm:text-6xl')}>{item.metric}</p>
										<p className="mt-2 text-sm text-muted">{item.metricLabel}</p>
									</div>

									<div className="mt-auto pt-10">
										<h3 className="text-xl font-medium text-white">{item.title}</h3>
										<p className="mt-2 text-sm leading-relaxed text-muted">{item.details}</p>
										<div className="mt-5 flex flex-wrap gap-1.5">
											{item.tech.map((t) => (
												<span key={t} className="rounded-full bg-white/5 px-2.5 py-1 text-[11px] text-white/60">
													{t}
												</span>
											))}
										</div>
									</div>
								</article>
							</TiltCard>
						</motion.div>
					);
				})}
			</div>
		</section>
	);
};

export default CaseStudiesSection;
