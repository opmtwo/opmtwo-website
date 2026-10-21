'use client';

import classNames from 'classnames';
import { ArrowUpRight } from 'lucide-react';
import React from 'react';

// One easing for every button transition: a calm ease-in-out, no overshoot
const EASE = 'ease-[cubic-bezier(0.65,0,0.35,1)]';

// Label that slides up as one piece on hover while an identical copy rises
// from below (parent needs the `group` class)
export const RollText = ({ children, className }: { children: string; className?: string }) => (
	<span className={classNames('relative inline-flex overflow-hidden whitespace-nowrap', className)}>
		<span className={classNames('block leading-[1.5] transition-transform duration-500 group-hover:-translate-y-full', EASE)}>{children}</span>
		<span aria-hidden className={classNames('absolute left-0 top-0 block w-full leading-[1.5] translate-y-full transition-transform duration-500 group-hover:translate-y-0', EASE)}>
			{children}
		</span>
	</span>
);

// Icon that glides out to the top right while an arrow glides in from the bottom left
const SwapGlyph = ({ glyph }: { glyph?: React.ReactNode }) => (
	<span aria-hidden className="relative flex h-4 w-4 items-center justify-center overflow-hidden">
		<span className={classNames('absolute inset-0 flex items-center justify-center transition-transform duration-500 group-hover:-translate-y-full group-hover:translate-x-full', EASE)}>
			{glyph ?? <ArrowUpRight className="h-4 w-4" />}
		</span>
		<span
			className={classNames(
				'absolute inset-0 flex -translate-x-full translate-y-full items-center justify-center transition-transform duration-500 group-hover:translate-x-0 group-hover:translate-y-0',
				EASE
			)}
		>
			<ArrowUpRight className="h-4 w-4" />
		</span>
	</span>
);

// Exposes the cursor position as CSS vars for the spotlight; nothing moves
const trackPointer = (e: React.PointerEvent<HTMLElement>) => {
	const rect = e.currentTarget.getBoundingClientRect();
	e.currentTarget.style.setProperty('--mx', `${e.clientX - rect.left}px`);
	e.currentTarget.style.setProperty('--my', `${e.clientY - rect.top}px`);
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
// sliding label, soft cursor spotlight and an icon chip that swaps to an arrow
export const MagneticButton = ({ variant = 'primary', size = 'md', icon, arrow = true, block, children, className, ...props }: ButtonProps) => {
	const primary = variant === 'primary';
	const s = sizes[size];
	const hasChip = arrow || !!icon;

	return (
		<a
			onPointerEnter={trackPointer}
			onPointerMove={trackPointer}
			className={classNames(
				'group relative isolate inline-flex shrink-0 select-none items-center overflow-hidden rounded-full font-medium tracking-[-0.01em]',
				'transition-[transform,box-shadow,background-color] duration-500 hover:-translate-y-px active:translate-y-0 active:scale-[0.985] active:duration-150',
				EASE,
				s.base,
				hasChip ? s.withChip : s.noChip,
				block ? 'w-full justify-between' : 'justify-center',
				primary
					? [
							'text-[#05060a]',
							'bg-[linear-gradient(180deg,#ffffff_0%,#eef1f5_55%,#dfe4ea_100%)]',
							'shadow-[inset_0_1px_0_rgba(255,255,255,1),inset_0_-1px_0_rgba(0,0,0,0.12),0_0_0_1px_rgba(255,255,255,0.18),0_1px_2px_rgba(0,0,0,0.4),0_12px_32px_-12px_rgba(52,211,153,0.4)]',
							'hover:shadow-[inset_0_1px_0_rgba(255,255,255,1),inset_0_-1px_0_rgba(0,0,0,0.12),0_0_0_1px_rgba(255,255,255,0.3),0_2px_4px_rgba(0,0,0,0.4),0_18px_44px_-14px_rgba(52,211,153,0.6)]',
						]
					: [
							'text-white backdrop-blur-xl',
							'bg-[linear-gradient(180deg,rgba(255,255,255,0.09)_0%,rgba(255,255,255,0.03)_100%)]',
							'shadow-[inset_0_1px_0_rgba(255,255,255,0.14),inset_0_0_0_1px_rgba(255,255,255,0.08),0_10px_30px_-12px_rgba(0,0,0,0.8)]',
							'hover:bg-[linear-gradient(180deg,rgba(255,255,255,0.12)_0%,rgba(255,255,255,0.05)_100%)]',
							'hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.2),inset_0_0_0_1px_rgba(255,255,255,0.18),0_14px_36px_-12px_rgba(0,0,0,0.9)]',
						],
				className
			)}
			{...props}
		>
			{/* soft spotlight that follows the cursor */}
			<span
				aria-hidden
				className={classNames('pointer-events-none absolute inset-0 -z-10 opacity-0 transition-opacity duration-700 group-hover:opacity-100', EASE)}
				style={{
					background: primary
						? 'radial-gradient(160px circle at var(--mx, 50%) var(--my, 50%), rgba(52,211,153,0.18), transparent 70%)'
						: 'radial-gradient(160px circle at var(--mx, 50%) var(--my, 50%), rgba(255,255,255,0.10), transparent 70%)',
				}}
			/>

			<RollText className="relative">{children}</RollText>

			{hasChip && (
				<span
					className={classNames(
						'relative flex shrink-0 items-center justify-center rounded-full transition-[background-color,color,box-shadow] duration-500',
						EASE,
						s.chip,
						primary
							? 'bg-[#05060a] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_4px_12px_-4px_rgba(0,0,0,0.6)] group-hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_0_0_3px_rgba(52,211,153,0.15)]'
							: 'bg-white/10 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.15)] group-hover:bg-white group-hover:text-[#05060a]'
					)}
				>
					<SwapGlyph glyph={icon} />
				</span>
			)}
		</a>
	);
};

interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	'aria-label': string;
	children: React.ReactNode;
}

// Round frosted-glass control; on hover a white fill fades in from the centre
export const IconButton = ({ children, className, ...props }: IconButtonProps) => (
	<button
		className={classNames(
			'group relative isolate flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center overflow-hidden rounded-full text-white backdrop-blur-xl',
			'transition-[color,transform] duration-500 hover:text-[#05060a] active:scale-[0.96] active:duration-150',
			EASE,
			'bg-[linear-gradient(180deg,rgba(255,255,255,0.09),rgba(255,255,255,0.03))] shadow-[inset_0_1px_0_rgba(255,255,255,0.14),inset_0_0_0_1px_rgba(255,255,255,0.08)]',
			className
		)}
		{...props}
	>
		<span
			aria-hidden
			className={classNames(
				'absolute inset-0 -z-10 scale-50 rounded-full bg-[linear-gradient(180deg,#ffffff,#e2e7ec)] opacity-0 transition-[transform,opacity] duration-500 group-hover:scale-100 group-hover:opacity-100',
				EASE
			)}
		/>
		<span className="relative">{children}</span>
	</button>
);
