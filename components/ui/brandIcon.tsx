import React from 'react';
import type { SimpleIcon } from 'simple-icons';

// Relative luminance of a hex colour, 0 (black) to 1 (white)
const luminance = (hex: string) => {
	const [r, g, b] = [0, 2, 4].map((i) => {
		const c = parseInt(hex.slice(i, i + 2), 16) / 255;
		return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
	});
	return 0.2126 * r + 0.7152 * g + 0.0722 * b;
};

// Turns a Simple Icons entry into an icon component in its brand colour;
// near-black brands render white so they stay visible on the dark theme
export const brandIcon = (icon: SimpleIcon) => {
	const fill = luminance(icon.hex) < 0.04 ? '#ffffff' : `#${icon.hex}`;

	const Icon = ({ className }: { className?: string }) => (
		<svg viewBox="0 0 24 24" className={className} fill={fill} role="img" aria-label={icon.title}>
			<path d={icon.path} />
		</svg>
	);
	Icon.displayName = `${icon.title.replace(/\W/g, '')}Icon`;
	// brand colour, used for glows and highlights around the icon
	Icon.accent = fill;

	return Icon as React.ComponentType<{ className?: string }> & { accent: string };
};
