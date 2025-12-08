const DownArrowIcon = ({ fill = 'none', stroke = 'currentColor', ...props }: React.SVGProps<SVGSVGElement>) => (
	<svg xmlns="http://www.w3.org/2000/svg" width={800} height={800} className="icon flat-line" data-name="Flat Line" viewBox="0 0 24 24" {...props}>
		<path
			d="M12 3v18"
			style={{
				fill: fill,
				stroke: stroke,
				strokeLinecap: 'round',
				strokeLinejoin: 'round',
				strokeWidth: 2,
			}}
		/>
		<path
			d="m9 18 3 3 3-3"
			data-name="primary"
			style={{
				fill: fill,
				stroke: stroke,
				strokeLinecap: 'round',
				strokeLinejoin: 'round',
				strokeWidth: 2,
			}}
		/>
	</svg>
);
export default DownArrowIcon;
