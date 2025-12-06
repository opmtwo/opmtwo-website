// app/components/ServicesShowcase.tsx
import classNames from 'classnames';
import React from 'react';

type ServiceCategory = 'Serverless & Cloud' | 'AI & Automation';

interface ServiceItem {
	id: number;
	total: number;
	title: string;
	description: string;
	category: ServiceCategory;
}

const services: ServiceItem[] = [
	// Serverless & Cloud
	{
		id: 1,
		total: 8,
		title: 'Serverless Backend Transformation Kit',
		description: 'Migrate APIs & backends to Lambda, API Gateway, and DynamoDB with clean, scalable architecture.',
		category: 'Serverless & Cloud',
	},
	{
		id: 2,
		total: 8,
		title: 'Legacy-to-Serverless Modernization',
		description: 'Refactor monoliths into event-driven, pay-per-use serverless systems without big-bang rewrites.',
		category: 'Serverless & Cloud',
	},
	{
		id: 3,
		total: 8,
		title: 'AWS Cost Optimization & FinOps',
		description: 'Audit your AWS bill and cut 40–70% costs with right-sizing, autoscaling, and serverless patterns.',
		category: 'Serverless & Cloud',
	},
	{
		id: 4,
		total: 8,
		title: 'Scalable APIs & Event Pipelines',
		description: 'Build resilient APIs with queues, streams, EventBridge, Step Functions, and Lambda.',
		category: 'Serverless & Cloud',
	},

	// AI & Automation
	{
		id: 5,
		total: 8,
		title: 'AI Support Suite (ChatGPT + Llama + Gemini)',
		description: 'AI chatbot trained on your docs, ticketing history, FAQs, and knowledge base.',
		category: 'AI & Automation',
	},
	{
		id: 6,
		total: 8,
		title: 'AI Document Workflows',
		description: 'Automate OCR, summarization, classification & extraction for PDFs and forms.',
		category: 'AI & Automation',
	},
	{
		id: 7,
		total: 8,
		title: 'AI Internal Tools & Dashboards',
		description: 'AI reasoning + real-time data → instantly smarter internal operations.',
		category: 'AI & Automation',
	},
	{
		id: 8,
		total: 8,
		title: 'AI Strategy & Architecture',
		description: 'Model selection, embeddings, vector DB, and low-cost AI workflow design.',
		category: 'AI & Automation',
	},
];

const groupByCategory = (items: ServiceItem[]) => {
	return items.reduce(
		(acc: Record<ServiceCategory, ServiceItem[]>, item) => {
			acc[item.category].push(item);
			return acc;
		},
		{
			'Serverless & Cloud': [],
			'AI & Automation': [],
		}
	);
};

export const ServicesShowcase: React.FC = () => {
	const grouped = groupByCategory(services);

	return (
		<section className="py-16 bg-slate-50 dark:bg-slate-950 text-slate-900">
			<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
				{/* Heading */}
				<header className="mb-12 space-y-3">
					<h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight">
						<span className="bg-linear-to-r from-red-600 to-red-400 bg-clip-text text-transparent">Services</span>{' '}
						<span className="font-normal dark:text-white">– that Make a Difference</span>
					</h2>
				</header>

				{Object.entries(grouped).map(([category, items], index) => (
					<div key={category} className={classNames(index < Object.entries(grouped).length - 1 ? 'mb-14' : '')}>
						{/* Category heading */}
						<div className="mb-6 flex items-center gap-3">
							<span className="h-px w-10 bg-linear-to-r from-red-500 to-red-300" />
							<h3 className="text-xl font-semibold bg-linear-to-r from-slate-800 to-slate-500 bg-clip-text text-transparent">{category}</h3>
						</div>

						{/* Grid */}
						<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
							{items.map((service) => (
								<div
									key={service.id}
									className="
										relative rounded-3xl p-[2px] 
										bg-linear-to-br from-red-500/40 via-red-300/40 to-red-500/40
										hover:from-red-400 hover:via-red-200 hover:to-red-500 
										transition-all duration-300
                  					"
								>
									<article
										className="
											h-full rounded-3xl bg-white dark:bg-slate-900 p-6 
											backdrop-blur-sm 
											shadow-[0_0_20px_rgba(255,0,0,0.08)] 
											hover:shadow-[0_0_28px_rgba(255,0,0,0.14)]
											transition-all duration-300
					  					"
										//   hover:-translate-y-1
									>
										{/* Number */}
										<div className="inline-flex rounded-full bg-slate-100 dark:bg-slate-800 px-3 py-1 text-xs font-medium text-red-600">
											{service.id}/{service.total}
										</div>

										{/* Title + Description */}
										<div className="mt-6 space-y-2">
											<h4 className="text-lg font-semibold bg-gradient-to-r from-red-600 to-red-400 bg-clip-text text-transparent">
												{service.title}
											</h4>
											<p className="text-sm leading-relaxed text-slate-600">{service.description}</p>
										</div>
									</article>
								</div>
							))}
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default ServicesShowcase;
