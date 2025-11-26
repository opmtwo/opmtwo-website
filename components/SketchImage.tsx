// components/SketchImage.tsx
'use client';

import { useEffect, useState } from 'react';
import Image, { ImageProps } from 'next/image';

interface SketchImageProps extends Omit<ImageProps, 'alt'> {
	alt: string;
	className?: string;
	durationMs?: number;
}

export default function SketchImage({ alt, className, durationMs = 800, ...imgProps }: SketchImageProps) {
	const [showColor, setShowColor] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => setShowColor(true), 100); // small delay so animation is visible
		return () => clearTimeout(timer);
	}, []);

	return (
		<div className={`relative inline-block overflow-hidden ${className ?? ''}`}>
			{/* Normal image (fades in) */}
			<Image
				{...imgProps}
				alt={alt}
				className={`block transition-opacity ease-out ${showColor ? 'opacity-100' : 'opacity-0'}`}
				style={{
					transitionDuration: `${durationMs}ms`,
				}}
			/>

			{/* Sketch overlay (fades out) */}
			<Image
				{...imgProps}
				alt={alt}
				aria-hidden
				className={`absolute inset-0 transition-opacity ease-out ${showColor ? 'opacity-0' : 'opacity-100'}`}
				style={{
					filter: 'url(#sketch-filter)',
					transitionDuration: `${durationMs}ms`,
				}}
			/>
		</div>
	);
}
