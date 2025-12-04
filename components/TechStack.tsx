import React from 'react';

// components/TechStackShowcase.tsx
import { AmplifyIcon } from '@/icons/AmplifyIcon';
import { ApiGatewayIcon } from '@/icons/ApiGatewayIcon';
import { BedrockIcon } from '@/icons/BedrockIcon';
import { ClaudeIcon } from '@/icons/ClaudeIcon';
import { CognitoIcon } from '@/icons/CognitoIcon';
import { DynamoDbIcon } from '@/icons/DynamoDbIcon';
import { ElasticsearchIcon } from '@/icons/ElasticsearchIcon';
import { GeminiIcon } from '@/icons/GeminiIcon';
import { LambdaIcon } from '@/icons/LambdaIcon';
import { LlamaIcon } from '@/icons/LlamaIcon';
import { NextJsIcon } from '@/icons/NextJsIcon';
import { NodeIcon } from '@/icons/NodeIcon';
import { OpenAiIcon } from '@/icons/OpenAiIcon';
import { PineconeIcon } from '@/icons/PineconeIcon';
import { PythonIcon } from '@/icons/PythonIcon';
import { ReactIcon } from '@/icons/ReactIcon';
import { S3Icon } from '@/icons/S3Icon';
import { ServerlessIcon } from '@/icons/ServerlessIcon';
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
		id: 'data',
		label: 'Vector & Data Layer',
		title: 'Vector Databases & Search',
		description: 'Search, recommendations, and RAG (Retrieval-Augmented Generation) powered by fast, scalable data stores.',
		items: [
			{
				name: 'Elasticsearch',
				Icon: ElasticsearchIcon,
				description: 'High-performance full-text and structured search for logs, analytics, and smart query experiences.',
			},
			{
				name: 'Pinecone',
				Icon: PineconeIcon,
				description: 'Managed vector database for lightning-fast semantic search and enterprise-grade RAG systems.',
			},
			{
				name: 'DynamoDB',
				Icon: DynamoDbIcon,
				description: 'Serverless NoSQL backbone for low-latency, auto-scaling data workloads across millions of users.',
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
				description: 'Infrastructure-as-code for Lambda-first architectures that stay organized and easy to deploy.',
			},
			{
				name: 'Terraform',
				Icon: TerraformIcon,
				description: 'Cloud-agnostic IaC to define and version infrastructure across AWS and beyond.',
			},
		],
	},
];

export const TechStack: React.FC = () => {
	return (
		<section className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
			{/* Gradient background flair */}
			<div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
				<div className="absolute -top-32 left-10 h-64 w-64 rounded-full bg-gradient-radial from-sky-200/30 via-emerald-200/20 to-violet-200/30 dark:from-sky-500/30 dark:via-emerald-400/20 dark:to-violet-500/30 blur-2xl" />
				<div className="absolute bottom-0 right-0 h-48 w-48 rounded-full bg-gradient-radial from-fuchsia-200/10 via-sky-200/10 to-emerald-200/10 dark:from-fuchsia-500/20 dark:via-sky-500/10 dark:to-emerald-400/10 blur-2xl" />
			</div>

			{/* Header */}
			<div className="mb-10 text-center">
				<h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
					Powering Innovation:&nbsp;
					<span className="bg-linear-to-r from-sky-400 via-emerald-400 to-violet-400 bg-clip-text text-transparent">
						The Modern AI & Cloud Tech Stack
					</span>
				</h2>
				<p className="mt-3 max-w-2xl mx-auto text-base text-slate-700 dark:text-slate-300">
					Explore the cutting-edge tools and platforms I use to build fast, scalable, and intelligent AI solutions—from cloud to code, and everything
					in between.
				</p>
			</div>

			<div className="space-y-12">
				{techSections.map((section) => (
					<div key={section.id} className="rounded-2xl">
						<div className="mb-4">
							<h3 className="text-xl font-semibold mb-1">{section.title}</h3>
							<p className="text-sm text-slate-700 dark:text-slate-300">{section.description}</p>
						</div>
						<div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
							{section.items.map((item) => (
								<div
									key={item.name}
									className="flex items-center gap-3 rounded-xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 p-4"
								>
									<div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-50 dark:bg-slate-800">
										<item.Icon className="h-6 w-6 text-sky-500 dark:text-violet-300" />
									</div>
									<div>
										<h4 className="text-sm font-medium font-sans">{item.name}</h4>
										<p className="text-xs mt-1">{item.description}</p>
									</div>
								</div>
							))}
						</div>
					</div>
				))}
			</div>
		</section>
	);
};
