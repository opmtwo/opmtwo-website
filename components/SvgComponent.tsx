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
				threshold: [0, 0.5], // fire at 0% and 50%
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
			<path
				d="m150.25 658.25-30.5-31-30.5 31M89.25 423.25l30.49 31 30.51-31"
				style={{
					fill: 'none',
					stroke: '#e20953',
					strokeWidth: '2.5px',
					strokeLinecap: 'round',
					strokeLinejoin: 'round',
					strokeDasharray: '86.977px,86.977px',
					strokeDashoffset: '86.977px',
				}}
				className={visibility ? 'triggered' : undefined}
			/>
			<path
				d="m4.25 573.25 31-32-31-32M236.25 509.25l-31 32 31 32"
				style={{
					fill: 'none',
					stroke: '#e20953',
					strokeWidth: '2.5px',
					strokeLinecap: 'round',
					strokeLinejoin: 'round',
					strokeDasharray: '89.1067px,89.1067px',
					strokeDashoffset: '89.1067px',
				}}
				className={visibility ? 'triggered' : undefined}
			/>
			<path
				d="m203.25 624.25-165-166"
				style={{
					fill: 'none',
					stroke: '#e20953',
					strokeWidth: '2.5px',
					strokeLinecap: 'round',
					strokeLinejoin: 'round',
					strokeDasharray: '234.053px,234.053px',
					strokeDashoffset: '234.053px',
				}}
				className={visibility ? 'triggered' : undefined}
			/>
			<path
				d="M15.25 478.25 58 478l.21-42.79"
				style={{
					fill: 'none',
					stroke: '#e20953',
					strokeWidth: '2.5px',
					strokeLinecap: 'round',
					strokeLinejoin: 'round',
					strokeDasharray: '85.5413px,85.5413px',
					strokeDashoffset: '85.5413px',
				}}
				className={visibility ? 'triggered' : undefined}
			/>
			<path
				d="m224.25 602.25-42.78.21-.22 42.79"
				style={{
					fill: 'none',
					stroke: '#e20953',
					strokeWidth: '2.5px',
					strokeLinecap: 'round',
					strokeLinejoin: 'round',
					strokeDasharray: '85.5711px,85.5711px',
					strokeDashoffset: '85.5711px',
				}}
				className={visibility ? 'triggered' : undefined}
			/>
			<path
				d="m38.25 624.25 165-166"
				style={{
					fill: 'none',
					stroke: '#e20953',
					strokeWidth: '2.5px',
					strokeLinecap: 'round',
					strokeLinejoin: 'round',
					strokeDasharray: '234.053px,234.053px',
					strokeDashoffset: '234.053px',
				}}
				className={visibility ? 'triggered' : undefined}
			/>
			<path
				d="m183.25 435.25.21 42.78 42.79.22"
				style={{
					fill: 'none',
					stroke: '#e20953',
					strokeWidth: '2.5px',
					strokeLinecap: 'round',
					strokeLinejoin: 'round',
					strokeDasharray: '85.5711px,85.5711px',
					strokeDashoffset: '85.5711px',
				}}
				className={visibility ? 'triggered' : undefined}
			/>
			<path
				d="M60.25 645.25 60 602.47l-42.79-.22"
				style={{
					fill: 'none',
					stroke: '#e20953',
					strokeWidth: '2.5px',
					strokeLinecap: 'round',
					strokeLinejoin: 'round',
					strokeDasharray: '85.5713px,85.5713px',
					strokeDashoffset: '85.5713px',
				}}
				className={visibility ? 'triggered' : undefined}
			/>
			<path
				d="m174.25 540.75-54.5 54.5-54.5-54.5 54.5-54.5z"
				style={{
					fill: 'none',
					stroke: '#e20953',
					strokeWidth: '2.5px',
					strokeLinecap: 'round',
					strokeLinejoin: 'round',
					strokeDasharray: '308.299px,308.299px',
					strokeDashoffset: '308.299px',
				}}
				className={visibility ? 'triggered' : undefined}
			/>

			{/* Vertical line with its own animation class */}
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
