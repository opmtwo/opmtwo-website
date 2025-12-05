const SadIcon = (props: React.SVGProps<SVGSVGElement>) => (
	<svg xmlns="http://www.w3.org/2000/svg" width={800} height={800} fill="none" viewBox="0 -0.5 83 83" {...props}>
		<path
			fill="url(#a)"
			fillRule="evenodd"
			d="M31.314 1.38C9.59 7.004-3.46 29.174 2.167 50.897 7.792 72.62 29.963 85.67 51.685 80.045c21.723-5.626 34.772-27.797 29.148-49.519C75.207 8.803 53.037-4.247 31.313 1.38Z"
			clipRule="evenodd"
		/>
		<path
			fill="url(#b)"
			fillRule="evenodd"
			d="M23.029 20.112c-2.891 2.7-5.44 7.935-5.058 11.629.625 6.077 11.304 5.688 10.977-1.373-.171-3.685-2.848-8.221-5.92-10.256Z"
			clipRule="evenodd"
		/>
		<path
			fill="#2B2A29"
			d="M57.417 54.023a1.343 1.343 0 0 1 .84-2.55l8.347 2.763a1.342 1.342 0 1 1-.84 2.55l-8.346-2.763ZM32.42 55.451a1.339 1.339 0 1 1-.409-2.645L42.58 51.15a1.337 1.337 0 1 1 .41 2.645L32.42 55.45ZM44.409 65.906a1.34 1.34 0 1 1-.65-2.603c2-.507 4.347-.75 6.678-.564 2.057.165 4.114.666 5.935 1.614a1.342 1.342 0 1 1-1.239 2.381c-1.481-.771-3.185-1.18-4.906-1.318a18.242 18.242 0 0 0-5.818.49Z"
		/>
		<defs>
			<radialGradient
				id="a"
				cx={0}
				cy={0}
				r={1}
				gradientTransform="matrix(-124.6809 32.28879 -32.28854 -124.67994 53.661 30.994)"
				gradientUnits="userSpaceOnUse"
			>
				<stop stopColor="#FFE28E" />
				<stop offset={1} stopColor="#F9B86C" />
			</radialGradient>
			<linearGradient id="b" x1={22.855} x2={25.494} y1={22.338} y2={34.962} gradientUnits="userSpaceOnUse">
				<stop stopColor="#33BEFF" />
				<stop offset={1} stopColor="#298FE3" />
			</linearGradient>
		</defs>
	</svg>
);
export default SadIcon;
