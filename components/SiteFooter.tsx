'use client';

import { ArrowUp, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';

import { contact, fiverrUrl, levels, mailto, nav } from '@/content/site';

import { RollText } from './ui/Buttons';

const EASE = [0.22, 1, 0.36, 1] as const;

const FooterLink = ({ href, label, external, dot, chip }: { href: string; label: string; external?: boolean; dot?: string; chip?: boolean }) => (
	<a
		href={href}
		{...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
		className={`group inline-flex items-center gap-2.5 text-sm text-white/60 transition-colors duration-500 hover:text-white ${
			chip
				? 'min-h-9 rounded-full bg-white/[0.04] px-3 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.07)] lg:min-h-0 lg:rounded-none lg:bg-transparent lg:px-0 lg:shadow-none'
				: 'min-h-9 lg:min-h-0'
		}`}
	>
		{dot && <span className="h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: dot, boxShadow: `0 0 10px ${dot}` }} />}
		<RollText>{label}</RollText>
		{external && <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />}
	</a>
);

const Column = ({ title, children, className, listClassName }: { title: string; children: React.ReactNode; className?: string; listClassName?: string }) => (
	<div className={className}>
		<p className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/35">{title}</p>
		<ul className={listClassName ?? 'mt-4 space-y-1 lg:mt-6 lg:space-y-3.5'}>{children}</ul>
	</div>
);

const SiteFooter = () => {
	const wordmark = contact.name;

	return (
		<footer className="relative overflow-hidden border-t border-white/[0.06] bg-[#040509]">
			{/* top hairline glow */}
			<div aria-hidden className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-emerald-300/40 to-transparent" />
			<div aria-hidden className="pointer-events-none absolute left-1/2 top-0 h-64 w-[50rem] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(52,211,153,0.07),transparent_70%)]" />

			<div className="container-page relative pt-14 lg:pt-20 3xl:pt-24">
				<div className="grid grid-cols-2 gap-x-6 gap-y-11 lg:grid-cols-[1.5fr_1fr_1fr_1fr] lg:gap-10">
					{/* Brand */}
					<div className="col-span-2 max-w-sm lg:col-span-1">
						<div className="flex items-center gap-3">
							<span className="flex h-10 w-10 items-center justify-center rounded-full bg-linear-to-br from-emerald-400 via-cyan-400 to-violet-400 text-xs font-bold text-black">
								{contact.initials}
							</span>
							<div>
								<p className="text-sm font-medium text-white">{contact.name}</p>
								<p className="text-xs text-white/45">AI Consultant · All five levels</p>
							</div>
						</div>
						<p className="mt-5 text-sm leading-relaxed text-white/50 lg:mt-6">
							Designing and shipping AI at every level — from your first assistant to fully autonomous operations, on infrastructure that pays for itself.
						</p>
						<div className="mt-6 inline-flex items-center gap-2.5 rounded-full bg-white/[0.04] py-1.5 pl-2.5 pr-3.5 text-xs text-white/70 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)]">
							<span className="relative flex h-2 w-2">
								<span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60 [animation-duration:2.4s]" />
								<span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
							</span>
							Taking new projects
						</div>
					</div>

					<Column title="Explore">
						{nav.map((item) => (
							<li key={item.id}>
								<FooterLink href={`#${item.id}`} label={item.label} />
							</li>
						))}
					</Column>

					<Column
						title="The five levels"
						className="order-last col-span-2 lg:order-none lg:col-span-1"
						listClassName="mt-4 flex flex-wrap gap-2 lg:mt-6 lg:block lg:space-y-3.5"
					>
						{levels.map((l) => (
							<li key={l.level}>
								<FooterLink href="#levels" label={l.name} dot={l.color} chip />
							</li>
						))}
					</Column>

					<Column title="Connect">
						<li>
							<FooterLink href={mailto} label="Email" />
						</li>
						<li>
							<FooterLink href={fiverrUrl} label="Fiverr" external />
						</li>
						<li>
							<FooterLink href={mailto} label="Book a call" />
						</li>
						<li className="pt-2 lg:pt-3">
							<a href={mailto} className="group inline-flex min-h-9 items-center font-mono text-xs text-white/40 transition-colors duration-500 hover:text-emerald-300 lg:min-h-0">
								<RollText>{contact.email}</RollText>
							</a>
						</li>
					</Column>
				</div>
			</div>

			{/* Oversized wordmark, cropped by the bottom bar */}
			<div aria-hidden className="container-page relative mt-12 select-none overflow-hidden lg:mt-20">
				<motion.p
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.3 }}
					variants={{ visible: { transition: { staggerChildren: 0.035 } } }}
					className="flex justify-between whitespace-nowrap text-[clamp(3.5rem,14.5vw,13.5rem)] font-medium leading-[0.8] tracking-[-0.06em]"
				>
					{Array.from(wordmark).map((c, i) => (
						<motion.span
							key={i}
							variants={{ hidden: { y: '60%', opacity: 0 }, visible: { y: '18%', opacity: 1, transition: { duration: 1.2, ease: EASE } } }}
							className="inline-block bg-linear-to-b from-white/[0.2] via-white/[0.08] to-transparent bg-clip-text text-transparent"
						>
							{c === ' ' ? ' ' : c}
						</motion.span>
					))}
				</motion.p>
			</div>

			{/* Bottom bar */}
			<div className="relative border-t border-white/[0.06]">
				<div className="container-page flex items-center justify-between gap-4 pb-[calc(env(safe-area-inset-bottom,0px)+1.25rem)] pt-5 sm:py-6">
					<p className="font-mono text-[11px] leading-relaxed tracking-wide text-white/35">
						© {new Date().getFullYear()} {contact.name}.<span className="hidden sm:inline"> All rights reserved.</span>
					</p>
					<button
						onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
						aria-label="Back to top"
						className="group flex shrink-0 cursor-pointer items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-white/45 transition-colors duration-500 hover:text-white"
					>
						<span className="hidden sm:inline-flex">
							<RollText>Back to top</RollText>
						</span>
						<span className="relative flex h-10 w-10 sm:h-8 sm:w-8 items-center justify-center overflow-hidden rounded-full bg-white/[0.05] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.1)] transition-colors duration-500 group-hover:bg-white group-hover:text-[#05060a]">
							<ArrowUp className="h-3.5 w-3.5 transition-transform duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:-translate-y-[150%]" />
							<ArrowUp className="absolute h-3.5 w-3.5 translate-y-[150%] transition-transform duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:translate-y-0" />
						</span>
					</button>
				</div>
			</div>
		</footer>
	);
};

export default SiteFooter;
