'use client';

import FiverrIcon from '@/icons/FiverrIcon';
import WhatsappIcon from '@/icons/WhatsappIcon';
import { MailIcon } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';
import React, { useRef } from 'react';

import { contact, cta, fiverrUrl, mailto, nav } from '@/content/site';

import { MagneticButton } from './ui/Buttons';

const EASE = [0.22, 1, 0.36, 1] as const;

export const ReadyToTrySection: React.FC = () => {
	const ref = useRef<HTMLElement>(null);
	const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end end'] });
	const gridTilt = useTransform(scrollYProgress, [0, 1], [75, 62]);
	const glow = useTransform(scrollYProgress, [0, 1], [0.3, 1]);

	return (
		<section id="contact" ref={ref} className="relative overflow-hidden pt-32">
			{/* 3D perspective grid floor */}
			<div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-[70%] [perspective:600px]">
				<motion.div
					style={{ rotateX: gridTilt }}
					className="absolute inset-x-[-50%] bottom-[-30%] h-[160%] origin-bottom animate-grid-flow [mask-image:linear-gradient(to_top,black_10%,transparent_70%)]"
				>
					<div
						className="h-full w-full"
						style={{
							backgroundImage:
								'linear-gradient(to right, rgba(52,211,153,0.35) 1px, transparent 1px), linear-gradient(to bottom, rgba(34,211,238,0.35) 1px, transparent 1px)',
							backgroundSize: '64px 64px',
						}}
					/>
				</motion.div>
			</div>
			<motion.div
				aria-hidden
				style={{ opacity: glow }}
				className="pointer-events-none absolute bottom-[-20rem] left-1/2 h-[40rem] w-[70rem] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(52,211,153,0.25),rgba(34,211,238,0.1)_40%,transparent_70%)]"
			/>

			<motion.div
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, amount: 0.4 }}
				variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
				className="relative mx-auto flex max-w-4xl flex-col items-center px-5 pb-40 text-center sm:px-8"
			>
				<motion.p
					variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }}
					className="glass inline-flex items-center gap-2 rounded-full px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.2em] text-muted"
				>
					<span className="relative flex h-2 w-2">
						<span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
						<span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
					</span>
					Taking new projects
				</motion.p>

				<motion.h2
					variants={{ hidden: { opacity: 0, y: 30, filter: 'blur(10px)' }, visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 1, ease: EASE } } }}
					className="mt-8 text-[clamp(2.5rem,6vw,5rem)] font-medium leading-[0.98] text-shine"
				>
					{cta.title} <span className="font-serif font-normal italic tracking-normal text-gradient pr-2">{cta.titleAccent}</span>
				</motion.h2>

				<motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
					{cta.description}
				</motion.p>

				<motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="mt-10 flex flex-wrap justify-center gap-3">
					<MagneticButton href={mailto} icon={<MailIcon className="h-4 w-4" />}>
						{cta.primary}
					</MagneticButton>
					{contact.whatsapp && (
						<MagneticButton href={`https://wa.me/${contact.whatsapp}`} target="_blank" rel="noreferrer" variant="ghost" icon={<WhatsappIcon className="h-4 w-4" />}>
							Chat on WhatsApp
						</MagneticButton>
					)}
					<MagneticButton href={fiverrUrl} target="_blank" rel="noreferrer" variant="ghost" icon={<FiverrIcon className="h-4 w-4" />}>
						{cta.secondary}
					</MagneticButton>
				</motion.div>

				<motion.p variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} className="mt-6 font-mono text-xs text-muted">
					{contact.email}
				</motion.p>
			</motion.div>

			{/* Footer bar */}
			<footer className="relative border-t border-line bg-background/60 backdrop-blur-md">
				<div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 py-8 text-xs text-muted sm:flex-row sm:px-8">
					<p>
						© {new Date().getFullYear()} {contact.name}. AI Consultant across all five levels of AI.
					</p>
					<nav className="flex flex-wrap justify-center gap-5">
						{nav.map((item) => (
							<a key={item.id} href={`#${item.id}`} className="transition-colors hover:text-white">
								{item.label}
							</a>
						))}
					</nav>
				</div>
			</footer>
		</section>
	);
};

export default ReadyToTrySection;
