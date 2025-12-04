const Banner = () => {
	return (
		<>
			<section
				id="hero"
				// className="relative overflow-hidden min-h-dvh flex items-center rounded-3xl border border-slate-800  from-slate-900 via-slate-950 to-slate-900 px-6 py-12 sm:px-10 sm:py-16 shadow-2xl"
				// className="relative overflow-hidden min-h-dvh flex items-center bg-background px-6 py-12 sm:px-10 sm:py-16"
				className="relative overflow-hidden min-h-dvh flex items-center bg-background"
			>
				<div
					className="absolute top-0 right-0 bottom-0 left-0 w-full h-full bg-cover md:w-[40%] ml-auto"
					style={{
						// backgroundColor: '#fbf5e3',
						// backgroundBlendMode: 'hard-light',
						// backgroundBlendMode: 'color-dodge',
						// backgroundColor: '#1d27bd',
						backgroundImage: 'url(/sketch.png)',
						backgroundPosition: 'top right',
						backgroundRepeat: 'no-repeat',
						// filter: 'blur(1px)',
						// filter: 'opacity(60%)',
						// filter: 'grayscale(50%)',
					}}
				></div>
				{/* <SketchImage
						src="/sketch.png"
						alt="My awesome sketch-style hero image"
						width={400}
						height={400}
						className="rounded-xl shadow-lg"
						durationMs={1000}
					/> */}

				<div className="pointer-events-none absolute inset-0">
					<div className="absolute -top-32 -right-32 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" />
					<div className="absolute -bottom-32 -left-24 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
				</div>

				<div className="relative z-10 grid gap-12 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)] bg-white/80 dark:bg-black/80 md:bg-transparen dark:md:bg-transparen rounded-2xl p-12">
					<div className="space-y-8">
						<div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-slate-900/70 px-3 py-1 text-xs font-medium uppercase tracking-wide text-emerald-300 animate-fade-in-up">
							<span className="h-2 w-2 animate-ping rounded-full bg-emerald-400" />
							Serverless AWS • AI Automation • Cost Optimization
						</div>

						<div className="space-y-4">
							<h1 className="animate-fade-in-up-delay text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">
								Transform Your Business with{' '}
								<span className="bg-linear-to-r from-emerald-300 via-cyan-300 to-sky-300 bg-clip-text text-transparent">
									Serverless AWS &amp; AI Automation
								</span>
							</h1>

							<p className="animate-fade-in-up-delay-2 max-w-2xl text-sm sm:text-base">
								Faster development. Lower costs. Higher productivity. I help teams ship modern serverless backends and AI workflows without the
								overhead of managing infrastructure.
							</p>

							<p className="animate-fade-in-up-delay-3 text-sm text-slate-400">
								<span className="font-semibold text-emerald-300">120+ 5-star reviews</span> • Trusted by startups &amp; enterprises worldwide
							</p>
						</div>

						<div className="flex flex-wrap items-center gap-4">
							<a
								href="#contact"
								className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/30 transition hover:bg-emerald-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
							>
								Book a Free 15-Minute Consultation
							</a>
							<p className="text-xs text-slate-400 sm:text-sm">No obligation. Get a clear plan and ballpark savings in one call.</p>
						</div>

						{/* SVG animated accent text */}
						<div className="mt-4">
							<svg viewBox="0 0 420 60" className="w-full animate-stroke-draw">
								<defs>
									<linearGradient id="accentStroke" x1="0%" y1="0%" x2="100%" y2="0%">
										<stop offset="0%" stopColor="#22c55e" />
										<stop offset="50%" stopColor="#22d3ee" />
										<stop offset="100%" stopColor="#38bdf8" />
									</linearGradient>
								</defs>
								<text
									x="0"
									y="40"
									fontSize="26"
									fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'SF Pro Text'"
									fill="none"
									stroke="url(#accentStroke)"
									strokeWidth={1.5}
									className="hero-stroke-text"
								>
									Serverless • AI • Automation
								</text>
							</svg>
						</div>
					</div>

					{/* Social proof card */}
					{/* <div className="flex flex-col justify-between rounded-2xl border border-slate-800 bg-slate-950/70 p-5 shadow-xl animate-fade-in-left">
						<div className="space-y-3 text-sm text-slate-200">
							<p className="flex items-center gap-2 text-emerald-300">
								<span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/10">⭐</span>
								Top-rated AWS Architect
							</p>
							<p>⭐ 120+ Five Star Reviews</p>
							<p>⭐ AWS Serverless + AI Expert</p>
							<p>⭐ 10+ Years of Cloud Experience</p>
							<p>⭐ Trusted by teams in US, Europe, India</p>
						</div>

						<div className="mt-5">
							<p className="mb-3 text-xs uppercase tracking-wide text-slate-500">Preferred Platforms</p>
							<div className="flex flex-wrap gap-2 text-xs text-slate-200">
								<LogoPill label="AWS" />
								<LogoPill label="OpenAI" />
								<LogoPill label="Next.js" />
								<LogoPill label="Node.js" />
								<LogoPill label="Python" />
							</div>
						</div>
					</div> */}
				</div>
			</section>
		</>
	);
};

export default Banner;
