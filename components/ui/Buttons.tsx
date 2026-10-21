'use client';

import classNames from 'classnames';
import { ArrowUpRight } from 'lucide-react';
import { motion, useMotionValue, useSpring } from 'motion/react';
import React, { useRef } from 'react';

// Label that rolls up letter by letter on hover (parent needs the `group` class)
export const RollText = ({ children, className }: { children: string; className?: string }) => {
	const chars = Array.from(children);
	const renderRow = (hidden?: boolean) => (
		<span aria-hidden={hidden} className={classNames('flex', hidden && 'absolute inset-0')}>
			{chars.map((c, i) => (
				<span
					key={i}
					className={classNames(
						'inline-block transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-full',
						hidden && 'translate-y-full'
					)}
					style={{ transitionDelay: `${i * 18}ms` }}
				>
					{c === ' ' ? ' ' : c}
				</span>
			))}
		</span>
	);

	return (
		<span className={classNames('relative inline-flex overflow-hidden leading-[1.25]', className)}>
			<span className="sr-only">{children}</span>
			<span aria-hidden className="relative flex">
				{renderRow()}
				{renderRow(true)}
			</span>
		</span>
	);
};

// Arrow that exits top-right while a fresh one slides in from bottom-left
export const SwapArrow = ({ className }: { className?: string }) => (
	<span aria-hidden className={classNames('relative inline-flex h-4 w-4 overflow-hidden', className)}>
		<ArrowUpRight className="absolute inset-0 h-4 w-4 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-full group-hover:translate-x-full" />
		<ArrowUpRight className="absolute inset-0 h-4 w-4 -translate-x-full translate-y-full transition-transform delay-75 duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0 group-hover:translate-y-0" />
	</span>
);

// Springy pull toward the cursor, shared by all buttons
const useMagnet = (strength = 0.3) => {
	const x = useSpring(useMotionValue(0), { stiffness: 220, damping: 16, mass: 0.5 });
	const y = useSpring(useMotionValue(0), { stiffness: 220, damping: 16, mass: 0.5 });

	const onPointerMove = (e: React.PointerEvent<HTMLElement>) => {
		if (e.pointerType !== 'mouse') return;
		const rect = e.currentTarget.getBoundingClientRect();
		x.set((e.clientX - rect.left - rect.width / 2) * strength);
		y.set((e.clientY - rect.top - rect.height / 2) * strength * 1.2);
		// cursor position drives the hover fill origin
		e.currentTarget.style.setProperty('--mx', `${e.clientX - rect.left}px`);
		e.currentTarget.style.setProperty('--my', `${e.clientY - rect.top}px`);
	};

	const onPointerEnter = (e: React.PointerEvent<HTMLElement>) => {
		const rect = e.currentTarget.getBoundingClientRect();
		e.currentTarget.style.setProperty('--mx', `${e.clientX - rect.left}px`);
		e.currentTarget.style.setProperty('--my', `${e.clientY - rect.top}px`);
	};

	const onPointerLeave = () => {
		x.set(0);
		y.set(0);
	};

	return { style: { x, y }, onPointerMove, onPointerEnter, onPointerLeave };
};

type Variant = 'primary' | 'ghost';
type Size = 'sm' | 'md';

interface ButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
	variant?: Variant;
	size?: Size;
	icon?: React.ReactNode;
	arrow?: boolean;
	children: string;
}

const sizes: Record<Size, string> = {
	sm: 'h-9 gap-2 px-4 text-[13px]',
	md: 'h-12 gap-2.5 px-6 text-sm',
};

// Premium link-button: magnetic pull, rolling label, swapping arrow,
// cursor-origin gradient fill (primary) or travelling border beam (ghost)
export const MagneticButton = ({ variant = 'primary', size = 'md', icon, arrow = true, children, className, ...props }: ButtonProps) => {
	const ref = useRef<HTMLAnchorElement>(null);
	const magnet = useMagnet(size === 'sm' ? 0.2 : 0.3);
	const primary = variant === 'primary';

	return (
		<motion.a
			ref={ref}
			{...magnet}
			whileTap={{ scale: 0.95 }}
			className={classNames(
				'group relative isolate inline-flex shrink-0 items-center justify-center overflow-hidden rounded-full font-medium tracking-tight transition-shadow duration-500',
				sizes[size],
				primary
					? 'bg-white text-black shadow-[0_0_0_1px_rgba(255,255,255,0.25),0_10px_40px_-12px_rgba(52,211,153,0.55)] hover:shadow-[0_0_0_1px_rgba(255,255,255,0.4),0_14px_50px_-10px_rgba(52,211,153,0.9)]'
					: 'bg-white/[0.04] text-white shadow-[inset_0_0_0_1px_rgba(255,255,255,0.1)] backdrop-blur-md',
				className
			)}
			{...(props as React.ComponentProps<typeof motion.a>)}
		>
			{primary ? (
				// gradient blooms out from where the cursor entered
				<span
					aria-hidden
					className="absolute -z-10 h-[300%] aspect-square -translate-x-1/2 -translate-y-1/2 scale-0 rounded-full bg-[radial-gradient(circle,#6ee7b7_0%,#67e8f9_45%,#c4b5fd_100%)] transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-100"
					style={{ left: 'var(--mx, 50%)', top: 'var(--my, 50%)' }}
				/>
			) : (
				<>
					{/* light beam that travels around the border */}
					<span aria-hidden className="border-beam pointer-events-none absolute inset-0 rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
					<span
						aria-hidden
						className="absolute -z-10 h-[250%] aspect-square -translate-x-1/2 -translate-y-1/2 scale-0 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.12),transparent_70%)] transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-100"
						style={{ left: 'var(--mx, 50%)', top: 'var(--my, 50%)' }}
					/>
				</>
			)}

			{/* sheen sweep */}
			<span
				aria-hidden
				className={classNames(
					'pointer-events-none absolute inset-y-0 -left-1/2 w-1/3 -skew-x-12 bg-linear-to-r from-transparent to-transparent opacity-0 transition-all duration-1000 ease-out group-hover:left-[130%] group-hover:opacity-100',
					primary ? 'via-white/70' : 'via-white/15'
				)}
			/>

			{icon && <span className="relative transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110">{icon}</span>}
			<RollText className="relative">{children}</RollText>
			{arrow && <SwapArrow className="relative" />}
		</motion.a>
	);
};

interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	'aria-label': string;
	children: React.ReactNode;
}

// Round icon button with magnetic pull, expanding ring and hover fill
export const IconButton = ({ children, className, ...props }: IconButtonProps) => {
	const magnet = useMagnet(0.35);

	return (
		<motion.button
			{...magnet}
			whileTap={{ scale: 0.9 }}
			className={classNames(
				'group relative isolate flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-full bg-white/[0.04] text-white shadow-[inset_0_0_0_1px_rgba(255,255,255,0.1)] backdrop-blur-md transition-colors duration-300 hover:text-black',
				className
			)}
			{...(props as React.ComponentProps<typeof motion.button>)}
		>
			<span
				aria-hidden
				className="absolute inset-0 -z-10 scale-0 rounded-full bg-white transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-100"
			/>
			<span aria-hidden className="absolute inset-0 rounded-full ring-1 ring-white/40 transition duration-700 group-hover:scale-150 group-hover:opacity-0" />
			<span className="relative">{children}</span>
		</motion.button>
	);
};

// Text link with rolling label and a gradient underline that draws in
export const RollLink = ({ children, className, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement> & { children: string }) => (
	<button className={classNames('group relative inline-flex cursor-pointer flex-col items-start', className)} {...props}>
		<RollText>{children}</RollText>
		<span
			aria-hidden
			className="absolute -bottom-1 left-0 h-px w-full origin-right scale-x-0 bg-linear-to-r from-emerald-400 to-cyan-400 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:origin-left group-hover:scale-x-100"
		/>
	</button>
);
