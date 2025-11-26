// Put this near the top of your file
const coreOffers = [
	{
		id: '01',
		tag: 'Backend & Infrastructure',
		title: 'Serverless Backend Transformation Kit',
		subtitle: 'Modernize your backend with AWS Lambda, API Gateway, and DynamoDB.',
		points: [
			'40–70% AWS cost reduction on core workloads',
			'No servers, no DevOps fire-fighting, no scaling pain',
			'Ultra-fast feature delivery with event-driven patterns',
			'Clean, modern architecture your team can extend',
		],
	},
	{
		id: '02',
		tag: 'Support & CX Automation',
		title: 'AI Support Suite (ChatGPT + Llama 3)',
		subtitle: 'Automate customer support with AI-powered deflection & smart replies.',
		points: [
			'AI chatbot trained on your docs, FAQs, and tickets',
			'Auto-triage, suggested replies, and internal agent copilot',
			'Optional AI IVR voice assistant for phone support',
			'50–70% reduction in repetitive support volume',
		],
	},
	{
		id: '03',
		tag: 'Data & Operations',
		title: 'AI Automation Pipeline',
		subtitle: 'AI-driven data processing, document extraction, and log intelligence.',
		points: [
			'Automated document ingestion & smart classification',
			'Entity extraction, summarization & compliance checks',
			'Incident & log summarization for faster root-cause',
			'Data cleanup, enrichment, and analytics-ready outputs',
		],
	},
	{
		id: '04',
		tag: 'Team Productivity',
		title: 'Custom AI Tools for Teams',
		subtitle: 'Internal AI tools tailored to marketing, sales, engineering, HR, and legal.',
		points: [
			'AI code reviewer & engineering assistant',
			'AI SEO / blog generator for content teams',
			'AI contract & policy analyzer for legal / HR',
			'AI email writer & training assistant for busy teams',
		],
	},
];

const CoreOffers = () => {
	return (
		<>
			<section id="offers" className="relative my-20">
				{/* Background accents (auto-adjust via opacity only) */}
				<div className="pointer-events-none absolute inset-0 -z-10">
					<div
						className="absolute left-1/2 top-0 h-64 w-[120%] -translate-x-1/2 
			bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.12),transparent_60%)] 
			dark:bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.18),transparent_60%)]
		"
					/>

					<div
						className="absolute bottom-0 left-[-10%] h-56 w-56 rounded-full 
			bg-[radial-gradient(circle_at_center,_rgba(129,140,248,0.12),transparent_65%)]
			dark:bg-[radial-gradient(circle_at_center,_rgba(129,140,248,0.2),transparent_65%)]
			blur-2xl
		"
					/>

					<div
						className="absolute right-[-5%] top-1/3 h-64 w-64 rounded-full 
			bg-[radial-gradient(circle_at_center,_rgba(45,212,191,0.12),transparent_65%)]
			dark:bg-[radial-gradient(circle_at_center,_rgba(45,212,191,0.18),transparent_65%)]
			blur-3xl
		"
					/>
				</div>

				{/* Header */}
				<div className="mx-auto flex max-w-5xl flex-col items-center text-center">
					<p
						className="inline-flex items-center gap-2 rounded-full border border-slate-300/40 dark:border-white/10 
			bg-white/40 dark:bg-white/5 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.22em] 
			text-slate-600 dark:text-slate-300 backdrop-blur"
					>
						<span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
						Core Offers
					</p>

					<h2
						className="mt-4 bg-gradient-to-r from-sky-500 via-emerald-400 to-indigo-500 
			bg-clip-text text-3xl sm:text-4xl font-semibold text-transparent"
					>
						Serverless & AI, packaged as outcomes
					</h2>

					<p className="mt-3 max-w-2xl text-sm text-slate-700 dark:text-slate-300 sm:text-base">
						Pick a focused engagement or combine them into a full
						<span className="bg-gradient-to-r from-emerald-400 via-sky-400 to-indigo-400 bg-clip-text font-medium text-transparent">
							{' '}
							serverless + AI transformation roadmap
						</span>{' '}
						for your product, team, and budget.
					</p>
				</div>

				{/* Zig-zag list */}
				<div className="mx-auto mt-10 grid max-w-5xl gap-6">
					{coreOffers.map((offer, index) => {
						const isEven = index % 2 === 0;

						return (
							<div
								key={offer.id}
								className={`
						group relative flex flex-col md:flex-row gap-4
						rounded-3xl border border-slate-300/40 dark:border-white/10
						bg-white/70 dark:bg-slate-950/70 
						shadow-lg dark:shadow-[0_18px_55px_rgba(15,23,42,0.85)]
						backdrop-blur 
						p-5 sm:p-7 transition-all duration-300
						${isEven ? 'md:translate-x-6' : 'md:-translate-x-6'}
						hover:-translate-y-1.5 hover:border-sky-500/60 hover:bg-white/90 dark:hover:bg-slate-950
					`}
							>
								{/* Accent strip */}
								<div
									className={`
						pointer-events-none absolute top-0 h-1 w-2/5 rounded-t-3xl
						bg-gradient-to-r from-sky-400 via-emerald-300 to-indigo-400
						${isEven ? 'left-0' : 'right-0'}
					`}
								/>

								{/* Left meta block */}
								<div className="flex flex-col md:w-40 gap-3 pt-1">
									<span
										className="rounded-full bg-slate-200/80 dark:bg-slate-900/90 
							px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] 
							text-slate-600 dark:text-slate-400"
									>
										{offer.tag}
									</span>

									<div>
										<p className="text-[11px] uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">Offer</p>
										<p
											className="bg-gradient-to-b from-sky-400 to-emerald-300 bg-clip-text 
								text-3xl font-semibold text-transparent"
										>
											{offer.id}
										</p>
									</div>

									<p className="hidden md:block text-[11px] text-slate-600 dark:text-slate-400">Designed as an outcome-first engagement.</p>
								</div>

								{/* Main content */}
								<div className="flex-1">
									<h3
										className="bg-gradient-to-r from-sky-400 via-emerald-300 to-indigo-300 
							bg-clip-text text-lg sm:text-xl font-semibold text-transparent"
									>
										{offer.title}
									</h3>

									<p className="mt-1.5 text-sm text-slate-700 dark:text-slate-300/85">{offer.subtitle}</p>

									<ul className="mt-4 space-y-1.5 text-sm text-slate-700 dark:text-slate-200">
										{offer.points.map((point) => (
											<li key={point} className="flex gap-2">
												<span
													className="mt-1 h-1.5 w-1.5 flex-none rounded-full 
										bg-gradient-to-r from-sky-400 to-emerald-300"
												/>
												<span>{point}</span>
											</li>
										))}
									</ul>
								</div>

								{/* Hover glow */}
								<div
									className="pointer-events-none absolute inset-0 -z-10 opacity-0 
						group-hover:opacity-100 blur-2xl transition-opacity duration-300"
								>
									<div
										className="absolute inset-x-4 bottom-[-40%] h-40 
							bg-[radial-gradient(circle_at_center,_rgba(56,189,248,0.25),transparent_70%)]"
									/>
								</div>
							</div>
						);
					})}
				</div>
			</section>
		</>
	);
};

export default CoreOffers;
