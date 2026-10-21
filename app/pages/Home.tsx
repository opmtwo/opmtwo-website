'use client';

import CaseStudiesSection from '@/components/CaseStudiesSection';
import EngagementsSection from '@/components/EngagementsSection';
import FaqSection from '@/components/FaqSection';
import ReadyToTrySection from '@/components/Footer';
import Hero from '@/components/Hero';
import LevelsSection from '@/components/LevelsSection';
import LogoMarquee from '@/components/LogoMarquee';
import ScrollProgress from '@/components/motion/ScrollProgress';
import Nav from '@/components/Nav';
import ProblemSolutionSection from '@/components/ProblemSolutionSection';
import ProcessSection from '@/components/ProcessSection';
import { TechStack } from '@/components/TechStack';
import TestimonialsSection from '@/components/TestimonialsSection';
import { MotionConfig } from 'motion/react';

export default function Home() {
	return (
		<MotionConfig reducedMotion="user">
			<ScrollProgress />
			<Nav />

			<main className="relative min-h-screen">
				<Hero />
				<LogoMarquee />
				<LevelsSection />
				<ProblemSolutionSection />
				<CaseStudiesSection />
				<EngagementsSection />
				<ProcessSection />
				<TestimonialsSection />
				<TechStack />
				<FaqSection />
				<ReadyToTrySection />
			</main>
		</MotionConfig>
	);
}
