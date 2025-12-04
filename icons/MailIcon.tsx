const MailIcon = ({ stroke = 'currentColor', ...props }: React.SVGProps<SVGSVGElement>) => (
	<svg viewBox="0 0 48 48" {...props}>
		<path
			d="M6.47 10.71a2 2 0 0 0-2 2h0v22.61a2 2 0 0 0 2 2h35.06a2 2 0 0 0 2-2h0V12.68a2 2 0 0 0-2-2H6.47Zm33.21 3.82L24 26.07 8.32 14.53"
			style={{
				fill: 'none',
				stroke: stroke,
				strokeLinecap: 'round',
				strokeLinejoin: 'round',
				strokeWidth: 4,
			}}
		/>
	</svg>
);
export default MailIcon;
