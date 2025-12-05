function OfferCard({ title, subtitle, points }: { title: string; subtitle: string; points: string[] }) {
	return (
		<div className="flex flex-col rounded-2xl bg-slate-900/60 animate-fade-in-up">
			<h3 className="text-lg font-semibold bg-linear-to-r from-emerald-400 via-cyan-400 to-sky-400 bg-clip-text text-transparent">{title}</h3>
			<p className="mt-2 text-sm text-slate-200">{subtitle}</p>
			<ul className="mt-4 space-y-2 text-sm">
				{points.map((p) => (
					<li key={p} className="flex items-start gap-2">
						<span className="mt-0.5 inline-flex h-4 w-4 flex-none items-center justify-center rounded-full bg-emerald-500/20 text-[10px] text-emerald-300">
							✓
						</span>
						<span>{p}</span>
					</li>
				))}
			</ul>
		</div>
	);
}

const CoreOffersAlt = () => {
	return (
		<>
			<section id="offers" className="space-y-8">
				<div className="space-y-2">
					<h2 className="animate-fade-in-up text-xl font-semibold sm:text-2xl">My Core Offers</h2>
					<p className="animate-fade-in-up-delay text-sm text-slate-400 sm:text-base max-w-2xl">
						Pick a focused engagement or combine them into a full serverless + AI transformation roadmap.
					</p>
				</div>

				<div className="grid gap-6 md:grid-cols-2">
					{/* Offer 1 */}
					<OfferCard
						title="1. Serverless Backend Transformation Kit"
						subtitle="Modernize your backend with AWS Lambda, API Gateway, and DynamoDB."
						points={[
							'40–70% AWS cost reduction',
							'No servers, no DevOps, no scaling issues',
							'Ultra-fast feature delivery',
							'Clean, modern architecture',
						]}
					/>
					{/* Offer 2 */}
					<OfferCard
						title="2. AI Support Suite (ChatGPT + Llama 3)"
						subtitle="Automate customer support with AI-driven deflection & auto-reply."
						points={[
							'AI chatbot trained on your data',
							'Auto-triage & suggested replies',
							'AI IVR voice assistant',
							'50–70% reduction in support volume',
						]}
					/>
					{/* Offer 3 */}
					<OfferCard
						title="3. AI Automation Pipeline"
						subtitle="AI-driven data processing, document extraction, and log intelligence."
						points={['Automated document ingestion', 'Incident summarization', 'Review & feedback analysis', 'Data cleanup & enrichment']}
					/>
					{/* Offer 4 */}
					<OfferCard
						title="4. Custom AI Tools for Teams"
						subtitle="AI tools tailored to marketing, sales, engineering, HR, and legal."
						points={['AI code reviewer', 'AI SEO/blog generator', 'AI contract analyzer', 'AI email writer & training assistant']}
					/>
				</div>
			</section>
		</>
	);
};

export default CoreOffersAlt;
