'use client';

import CaseStudiesSection from '@/components/CaseStudiesSection';
import FaqSection from '@/components/FaqSection';
import ReadyToTrySection from '@/components/Footer';
import Hero from '@/components/Hero';
import Hr from '@/components/Hr';
import MetaTags from '@/components/MetaTags';
import Nav from '@/components/Nav';
import ProblemSolutionSection from '@/components/ProblemSolutionSection';
import ScrollToNextSection from '@/components/ScrollToNextSection';
import ServicesShowcase from '@/components/ServicesShowcase';
import { TechStack } from '@/components/TechStack';
import TestimonialsSection from '@/components/TestimonialsSection';

export default function Home() {
	return (
		<>
			<MetaTags
				title="Elite AWS & AI Consultant | Serverless, Automation, Scale, Cost Savings"
				description={`
					Modernize legacy systems, eliminate bottlenecks, automate workflows, reduce costs and accelerate delivery.
					From architecture to automation — launch world-class cloud solutions effortlessly with a seasoned AWS architect.
					Trusted by global teams.
				`}
			/>
			<main className="min-h-screen">
				<Nav />

				<ScrollToNextSection />

				<Hero />
				<Hr />

				<ProblemSolutionSection />
				<Hr />

				<CaseStudiesSection />
				<Hr />

				<ServicesShowcase />
				<Hr />

				<TestimonialsSection />
				<Hr />

				<TechStack />
				<Hr />

				<FaqSection />

				<ReadyToTrySection />
			</main>
		</>
	);
}
