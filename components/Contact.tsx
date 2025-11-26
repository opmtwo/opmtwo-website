import React from 'react';

const Contact: React.FC = () => {
	return (
		<main>
			<section id="section-contact" className="onscroll fitscreen seen">
				<div className="layer back">
					<div className="v-half bottom" />
				</div>
				<div className="letter">
					<div className="letter-back sketch" style={{ opacity: 1 }}>
						<svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" transform="scale(-1,1)">
							<path
								path-onseen={1}
								transform="translate(52, 50)"
								stroke="white"
								strokeWidth={50}
								fill="none"
								d="M 195 176 A 121 124 0 1 1 195 24"
								style={{
									strokeDasharray: '606.648px, 606.648px',
									strokeDashoffset: '606.648px',
								}}
								className="triggered"
							/>
						</svg>
					</div>
					<div className="letter-mid sketch" style={{ opacity: 1 }}>
						<svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" transform="scale(-1,1)">
							<path
								path-onseen={1}
								transform="translate(52, 50)"
								stroke="black"
								strokeWidth={50}
								fill="none"
								d="M 195 176 A 121 124 0 1 1 195 24"
								style={{
									strokeDasharray: '606.648px, 606.648px',
									strokeDashoffset: '606.648px',
								}}
								className="triggered"
							/>
						</svg>
						<div className="video">
							<video disablePictureInPicture muted loop autoPlay>
								{/* <source src="https://crustac.fr/wp-content/themes/crustac/img/video_waves2.webm" type="video/webm"> */}
								<source src="https://crustac.fr/wp-content/themes/crustac/img/video_waves2.mp4" type="video/mp4" />
							</video>
						</div>
					</div>
				</div>
				<div className="layer fore">
					<div className="centered-small clear-after">
						<div className="half fitheight">
							<div className="v-half top">
								<div className="stick-bottom right-pad-15">
									<div className="title">
										<h2 className="t-title-4">Contact</h2>
										<h2>
											Have you any questions&nbsp;?
											<br />
											Or perhaps a business need&nbsp;?
											<br />
										</h2>
									</div>
								</div>
							</div>
							<div className="v-half bottom right-pad-15 hide-mobile">
								<p className="t-regular">
									If you would like to contact us, feel free to get in touch here.
									<br />
								</p>{' '}
							</div>
						</div>
					</div>
				</div>
				<div className="center-holder">
					<a href="/en/contact/" className="btn-outline red big white-back red-back-hover white-hover from-center">
						<span className="in">Contact us</span>
					</a>
				</div>
				<div className="wave wave-home-6 parallax translate hide-mobile" style={{ transform: 'translateY(28.5185%)', opacity: 1 }}>
					<svg preserveAspectRatio="xMidYMid meet" viewBox="0 0 300 170" fill="none" xmlns="http://www.w3.org/2000/svg">
						<g filter="url(#filter-wave6)">
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M165.038 9L112.024 34.773L59.0137 9L11 32.3453V68.5629L59.1161 45.1647L111.971 70.9263L164.993 45.1434L218.185 71L271 45.1562V45.0673L270.827 9.11956L218.048 34.773L165.038 9Z"
								fill="#E20953"
							/>
						</g>
						<g filter="url(#filter-wave6)">
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M165.038 77L112.024 102.773L59.0137 77L11 100.345V136.563L59.1161 113.165L111.971 138.926L164.993 113.143L218.185 139L271 113.156V113.067L270.827 77.1196L218.048 102.773L165.038 77Z"
								fill="#E20953"
							/>
						</g>
						<defs>
							<filter id="filter-wave6" x={0} y={0} width={300} height={170} filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
								<feFlood floodOpacity={0} result="BackgroundImageFix" />
								<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
								<feOffset dx={9} dy={11} />
								<feGaussianBlur stdDeviation={10} />
								<feColorMatrix type="matrix" values="0 0 0 0 0.00784314 0 0 0 0 0.211765 0 0 0 0 0.27451 0 0 0 0.24 0" />
								<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
								<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
							</filter>
						</defs>
					</svg>
				</div>
				<div className="pagination">
					<div className="current">07</div>
					<div className="total">07</div>
				</div>
				<div />
			</section>
		</main>
	);
};

export default Contact;
