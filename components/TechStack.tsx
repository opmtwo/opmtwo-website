'use client';

import { ArrowUpRight } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import React from 'react';

import { AmplifyIcon } from '@/icons/AmplifyIcon';
import { ApiGatewayIcon } from '@/icons/ApiGatewayIcon';
import { BedrockIcon } from '@/icons/BedrockIcon';
import { ClaudeIcon } from '@/icons/ClaudeIcon';
import CloudFrontIcon from '@/icons/CloudFrontIcon';
import CloudWatchIcon from '@/icons/CloudWatchIcon';
import { CognitoIcon } from '@/icons/CognitoIcon';
import { DynamoDbIcon } from '@/icons/DynamoDbIcon';
import { ElasticsearchIcon } from '@/icons/ElasticsearchIcon';
import { GeminiIcon } from '@/icons/GeminiIcon';
import { LlamaIcon } from '@/icons/LlamaIcon';
import { EventBridgeIcon } from '@/icons/EventBridgeIcon';
import JestIcon from '@/icons/JestIcon';
import KinesisIcon from '@/icons/KinesisIcon';
import { LambdaIcon } from '@/icons/LambdaIcon';
import MongoIcon from '@/icons/MongoIcon';
import { NextJsIcon } from '@/icons/NextJsIcon';
import { NodeIcon } from '@/icons/NodeIcon';
import { OpenAiIcon } from '@/icons/OpenAiIcon';
import { OpensearchIcon } from '@/icons/OpensearchIcon';
import { PineconeIcon } from '@/icons/PineconeIcon';
import PostgresIcon from '@/icons/PostgresIcon';
import PostmanIcon from '@/icons/PostmanIcon';
import { PythonIcon } from '@/icons/PythonIcon';
import { ReactIcon } from '@/icons/ReactIcon';
import { S3Icon } from '@/icons/S3Icon';
import { ServerlessIcon } from '@/icons/ServerlessIcon';
import SNSIcon from '@/icons/SNSIcon';
import SQSIcon from '@/icons/SQSIcon';
import { StepFunctionsIcon } from '@/icons/StepFunctionsIcon';
import { TailwindIcon } from '@/icons/TailwindIcon';
import { TypeScriptIcon } from '@/icons/TypeScriptIcon';

import TechSphere from './three/TechSphere';
import { mailto } from '@/content/site';

import SectionHeading from './ui/SectionHeading';

type TechIcon = React.ComponentType<{ className?: string }>;

type TechItem = {
	name: string;
	Icon: TechIcon;
	description: string;
};

type TechSection = {
	id: string;
	label: string;
	title: string;
	description: string;
	items: TechItem[];
};

const techSections: TechSection[] = [
	{
		id: 'ai',
		label: 'AI Models & Platforms',
		title: 'AI Models & AI Platforms',
		description: 'I combine the best LLMs on the market to power chatbots, copilots, automation, and internal tools that actually move the needle.',
		items: [
			{
				name: 'OpenAI ChatGPT',
				Icon: OpenAiIcon,
				description: 'Production-ready GPT workflows for chatbots, agents, content pipelines, and smart internal tools.',
			},
			{
				name: 'Anthropic Claude',
				Icon: ClaudeIcon,
				description: 'Great for long-context reasoning, safer assistants, and complex knowledge-heavy use-cases.',
			},
			{
				name: 'Google Gemini',
				Icon: GeminiIcon,
				description: 'Multi-modal AI (text, image, code) ideal for product features that need Google ecosystem strength.',
			},
			{
				name: 'Meta Llama',
				Icon: LlamaIcon,
				description: 'Open-weight models tuned for private, self-hosted, or hybrid AI deployments at scale.',
			},
			{
				name: 'Amazon Bedrock',
				Icon: BedrockIcon,
				description: 'Unified AWS-native platform to orchestrate multiple foundation models with enterprise security.',
			},
		],
	},
	{
		id: 'serverless',
		label: 'AWS Serverless & Cloud',
		title: 'AWS Serverless & Cloud',
		description: 'Fully managed, event-driven backends built to scale automatically while keeping your AWS bill under control.',
		items: [
			{
				name: 'AWS Lambda',
				Icon: LambdaIcon,
				description: 'Event-driven compute that scales from zero to peak traffic without managing servers or containers.',
			},
			{
				name: 'API Gateway',
				Icon: ApiGatewayIcon,
				description: 'Highly available API front-door for REST, WebSocket, and HTTP APIs with built-in security and throttling.',
			},
			{
				name: 'Step Functions',
				Icon: StepFunctionsIcon,
				description: 'Visual workflows to orchestrate complex business logic, retries, and long-running AI/ETL jobs.',
			},
			{
				name: 'Cognito',
				Icon: CognitoIcon,
				description: 'Secure, scalable user auth (email, social, enterprise SSO) without rolling your own identity system.',
			},
			{
				name: 'S3',
				Icon: S3Icon,
				description: 'Durable, cost-effective storage for uploads, backups, data lakes, and static asset hosting.',
			},
			{
				name: 'CloudFront',
				Icon: CloudFrontIcon,
				description: 'Global CDN for blazing-fast delivery of APIs, websites, and media with built-in security layers.',
			},
			{
				name: 'EventBridge',
				Icon: EventBridgeIcon,
				description: 'Serverless event bus for decoupled, scalable integrations across AWS services.',
			},
			{
				name: 'CloudWatch',
				Icon: CloudWatchIcon,
				description: 'Monitoring, logging & alerting for AWS resources & applications to keep everything running smoothly.',
			},
			{
				name: 'SQS',
				Icon: SQSIcon,
				description: 'Highly reliable message queue for decoupled microservices and asynchronous workloads.',
			},
			{
				name: 'SNS',
				Icon: SNSIcon,
				description: 'Pub/sub messaging for fan-out notifications, microservice events, and system-wide broadcasts.',
			},
			// {
			// 	name: 'Kinesis',
			// 	Icon: KinesisIcon,
			// 	description: 'Real-time streaming platform for ingesting event data, analytics, and continuous pipelines.',
			// },
			{
				name: 'Kinesis',
				Icon: KinesisIcon,
				description: 'Fully managed streaming service for ingesting, processing, and analyzing real-time data.',
			},
			// {
			// 	name: 'AppSync',
			// 	Icon: AppSyncIcon,
			// 	description: 'Fully managed GraphQL APIs with real-time subscriptions and automatic data orchestration.',
			// },
		],
	},
	{
		id: 'vibe',
		label: 'Vibe Coding & Prompt Engineering',
		title: 'Vibe Coding & Prompt Engineering',
		description: 'Crafting powerful prompts, creative workflows, and LLM ops for next-level AI experiences—where code meets creativity.',
		items: [
			{
				name: 'Prompt Engineering',
				Icon: OpenAiIcon,
				description: 'Designing, testing, and refining prompts for LLMs to maximize accuracy, creativity, and reliability.',
			},
			{
				name: 'LLM Ops',
				Icon: BedrockIcon,
				description: 'Managing, evaluating, and deploying large language models in production workflows.',
			},
			{
				name: 'Creative Coding',
				Icon: ReactIcon,
				description: 'Building interactive, generative, and AI-driven user experiences with modern frameworks.',
			},
		],
	},
	{
		id: 'data',
		label: 'Vector & Data Layer',
		title: 'Vector Databases & Search',
		description: 'Search, recommendations, and RAG (Retrieval-Augmented Generation) powered by fast, scalable data stores.',
		items: [
			{
				name: 'DynamoDB',
				Icon: DynamoDbIcon,
				description: 'Serverless NoSQL backbone for low-latency, auto-scaling data workloads across millions of users.',
			},
			{
				name: 'Elasticsearch',
				Icon: ElasticsearchIcon,
				description: 'High-performance full-text and structured search for logs, analytics, and smart query experiences.',
			},
			{
				name: 'OpenSearch',
				Icon: OpensearchIcon,
				description: 'AWS-native search and analytics engine built for scale, offering vector search and embeddings.',
			},
			{
				name: 'Pinecone',
				Icon: PineconeIcon,
				description: 'Managed vector database for lightning-fast semantic search and enterprise-grade RAG systems.',
			},
		],
	},
	{
		id: 'databases',
		label: 'Databases',
		title: 'Databases',
		description: 'Designing, optimizing, and scaling modern databases for fast, reliable, and high-performance applications.',
		items: [
			{
				name: 'MongoDB Architecture',
				Icon: MongoIcon, // your MongoDB SVG component
				description: 'Schema design, indexing strategies, aggregation pipelines, and performance tuning for high-scale workloads.',
			},
			{
				name: 'PostgreSQL & SQL Optimization',
				Icon: PostgresIcon,
				description: 'Relational modeling, query optimization, indexing, partitioning, and building scalable transactional systems.',
			},
			// {
			// 	name: 'Distributed Databases',
			// 	Icon: DynamoDbIcon, // DynamoDB or any distributed DB icon
			// 	description: 'Designing highly reliable, globally distributed data layers using DynamoDB, Cassandra, and cloud-native NoSQL systems.',
			// },
		],
	},

	// {
	// 	id: 'streaming',
	// 	label: 'Event Streaming & Queues',
	// 	title: 'Real-Time Data Streams & Messaging',
	// 	description: 'High-throughput event pipelines and message brokers for real-time apps, data ingestion, and asynchronous microservices.',
	// 	items: [
	// 		{
	// 			name: 'Amazon MSK',
	// 			Icon: MskIcon,
	// 			description: 'Fully managed Apache Kafka service that simplifies setup, scaling, and operations for real-time event streaming workloads.',
	// 		},
	// 		{
	// 			name: 'Amazon Kinesis',
	// 			Icon: KinesisIcon,
	// 			description: 'Fully managed streaming service for ingesting, processing, and analyzing real-time data without managing clusters.',
	// 		},
	// 		// {
	// 		// 	name: 'RabbitMQ',
	// 		// 	Icon: RabbitMqIcon,
	// 		// 	description: 'Lightweight, reliable message broker for queues, pub/sub, and background job processing across distributed systems.',
	// 		// },
	// 	],
	// },
	{
		id: 'devops',
		label: 'DevOps & Infra as Code',
		title: 'DevOps & Infrastructure',
		description: 'Automated delivery pipelines and infrastructure-as-code to keep deployments consistent and reversible.',
		items: [
			{
				name: 'AWS Amplify',
				Icon: AmplifyIcon,
				description: 'Rapidly connect frontends to AWS backends with CI/CD, hosting, and auth baked in.',
			},
			{
				name: 'Serverless Framework',
				Icon: ServerlessIcon,
				description: 'Infrastructure-as-code for Lambda-first architectures that stay organized.',
			},
			// {
			// 	name: 'Terraform',
			// 	Icon: TerraformIcon,
			// 	description: 'Cloud-agnostic IaC to define and version infrastructure across AWS and beyond.',
			// },
		],
	},
	{
		id: 'dev',
		label: 'Developer Tools',
		title: 'Developer Tools',
		description: 'Modern languages and runtimes to ship backend and automation logic quickly, safely, and maintainably.',
		items: [
			{
				name: 'Node.js',
				Icon: NodeIcon,
				description: 'Great for high-throughput APIs, event handlers, and integrations with the JavaScript ecosystem.',
			},
			{
				name: 'TypeScript',
				Icon: TypeScriptIcon,
				description: 'Type-safe foundation for more reliable, refactor-friendly codebases across frontend and backend.',
			},
			{
				name: 'Python',
				Icon: PythonIcon,
				description: 'Perfect for data-heavy scripts, AI/ML workflows, and glue logic on top of AWS services.',
			},
		],
	},
	{
		id: 'frontend',
		label: 'Frontend Experience',
		title: 'Frontend & UX',
		description: 'Clean, fast, and responsive frontends that make complex AI + serverless systems feel simple and delightful.',
		items: [
			{
				name: 'Next.js',
				Icon: NextJsIcon,
				description: 'Full-stack React framework for SEO-friendly, lightning-fast web apps with server components.',
			},
			{
				name: 'React',
				Icon: ReactIcon,
				description: 'Battle-tested UI library to build highly interactive, component-driven interfaces.',
			},
			{
				name: 'Tailwind CSS',
				Icon: TailwindIcon,
				description: 'Utility-first styling for rapid iteration and consistently modern visual design.',
			},
		],
	},
	{
		id: 'testing',
		label: 'Software Testing',
		title: 'Software Testing & Quality Assurance',
		description: 'High-confidence releases powered by automated testing, API validation, and end-to-end quality checks across modern tools and workflows.',
		items: [
			{
				name: 'Postman',
				Icon: PostmanIcon,
				description: 'Design, run, automate, and monitor API tests using collections, environments, and scripted workflows.',
			},
			{
				name: 'Jest',
				Icon: JestIcon,
				description: 'Fast, reliable unit and integration testing framework for JavaScript and TypeScript applications.',
			},
		],
	},
];

const EASE = [0.22, 1, 0.36, 1] as const;

const pad = (n: number) => String(n).padStart(2, '0');

export const TechStack: React.FC = () => {
	const [activeId, setActiveId] = React.useState(techSections[0].id);
	const activeIndex = Math.max(
		0,
		techSections.findIndex((s) => s.id === activeId)
	);
	const active = techSections[activeIndex];
	const sphereItems = techSections.flatMap((s) => s.items.map((i) => ({ name: i.name, Icon: i.Icon, group: s.id })));
	const totalTools = sphereItems.length;
	const slug = active.label.toLowerCase().replace(/&/g, '').replace(/\s+/g, '-').replace(/-+/g, '-');

	return (
		<section id="tech" className="relative mx-auto max-w-7xl px-5 py-32 sm:px-8">
			<div className="grid items-center gap-10 lg:grid-cols-[1.05fr_1fr]">
				<div>
					<SectionHeading
						eyebrow="The stack"
						title="Best-in-class models,"
						accent="serverless foundations."
						description="The models, data layers and AWS services I combine to take AI from prototype to production — chosen per use case for quality, latency and cost."
					/>
					<dl className="mt-10 flex gap-10 border-t border-line pt-6">
						<div>
							<dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">Tools</dt>
							<dd className="mt-1 text-3xl font-medium text-white">{totalTools}</dd>
						</div>
						<div>
							<dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">Disciplines</dt>
							<dd className="mt-1 text-3xl font-medium text-white">{pad(techSections.length)}</dd>
						</div>
						<div>
							<dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">Model vendors</dt>
							<dd className="mt-1 text-3xl font-medium text-white">05</dd>
						</div>
					</dl>
				</div>
				<TechSphere items={sphereItems} highlight={activeId} />
			</div>

			{/* Stack explorer */}
			<motion.div
				initial={{ opacity: 0, y: 40 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, amount: 0.15 }}
				transition={{ duration: 0.9, ease: EASE }}
				className="relative mt-20 rounded-[28px] bg-linear-to-b from-white/[0.12] via-white/[0.04] to-white/[0.02] p-px"
			>
				<div aria-hidden className="pointer-events-none absolute -top-px left-1/2 h-px w-1/2 -translate-x-1/2 bg-linear-to-r from-transparent via-emerald-300/70 to-transparent" />

				<div className="overflow-hidden rounded-[27px] bg-[#06080d]/95">
					{/* chrome bar */}
					<div className="flex items-center justify-between gap-4 border-b border-line px-5 py-3.5 sm:px-6">
						<div className="flex min-w-0 items-center gap-3">
							<span className="flex gap-1.5" aria-hidden>
								<span className="h-2.5 w-2.5 rounded-full bg-white/10" />
								<span className="h-2.5 w-2.5 rounded-full bg-white/10" />
								<span className="h-2.5 w-2.5 rounded-full bg-white/10" />
							</span>
							<span className="truncate font-mono text-[11px] text-muted">
								~/stack/<span className="text-white/80">{slug}</span>
							</span>
						</div>
						<span className="hidden shrink-0 items-center gap-2 font-mono text-[11px] text-muted sm:flex">
							<span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_#34d399]" />
							{pad(active.items.length)} tools · production-tested
						</span>
					</div>

					<div className="grid grid-cols-[minmax(0,1fr)] lg:grid-cols-[18rem_minmax(0,1fr)]">
						{/* Category index: horizontal scroller on mobile, sidebar on desktop */}
						<nav aria-label="Tech categories" className="min-w-0 border-b border-line lg:border-b-0 lg:border-r">
							<ul className="mask-fade-x flex snap-x gap-1 overflow-x-auto p-3 [scrollbar-width:none] lg:flex-col lg:overflow-visible lg:[mask-image:none] [&::-webkit-scrollbar]:hidden">
								{techSections.map((s, i) => {
									const isActive = s.id === activeId;
									return (
										<li key={s.id} className="shrink-0 snap-start">
											<button
												onClick={() => setActiveId(s.id)}
												aria-pressed={isActive}
												className={`group relative flex w-full cursor-pointer items-center gap-3 rounded-xl px-3.5 py-2.5 text-left text-sm transition-colors lg:py-3 ${
													isActive ? 'text-white' : 'text-muted hover:text-white'
												}`}
											>
												{isActive && (
													<motion.span
														layoutId="tech-active"
														transition={{ type: 'spring', stiffness: 380, damping: 32 }}
														className="absolute inset-0 rounded-xl border border-white/10 bg-white/[0.06]"
													>
														<span className="absolute left-0 top-1/2 hidden h-5 w-0.5 -translate-y-1/2 rounded-full bg-emerald-400 shadow-[0_0_12px_#34d399] lg:block" />
													</motion.span>
												)}
												<span className={`relative font-mono text-[10px] ${isActive ? 'text-emerald-300' : 'text-white/30'}`}>{pad(i + 1)}</span>
												<span className="relative whitespace-nowrap lg:flex-1 lg:whitespace-normal">{s.label}</span>
												<span className="relative hidden font-mono text-[10px] text-white/30 lg:inline">{s.items.length}</span>
											</button>
										</li>
									);
								})}
							</ul>
						</nav>

						{/* Active category */}
						<div className="relative min-h-[28rem] p-5 sm:p-8 lg:p-10">
							<div aria-hidden className="pointer-events-none absolute right-0 top-0 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(52,211,153,0.10),transparent_70%)]" />

							<AnimatePresence mode="wait">
								<motion.div
									key={active.id}
									initial="hidden"
									animate="visible"
									exit="exit"
									variants={{
										hidden: {},
										visible: { transition: { staggerChildren: 0.05 } },
										exit: { opacity: 0, transition: { duration: 0.15 } },
									}}
									className="relative"
								>
									<motion.div
										variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } } }}
										className="flex flex-wrap items-end justify-between gap-4"
									>
										<div className="max-w-xl">
											<p className="font-mono text-[11px] uppercase tracking-[0.25em] text-emerald-300/90">
												{pad(activeIndex + 1)} / {pad(techSections.length)}
											</p>
											<h3 className="mt-3 text-3xl font-medium text-white sm:text-4xl">{active.title}</h3>
											<p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">{active.description}</p>
										</div>
									</motion.div>

									{/* hairline grid of tools */}
									<div className="mt-10 grid grid-cols-[minmax(0,1fr)] gap-px overflow-hidden rounded-2xl border border-line bg-white/[0.06] sm:grid-cols-2">
										{active.items.map((item, i) => (
											<motion.div
												key={item.name}
												variants={{
													hidden: { opacity: 0, y: 16, filter: 'blur(6px)' },
													visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.5, ease: EASE } },
												}}
												className="group relative bg-[#06080d] p-5 transition-colors sm:p-6 duration-300 hover:bg-[#0a0d14]"
											>
												<div className="flex items-start justify-between">
													<span className="relative flex h-11 w-11 items-center justify-center">
														<span aria-hidden className="absolute inset-0 rounded-xl bg-white/[0.04] ring-1 ring-white/10 transition duration-300 group-hover:ring-emerald-400/40 group-hover:shadow-[0_0_24px_-6px_rgba(52,211,153,0.6)]" />
														<item.Icon className="relative h-5 w-5 text-white" />
													</span>
													<span className="font-mono text-[10px] text-white/25 transition-colors group-hover:text-emerald-300/80">{pad(i + 1)}</span>
												</div>
												<p className="mt-6 text-base font-medium text-white">{item.name}</p>
												<p className="mt-1.5 text-sm leading-relaxed text-muted">{item.description}</p>
												<span aria-hidden className="absolute inset-x-6 bottom-0 h-px origin-left scale-x-0 bg-linear-to-r from-emerald-400 via-cyan-400 to-transparent transition-transform duration-500 group-hover:scale-x-100" />
											</motion.div>
										))}

										{/* fill the empty cell on odd counts with a prompt */}
										{active.items.length % 2 === 1 && (
											<motion.a
												href={mailto}
												variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.5 } } }}
												className="group relative hidden flex-col justify-between bg-[#06080d] p-6 transition-colors hover:bg-[#0a0d14] sm:flex"
											>
												<span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">Not listed?</span>
												<span className="mt-6 flex items-end justify-between gap-4">
													<span className="text-base text-white/80">
														I pick tools per use case.
														<br />
														<span className="text-muted">Ask about yours.</span>
													</span>
													<ArrowUpRight className="h-5 w-5 text-muted transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-emerald-300" />
												</span>
											</motion.a>
										)}
									</div>
								</motion.div>
							</AnimatePresence>
						</div>
					</div>
				</div>
			</motion.div>
		</section>
	);
};
