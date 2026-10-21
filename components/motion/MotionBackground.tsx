'use client';

import { motion, useScroll, useTransform } from 'motion/react';

const orbs = [
	{ className: 'top-[-10%] left-[-10%] h-[28rem] w-[28rem] bg-emerald-300/40', x: [0, 80, -40, 0], y: [0, 60, 120, 0], duration: 22 },
	{ className: 'top-[10%] right-[-12%] h-[32rem] w-[32rem] bg-sky-300/40', x: [0, -100, 30, 0], y: [0, 80, -40, 0], duration: 26 },
	{ className: 'top-[45%] left-[20%] h-[22rem] w-[22rem] bg-violet-300/30', x: [0, 60, -80, 0], y: [0, -60, 40, 0], duration: 30 },
];

// Floating blurred gradient orbs + a drifting grid behind the hero
const MotionBackground = () => {
	const { scrollY } = useScroll();
	const parallax = useTransform(scrollY, [0, 800], [0, 200]);
	const fade = useTransform(scrollY, [0, 700], [1, 0]);

	return (
		<motion.div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" style={{ y: parallax, opacity: fade }}>
			{orbs.map((orb, i) => (
				<motion.div
					key={i}
					className={`absolute rounded-full blur-3xl ${orb.className}`}
					animate={{ x: orb.x, y: orb.y, scale: [1, 1.15, 0.95, 1] }}
					transition={{ duration: orb.duration, repeat: Infinity, ease: 'easeInOut' }}
				/>
			))}

			<motion.div
				className="absolute inset-0 opacity-[0.35] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]"
				style={{
					backgroundImage:
						'linear-gradient(to right, rgb(148 163 184 / 0.25) 1px, transparent 1px), linear-gradient(to bottom, rgb(148 163 184 / 0.25) 1px, transparent 1px)',
					backgroundSize: '48px 48px',
				}}
				animate={{ backgroundPosition: ['0px 0px', '48px 48px'] }}
				transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
			/>
		</motion.div>
	);
};

export default MotionBackground;
