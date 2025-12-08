export function OpensearchIcon(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none" {...props}>
			{/* black rounded square background, centered */}
			<rect x="6" y="6" width="20" height="20" rx="5" fill="black" />

			{/* magnifying glass circle */}
			<circle cx="14" cy="14" r="4" stroke="white" strokeWidth="2" />

			{/* handle */}
			<path d="M17 17 L21 21" stroke="white" strokeWidth="2" strokeLinecap="round" />
		</svg>
	);
}
