import React from 'react';

// components/TechStackShowcase.tsx
import { AmplifyIcon } from '@/icons/AmplifyIcon';
import { ApiGatewayIcon } from '@/icons/ApiGatewayIcon';
import { BedrockIcon } from '@/icons/BedrockIcon';
import { ClaudeIcon } from '@/icons/ClaudeIcon';
import CloudFrontIcon from '@/icons/CloudFrontIcon';
import CloudWatchIcon from '@/icons/CloudWatchIcon';
import { CognitoIcon } from '@/icons/CognitoIcon';
import { DynamoDbIcon } from '@/icons/DynamoDbIcon';
import { ElasticsearchIcon } from '@/icons/ElasticsearchIcon';
import { EventBridgeIcon } from '@/icons/EventBridgeIcon';
import { GeminiIcon } from '@/icons/GeminiIcon';
import KinesisIcon from '@/icons/KinesisIcon';
import { LambdaIcon } from '@/icons/LambdaIcon';
import { LlamaIcon } from '@/icons/LlamaIcon';
import MskIcon from '@/icons/MskIcon';
import { NextJsIcon } from '@/icons/NextJsIcon';
import { NodeIcon } from '@/icons/NodeIcon';
import { OpenAiIcon } from '@/icons/OpenAiIcon';
import { OpensearchIcon } from '@/icons/OpensearchIcon';
import { PineconeIcon } from '@/icons/PineconeIcon';
import { PythonIcon } from '@/icons/PythonIcon';
import { ReactIcon } from '@/icons/ReactIcon';
import { S3Icon } from '@/icons/S3Icon';
import { ServerlessIcon } from '@/icons/ServerlessIcon';
import SNSIcon from '@/icons/SNSIcon';
import SQSIcon from '@/icons/SQSIcon';
import { StepFunctionsIcon } from '@/icons/StepFunctionsIcon';
import { TailwindIcon } from '@/icons/TailwindIcon';
import { TerraformIcon } from '@/icons/TerraformIcon';
import { TypeScriptIcon } from '@/icons/TypeScriptIcon';

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
			// {
			// 	name: 'Google Gemini',
			// 	Icon: GeminiIcon,
			// 	description: 'Multi-modal AI (text, image, code) ideal for product features that need Google ecosystem strength.',
			// },
			// {
			// 	name: 'Meta Llama',
			// 	Icon: LlamaIcon,
			// 	description: 'Open-weight models tuned for private, self-hosted, or hybrid AI deployments at scale.',
			// },
			{
				name: 'Amazon Bedrock',
				Icon: BedrockIcon,
				description: 'Unified AWS-native platform to orchestrate multiple foundation models with enterprise security.',
			},
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
];

export const TechStack: React.FC = () => {
	return (
		<section id="tech" className="relative mx-auto max-w-6xl">
			<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 space-y-20">
				{/* Section heading */}
				<div className="space-y-3 mb-6">
					<p className="inline-flex items-center rounded-full border border-slate-200/70 bg-white/70 px-3 py-1 text-xs font-medium tracking-wide text-slate-700 dark:border-slate-700/80 dark:bg-slate-900/80 dark:text-slate-200">
						<span className="mr-2 inline-block h-2 w-2 rounded-full bg-linear-to-r from-emerald-400 to-sky-500" />
						Tech Stack for nextgen apps
					</p>
					<h2 className="text-balance text-2xl font-semibold text-slate-900 sm:text-3xl lg:text-4xl dark:text-slate-50">
						Powering Innovation:&nbsp;
						<span className="bg-linear-to-r from-emerald-400 via-sky-400 to-purple-500 bg-clip-text text-transparent">
							The Modern AI & Cloud Tech Stack
						</span>
					</h2>
					<p className="text-sm text-slate-600 sm:text-base dark:text-slate-400">
						Explore the cutting-edge tools and platforms I use to build fast, scalable, and intelligent AI solutions—from cloud to code, and
						everything in between.
					</p>
				</div>

				<div className="space-y-12">
					{techSections.map((section) => (
						<div key={section.id} className="rounded-2xl">
							<div className="mb-4">
								<h4 className="text-xl font-semibold bg-linear-to-r from-cyan-600 to-cyan-400 bg-clip-text text-transparent">
									{section.title}
								</h4>
								<p className="text-lg">{section.description}</p>
							</div>
							<div className="mt-8 grid gap-6 md:grid-cols-2">
								{section.items.map((item) => (
									<div
										key={item.name}
										className="
									relative rounded-3xl p-[2px] 
									bg-linear-to-br from-cyan-500/40 via-cyan-300/40 to-cyan-500/40
									hover:from-cyan-400 hover:via-cyan-200 hover:to-cyan-500 
									transition-all duration-300
								"
									>
										<article
											className="
											flex items-center gap-3
										h-full rounded-3xl bg-background dark:[var(--background-dark)] p-8
										backdrop-blur-sm
										hover:shadow-[0_0_28px_rgba(255,0,0,0.14)]
										transition-all duration-300
									"
										>
											<div className="flex min-h-10 min-w-10 items-center justify-center rounded-full border border-slate-400">
												<item.Icon className="h-6 w-6 text-sky-500 dark:text-violet-300" />
											</div>
											<div className="space-y-2">
												<h4 className="font-medium">{item.name}</h4>
												{/* <p className="text-xs mt-1">{item.description}</p> */}
												<p className="leading-relaxed text-slate-600">{item.description}</p>
											</div>
										</article>
									</div>
								))}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
