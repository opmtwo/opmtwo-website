'use client';

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

export const TechStack: React.FC = () => {
	const [activeId, setActiveId] = React.useState(techSections[0].id);
	const active = techSections.find((s) => s.id === activeId) ?? techSections[0];
	const sphereItems = techSections.flatMap((s) => s.items.map((i) => ({ name: i.name, Icon: i.Icon, group: s.id })));

	return (
		<section id="tech" className="relative mx-auto max-w-7xl px-5 py-32 sm:px-8">
			<SectionHeading
				eyebrow="The stack"
				title="Best-in-class models,"
				accent="serverless foundations."
				description="The models, data layers and AWS services I combine to take AI from prototype to production — chosen per use case for quality, latency and cost."
			/>

			<div className="mt-16 grid items-center gap-10 lg:grid-cols-2">
				<TechSphere items={sphereItems} highlight={activeId} />

				<div>
					<div className="flex flex-wrap gap-2">
						{techSections.map((s) => (
							<button
								key={s.id}
								onClick={() => setActiveId(s.id)}
								className={`cursor-pointer rounded-full border px-3.5 py-1.5 text-xs transition ${
									s.id === activeId ? 'border-emerald-400/50 bg-emerald-400/10 text-emerald-200' : 'border-line text-muted hover:text-white'
								}`}
							>
								{s.label}
							</button>
						))}
					</div>

					<div key={active.id} className="mt-8 animate-[fade-in_0.5s_ease]">
						<h3 className="text-2xl font-medium text-white">{active.title}</h3>
						<p className="mt-2 text-sm leading-relaxed text-muted">{active.description}</p>
						<ul className="mt-6 grid gap-3 sm:grid-cols-2">
							{active.items.map((item) => (
								<li key={item.name} className="glass flex gap-3 rounded-2xl p-4">
									<span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/5">
										<item.Icon className="h-5 w-5 text-white" />
									</span>
									<div>
										<p className="text-sm font-medium text-white">{item.name}</p>
										<p className="mt-1 text-xs leading-relaxed text-muted">{item.description}</p>
									</div>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
};
