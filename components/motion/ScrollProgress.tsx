'use client';

import { motion, useScroll, useSpring } from 'motion/react';

// Thin gradient bar at the top of the viewport that tracks page scroll
const ScrollProgress = () => {
	const { scrollYProgress } = useScroll();
	const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

	return (
		<motion.div
			aria-hidden
			className="fixed top-0 left-0 right-0 z-[60] h-[3px] origin-left bg-linear-to-r from-emerald-400 via-sky-400 to-violet-500"
			style={{ scaleX }}
		/>
	);
};

export default ScrollProgress;
