export default function Home() {
	return (
		<section id="section-intro" className="onscroll fitscreen seen loaded">
			<div className="layer back">
				<div className="rope sketch" path-speed="4" path-offset="0">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						id="svg-line1"
						viewBox="0 0 2.663384 1080"
						preserveAspectRatio="xMidYMax meet"
					>
						<path id="path-line1" d="M 1.331692,540 V 1080"></path>
					</svg>
				</div>
			</div>

			<div className="letter">
				{/* BACK O */}
				<div className="letter-back sketch">
					<svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
						<path
							path-onseen="1"
							stroke="white"
							strokeWidth="50"
							fill="none"
							strokeLinecap="round"
							strokeLinejoin="round"
							// Full O, centered in the viewBox
							d="M 150 50 A 100 100 0 1 1 149.999 50 Z"
							className="triggered"
						></path>
					</svg>
				</div>

				{/* MID O + VIDEO */}
				<div className="letter-mid sketch">
					<svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
						<path
							path-onseen="1"
							stroke="black"
							strokeWidth="50"
							fill="none"
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M 150 50 A 100 100 0 1 1 149.999 50 Z"
							className="triggered"
						></path>
					</svg>
					<div className="video">
						<video disablePictureInPicture muted loop autoPlay>
							<source src="https://crustac.fr/wp-content/themes/crustac/img/video_waves3.mp4" type="video/mp4" />
						</video>
					</div>
				</div>
			</div>

			<div className="layer loading"></div>

			<a href="#" className="next-screen a-input scrollto" data-target="section-about">
				<span className="in">Scroll</span>
			</a>

			<div className="pagination">
				<div className="current">01</div>
				<div className="total">07</div>
			</div>

			<div></div>
		</section>
	);
}
