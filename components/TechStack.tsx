'use client';

import { ArrowUpRight } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import React from 'react';
import {
	siApachekafka,
	siBraintrust,
	siClickhouse,
	siCloudflareworkers,
	siDatabricks,
	siDatadog,
	siDocker,
	siFastapi,
	siHuggingface,
	siKubernetes,
	siLangchain,
	siLanggraph,
	siMistralai,
	siModal,
	siModelcontextprotocol,
	siNextdotjs,
	siOllama,
	siOpentelemetry,
	siPostgresql,
	siPython,
	siPytorch,
	siRedis,
	siSentry,
	siSnowflake,
	siSupabase,
	siTailwindcss,
	siTemporal,
	siTerraform,
	siTypescript,
	siVercel,
	siVitest,
	siVllm,
	siWeightsandbiases,
} from 'simple-icons';

// components/TechStack.tsx
import { BedrockIcon } from '@/icons/BedrockIcon';
import { ClaudeIcon } from '@/icons/ClaudeIcon';
import { DynamoDbIcon } from '@/icons/DynamoDbIcon';
import { ElasticsearchIcon } from '@/icons/ElasticsearchIcon';
import { EventBridgeIcon } from '@/icons/EventBridgeIcon';
import { GeminiIcon } from '@/icons/GeminiIcon';
import { LambdaIcon } from '@/icons/LambdaIcon';
import { LlamaIcon } from '@/icons/LlamaIcon';
import { OpenAiIcon } from '@/icons/OpenAiIcon';
import { PineconeIcon } from '@/icons/PineconeIcon';
import { StepFunctionsIcon } from '@/icons/StepFunctionsIcon';

import { mailto } from '@/content/site';

import TechSphere from './three/TechSphere';
import { brandIcon } from './ui/brandIcon';
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
		id: 'models',
		label: 'Frontier Models',
		title: 'Every frontier lab. No allegiance.',
		description:
			'I route each workload to whichever model wins on accuracy, latency and cost today — and re-benchmark the moment the frontier moves. Your roadmap never hinges on a single vendor.',
		items: [
			{
				name: 'OpenAI',
				Icon: OpenAiIcon,
				description: 'GPT and reasoning models for agents, tool use and high-stakes decision support.',
			},
			{
				name: 'Anthropic Claude',
				Icon: ClaudeIcon,
				description: 'Long-context analysis, agentic coding and careful, policy-aware behaviour for regulated work.',
			},
			{
				name: 'Google Gemini',
				Icon: GeminiIcon,
				description: 'Native multimodality across text, image, audio and video at massive context lengths.',
			},
			{
				name: 'Meta Llama',
				Icon: LlamaIcon,
				description: 'Open weights for sovereign, self-hosted AI where data never leaves your perimeter.',
			},
			{
				name: 'Mistral AI',
				Icon: brandIcon(siMistralai),
				description: 'Efficient European models for latency-sensitive and data-residency-bound deployments.',
			},
			{
				name: 'Amazon Bedrock',
				Icon: BedrockIcon,
				description: 'One governed gateway to leading models — private, audited and inside your AWS account.',
			},
		],
	},
	{
		id: 'agents',
		label: 'Agents & Orchestration',
		title: 'Agents that finish the job.',
		description:
			'Level 3–5 systems need more than a prompt loop. Durable state, tool protocols and recovery from failure are what turn agents into a dependable digital workforce.',
		items: [
			{
				name: 'Model Context Protocol',
				Icon: brandIcon(siModelcontextprotocol),
				description: 'The open standard for wiring agents into your tools, data and internal systems — securely.',
			},
			{
				name: 'LangGraph',
				Icon: brandIcon(siLanggraph),
				description: 'Stateful, multi-agent graphs with branching, memory and human-in-the-loop checkpoints.',
			},
			{
				name: 'Claude Agent SDK',
				Icon: ClaudeIcon,
				description: 'Production agent harness for long-running, tool-using autonomous work.',
			},
			{
				name: 'Vercel AI SDK',
				Icon: brandIcon(siVercel),
				description: 'Streaming, tool calls and generative UI — the fastest path from model to product.',
			},
			{
				name: 'Temporal',
				Icon: brandIcon(siTemporal),
				description: 'Durable execution so multi-day agent workflows survive crashes, retries and deploys.',
			},
		],
	},
	{
		id: 'retrieval',
		label: 'Retrieval & Memory',
		title: 'Grounded in your truth.',
		description:
			'Hybrid retrieval and long-term memory that anchor every answer in your own data — the difference between a clever chatbot and a trusted expert.',
		items: [
			{
				name: 'Pinecone',
				Icon: PineconeIcon,
				description: 'Serverless vector search at billion scale with zero infrastructure to babysit.',
			},
			{
				name: 'pgvector',
				Icon: brandIcon(siPostgresql),
				description: 'Vectors beside your transactional data in Postgres — one engine, one source of truth.',
			},
			{
				name: 'Redis',
				Icon: brandIcon(siRedis),
				description: 'Sub-millisecond semantic caching and agent memory that slash latency and token spend.',
			},
			{
				name: 'Elasticsearch',
				Icon: ElasticsearchIcon,
				description: 'Hybrid keyword-plus-semantic search with reranking across millions of documents.',
			},
		],
	},
	{
		id: 'evals',
		label: 'Evals & LLMOps',
		title: 'Measured, not guessed.',
		description:
			'If it isn’t evaluated, it isn’t production. Every system ships with test suites, tracing and cost dashboards — so quality rises while spend falls.',
		items: [
			{
				name: 'LangSmith',
				Icon: brandIcon(siLangchain),
				description: 'End-to-end tracing and regression datasets for every chain, agent and tool call.',
			},
			{
				name: 'Braintrust',
				Icon: brandIcon(siBraintrust),
				description: 'Eval-driven development: score every prompt and model change before it reaches users.',
			},
			{
				name: 'Weights & Biases',
				Icon: brandIcon(siWeightsandbiases),
				description: 'Experiment tracking and model lineage for fine-tuning and training runs.',
			},
			{
				name: 'Datadog LLM Observability',
				Icon: brandIcon(siDatadog),
				description: 'Latency, cost, quality and security signals for AI — beside the rest of your stack.',
			},
		],
	},
	{
		id: 'serving',
		label: 'Model Serving & Fine-tuning',
		title: 'Own your intelligence.',
		description:
			'When off-the-shelf isn’t enough: fine-tuned and self-hosted models that cut inference cost, lock in quality and keep your IP yours.',
		items: [
			{
				name: 'Hugging Face',
				Icon: brandIcon(siHuggingface),
				description: 'The open model ecosystem — curated checkpoints, datasets and fine-tuning tooling.',
			},
			{
				name: 'PyTorch',
				Icon: brandIcon(siPytorch),
				description: 'The research-grade framework behind custom training and parameter-efficient fine-tuning.',
			},
			{
				name: 'vLLM',
				Icon: brandIcon(siVllm),
				description: 'High-throughput inference serving that squeezes maximum tokens from every GPU.',
			},
			{
				name: 'Modal',
				Icon: brandIcon(siModal),
				description: 'Serverless GPUs that spin up in seconds — pay for inference, not idle hardware.',
			},
			{
				name: 'Ollama',
				Icon: brandIcon(siOllama),
				description: 'Private, on-device models for prototyping and air-gapped environments.',
			},
		],
	},
	{
		id: 'cloud',
		label: 'Serverless & Edge',
		title: 'Infrastructure that scales itself.',
		description:
			'Event-driven, pay-per-use architecture that absorbs any peak without a pager — and without a cloud bill that outpaces revenue.',
		items: [
			{
				name: 'AWS Lambda',
				Icon: LambdaIcon,
				description: 'Compute that scales from zero to peak in milliseconds. You pay for work, never idle.',
			},
			{
				name: 'AWS Step Functions',
				Icon: StepFunctionsIcon,
				description: 'Visual, auditable orchestration for long-running AI pipelines and approvals.',
			},
			{
				name: 'Amazon EventBridge',
				Icon: EventBridgeIcon,
				description: 'The event backbone of a decoupled business — systems react instead of waiting.',
			},
			{
				name: 'Amazon DynamoDB',
				Icon: DynamoDbIcon,
				description: 'Single-digit-millisecond state at any scale, with zero capacity planning.',
			},
			{
				name: 'Cloudflare Workers',
				Icon: brandIcon(siCloudflareworkers),
				description: 'Code and inference at 300+ edge locations — near-zero latency for global users.',
			},
			{
				name: 'Vercel',
				Icon: brandIcon(siVercel),
				description: 'Frontend cloud with preview deploys on every change and instant global rollback.',
			},
		],
	},
	{
		id: 'data',
		label: 'Data Platform',
		title: 'Data as a competitive moat.',
		description:
			'AI is only as good as the data beneath it. Modern platforms that unify analytics, streaming and AI on one governed foundation.',
		items: [
			{
				name: 'Snowflake',
				Icon: brandIcon(siSnowflake),
				description: 'Elastic, governed data cloud with AI functions running right where the data lives.',
			},
			{
				name: 'Databricks',
				Icon: brandIcon(siDatabricks),
				description: 'Lakehouse for unified data engineering, ML and model serving at enterprise scale.',
			},
			{
				name: 'ClickHouse',
				Icon: brandIcon(siClickhouse),
				description: 'Real-time analytics over billions of rows in milliseconds — ideal for AI telemetry.',
			},
			{
				name: 'Supabase',
				Icon: brandIcon(siSupabase),
				description: 'Postgres, auth, storage and vectors in one platform for products that ship this week.',
			},
			{
				name: 'Apache Kafka',
				Icon: brandIcon(siApachekafka),
				description: 'The event-streaming standard for real-time pipelines between every system you run.',
			},
		],
	},
	{
		id: 'platform',
		label: 'Platform & Reliability',
		title: 'Enterprise-grade by default.',
		description:
			'Infrastructure as code, containerised workloads and full-stack observability — the controls your security team and your board expect.',
		items: [
			{
				name: 'Terraform',
				Icon: brandIcon(siTerraform),
				description: 'Every environment declared in code — reviewable, reproducible and reversible.',
			},
			{
				name: 'Kubernetes',
				Icon: brandIcon(siKubernetes),
				description: 'Orchestration for GPU workloads and services that outgrow serverless.',
			},
			{
				name: 'Docker',
				Icon: brandIcon(siDocker),
				description: 'Identical, portable builds from a laptop to production — no surprises.',
			},
			{
				name: 'OpenTelemetry',
				Icon: brandIcon(siOpentelemetry),
				description: 'Vendor-neutral tracing across services, agents and model calls.',
			},
			{
				name: 'Sentry',
				Icon: brandIcon(siSentry),
				description: 'Errors and performance regressions caught and triaged before customers notice.',
			},
		],
	},
	{
		id: 'product',
		label: 'Product Engineering',
		title: 'Experiences that sell the intelligence.',
		description:
			'The most capable AI is worthless if it feels clumsy. Type-safe, tested products built to earn trust in the first five seconds.',
		items: [
			{
				name: 'TypeScript',
				Icon: brandIcon(siTypescript),
				description: 'Type-safe codebases that stay maintainable as teams and ambitions grow.',
			},
			{
				name: 'Python',
				Icon: brandIcon(siPython),
				description: 'The lingua franca of AI — pipelines, model integrations and evaluation tooling.',
			},
			{
				name: 'Next.js',
				Icon: brandIcon(siNextdotjs),
				description: 'Server-rendered, edge-fast web apps with first-class SEO and streaming UI.',
			},
			{
				name: 'FastAPI',
				Icon: brandIcon(siFastapi),
				description: 'High-performance Python APIs with automatic docs — the default for AI backends.',
			},
			{
				name: 'Tailwind CSS',
				Icon: brandIcon(siTailwindcss),
				description: 'Pixel-precise design systems, consistent on every screen and shipped fast.',
			},
			{
				name: 'Vitest',
				Icon: brandIcon(siVitest),
				description: 'Lightning-fast test suites that catch regressions long before production does.',
			},
		],
	},
];

const EASE = [0.22, 1, 0.36, 1] as const;

const pad = (n: number) => String(n).padStart(2, '0');

// Brand colours for icons that ship as local SVGs (simple-icons carry their own)
const localAccents: Record<string, string> = {
	OpenAI: '#ffffff',
	'Anthropic Claude': '#D97757',
	'Claude Agent SDK': '#D97757',
	'Google Gemini': '#8E75B2',
	'Meta Llama': '#0467DF',
	'Amazon Bedrock': '#8B5CF6',
	Pinecone: '#ffffff',
	Elasticsearch: '#FEC514',
	'AWS Lambda': '#FA7E14',
	'AWS Step Functions': '#E7157B',
	'Amazon EventBridge': '#E7157B',
	'Amazon DynamoDB': '#4D72F3',
};

const accentOf = (item: TechItem) => (item.Icon as { accent?: string }).accent ?? localAccents[item.name] ?? '#34d399';

const trackPointer = (e: React.PointerEvent<HTMLElement>) => {
	const rect = e.currentTarget.getBoundingClientRect();
	e.currentTarget.style.setProperty('--mx', `${e.clientX - rect.left}px`);
	e.currentTarget.style.setProperty('--my', `${e.clientY - rect.top}px`);
};

const tileVariants = {
	hidden: { opacity: 0, y: 16, filter: 'blur(6px)' },
	visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.6, ease: EASE } },
};

// App-icon style glass tile with a brand-coloured halo behind it
const IconTile = ({ item, large }: { item: TechItem; large?: boolean }) => (
	<span className={`relative flex shrink-0 items-center justify-center ${large ? 'h-14 w-14 sm:h-[76px] sm:w-[76px]' : 'h-11 w-11 sm:h-14 sm:w-14'}`}>
		<span
			aria-hidden
			className="absolute -inset-2 rounded-[28px] bg-(--accent) opacity-[0.14] blur-xl transition-opacity duration-700 group-hover:opacity-[0.32]"
		/>
		<span
			aria-hidden
			className={`absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.10),rgba(255,255,255,0.02))] shadow-[inset_0_1px_0_rgba(255,255,255,0.14),inset_0_0_0_1px_rgba(255,255,255,0.08),0_12px_28px_-12px_rgba(0,0,0,0.9)] ${
				large ? 'rounded-2xl sm:rounded-[22px]' : 'rounded-xl sm:rounded-2xl'
			}`}
		/>
		<item.Icon
			className={`relative transition-transform duration-700 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:scale-110 ${large ? 'h-7 w-7 sm:h-9 sm:w-9' : 'h-5 w-5 sm:h-6 sm:w-6'} text-white`}
		/>
	</span>
);

const ToolTile = ({ item, index, featured }: { item: TechItem; index: number; featured?: boolean }) => (
	<motion.div
		variants={tileVariants}
		onPointerEnter={trackPointer}
		onPointerMove={trackPointer}
		style={{ '--accent': accentOf(item) } as React.CSSProperties}
		className={`group relative overflow-hidden bg-[#05070c] transition-colors duration-700 hover:bg-[#070a10] ${
			featured ? 'p-5 sm:col-span-2 sm:p-9' : 'p-5 sm:p-7'
		}`}
	>
		{/* brand-tinted spotlight that follows the cursor */}
		<span
			aria-hidden
			className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
			style={{ background: 'radial-gradient(320px circle at var(--mx, 50%) var(--my, 50%), color-mix(in srgb, var(--accent) 13%, transparent), transparent 70%)' }}
		/>
		{/* accent edge */}
		<span
			aria-hidden
			className="pointer-events-none absolute inset-x-0 top-0 h-px opacity-0 transition-opacity duration-700 group-hover:opacity-70"
			style={{ background: 'linear-gradient(90deg, transparent, var(--accent), transparent)' }}
		/>

		{featured ? (
			<>
				{/* oversized watermark of the logo */}
				<item.Icon className="pointer-events-none absolute -bottom-16 -right-10 hidden h-64 w-64 opacity-[0.045] transition-transform duration-1000 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:-translate-y-2 group-hover:scale-105 sm:block" />
				<div className="relative flex items-start gap-4 sm:items-center sm:gap-9">
					<IconTile item={item} large />
					<div className="min-w-0 max-w-lg">
						<p className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.25em] text-white/40">
							<span className="h-1.5 w-1.5 rounded-full bg-(--accent) shadow-[0_0_10px_var(--accent)]" />
							{pad(index + 1)} · Featured
						</p>
						<p className="mt-2 text-xl font-medium tracking-tight text-white sm:mt-3 sm:text-[28px]">{item.name}</p>
						<p className="mt-1.5 text-sm leading-relaxed text-white/55 sm:mt-2 sm:text-[15px]">{item.description}</p>
					</div>
				</div>
			</>
		) : (
			<div className="relative flex items-start gap-4 sm:block">
				<div className="flex items-start justify-between">
					<IconTile item={item} />
					<span className="hidden font-mono text-[10px] text-white/25 transition-colors duration-700 group-hover:text-(--accent) sm:inline">{pad(index + 1)}</span>
				</div>
				<div className="min-w-0">
					<p className="flex items-baseline justify-between gap-3 text-base font-medium tracking-tight text-white sm:mt-7 sm:text-[17px]">
						{item.name}
						<span className="font-mono text-[10px] font-normal text-white/25 sm:hidden">{pad(index + 1)}</span>
					</p>
					<p className="mt-1 max-w-sm text-[13px] leading-relaxed text-white/50 sm:mt-2 sm:text-sm">{item.description}</p>
				</div>
			</div>
		)}
	</motion.div>
);

const PHONE_QUERY = '(max-width: 639px)';

// true below the `sm` breakpoint; false during server render
const useIsPhone = () =>
	React.useSyncExternalStore(
		(onChange) => {
			const mq = window.matchMedia(PHONE_QUERY);
			mq.addEventListener('change', onChange);
			return () => mq.removeEventListener('change', onChange);
		},
		() => window.matchMedia(PHONE_QUERY).matches,
		() => false
	);

export const TechStack: React.FC = () => {
	const [activeId, setActiveId] = React.useState(techSections[0].id);
	const activeIndex = Math.max(
		0,
		techSections.findIndex((s) => s.id === activeId)
	);
	const active = techSections[activeIndex];
	const sphereItems = techSections.flatMap((s) => s.items.map((i) => ({ name: i.name, Icon: i.Icon, group: s.id })));
	const totalTools = sphereItems.length;
	// the full 46-chip sphere is too dense on a phone, so show two per discipline there
	const phoneSphereItems = techSections.flatMap((s) => s.items.slice(0, 2).map((i) => ({ name: i.name, Icon: i.Icon, group: s.id })));
	const isPhone = useIsPhone();
	const slug = active.label.toLowerCase().replace(/&/g, '').replace(/\s+/g, '-').replace(/-+/g, '-');

	return (
		<section id="tech" className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
			<div className="grid items-center gap-6 lg:grid-cols-[1.05fr_1fr] lg:gap-10">
				<div>
					<SectionHeading
						eyebrow="The arsenal"
						title="The stack behind AI"
						accent="that pays for itself."
						description="Vendor-neutral and model-agnostic. Every tool here has earned its place in production — selected per engagement for accuracy, latency, security and unit economics. Never for hype."
					/>
					<dl className="mt-8 grid grid-cols-3 gap-4 border-t border-line pt-6 sm:mt-10 sm:flex sm:gap-10">
						<div>
							<dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
								<span className="sm:hidden">Tools</span>
								<span className="hidden sm:inline">Production-tested tools</span>
							</dt>
							<dd className="mt-1 text-3xl font-medium text-white">{totalTools}</dd>
						</div>
						<div>
							<dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">Disciplines</dt>
							<dd className="mt-1 text-3xl font-medium text-white">{pad(techSections.length)}</dd>
						</div>
						<div>
							<dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
								<span className="sm:hidden">Model labs</span>
								<span className="hidden sm:inline">Frontier model labs</span>
							</dt>
							<dd className="mt-1 text-3xl font-medium text-white">05</dd>
						</div>
					</dl>
				</div>
				<TechSphere items={isPhone ? phoneSphereItems : sphereItems} highlight={activeId} />
			</div>

			{/* Stack explorer */}
			<motion.div
				initial={{ opacity: 0, y: 40 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, amount: 0.15 }}
				transition={{ duration: 0.9, ease: EASE }}
				className="relative mt-14 rounded-[28px] bg-linear-to-b sm:mt-20 from-white/[0.12] via-white/[0.04] to-white/[0.02] p-px"
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
							{pad(active.items.length)} tools · battle-tested in production
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
						<div className="relative p-4 sm:min-h-[28rem] sm:p-8 lg:p-10">
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

									{/* hairline grid of tools: first one featured, the rest in pairs */}
									<div className="mt-7 grid grid-cols-[minmax(0,1fr)] gap-px overflow-hidden rounded-[22px] sm:mt-10 border border-white/[0.07] bg-white/[0.06] shadow-[0_40px_80px_-40px_rgba(0,0,0,0.9)] sm:grid-cols-2">
										{active.items.map((item, i) => (
											<ToolTile key={item.name} item={item} index={i} featured={i === 0} />
										))}

										{/* fill the empty cell when the paired tiles leave a gap */}
										{(active.items.length - 1) % 2 === 1 && (
											<motion.a
												href={mailto}
												variants={tileVariants}
												className="group relative hidden flex-col justify-between overflow-hidden bg-[#05070c] p-7 transition-colors duration-700 hover:bg-[#070a10] sm:flex"
											>
												<span
													aria-hidden
													className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(135deg,rgba(255,255,255,0.025)_0_1px,transparent_1px_12px)]"
												/>
												<span className="relative font-mono text-[10px] uppercase tracking-[0.25em] text-white/40">Your stack, my playbook</span>
												<span className="relative mt-8 flex items-end justify-between gap-4">
													<span className="text-[17px] font-medium tracking-tight text-white/85">
														Already invested elsewhere?
														<span className="mt-1 block text-sm font-normal text-white/50">I integrate with what you run.</span>
													</span>
													<span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/[0.06] text-white shadow-[inset_0_0_0_1px_rgba(255,255,255,0.1)] transition-colors duration-500 group-hover:bg-white group-hover:text-[#05060a]">
														<ArrowUpRight className="h-4 w-4" />
													</span>
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
