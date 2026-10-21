'use client';

import { Plus } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import React, { useState } from 'react';

import { faqs, mailto } from '@/content/site';

import SectionHeading from './ui/SectionHeading';

const EASE = [0.22, 1, 0.36, 1] as const;

export const FaqSection: React.FC = () => {
	const [open, setOpen] = useState<number | null>(0);

	return (
		<section id="faq" className="relative mx-auto max-w-7xl px-5 py-32 sm:px-8">
			<div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
				<div className="lg:sticky lg:top-32 lg:self-start">
					<SectionHeading eyebrow="FAQ" title="Questions," accent="answered." description="Everything teams usually ask before we start working together." />
					<a href={mailto} className="mt-8 inline-flex items-center gap-2 text-sm text-white underline decoration-white/30 underline-offset-4 hover:decoration-emerald-400">
						Something else? Ask me directly →
					</a>
				</div>

				<div className="divide-y divide-white/[0.08] border-y border-line">
					{faqs.map((item, i) => {
						const isOpen = open === i;
						return (
							<motion.div
								key={item.question}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.6, delay: i * 0.05, ease: EASE }}
							>
								<button
									onClick={() => setOpen(isOpen ? null : i)}
									aria-expanded={isOpen}
									className="group flex w-full cursor-pointer items-center justify-between gap-6 py-6 text-left"
								>
									<span className={`text-lg transition-colors sm:text-xl ${isOpen ? 'text-white' : 'text-white/75 group-hover:text-white'}`}>{item.question}</span>
									<motion.span
										animate={{ rotate: isOpen ? 45 : 0 }}
										transition={{ duration: 0.3 }}
										className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-colors ${
											isOpen ? 'border-emerald-400/50 bg-emerald-400/10 text-emerald-300' : 'border-line text-muted'
										}`}
									>
										<Plus className="h-4 w-4" />
									</motion.span>
								</button>
								<AnimatePresence initial={false}>
									{isOpen && (
										<motion.div
											initial={{ height: 0, opacity: 0 }}
											animate={{ height: 'auto', opacity: 1 }}
											exit={{ height: 0, opacity: 0 }}
											transition={{ duration: 0.4, ease: EASE }}
											className="overflow-hidden"
										>
											<p className="max-w-2xl pb-7 leading-relaxed text-muted">{item.answer}</p>
										</motion.div>
									)}
								</AnimatePresence>
							</motion.div>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default FaqSection;
