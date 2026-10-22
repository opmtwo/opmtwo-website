'use client';

import classNames from 'classnames';
import { motion } from 'motion/react';
import React from 'react';

const EASE = [0.22, 1, 0.36, 1] as const;

interface SectionHeadingProps {
	eyebrow: string;
	title: React.ReactNode;
	accent?: React.ReactNode;
	description?: React.ReactNode;
	align?: 'left' | 'center';
	className?: string;
}

// Eyebrow + large headline (with serif italic accent) + description, revealed word by word
const SectionHeading = ({ eyebrow, title, accent, description, align = 'left', className }: SectionHeadingProps) => {
	const centered = align === 'center';

	return (
		<motion.div
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, amount: 0.4 }}
			variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
			className={classNames('max-w-3xl 3xl:max-w-4xl', centered && 'mx-auto text-center', className)}
		>
			<motion.p
				variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } } }}
				className={classNames('inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.25em] text-muted', centered && 'justify-center')}
			>
				<span className="h-px w-6 bg-linear-to-r from-transparent to-emerald-400" />
				{eyebrow}
			</motion.p>

			<motion.h2
				variants={{ hidden: { opacity: 0, y: 24, filter: 'blur(8px)' }, visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.9, ease: EASE } } }}
				className="mt-4 text-4xl font-medium text-shine sm:mt-5 sm:text-5xl md:text-6xl 3xl:text-7xl"
			>
				{title}
				{accent && (
					<>
						{' '}
						<span className="font-serif italic font-normal tracking-normal text-gradient pr-1">{accent}</span>
					</>
				)}
			</motion.h2>

			{description && (
				<motion.p
					variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } } }}
					className={classNames('mt-4 max-w-xl text-base leading-relaxed text-muted sm:mt-5 sm:text-lg 3xl:max-w-2xl 3xl:text-xl', centered && 'mx-auto')}
				>
					{description}
				</motion.p>
			)}
		</motion.div>
	);
};

export default SectionHeading;
