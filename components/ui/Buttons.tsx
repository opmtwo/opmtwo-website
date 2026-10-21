'use client';

import classNames from 'classnames';
import { ArrowUpRight } from 'lucide-react';
import { motion, useMotionValue, useSpring } from 'motion/react';
import React from 'react';

const EASE_CLASS = 'ease-[cubic-bezier(0.22,1,0.36,1)]';

// Label that rolls up letter by letter on hover: the visible row slides out the
// top while an identical row rises from below (parent needs the `group` class)
export const RollText = ({ children, className }: { children: string; className?: string }) => {
	const chars = Array.from(children);

	return (
		<span className={classNames('relative inline-flex overflow-hidden whitespace-nowrap', className)}>
			<span className="sr-only">{children}</span>
			<span aria-hidden className="flex">
				{chars.map((c, i) => (
					<span
						key={i}
						className={classNames('relative inline-block transition-transform duration-[650ms] group-hover:-translate-y-full', EASE_CLASS)}
						style={{ transitionDelay: `${i * 14}ms` }}
					>
						{c === ' ' ? ' ' : c}
						<span className="absolute left-0 top-full">{c === ' ' ? ' ' : c}</span>
					</span>
				))}
			</span>
		</span>
	);
};

// Content that is swapped for an up-right arrow on hover
const SwapGlyph = ({ glyph, className }: { glyph?: React.ReactNode; className?: string }) => (
	<span aria-hidden className={classNames('relative flex h-4 w-4 items-center justify-center overflow-hidden', className)}>
		<span className={classNames('absolute inset-0 flex items-center justify-center transition-transform duration-500 group-hover:-translate-y-full group-hover:translate-x-full', EASE_CLASS)}>
			{glyph ?? <ArrowUpRight className="h-4 w-4" />}
		</span>
		<span
			className={classNames(
				'absolute inset-0 flex -translate-x-full translate-y-full items-center justify-center transition-transform delay-75 duration-500 group-hover:translate-x-0 group-hover:translate-y-0',
				EASE_CLASS
			)}
		>
			<ArrowUpRight className="h-4 w-4" />
		</span>
	</span>
);

// Springy pull toward the cursor; also exposes the cursor position as CSS vars
const useMagnet = (strength: number) => {
	const x = useSpring(useMotionValue(0), { stiffness: 200, damping: 18, mass: 0.6 });
	const y = useSpring(useMotionValue(0), { stiffness: 200, damping: 18, mass: 0.6 });

	const track = (e: React.PointerEvent<HTMLElement>) => {
		const rect = e.currentTarget.getBoundingClientRect();
		e.currentTarget.style.setProperty('--mx', `${e.clientX - rect.left}px`);
		e.currentTarget.style.setProperty('--my', `${e.clientY - rect.top}px`);
		return rect;
	};

	const onPointerMove = (e: React.PointerEvent<HTMLElement>) => {
		const rect = track(e);
		if (e.pointerType !== 'mouse') return;
		x.set((e.clientX - rect.left - rect.width / 2) * strength);
		y.set((e.clientY - rect.top - rect.height / 2) * strength * 1.4);
	};

	const onPointerLeave = () => {
		x.set(0);
		y.set(0);
	};

	return { style: { x, y }, onPointerMove, onPointerEnter: track, onPointerLeave };
};

type Variant = 'primary' | 'ghost';
type Size = 'sm' | 'md';

interface ButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
	variant?: Variant;
	size?: Size;
	// shown inside the round chip at rest, swapped for an arrow on hover
	icon?: React.ReactNode;
	arrow?: boolean;
	// stretch to the container and push the chip to the far edge
	block?: boolean;
	children: string;
}

const sizes: Record<Size, { base: string; withChip: string; noChip: string; chip: string }> = {
	sm: { base: 'h-9 text-[13px]', withChip: 'pl-4 pr-1 gap-3', noChip: 'px-4', chip: 'h-7 w-7' },
	md: { base: 'h-[52px] text-[15px]', withChip: 'pl-6 pr-1.5 gap-4', noChip: 'px-6', chip: 'h-10 w-10' },
};

// Signature button: pearl (primary) or frosted glass (ghost) pill with a
// rolling label, cursor spotlight, icon chip that swaps to an arrow, and a
// magnetic, springy feel
export const MagneticButton = ({ variant = 'primary', size = 'md', icon, arrow = true, block, children, className, ...props }: ButtonProps) => {
	const magnet = useMagnet(size === 'sm' ? 0.15 : 0.22);
	const primary = variant === 'primary';
	const s = sizes[size];
	const hasChip = arrow || !!icon;

	return (
		<motion.a
			{...magnet}
			whileHover={{ y: -2 }}
			whileTap={{ scale: 0.97, y: 0 }}
			transition={{ type: 'spring', stiffness: 400, damping: 25 }}
			className={classNames(
				'group relative isolate inline-flex shrink-0 select-none items-center overflow-hidden rounded-full font-medium tracking-[-0.01em]',
				'transition-[box-shadow,background-color] duration-500',
				s.base,
				hasChip ? s.withChip : s.noChip,
				block ? 'w-full justify-between' : 'justify-center',
				primary
					? [
							'text-[#05060a]',
							'bg-[linear-gradient(180deg,#ffffff_0%,#eef1f5_55%,#dfe4ea_100%)]',
							'shadow-[inset_0_1px_0_rgba(255,255,255,1),inset_0_-1px_0_rgba(0,0,0,0.12),0_0_0_1px_rgba(255,255,255,0.18),0_1px_2px_rgba(0,0,0,0.4),0_12px_32px_-12px_rgba(52,211,153,0.45)]',
							'hover:shadow-[inset_0_1px_0_rgba(255,255,255,1),inset_0_-1px_0_rgba(0,0,0,0.12),0_0_0_1px_rgba(255,255,255,0.35),0_2px_4px_rgba(0,0,0,0.4),0_20px_50px_-14px_rgba(52,211,153,0.75)]',
						]
					: [
							'text-white backdrop-blur-xl',
							'bg-[linear-gradient(180deg,rgba(255,255,255,0.09)_0%,rgba(255,255,255,0.03)_100%)]',
							'shadow-[inset_0_1px_0_rgba(255,255,255,0.14),inset_0_0_0_1px_rgba(255,255,255,0.08),0_10px_30px_-12px_rgba(0,0,0,0.8)]',
							'hover:bg-[linear-gradient(180deg,rgba(255,255,255,0.13)_0%,rgba(255,255,255,0.05)_100%)]',
						],
				className
			)}
			{...(props as React.ComponentProps<typeof motion.a>)}
		>
			{/* cursor-following spotlight */}
			<span
				aria-hidden
				className="pointer-events-none absolute inset-0 -z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
				style={{
					background: primary
						? 'radial-gradient(140px circle at var(--mx, 50%) var(--my, 50%), rgba(52,211,153,0.28), transparent 70%)'
						: 'radial-gradient(140px circle at var(--mx, 50%) var(--my, 50%), rgba(255,255,255,0.16), transparent 70%)',
				}}
			/>

			{/* light beam tracing the edge (ghost) */}
			{!primary && (
				<span aria-hidden className="border-beam pointer-events-none absolute inset-0 rounded-full opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
			)}

			{/* diagonal sheen that crosses once per hover */}
			<span
				aria-hidden
				className={classNames(
					'pointer-events-none absolute inset-y-0 -left-full w-1/2 -skew-x-[20deg] bg-linear-to-r from-transparent to-transparent transition-[left] duration-[900ms] group-hover:left-[150%]',
					EASE_CLASS,
					primary ? 'via-white/90' : 'via-white/10'
				)}
			/>

			<RollText className="relative py-1">{children}</RollText>

			{hasChip && (
				<span
					className={classNames(
						'relative flex shrink-0 items-center justify-center rounded-full transition-[transform,background-color,box-shadow] duration-500 group-hover:scale-105',
						EASE_CLASS,
						s.chip,
						primary
							? 'bg-[#05060a] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_4px_12px_-4px_rgba(0,0,0,0.6)] group-hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_0_0_4px_rgba(52,211,153,0.18)]'
							: 'bg-white/10 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.15)] group-hover:bg-white group-hover:text-[#05060a]'
					)}
				>
					<SwapGlyph glyph={icon} />
				</span>
			)}
		</motion.a>
	);
};

interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	'aria-label': string;
	children: React.ReactNode;
}

// Round frosted-glass control with magnetic pull, spotlight and a white flood on hover
export const IconButton = ({ children, className, ...props }: IconButtonProps) => {
	const magnet = useMagnet(0.3);

	return (
		<motion.button
			{...magnet}
			whileTap={{ scale: 0.9 }}
			transition={{ type: 'spring', stiffness: 400, damping: 25 }}
			className={classNames(
				'group relative isolate flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center overflow-hidden rounded-full text-white backdrop-blur-xl transition-colors duration-500 hover:text-[#05060a]',
				'bg-[linear-gradient(180deg,rgba(255,255,255,0.09),rgba(255,255,255,0.03))] shadow-[inset_0_1px_0_rgba(255,255,255,0.14),inset_0_0_0_1px_rgba(255,255,255,0.08)]',
				className
			)}
			{...(props as React.ComponentProps<typeof motion.button>)}
		>
			<span
				aria-hidden
				className={classNames(
					'absolute -z-10 h-[220%] w-[220%] -translate-x-1/2 -translate-y-1/2 scale-0 rounded-full bg-[linear-gradient(180deg,#ffffff,#e2e7ec)] transition-transform duration-500 group-hover:scale-100',
					EASE_CLASS
				)}
				style={{ left: 'var(--mx, 50%)', top: 'var(--my, 50%)' }}
			/>
			<span className="relative">{children}</span>
		</motion.button>
	);
};
