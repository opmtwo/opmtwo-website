// app/components/ServicesShowcase.tsx
import classNames from 'classnames';
import React from 'react';

import Text from './Text';
import Title from './Title';

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
		title: 'AI Support Suite (ChatGPT + Claude + Llama)',
		description: 'AI chatbot trained on your docs, ticketing history, FAQs, and knowledge base.',
		category: 'AI & Automation',
	},
	{
		id: 6,
		total: 8,
		title: 'AI Document Based Workflows',
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
		<section id="services" className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
			{/* Heading */}
			{/* <header className="mb-12 space-y-3">
				<h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight">
					<span className="bg-linear-to-r from-red-600 to-red-400 bg-clip-text text-transparent">Services</span>{' '}
					<span className="font-normal dark:text-white">– that Make a Difference</span>
				</h2>
			</header> */}

			{/* Section heading */}
			<div className="space-y-3 mb-6">
				<p className="inline-flex items-center rounded-full border border-slate-200/70 bg-white/70 px-3 py-1 text-xs font-medium tracking-wide text-slate-700 dark:border-slate-700/80 dark:bg-slate-900/80 dark:text-slate-200">
					<span className="mr-2 inline-block h-2 w-2 rounded-full bg-linear-to-r from-emerald-400 to-sky-500" />
					Services to accelerate your team’s growth
				</p>
				<Title>
					<span className="bg-linear-to-r from-emerald-400 via-sky-400 to-emerald-500 bg-clip-text text-transparent">
						{/* From “everything is on fire” */}
						Services
					</span>{' '}
					that Make a Difference
				</Title>
				<p className="text-sm text-slate-600 sm:text-base dark:text-slate-400">
					Practical, business-focused suite of AWS, Serverless, and AI solutions designed to eliminate bottlenecks, cut costs, and accelerate your
					team’s growth.
				</p>
			</div>

			{Object.entries(grouped).map(([category, items], index) => (
				<div key={category} className={classNames(index < Object.entries(grouped).length - 1 ? 'mb-6' : '')}>
					{/* Category heading */}
					<div className="mb-6 flex items-center gap-3">
						<span className="h-px w-10 bg-linear-to-r from-teal-500 to-teal-300" />
						<h3 className="text-xl font-semibold bg-linear-to-r from-slate-800 to-slate-500 bg-clip-text text-transparent">{category}</h3>
					</div>

					{/* Grid */}
					<div className="mt-8 grid gap-6 md:grid-cols-2">
						{items.map((service) => (
							<div
								key={service.id}
								className="
									relative rounded-3xl p-[2px] 
									bg-linear-to-br from-emerald-500/40 via-emerald-300/40 to-emerald-500/40
									hover:from-emerald-400 hover:via-emerald-200 hover:to-emerald-500 
									transition-all duration-300
								"
							>
								<article
									className="
										h-full rounded-3xl bg-background dark:bg-(--background-dark) p-6 lg:p-8
										backdrop-blur-sm
										hover:shadow-[0_0_28px_rgba(255,0,0,0.14)]
										transition-all duration-300
									"
								>
									{/* Number */}
									<div className="inline-flex rounded-full bg-slate-100 dark:bg-slate-800 px-3 py-1 text-xs font-bold text-emerald-600">
										{service.id}/{service.total}
									</div>

									{/* Title + Description */}
									<div className="mt-6 space-y-2">
										{/* <h4 className="text-md font-semibold bg-linear-to-r from-emerald-600 to-emerald-400 bg-clip-text text-transparent">
											{service.title}
										</h4> */}
										<h4 className="font-medium">{service.title}</h4>
										<Text>{service.description}</Text>
									</div>
								</article>
							</div>
						))}
					</div>
				</div>
			))}
		</section>
	);
};

export default ServicesShowcase;
