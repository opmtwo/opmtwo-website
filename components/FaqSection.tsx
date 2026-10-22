'use client';

import FiverrIcon from '@/icons/FiverrIcon';
import { MailIcon } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import React, { useId, useState } from 'react';

import { contact, faqs, fiverrUrl, levels, mailto } from '@/content/site';

import { MagneticButton } from './ui/Buttons';
import SectionHeading from './ui/SectionHeading';

const EASE = [0.22, 1, 0.36, 1] as const;

const pad = (n: number) => String(n).padStart(2, '0');

// Plus that morphs into a minus when open
const ToggleIcon = ({ open }: { open: boolean }) => (
	<span
		className={`relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-colors duration-300 ${
			open ? 'border-emerald-400/50 bg-emerald-400/10' : 'border-white/10 bg-white/[0.03] group-hover:border-white/20'
		}`}
	>
		<span className={`absolute h-px w-3.5 transition-colors ${open ? 'bg-emerald-300' : 'bg-white/70'}`} />
		<motion.span
			animate={{ rotate: open ? 90 : 0, opacity: open ? 0 : 1 }}
			transition={{ duration: 0.3, ease: EASE }}
			className="absolute h-3.5 w-px bg-white/70"
		/>
	</span>
);

// Mini ladder shown under the "five levels" answer
const LevelLadder = () => (
	<div className="mt-6 grid grid-cols-5 gap-1.5">
		{levels.map((l, i) => (
			<motion.div
				key={l.level}
				initial={{ opacity: 0, y: 10 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.4, delay: 0.15 + i * 0.06, ease: EASE }}
				className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-2.5"
			>
				<span className="block h-1 rounded-full" style={{ background: l.color, boxShadow: `0 0 12px ${l.color}`, width: `${(i + 1) * 20}%` }} />
				<span className="mt-2.5 block font-mono text-[10px]" style={{ color: l.color }}>
					L{l.level}
				</span>
				<span className="mt-0.5 block text-[11px] leading-tight text-white/70">{l.name.replace(' AI', '')}</span>
			</motion.div>
		))}
	</div>
);

export const FaqSection: React.FC = () => {
	const [open, setOpen] = useState<number | null>(0);
	const baseId = useId();

	return (
		<section id="faq" className="container-page section-y relative">
			<div aria-hidden className="pointer-events-none absolute left-0 top-1/3 h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle,rgba(34,211,238,0.07),transparent_65%)]" />

			<div className="relative grid gap-14 lg:grid-cols-[0.9fr_1.3fr] lg:gap-20">
				{/* Left: heading + direct-contact card */}
				<div className="lg:sticky lg:top-28 lg:self-start">
					<SectionHeading eyebrow="FAQ" title="Questions," accent="answered." description="What teams usually ask before we start climbing the levels together." />

					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, amount: 0.4 }}
						transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
						className="glass relative mt-10 overflow-hidden rounded-3xl p-6"
					>
						<div aria-hidden className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-emerald-400/10 blur-3xl" />
						<div className="relative flex items-center gap-4">
							<span className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-emerald-400 via-cyan-400 to-violet-400 text-sm font-bold text-black">
								{contact.initials}
								<span className="absolute -bottom-0.5 -right-0.5 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-[#06080d]">
									<span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
								</span>
							</span>
							<div>
								<p className="text-sm font-medium text-white">Still have a question?</p>
								<p className="text-xs text-muted">Ask {contact.name.split(' ')[0]} directly · taking new projects</p>
							</div>
						</div>
						<p className="relative mt-5 text-sm leading-relaxed text-muted">
							Share your stack and goals — you&apos;ll get a short, actionable plan and the next level of AI to target.
						</p>
						<div className="relative mt-6 flex flex-wrap gap-2">
							<MagneticButton href={mailto} icon={<MailIcon className="h-4 w-4" />}>
								Email me
							</MagneticButton>
							<MagneticButton href={fiverrUrl} target="_blank" rel="noreferrer" variant="ghost" icon={<FiverrIcon className="h-4 w-4" />}>
								Fiverr
							</MagneticButton>
						</div>
					</motion.div>
				</div>

				{/* Right: accordion */}
				<div className="space-y-3">
					{faqs.map((item, i) => {
						const isOpen = open === i;
						const panelId = `${baseId}-panel-${i}`;
						const buttonId = `${baseId}-button-${i}`;
						return (
							<motion.div
								key={item.question}
								initial={{ opacity: 0, y: 24 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true, amount: 0.5 }}
								transition={{ duration: 0.6, delay: i * 0.06, ease: EASE }}
								className={`relative overflow-hidden rounded-2xl border transition-[background-color,border-color,box-shadow] duration-500 ${
									isOpen
										? 'border-emerald-400/25 bg-white/[0.045] shadow-[0_20px_60px_-30px_rgba(52,211,153,0.45)]'
										: 'border-white/[0.07] bg-white/[0.015] hover:border-white/[0.14] hover:bg-white/[0.03]'
								}`}
							>
								{/* accent rail + top highlight on the open item */}
								<motion.span
									aria-hidden
									initial={false}
									animate={{ scaleY: isOpen ? 1 : 0 }}
									transition={{ duration: 0.5, ease: EASE }}
									className="absolute bottom-5 left-0 top-5 w-px origin-top bg-linear-to-b from-emerald-400 via-cyan-400 to-transparent"
								/>
								<span
									aria-hidden
									className={`absolute inset-x-10 top-0 h-px bg-linear-to-r from-transparent via-emerald-300/60 to-transparent transition-opacity duration-500 ${
										isOpen ? 'opacity-100' : 'opacity-0'
									}`}
								/>

								<h3>
									<button
										id={buttonId}
										onClick={() => setOpen(isOpen ? null : i)}
										aria-expanded={isOpen}
										aria-controls={panelId}
										className="group flex w-full cursor-pointer items-center gap-4 px-5 py-5 text-left sm:gap-6 sm:px-7 sm:py-6"
									>
										<span className={`font-mono text-[11px] transition-colors ${isOpen ? 'text-emerald-300' : 'text-white/30'}`}>{pad(i + 1)}</span>
										<span
											className={`flex-1 text-base font-medium leading-snug tracking-tight transition-colors sm:text-lg ${
												isOpen ? 'text-white' : 'text-white/75 group-hover:text-white'
											}`}
										>
											{item.question}
										</span>
										<ToggleIcon open={isOpen} />
									</button>
								</h3>

								<AnimatePresence initial={false}>
									{isOpen && (
										<motion.div
											id={panelId}
											role="region"
											aria-labelledby={buttonId}
											initial={{ height: 0, opacity: 0 }}
											animate={{ height: 'auto', opacity: 1 }}
											exit={{ height: 0, opacity: 0 }}
											transition={{ duration: 0.45, ease: EASE }}
											className="overflow-hidden"
										>
											<motion.div
												initial={{ y: -8, filter: 'blur(6px)' }}
												animate={{ y: 0, filter: 'blur(0px)' }}
												transition={{ duration: 0.45, ease: EASE }}
												className="px-5 pb-7 sm:pl-[4.25rem] sm:pr-16"
											>
												<p className="leading-relaxed text-muted">{item.answer}</p>
												{i === 0 && <LevelLadder />}
											</motion.div>
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
