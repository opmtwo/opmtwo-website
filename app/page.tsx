"use client"

import { useState } from "react";
import { Switch } from "antd";

export default function Home() {
	const [useGradient, setUseGradient] = useState(true);

	return (
		<section id="section-intro" className="onscroll fitscreen seen loaded">
			{/* <div className="layer back">
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
			</div> */}

			{/* Ant Design toggle */}
			<div className="o-toggle">
				<span className="o-toggle-label">Neon Gradient</span>
				<Switch checked={useGradient} onChange={setUseGradient} />
			</div>

			<div className="letter">
				{/* BACK O */}
				<div className="letter-back sketch">
					<svg
						viewBox="0 0 300 300"
						xmlns="http://www.w3.org/2000/svg"
						preserveAspectRatio="xMidYMid meet"
						style={{ overflow: "visible" }}
					>
						<defs>
							<linearGradient id="gradBack" x1="0%" y1="0%" x2="100%" y2="100%">
								<stop offset="0%" stopColor="#ff0099" />
								<stop offset="100%" stopColor="#00ffff" />
							</linearGradient>

							<filter id="glowBack" x="-50%" y="-50%" width="200%" height="200%">
								<feGaussianBlur stdDeviation="6.5" result="coloredBlur" />
								<feMerge>
									<feMergeNode in="coloredBlur" />
									<feMergeNode in="SourceGraphic" />
								</feMerge>
							</filter>
						</defs>

						<path
							stroke={useGradient ? "url(#gradBack)" : "#ffffff"}
							strokeWidth="50"
							fill="none"
							strokeLinecap="round"
							strokeLinejoin="round"
							filter={useGradient ? "url(#glowBack)" : undefined}
							d="M 150 50 A 100 100 0 1 1 149.999 50 Z"
							className="o-path o-path-back"
						></path>
					</svg>
				</div>

				{/* MID O + VIDEO */}
				<div className="letter-mid sketch">
					<svg
						viewBox="0 0 300 300"
						xmlns="http://www.w3.org/2000/svg"
						preserveAspectRatio="xMidYMid meet"
						style={{ overflow: "visible" }}
					>
						<defs>
							<linearGradient id="gradFront" x1="0%" y1="100%" x2="100%" y2="0%">
								<stop offset="0%" stopColor="#00ff88" />
								<stop offset="100%" stopColor="#ff66cc" />
							</linearGradient>

							<filter id="glowFront" x="-50%" y="-50%" width="200%" height="200%">
								<feGaussianBlur stdDeviation="4.5" result="coloredBlur" />
								<feMerge>
									<feMergeNode in="coloredBlur" />
									<feMergeNode in="SourceGraphic" />
								</feMerge>
							</filter>
						</defs>

						<path
							stroke={useGradient ? "url(#gradFront)" : "#000000"}
							strokeWidth="50"
							fill="none"
							strokeLinecap="round"
							strokeLinejoin="round"
							filter={useGradient ? "url(#glowFront)" : undefined}
							d="M 150 50 A 100 100 0 1 1 149.999 50 Z"
							className="o-path o-path-mid"
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

			{/* <a href="#" className="next-screen a-input scrollto" data-target="section-about">
				<span className="in">Scroll</span>
			</a>

			<div className="pagination">
				<div className="current">01</div>
				<div className="total">07</div>
			</div>

			<div></div> */}

			<style jsx>{`
				@keyframes drawCircle {
					from {
						stroke-dashoffset: 700;
					}
					to {
						stroke-dashoffset: 0;
					}
				}

				@keyframes popIn {
					from {
						transform: scale(0.9);
						opacity: 0;
					}
					to {
						transform: scale(1);
						opacity: 1;
					}
				}

				.o-path {
					stroke-dasharray: 700;
					stroke-dashoffset: 700;
					animation: drawCircle 1.8s ease-out forwards;
				}

				.o-path-back {
					animation-delay: 0s;
				}

				.o-path-mid {
					animation-delay: 0.25s;
				}

				.letter-mid {
					opacity: 0;
					transform: scale(0.96);
					animation: popIn 0.6s ease-out 0.25s forwards;
					transform-origin: center;
				}

				.o-toggle {
					position: absolute;
					top: 20px;
					right: 20px;
					display: flex;
					align-items: center;
					gap: 8px;
					z-index: 10;
					padding: 8px 12px;
					border-radius: 999px;
					background: rgba(0, 0, 0, 0.4);
					backdrop-filter: blur(8px);
				}

				.o-toggle-label {
					font-size: 12px;
					color: #f5f5f5;
					text-transform: uppercase;
					letter-spacing: 0.08em;
				}
			`}</style>
		</section>
	);
}
