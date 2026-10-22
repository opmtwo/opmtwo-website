// All page copy lives here so it can be edited without touching layout code.

export const contact = {
	name: 'Aditya Samanta',
	initials: 'AS',
	email: 'connect@opmtwo.com',
	emailSubject: 'AI%20Consultation',
	fiverr: 'onepunchmantwo',
	whatsapp: undefined as string | undefined,
};

export const mailto = `mailto:${contact.email}?subject=${contact.emailSubject}`;
export const fiverrUrl = `https://www.fiverr.com/${contact.fiverr}`;

export const nav = [
	{ id: 'levels', label: '5 Levels' },
	{ id: 'work', label: 'Work' },
	{ id: 'engagements', label: 'Engagements' },
	{ id: 'process', label: 'Process' },
	{ id: 'testimonials', label: 'Reviews' },
	{ id: 'faq', label: 'FAQ' },
];

export const hero = {
	eyebrow: "Fiverr's Pick · AI Consultant",
	titleLead: 'One consultant for',
	titleAccent: 'every level',
	titleTail: 'of AI.',
	rotatingPrefix: 'From',
	rotating: ['Chatbots', 'Reasoners', 'AI Agents', 'Innovators', 'AI Organizations'],
	description:
		'From your first assistant to fully autonomous, multi-agent operations — I design, build and scale AI across all five levels of capability, on secure and cost-efficient AWS infrastructure.',
	primaryCta: 'Book a Free 15-Min Call',
	secondaryCta: 'View Fiverr Profile',
	stats: [
		{ value: 120, suffix: '+', label: 'Five-star reviews' },
		{ value: 5.0, decimals: 1, suffix: '', label: 'Average rating' },
		{ value: 5, suffix: '/5', label: 'AI levels covered' },
		{ value: 70, suffix: '%', prefix: 'up to ', label: 'AWS cost reduction' },
	],
};

export type AiLevel = {
	level: number;
	name: string;
	tagline: string;
	description: string;
	builds: string[];
	outcome: string;
	color: string;
};

export const levels: AiLevel[] = [
	{
		level: 1,
		name: 'Conversational AI',
		tagline: 'Chatbots & assistants',
		description: 'AI that talks to your customers and team in natural language — grounded in your docs, tickets and knowledge base.',
		builds: ['Support chatbots trained on your knowledge base', 'Internal FAQ & help-centre assistants', 'Multi-model setups across ChatGPT, Claude & Llama'],
		outcome: 'Fewer repetitive tickets and instant answers, 24/7.',
		color: '#34d399',
	},
	{
		level: 2,
		name: 'Reasoning AI',
		tagline: 'Reasoners & document intelligence',
		description: 'AI that reads, analyses and decides — turning PDFs, forms and messy data into structured, trustworthy answers.',
		builds: ['RAG pipelines with embeddings & vector search', 'OCR, extraction & classification for documents', 'Decision support on top of real-time data'],
		outcome: 'Hours of manual review compressed into seconds.',
		color: '#22d3ee',
	},
	{
		level: 3,
		name: 'Agentic AI',
		tagline: 'Agents that take action',
		description: 'AI that doesn’t just answer — it uses tools, calls APIs and completes multi-step work inside your systems, with guardrails.',
		builds: ['Tool-using agents wired into your APIs', 'Long-running workflows on Step Functions & EventBridge', 'Human-in-the-loop approvals & audit trails'],
		outcome: 'Whole workflows automated end-to-end, safely.',
		color: '#60a5fa',
	},
	{
		level: 4,
		name: 'Innovator AI',
		tagline: 'AI that creates',
		description: 'AI that generates new content, ideas and products — copilots and generative features that become part of what you sell.',
		builds: ['Generative product features & copilots', 'AI-powered internal tools & dashboards', 'Prompt engineering & evaluation harnesses'],
		outcome: 'New revenue lines and differentiated products.',
		color: '#a78bfa',
	},
	{
		level: 5,
		name: 'Organizational AI',
		tagline: 'Autonomous AI operations',
		description: 'Coordinated systems of agents that run entire functions — planning, delegating, executing and reporting with minimal oversight.',
		builds: ['Multi-agent orchestration & delegation', 'Observability, evals & cost controls (LLM Ops)', 'Governance, security & data-privacy architecture'],
		outcome: 'Functions that scale without scaling headcount.',
		color: '#f472b6',
	},
];

export const problemSolution = {
	eyebrow: 'Why teams call me',
	title: 'Most companies are stuck at',
	titleAccent: 'Level 1.',
	description: 'A chatbot pilot is easy. Getting AI that reasons, acts and scales in production is where most teams stall.',
	// each problem sits beside the answer to it
	pairs: [
		{ problem: 'AI pilots that never make it to production', solution: 'Production systems in days, not months — built for your team to extend' },
		{ problem: 'Chatbots that hallucinate and erode customer trust', solution: 'Grounded, evaluated AI that answers from your own data' },
		{ problem: 'No data foundation for reasoning or retrieval', solution: 'Retrieval and memory designed in from day one' },
		{ problem: 'Agents that break the moment they touch real systems', solution: 'Agentic workflows with guardrails and human approvals' },
		{ problem: 'LLM and AWS bills growing with no visibility', solution: '40–70% leaner AWS spend through focused optimization' },
		{ problem: 'Senior AI architects cost $200K+ and take months to hire', solution: 'Senior AI architecture on demand — without the hire' },
	],
};

export type CaseStudy = {
	industry: string;
	level: string;
	title: string;
	details: string;
	metric: string;
	metricLabel: string;
	tech: string[];
};

export const caseStudies: CaseStudy[] = [
	{
		industry: 'FinTech',
		level: 'Level 1 · Conversational',
		title: 'AWS-powered AI support assistant',
		details: 'An AI support layer trained on product docs and ticket history that resolves common questions before they reach a human.',
		metric: '50–60%',
		metricLabel: 'fewer repetitive tickets',
		tech: ['Lambda', 'DynamoDB', 'API Gateway', 'ChatGPT', 'Bedrock'],
	},
	{
		industry: 'SalesTech',
		level: 'Level 3 · Agentic',
		title: 'Autonomous inbox warm-up engine',
		details: 'An AI engine that holds natural conversations across mailboxes on its own, building sender reputation and deliverability across domains.',
		metric: 'Multi-domain',
		metricLabel: 'autonomous deliverability',
		tech: ['Lambda', 'DynamoDB', 'Bedrock', 'SES'],
	},
	{
		industry: 'FinTech',
		level: 'Foundation · Real-time data',
		title: 'Real-time card processing engine',
		details: 'A high-speed layer for live card transactions with instant validation, scoring and routing across multiple providers.',
		metric: 'Real-time',
		metricLabel: 'scoring & routing',
		tech: ['Lambda', 'Kinesis', 'DynamoDB', 'Elasticsearch'],
	},
	{
		industry: 'SaaS',
		level: 'Foundation · Infrastructure',
		title: 'Cost optimization & serverless migration',
		details: 'Removed ECS bottlenecks and migrated the core to Lambda + DynamoDB — the lean base every higher AI level runs on.',
		metric: '70%',
		metricLabel: 'lower AWS bill · 3× faster',
		tech: ['Lambda', 'DynamoDB', 'API Gateway'],
	},
	{
		industry: 'Media',
		level: 'Foundation · Scale',
		title: 'Serverless core for high traffic',
		details: 'Rebuilt a high-traffic backend into a fully serverless stack with zero scaling issues.',
		metric: '80%',
		metricLabel: 'lower streaming costs',
		tech: ['Lambda', 'DynamoDB', 'Bunny Stream'],
	},
	{
		industry: 'IoT',
		level: 'Foundation · Streaming',
		title: 'Live fuel-pump telemetry pipeline',
		details: 'Streams dispenser flow, tank levels and sales pulses into a serverless pipeline, ready for AI forecasting and anomaly detection.',
		metric: 'Live',
		metricLabel: 'telemetry at the edge',
		tech: ['IoT Core', 'Kinesis', 'Lambda', 'DynamoDB'],
	},
];

export const engagements = [
	{
		name: 'AI Readiness Audit',
		duration: '1 week',
		description: 'We map where you sit on the five levels, audit your data, stack and AWS spend, and agree the highest-ROI next step.',
		points: ['Level assessment & roadmap', 'Data & architecture review', 'AWS cost audit'],
	},
	{
		name: 'Pilot Sprint',
		duration: '1–2 weeks',
		description: 'A focused, production-grade pilot that proves value on one real workflow before you commit to a larger roadmap.',
		points: ['One use case, shipped', 'Evals & success metrics', 'Clear go / no-go'],
		featured: true,
	},
	{
		name: 'Build & Scale',
		duration: 'Project',
		description: 'Take a proven pilot up the levels — from assistant to reasoning to agents — on serverless infrastructure that scales itself.',
		points: ['Agents & orchestration', 'Serverless AWS backend', 'Hand-off your team can extend'],
	},
	{
		name: 'Fractional AI Architect',
		duration: 'Retainer',
		description: 'On-demand senior guidance to review designs, ship new features and keep model and AWS costs under control.',
		points: ['Architecture reviews', 'Feature delivery', 'Cost & quality monitoring'],
	},
];

export const process = [
	{ step: '01', title: 'Discover', description: 'A short call to understand your stack, goals and which level of AI will move the needle first.' },
	{ step: '02', title: 'Pilot', description: 'A 1–2 week pilot on one real workflow, measured against agreed success metrics.' },
	{ step: '03', title: 'Scale', description: 'Harden, integrate and climb the levels — adding reasoning, agents and orchestration as value is proven.' },
	{ step: '04', title: 'Evolve', description: 'Ongoing support as your fractional AI architect: new features, evaluations and cost control.' },
];

export const testimonials = [
	{
		name: 'Colby',
		location: 'USA',
		role: 'Founder',
		quote: `Sam is great to work with. I have worked with him on multiple apps over the last two years and I couldn't recommend him highly enough. Thank you and I look forward to continued work together in the very near future!`,
	},
	{
		name: 'Danielle',
		location: 'Macau',
		role: 'Co-founder',
		quote: `We enjoyed working again with Sam on a new feature for our product. He has always met all of our requirements 100% and has gone above and beyond to ensure everything works properly.`,
	},
	{
		name: 'Liorz',
		location: 'Israel',
		role: 'CTO',
		quote: `onepunchmantwo is a great professional. highly responsive, and very service oriented. would definitely work with him again!`,
	},
	{
		name: 'Kshijit',
		location: 'Australia',
		role: 'Founder',
		quote: `Sam is amazing developer, he deliver everything on time and excellent manner. He is my go to guy. Sam just finished and delivered pase #3 of my project and he is very accomodative of any minor changes and enhancement. Thanks Sam.`,
	},
	{
		name: 'Vikas',
		location: 'Japan',
		role: 'CTO',
		quote: `Another great experience with Sam! He is PROFESSIONAL, responsive, and delivers high-quality work. His attention to detail and proactive communication make working with him a breeze. As a repeat customer, I highly recommend him. Thank you, Sam! 🙌`,
	},
];

export const faqs = [
	{
		question: 'What are the five levels of AI?',
		answer: 'Level 1 is conversational AI (chatbots and assistants). Level 2 is reasoning AI that analyses documents and data. Level 3 is agentic AI that takes actions in your systems. Level 4 is innovator AI that creates new content and products. Level 5 is organizational AI — coordinated agents running whole functions.',
	},
	{
		question: 'How do I know which level my company is at?',
		answer: 'Most teams are at Level 1 or experimenting with Level 2. The AI Readiness Audit maps your current use cases, data and infrastructure against the five levels and identifies the single next step with the best return.',
	},
	{
		question: 'Do we need to go through every level in order?',
		answer: 'No, but each level builds on the one below. Agents (Level 3) are only as reliable as the reasoning and data grounding beneath them, so I make sure the foundation is solid before adding autonomy.',
	},
	{
		question: 'Which models and platforms do you work with?',
		answer: 'Every frontier lab — OpenAI, Anthropic, Google, Meta and Mistral, plus Amazon Bedrock — chosen per workload for quality, latency and cost. Agents run on MCP, LangGraph and Temporal, retrieval on Pinecone or pgvector, and every system ships with evals in LangSmith or Braintrust on serverless AWS and edge infrastructure.',
	},
	{
		question: 'How do you keep our data private and costs under control?',
		answer: 'I design for your data to stay inside your own AWS account where possible, use private model endpoints like Bedrock when needed, and add evaluations, monitoring and cost guardrails from day one. On the infrastructure side I typically cut 40–70% of backend spend.',
	},
	{
		question: 'How does a typical engagement start?',
		answer: 'We start with a short call to understand your stack and goals. Then I propose a focused plan — often a 1–2 week pilot to prove value before scaling to a larger roadmap. After launch I can stay on as your fractional AI architect.',
	},
];

export const cta = {
	title: 'Ready to climb to the',
	titleAccent: 'next level of AI?',
	description: "Send a quick note with your current stack and goals. I'll reply with a short, actionable plan and the next level to target.",
	primary: 'Email Me Your Use Case',
	secondary: 'View Fiverr Profile',
};
