'use client';

import classNames from 'classnames';
import { ArrowUpRight } from 'lucide-react';
import { motion, useMotionValue, useSpring } from 'motion/react';
import React, { useRef } from 'react';

interface ButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
	variant?: 'primary' | 'ghost';
	icon?: React.ReactNode;
	children: React.ReactNode;
}

// Link-button that is pulled slightly toward the cursor
export const MagneticButton = ({ variant = 'primary', icon, children, className, ...props }: ButtonProps) => {
	const ref = useRef<HTMLAnchorElement>(null);
	const x = useSpring(useMotionValue(0), { stiffness: 250, damping: 15 });
	const y = useSpring(useMotionValue(0), { stiffness: 250, damping: 15 });

	const onMove = (e: React.PointerEvent) => {
		const rect = ref.current?.getBoundingClientRect();
		if (!rect) return;
		x.set((e.clientX - rect.left - rect.width / 2) * 0.25);
		y.set((e.clientY - rect.top - rect.height / 2) * 0.35);
	};

	const reset = () => {
		x.set(0);
		y.set(0);
	};

	return (
		<motion.a
			ref={ref}
			onPointerMove={onMove}
			onPointerLeave={reset}
			whileTap={{ scale: 0.96 }}
			style={{ x, y }}
			className={classNames(
				'group relative inline-flex items-center gap-2.5 overflow-hidden rounded-full px-6 py-3.5 text-sm font-medium transition-colors',
				variant === 'primary'
					? 'bg-white text-black shadow-[0_0_0_1px_rgba(255,255,255,0.2),0_8px_40px_-8px_rgba(52,211,153,0.6)]'
					: 'glass text-white hover:bg-white/10',
				className
			)}
			{...(props as React.ComponentProps<typeof motion.a>)}
		>
			{variant === 'primary' && (
				// sheen that sweeps across on hover
				<span
					aria-hidden
					className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-emerald-300/50 to-transparent transition-transform duration-700 group-hover:translate-x-full"
				/>
			)}
			{icon && <span className="relative">{icon}</span>}
			<span className="relative">{children}</span>
			<ArrowUpRight className="relative h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
		</motion.a>
	);
};
