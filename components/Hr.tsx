'use client';

import { motion } from 'motion/react';

const Hr = () => {
	return (
		<>
			<motion.div
				className="h-px w-full my-16 origin-left bg-linear-to-r from-sky-500/80 via-sky-500/50 to-transparent opacity-90"
				initial={{ scaleX: 0 }}
				whileInView={{ scaleX: 1 }}
				viewport={{ once: true, amount: 1 }}
				transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
			></motion.div>
		</>
	);
};

export default Hr;
