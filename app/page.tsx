// app/page.tsx  (SERVER component)
import type { Metadata } from 'next';
import HomeClient from '@/app/pages/Home';

export const metadata: Metadata = {
	title: 'Elite AWS & AI Consultant | Serverless, Automation, Scale, Cost Savings',
	description: `
		Modernize legacy systems, eliminate bottlenecks, automate workflows, reduce costs and accelerate delivery.
		From architecture to automation — launch world-class cloud solutions effortlessly with a seasoned AWS architect.
		Trusted by global teams.
	`,
};

export default function HomePage() {
	return <HomeClient />;
}
