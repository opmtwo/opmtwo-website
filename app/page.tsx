// app/page.tsx  (SERVER component)
import type { Metadata } from 'next';
import HomeClient from '@/app/pages/Home';

export const metadata: Metadata = {
	title: 'Aditya Samanta | AI Consultant Across All 5 Levels of AI — Chatbots, Reasoning, Agents & Autonomous AI',
	description:
		'From conversational assistants to reasoning systems, autonomous agents and multi-agent operations — AI strategy, development and scaling on secure, cost-efficient AWS. 120+ five-star reviews.',
};

export default function HomePage() {
	return <HomeClient />;
}
