// 'use client';

// import classNames from 'classnames';
// import { SVGProps, useEffect, useRef, useState } from 'react';

// const SvgComponent = ({ ...props }: SVGProps<SVGSVGElement>) => {
// 	const [visibility, setVisibility] = useState(false);
// 	const svgRef = useRef<SVGSVGElement | null>(null);

// 	useEffect(() => {
// 		if (typeof window === 'undefined' || !svgRef.current || !('IntersectionObserver' in window)) {
// 			return;
// 		}

// 		const observer = new IntersectionObserver(
// 			(entries) => {
// 				entries.forEach((entry) => {
// 					// When at least 50% visible → true
// 					if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
// 						setVisibility(true);
// 					}
// 					// When fully out of view → false
// 					if (!entry.isIntersecting || entry.intersectionRatio === 0) {
// 						setVisibility(false);
// 					}
// 				});
// 			},
// 			{
// 				threshold: [0, 0.5], // fire at 0% and 50%
// 			}
// 		);

// 		observer.observe(svgRef.current);

// 		return () => {
// 			observer.disconnect();
// 		};
// 	}, []);

// 	return (
// 		<svg
// 			ref={svgRef}
// 			xmlns="http://www.w3.org/2000/svg"
// 			preserveAspectRatio="xMidYMax meet"
// 			viewBox="0 0 240 1080"
// 			{...props}
// 		>
// 			<path
// 				d="m150.25 658.25-30.5-31-30.5 31M89.25 423.25l30.49 31 30.51-31"
// 				style={{
// 					fill: 'none',
// 					stroke: '#e20953',
// 					strokeWidth: '2.5px',
// 					strokeLinecap: 'round',
// 					strokeLinejoin: 'round',
// 					strokeDasharray: '86.977px,86.977px',
// 					strokeDashoffset: '86.977px',
// 				}}
// 				className={visibility ? 'triggered' : undefined}
// 			/>
// 			<path
// 				d="m4.25 573.25 31-32-31-32M236.25 509.25l-31 32 31 32"
// 				style={{
// 					fill: 'none',
// 					stroke: '#e20953',
// 					strokeWidth: '2.5px',
// 					strokeLinecap: 'round',
// 					strokeLinejoin: 'round',
// 					strokeDasharray: '89.1067px,89.1067px',
// 					strokeDashoffset: '89.1067px',
// 				}}
// 				className={visibility ? 'triggered' : undefined}
// 			/>
// 			<path
// 				d="m203.25 624.25-165-166"
// 				style={{
// 					fill: 'none',
// 					stroke: '#e20953',
// 					strokeWidth: '2.5px',
// 					strokeLinecap: 'round',
// 					strokeLinejoin: 'round',
// 					strokeDasharray: '234.053px,234.053px',
// 					strokeDashoffset: '234.053px',
// 				}}
// 				className={visibility ? 'triggered' : undefined}
// 			/>
// 			<path
// 				d="M15.25 478.25 58 478l.21-42.79"
// 				style={{
// 					fill: 'none',
// 					stroke: '#e20953',
// 					strokeWidth: '2.5px',
// 					strokeLinecap: 'round',
// 					strokeLinejoin: 'round',
// 					strokeDasharray: '85.5413px,85.5413px',
// 					strokeDashoffset: '85.5413px',
// 				}}
// 				className={visibility ? 'triggered' : undefined}
// 			/>
// 			<path
// 				d="m224.25 602.25-42.78.21-.22 42.79"
// 				style={{
// 					fill: 'none',
// 					stroke: '#e20953',
// 					strokeWidth: '2.5px',
// 					strokeLinecap: 'round',
// 					strokeLinejoin: 'round',
// 					strokeDasharray: '85.5711px,85.5711px',
// 					strokeDashoffset: '85.5711px',
// 				}}
// 				className={visibility ? 'triggered' : undefined}
// 			/>
// 			<path
// 				d="m38.25 624.25 165-166"
// 				style={{
// 					fill: 'none',
// 					stroke: '#e20953',
// 					strokeWidth: '2.5px',
// 					strokeLinecap: 'round',
// 					strokeLinejoin: 'round',
// 					strokeDasharray: '234.053px,234.053px',
// 					strokeDashoffset: '234.053px',
// 				}}
// 				className={visibility ? 'triggered' : undefined}
// 			/>
// 			<path
// 				d="m183.25 435.25.21 42.78 42.79.22"
// 				style={{
// 					fill: 'none',
// 					stroke: '#e20953',
// 					strokeWidth: '2.5px',
// 					strokeLinecap: 'round',
// 					strokeLinejoin: 'round',
// 					strokeDasharray: '85.5711px,85.5711px',
// 					strokeDashoffset: '85.5711px',
// 				}}
// 				className={visibility ? 'triggered' : undefined}
// 			/>
// 			<path
// 				d="M60.25 645.25 60 602.47l-42.79-.22"
// 				style={{
// 					fill: 'none',
// 					stroke: '#e20953',
// 					strokeWidth: '2.5px',
// 					strokeLinecap: 'round',
// 					strokeLinejoin: 'round',
// 					strokeDasharray: '85.5713px,85.5713px',
// 					strokeDashoffset: '85.5713px',
// 				}}
// 				className={visibility ? 'triggered' : undefined}
// 			/>
// 			<path
// 				d="m174.25 540.75-54.5 54.5-54.5-54.5 54.5-54.5z"
// 				style={{
// 					fill: 'none',
// 					stroke: '#e20953',
// 					strokeWidth: '2.5px',
// 					strokeLinecap: 'round',
// 					strokeLinejoin: 'round',
// 					strokeDasharray: '308.299px,308.299px',
// 					strokeDashoffset: '308.299px',
// 				}}
// 				className={visibility ? 'triggered' : undefined}
// 			/>

// 			{/* Vertical line with its own animation class */}
// 			<path
// 				d="M120 0v1080"
// 				style={{
// 					fill: 'none',
// 					stroke: '#e20953',
// 					strokeWidth: '2.5px',
// 					strokeLinecap: 'round',
// 					strokeLinejoin: 'round',
// 					strokeDasharray: '1080px,1080px',
// 					strokeDashoffset: '1080px', // start fully hidden
// 				}}
// 				className={classNames('', visibility ? 'triggered' : undefined)}
// 			/>

// 			<path
// 				d="M237.25 541.25h-234"
// 				style={{
// 					fill: 'none',
// 					stroke: '#e20953',
// 					strokeWidth: '2.5px',
// 					strokeLinecap: 'round',
// 					strokeLinejoin: 'round',
// 					strokeDasharray: '234px,234px',
// 					strokeDashoffset: 234,
// 				}}
// 				className={visibility ? 'triggered' : undefined}
// 			/>
// 		</svg>
// 	);
// };

// export default SvgComponent;

'use client';

import classNames from 'classnames';
import { SVGProps, useEffect, useRef, useState } from 'react';

const SvgComponent = ({ ...props }: SVGProps<SVGSVGElement>) => {
	const [visibility, setVisibility] = useState(false);
	const svgRef = useRef<SVGSVGElement | null>(null);

	useEffect(() => {
		if (typeof window === 'undefined' || !svgRef.current || !('IntersectionObserver' in window)) {
			return;
		}

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					// When at least 50% visible → true
					if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
						setVisibility(true);
					}
					// When fully out of view → false
					if (!entry.isIntersecting || entry.intersectionRatio === 0) {
						setVisibility(false);
					}
				});
			},
			{
				threshold: [0, 0.5],
			}
		);

		observer.observe(svgRef.current);

		return () => {
			observer.disconnect();
		};
	}, []);

	return (
		<svg
			ref={svgRef}
			xmlns="http://www.w3.org/2000/svg"
			preserveAspectRatio="xMidYMax meet"
			viewBox="0 0 240 1080"
			{...props}
		>
			{/* BIG BEAUTIFUL SNOWFLAKE CENTERED AROUND (120, 540) */}

			{/* Outer hexagon */}
			<path
				d="M120 460 L170 490 L170 550 L120 580 L70 550 L70 490 Z"
				style={{
					fill: 'none',
					stroke: '#e20953',
					strokeWidth: '2.5px',
					strokeLinecap: 'round',
					strokeLinejoin: 'round',
					strokeDasharray: '400px,400px',
					strokeDashoffset: '400px',
				}}
				className={visibility ? 'triggered' : undefined}
			/>

			{/* Inner hexagon */}
			<path
				d="M120 485 L152 504 L152 536 L120 555 L88 536 L88 504 Z"
				style={{
					fill: 'none',
					stroke: '#e20953',
					strokeWidth: '2.5px',
					strokeLinecap: 'round',
					strokeLinejoin: 'round',
					strokeDasharray: '300px,300px',
					strokeDashoffset: '300px',
				}}
				className={visibility ? 'triggered' : undefined}
			/>

			{/* Vertical arm (top & bottom, extended beyond hexagon) */}
			<path
				d="M120 430 L120 610"
				style={{
					fill: 'none',
					stroke: '#e20953',
					strokeWidth: '2.5px',
					strokeLinecap: 'round',
					strokeLinejoin: 'round',
					strokeDasharray: '380px,380px',
					strokeDashoffset: '380px',
				}}
				className={visibility ? 'triggered' : undefined}
			/>

			{/* Horizontal arm (left & right) */}
			<path
				d="M50 540 L190 540"
				style={{
					fill: 'none',
					stroke: '#e20953',
					strokeWidth: '2.5px',
					strokeLinecap: 'round',
					strokeLinejoin: 'round',
					strokeDasharray: '380px,380px',
					strokeDashoffset: '380px',
				}}
				className={visibility ? 'triggered' : undefined}
			/>

			{/* Diagonal arm ↗ ↙ */}
			<path
				d="M70 490 L170 590"
				style={{
					fill: 'none',
					stroke: '#e20953',
					strokeWidth: '2.5px',
					strokeLinecap: 'round',
					strokeLinejoin: 'round',
					strokeDasharray: '420px,420px',
					strokeDashoffset: '420px',
				}}
				className={visibility ? 'triggered' : undefined}
			/>

			{/* Diagonal arm ↖ ↘ */}
			<path
				d="M170 490 L70 590"
				style={{
					fill: 'none',
					stroke: '#e20953',
					strokeWidth: '2.5px',
					strokeLinecap: 'round',
					strokeLinejoin: 'round',
					strokeDasharray: '420px,420px',
					strokeDashoffset: '420px',
				}}
				className={visibility ? 'triggered' : undefined}
			/>

			{/* Small branches on vertical arm */}
			<path
				d="M112 472 L100 460 M128 472 L140 460 M112 608 L100 620 M128 608 L140 620"
				style={{
					fill: 'none',
					stroke: '#e20953',
					strokeWidth: '2.5px',
					strokeLinecap: 'round',
					strokeLinejoin: 'round',
					strokeDasharray: '220px,220px',
					strokeDashoffset: '220px',
				}}
				className={visibility ? 'triggered' : undefined}
			/>

			{/* Small branches on horizontal arm */}
			<path
				d="M58 532 L46 524 M58 548 L46 556 M182 532 L194 524 M182 548 L194 556"
				style={{
					fill: 'none',
					stroke: '#e20953',
					strokeWidth: '2.5px',
					strokeLinecap: 'round',
					strokeLinejoin: 'round',
					strokeDasharray: '220px,220px',
					strokeDashoffset: '220px',
				}}
				className={visibility ? 'triggered' : undefined}
			/>

			{/* Small branches on diagonals */}
			<path
				d="M84 502 L76 494 M92 514 L82 508 M156 566 L164 574 M148 554 L158 560"
				style={{
					fill: 'none',
					stroke: '#e20953',
					strokeWidth: '2.5px',
					strokeLinecap: 'round',
					strokeLinejoin: 'round',
					strokeDasharray: '220px,220px',
					strokeDashoffset: '220px',
				}}
				className={visibility ? 'triggered' : undefined}
			/>
			<path
				d="M156 502 L164 494 M148 514 L158 508 M84 566 L76 574 M92 554 L82 560"
				style={{
					fill: 'none',
					stroke: '#e20953',
					strokeWidth: '2.5px',
					strokeLinecap: 'round',
					strokeLinejoin: 'round',
					strokeDasharray: '220px,220px',
					strokeDashoffset: '220px',
				}}
				className={visibility ? 'triggered' : undefined}
			/>

			{/* Central crystal (little star) */}
			<path
				d="M120 528 L132 540 L120 552 L108 540 Z"
				style={{
					fill: 'none',
					stroke: '#e20953',
					strokeWidth: '2.5px',
					strokeLinecap: 'round',
					strokeLinejoin: 'round',
					strokeDasharray: '180px,180px',
					strokeDashoffset: '180px',
				}}
				className={visibility ? 'triggered' : undefined}
			/>
			<path
				d="M120 520 L136 540 L120 560 L104 540 Z"
				style={{
					fill: 'none',
					stroke: '#e20953',
					strokeWidth: '2.5px',
					strokeLinecap: 'round',
					strokeLinejoin: 'round',
					strokeDasharray: '200px,200px',
					strokeDashoffset: '200px',
				}}
				className={visibility ? 'triggered' : undefined}
			/>

			{/* Existing full vertical spine (kept for page-wide design) */}
			<path
				d="M120 0v1080"
				style={{
					fill: 'none',
					stroke: '#e20953',
					strokeWidth: '2.5px',
					strokeLinecap: 'round',
					strokeLinejoin: 'round',
					strokeDasharray: '1080px,1080px',
					strokeDashoffset: '1080px', // start fully hidden
				}}
				className={classNames('', visibility ? 'triggered' : undefined)}
			/>

			{/* Existing horizontal line through the center */}
			<path
				d="M237.25 541.25h-234"
				style={{
					fill: 'none',
					stroke: '#e20953',
					strokeWidth: '2.5px',
					strokeLinecap: 'round',
					strokeLinejoin: 'round',
					strokeDasharray: '234px,234px',
					strokeDashoffset: 234,
				}}
				className={visibility ? 'triggered' : undefined}
			/>
		</svg>
	);
};

export default SvgComponent;
