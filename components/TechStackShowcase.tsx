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

export const TechStackShowcase: React.FC = () => {
	const [activeSectionId, setActiveSectionId] = React.useState<string>('ai');

	const activeSection = techSections.find((section) => section.id === activeSectionId) ?? techSections[0];

	return (
		<section id="tech-stack" className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
			{/* Background flair */}
			<div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
				<div className="absolute -top-40 left-10 h-72 w-72 rounded-full bg-gradient-to-br from-sky-500/20 via-emerald-400/10 to-violet-500/20 blur-3xl" />
				<div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-gradient-to-tr from-fuchsia-500/10 via-sky-500/10 to-emerald-400/10 blur-3xl" />
			</div>

			{/* Header */}
			<div className="mb-10 text-center">
				<p className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-sky-200">
					Tech Stack & Capabilities
				</p>
				<h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
					Battle-tested stack for{' '}
					<span className="bg-gradient-to-r from-sky-400 via-emerald-400 to-violet-400 bg-clip-text text-transparent">AI & Serverless</span>
				</h2>
				<p className="mt-3 max-w-2xl mx-auto text-sm text-slate-300/80">
					From idea to production: AI models, vector search, serverless backends, and smooth frontends – all wired together on AWS.
				</p>
			</div>

			<div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]">
				{/* Left: Sections list */}
				<div className="space-y-3">
					{techSections.map((section) => {
						const isActive = section.id === activeSectionId;
						return (
							<button
								key={section.id}
								onClick={() => setActiveSectionId(section.id)}
								className={`group w-full text-left rounded-2xl border px-4 py-4 transition-all duration-300 ${
									isActive
										? 'border-sky-500/60 bg-slate-900/80 shadow-lg shadow-sky-500/20'
										: 'border-slate-700/40 bg-slate-900/40 hover:border-slate-500/60 hover:bg-slate-900/80'
								}`}
							>
								<div className="flex items-center justify-between gap-3">
									<div>
										{/* <p className="text-xs uppercase tracking-[0.18em] text-slate-400">{section.label}</p> */}
										<h4 className="mt-1 text-sm font-semibold text-slate-50">{section.title}</h4>
										<p className="mt-1 text-xs text-slate-300/80 line-clamp-2">{section.description}</p>
									</div>
									{/* <span
										className={`h-8 w-8 shrink-0 rounded-full border text-[10px] flex items-center justify-center tracking-[0.12em] uppercase ${
											isActive
												? 'border-sky-400/70 bg-sky-500/10 text-sky-200'
												: 'border-slate-600/60 bg-slate-800/70 text-slate-300 group-hover:border-sky-400/70 group-hover:text-sky-200'
										}`}
									>
										{section.items.length}
									</span> */}
								</div>
							</button>
						);
					})}
				</div>

				{/* Right: Active section detail */}
				<div className="relative">
					<div className="pointer-events-none absolute -inset-0.5 rounded-3xl bg-gradient-to-r from-sky-500/40 via-emerald-400/30 to-violet-500/40 opacity-70 blur-xl" />
					<div className="relative rounded-3xl border border-slate-700/60 bg-slate-950/80 p-6 shadow-xl backdrop-blur">
						<div className="flex flex-wrap items-center justify-between gap-4">
							<div>
								<p className="text-xs uppercase tracking-[0.22em] text-slate-400">Currently Showing</p>
								<h3 className="mt-2 text-xl font-semibold text-white">{activeSection.title}</h3>
								<p className="mt-1 max-w-xl text-sm text-slate-200/90">{activeSection.description}</p>
							</div>
							<div className="flex items-center gap-2 text-[11px] text-slate-300">
								<span className="rounded-full bg-emerald-500/10 px-2 py-1 text-emerald-300 border border-emerald-500/40">
									Real-world projects
								</span>
								<span className="rounded-full bg-sky-500/10 px-2 py-1 text-sky-300 border border-sky-500/40">Production ready</span>
							</div>
						</div>

						{/* Items grid */}
						<div className="mt-6 grid gap-4 sm:grid-cols-2">
							{activeSection.items.map((item) => (
								<div
									key={item.name}
									className="group flex flex-col rounded-2xl border border-slate-700/60 bg-slate-900/60 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-sky-400/70 hover:bg-slate-900 shadow-sm hover:shadow-sky-900/40"
								>
									<div className="flex items-center gap-3">
										<div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900/90 ring-1 ring-slate-700/70 group-hover:ring-sky-400/70 transition">
											<item.Icon className="h-6 w-6" />
										</div>
										<div>
											<h4 className="text-sm font-semibold text-slate-50">{item.name}</h4>
											{/* <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400">Core Tool</p> */}
										</div>
									</div>
									<p className="mt-3 text-xs text-slate-200/90 leading-relaxed">{item.description}</p>
									<div className="mt-3 flex items-center gap-2 text-[11px] text-slate-400">
										<span className="h-1.5 w-1.5 rounded-full bg-emerald-400 group-hover:bg-sky-400" />
										<span>Used in multiple client projects</span>
									</div>
								</div>
							))}
						</div>

						{/* Sub-footer */}
						<div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-slate-800 pt-4 text-[11px] text-slate-400">
							<p>
								Every tool here is chosen for <span className="text-sky-300">scalability, cost-efficiency, and reliability</span> in real
								production workloads.
							</p>
							<p className="text-slate-300">
								Want a stack review? <span className="text-sky-300">Let&apos;s benchmark it against this setup.</span>
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
