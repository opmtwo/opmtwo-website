'use client';

import { HTMLMotionProps, motion, Variants } from 'motion/react';

const EASE = [0.22, 1, 0.36, 1] as const;

type Direction = 'up' | 'down' | 'left' | 'right' | 'none';

const offset = (direction: Direction, distance: number) => {
	switch (direction) {
		case 'up':
			return { y: distance };
		case 'down':
			return { y: -distance };
		case 'left':
			return { x: distance };
		case 'right':
			return { x: -distance };
		default:
			return {};
	}
};

interface RevealProps extends HTMLMotionProps<'div'> {
	direction?: Direction;
	distance?: number;
	delay?: number;
	duration?: number;
	blur?: boolean;
	once?: boolean;
}

// Fades, slides and un-blurs its children into view when scrolled to
export const Reveal = ({ direction = 'up', distance = 32, delay = 0, duration = 0.8, blur = true, once = true, children, ...props }: RevealProps) => {
	return (
		<motion.div
			initial={{ opacity: 0, ...offset(direction, distance), filter: blur ? 'blur(8px)' : 'blur(0px)' }}
			whileInView={{ opacity: 1, x: 0, y: 0, filter: 'blur(0px)' }}
			viewport={{ once, amount: 0.2 }}
			transition={{ duration, delay, ease: EASE }}
			{...props}
		>
			{children}
		</motion.div>
	);
};

const containerVariants = (stagger: number, delay: number): Variants => ({
	hidden: {},
	visible: { transition: { staggerChildren: stagger, delayChildren: delay } },
});

export const itemVariants: Variants = {
	hidden: { opacity: 0, y: 40, scale: 0.96, filter: 'blur(6px)' },
	visible: { opacity: 1, y: 0, scale: 1, filter: 'blur(0px)', transition: { duration: 0.7, ease: EASE } },
};

interface StaggerProps extends HTMLMotionProps<'div'> {
	stagger?: number;
	delay?: number;
	once?: boolean;
	// animate on mount instead of when scrolled into view
	onMount?: boolean;
}

// Container that reveals its <StaggerItem> children one after another
export const Stagger = ({ stagger = 0.12, delay = 0, once = true, onMount = false, children, ...props }: StaggerProps) => {
	const trigger = onMount ? { animate: 'visible' } : { whileInView: 'visible', viewport: { once, amount: 0.15 } };

	return (
		<motion.div variants={containerVariants(stagger, delay)} initial="hidden" {...trigger} {...props}>
			{children}
		</motion.div>
	);
};

interface StaggerItemProps extends HTMLMotionProps<'div'> {
	hover?: boolean;
}

export const StaggerItem = ({ hover = false, children, ...props }: StaggerItemProps) => {
	return (
		<motion.div variants={itemVariants} whileHover={hover ? { y: -6, transition: { duration: 0.25 } } : undefined} {...props}>
			{children}
		</motion.div>
	);
};
