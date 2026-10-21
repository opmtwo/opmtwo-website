'use client';

import classNames from 'classnames';
import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from 'motion/react';
import React, { useRef } from 'react';

interface TiltCardProps {
	children: React.ReactNode;
	className?: string;
	innerClassName?: string;
	// max rotation in degrees
	intensity?: number;
	glow?: string;
}

// Card that tilts in 3D toward the cursor with a spotlight glare that follows it
const TiltCard = ({ children, className, innerClassName, intensity = 10, glow = 'rgba(52, 211, 153, 0.18)' }: TiltCardProps) => {
	const ref = useRef<HTMLDivElement>(null);
	const px = useMotionValue(0.5);
	const py = useMotionValue(0.5);

	const spring = { stiffness: 180, damping: 18, mass: 0.6 };
	const rotateX = useSpring(useTransform(py, [0, 1], [intensity, -intensity]), spring);
	const rotateY = useSpring(useTransform(px, [0, 1], [-intensity, intensity]), spring);

	const gx = useTransform(px, (v) => `${v * 100}%`);
	const gy = useTransform(py, (v) => `${v * 100}%`);
	const spotlight = useMotionTemplate`radial-gradient(420px circle at ${gx} ${gy}, ${glow}, transparent 60%)`;
	const border = useMotionTemplate`radial-gradient(260px circle at ${gx} ${gy}, rgba(255,255,255,0.35), transparent 70%)`;

	const onMove = (e: React.PointerEvent) => {
		const rect = ref.current?.getBoundingClientRect();
		if (!rect) return;
		px.set((e.clientX - rect.left) / rect.width);
		py.set((e.clientY - rect.top) / rect.height);
	};

	const onLeave = () => {
		px.set(0.5);
		py.set(0.5);
	};

	return (
		<div className={classNames('[perspective:1200px]', className)}>
			<motion.div
				ref={ref}
				onPointerMove={onMove}
				onPointerLeave={onLeave}
				style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
				className="group relative h-full rounded-3xl"
			>
				{/* cursor-tracking border highlight */}
				<motion.div
					aria-hidden
					className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
					style={{ background: border }}
				/>
				<div className={classNames('glass relative h-full overflow-hidden rounded-3xl', innerClassName)}>
					<motion.div
						aria-hidden
						className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
						style={{ background: spotlight }}
					/>
					<div className="relative h-full" style={{ transform: 'translateZ(30px)' }}>
						{children}
					</div>
				</div>
			</motion.div>
		</div>
	);
};

export default TiltCard;
