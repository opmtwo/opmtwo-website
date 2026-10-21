'use client';

import { animate, useInView } from 'motion/react';
import { useEffect, useRef, useState } from 'react';

interface CountUpProps {
	value: number;
	decimals?: number;
	prefix?: string;
	suffix?: string;
	duration?: number;
}

// Animates a number from 0 to `value` the first time it scrolls into view
const CountUp = ({ value, decimals = 0, prefix = '', suffix = '', duration = 1.8 }: CountUpProps) => {
	const ref = useRef<HTMLSpanElement>(null);
	const inView = useInView(ref, { once: true, amount: 0.6 });
	const [display, setDisplay] = useState(0);

	useEffect(() => {
		if (!inView) return;
		const controls = animate(0, value, { duration, ease: [0.16, 1, 0.3, 1], onUpdate: setDisplay });
		return () => controls.stop();
	}, [inView, value, duration]);

	return (
		<span ref={ref} className="tabular-nums">
			{prefix}
			{display.toFixed(decimals)}
			{suffix}
		</span>
	);
};

export default CountUp;
