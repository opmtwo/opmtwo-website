// app/components/CustomerTestimonials.tsx
'use client';

import React from 'react';
import Image from 'next/image';

type Testimonial = {
	id: number;
	name: string;
	role: string;
	company: string;
	avatar: string;
	quote: string;
};

const testimonials: Testimonial[] = [
	{
		id: 1,
		name: 'Nándor Muzsik',
		role: 'Founder',
		company: 'Designsill',
		avatar: '/koko.webp',
		quote:
			"Commerce.FO were created with the highest attention to details. If you're looking for a flexible Product pack, you simply can't go wrong with this one.",
	},
	{
		id: 2,
		name: 'Jane Doe',
		role: 'CTO',
		company: 'SaaSly',
		avatar: '/koko.webp',
		quote:
			'Working with this team was a joy. They shipped fast, communicated clearly, and cared deeply about the final product.',
	},
	{
		id: 3,
		name: 'Alex Smith',
		role: 'Product Lead',
		company: 'FinEdge',
		avatar: '/koko.webp',
		quote:
			'The quality and polish exceeded our expectations. Our customers noticed the difference immediately.',
	},
];

export const CustomerTestimonials: React.FC = () => {
	const [activeIndex, setActiveIndex] = React.useState(0);
	const len = testimonials.length;
	const active = testimonials[activeIndex];
	const prev = testimonials[(activeIndex - 1 + len) % len];
	const next = testimonials[(activeIndex + 1) % len];

	const goPrev = () => setActiveIndex((i) => (i - 1 + len) % len);
	const goNext = () => setActiveIndex((i) => (i + 1) % len);

	// Swiping support
	const touchStartX = React.useRef<number | null>(null);
	const touchEndX = React.useRef<number | null>(null);

	const handleTouchStart = (e: React.TouchEvent) => {
		touchStartX.current = e.changedTouches[0].clientX;
	};
	const handleTouchMove = (e: React.TouchEvent) => {
		touchEndX.current = e.changedTouches[0].clientX;
	};
	const handleTouchEnd = () => {
		if (touchStartX.current !== null && touchEndX.current !== null) {
			const distance = touchStartX.current - touchEndX.current;
			if (distance > 50) {
				goNext(); // swipe left
			} else if (distance < -50) {
				goPrev(); // swipe right
			}
		}
		touchStartX.current = null;
		touchEndX.current = null;
	};

	return (
		<section className="relative overflow-hidden px-4 py-16 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
			<div className="mx-auto max-w-6xl">
				{/* Header */}
				{/* Updated Heading + Subtitle */}
				<header className="text-center px-2">
					<h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl md:text-4xl dark:text-slate-50">
						Teams around the world trust me with their{' '}
						<span className="relative inline-block">
							<span className="relative z-10 bg-linear-to-r from-sky-500 via-cyan-400 to-purple-500 bg-clip-text text-transparent">
								Serverless & AI transformation
							</span>
						</span>
					</h2>

					<p className="mt-3 text-xs text-slate-500 sm:text-sm md:text-base dark:text-slate-400">
						From AWS cost reduction to production-ready AI automation, here are some real results 
						delivered for SaaS teams, agencies, and high-traffic apps.
					</p>
				</header>

				{/* Slider area */}
				<div className="relative mt-10 sm:mt-12 overflow-hidden"
					onTouchStart={handleTouchStart}
					onTouchMove={handleTouchMove}
					onTouchEnd={handleTouchEnd}
				>
					{/* Left side card (fixed height, ~25% visible, only on md+) */}
					<div className="pointer-events-none absolute left-0 top-1/2 hidden -translate-y-1/2 -translate-x-[65%] opacity-40 md:block">
						<div className="flex h-64 w-[360px] items-center rounded-4xl border border-slate-100 bg-white/80 dark:border-slate-700 dark:bg-slate-900/70">
							<p className="line-clamp-5 px-8 text-sm leading-relaxed text-slate-400 dark:text-slate-500">
								{prev.quote}
							</p>
						</div>
					</div>

					{/* Right side card (fixed height, ~25% visible, only on md+) */}
					<div className="pointer-events-none absolute right-0 top-1/2 hidden -translate-y-1/2 translate-x-[65%] opacity-40 md:block">
						<div className="flex h-64 w-[360px] items-center rounded-4xl border border-slate-100 bg-white/80 dark:border-slate-700 dark:bg-slate-900/70">
							<p className="line-clamp-5 px-8 text-sm leading-relaxed text-slate-400 dark:text-slate-500">
								{next.quote}
							</p>
						</div>
					</div>

					{/* Gradient border wrapper for main card */}
					<div className="relative mx-auto max-w-3xl bg-linear-to-r from-emerald-300 via-lime-300 to-emerald-400 p-px rounded-[34px] dark:from-emerald-500 dark:via-emerald-400 dark:to-lime-400">
						{/* Main center card */}
						<div className="relative rounded-4xl bg-white px-4 py-10 text-center sm:px-8 sm:py-12 md:px-10 md:py-14 dark:bg-slate-900">
							{/* Stars pill */}
							<div className="mx-auto mb-6 inline-flex items-center gap-1 rounded-full bg-emerald-50 px-5 py-2 text-emerald-500 sm:mb-8 sm:px-7 sm:py-3 dark:bg-emerald-500/10 dark:text-emerald-300">
								{Array.from({ length: 5 }).map((_, i) => (
									<svg
										key={i}
										className="h-4 w-4"
										viewBox="0 0 20 20"
										fill="currentColor"
									>
										<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.97a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.383 2.46a1 1 0 00-.364 1.118l1.294 3.997c.3.925-.755 1.688-1.54 1.118L10.5 14.86a1 1 0 00-1.175 0l-3.36 2.23c-.784.57-1.838-.193-1.539-1.118l1.293-3.997a1 1 0 00-.364-1.118L1.972 9.397c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.361-3.97z" />
									</svg>
								))}
							</div>

							{/* Quote */}
							<p className="mx-auto max-w-2xl text-sm leading-relaxed text-slate-900 sm:text-base md:text-lg md:leading-relaxed dark:text-slate-100">
								{active.quote}
							</p>

							{/* Person */}
							<div className="mt-8 flex flex-col items-center gap-2 sm:mt-10">
								<div className="relative h-20 w-20 overflow-hidden rounded-full border-2 border-emerald-200 sm:h-24 sm:w-24 dark:border-emerald-400/70">
									<Image
										src={active.avatar}
										alt={active.name}
										fill
										sizes="96px"
										className="object-cover"
									/>
								</div>
								<div className="text-xs sm:text-sm">
									<div className="font-semibold text-slate-900 dark:text-slate-50">
										{active.name}
									</div>
									<div className="text-[11px] text-slate-500 sm:text-xs dark:text-slate-400">
										{active.role} of{' '}
										<span className="text-emerald-500 dark:text-emerald-300">
											{active.company}
										</span>
									</div>
								</div>
							</div>

							{/* Pagination dots */}
							<div className="mt-8 flex justify-center gap-2 sm:mt-10">
								{testimonials.map((t, i) => (
									<button
										key={t.id}
										type="button"
										onClick={() => setActiveIndex(i)}
										className={`h-2 rounded-full transition-all ${
											i === activeIndex
												? 'w-6 bg-emerald-500'
												: 'w-2 bg-emerald-200 dark:bg-emerald-500/40'
										}`}
										aria-label={`Go to testimonial ${i + 1}`}
									/>
								))}
							</div>

							{/* Desktop arrows (overlapping sides) */}
							<button
								type="button"
								onClick={goPrev}
								className="absolute left-[-2.8rem] top-1/2 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-2xl text-lg text-black dark:text-white transition hover:scale-105 md:flex"
								aria-label="Previous testimonial"
							>
								←
							</button>
							<button
								type="button"
								onClick={goNext}
								className="absolute right-[-2.8rem] top-1/2 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-2xl text-lg text-black dark:text-white transition hover:scale-105 md:flex"
								aria-label="Next testimonial"
							>
								→
							</button>
						</div>
					</div>

					{/* Mobile arrows (below card) */}
					<div className="mt-6 flex justify-center gap-4 md:hidden">
						<button
							type="button"
							onClick={goPrev}
							className="flex h-10 w-10 items-center justify-center rounded-2xl text-black dark:text-white active:scale-95"
							aria-label="Previous testimonial"
						>
							←
						</button>
						<button
							type="button"
							onClick={goNext}
							className="flex h-10 w-10 items-center justify-center rounded-2xl text-black dark:text-white active:scale-95"
							aria-label="Next testimonial"
						>
							→
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default CustomerTestimonials;
