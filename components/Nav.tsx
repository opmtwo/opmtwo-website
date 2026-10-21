'use client';

import classNames from 'classnames';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'motion/react';
import { useState } from 'react';

import { contact, mailto, nav } from '@/content/site';

import { IconButton, MagneticButton, RollText } from './ui/Buttons';

const scrollToEle = (id: string) => {
	const el = document.getElementById(id);
	if (el) window.scrollTo({ top: window.scrollY + el.getBoundingClientRect().top - 80, behavior: 'smooth' });
};

const Nav = () => {
	const { scrollY } = useScroll();
	const [scrolled, setScrolled] = useState(false);
	const [open, setOpen] = useState(false);

	useMotionValueEvent(scrollY, 'change', (v) => setScrolled(v > 40));

	return (
		<motion.header
			initial={{ y: -40, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
			className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-[calc(env(safe-area-inset-top,0px)+16px)]"
		>
			<div
				className={classNames(
					'flex w-full items-center justify-between rounded-full py-2 pl-3 pr-2 transition-all duration-500',
					scrolled ? 'glass max-w-4xl shadow-[0_8px_40px_-12px_rgba(0,0,0,0.8)]' : 'max-w-6xl border border-transparent'
				)}
			>
				<button className="flex cursor-pointer items-center gap-2.5" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
					<span className="relative flex h-8 w-8 items-center justify-center rounded-full bg-linear-to-br from-emerald-400 via-cyan-400 to-violet-400 text-[11px] font-bold text-black">
						{contact.initials}
					</span>
					<span className="text-sm font-medium tracking-tight text-white">{contact.name}</span>
				</button>

				<nav className="hidden items-center gap-1 lg:flex">
					{nav.map((item) => (
						<button
							key={item.id}
							onClick={() => scrollToEle(item.id)}
							className="group cursor-pointer rounded-full px-3.5 py-2 text-[13px] text-muted transition-colors duration-300 hover:bg-white/[0.06] hover:text-white"
						>
							<RollText>{item.label}</RollText>
						</button>
					))}
				</nav>

				<div className="flex items-center gap-2">
					<MagneticButton href={mailto} size="sm">
						Book a call
					</MagneticButton>
					<IconButton aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen((o) => !o)} className="!h-9 !w-9 lg:hidden">
						{open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
					</IconButton>
				</div>
			</div>

			<AnimatePresence>
				{open && (
					<motion.nav
						initial={{ opacity: 0, y: -10, scale: 0.98 }}
						animate={{ opacity: 1, y: 0, scale: 1 }}
						exit={{ opacity: 0, y: -10, scale: 0.98 }}
						transition={{ duration: 0.25 }}
						className="glass absolute inset-x-4 top-[calc(env(safe-area-inset-top,0px)+76px)] rounded-3xl p-3 lg:hidden"
					>
						{nav.map((item) => (
							<button
								key={item.id}
								onClick={() => {
									setOpen(false);
									scrollToEle(item.id);
								}}
								className="group flex w-full cursor-pointer items-center justify-between rounded-2xl px-4 py-3 text-left text-sm text-white/80 transition-colors hover:bg-white/5 hover:text-white"
							>
								<RollText>{item.label}</RollText>
								<span className="text-muted transition-transform duration-300 group-hover:translate-x-1">→</span>
							</button>
						))}
					</motion.nav>
				)}
			</AnimatePresence>
		</motion.header>
	);
};

export default Nav;
