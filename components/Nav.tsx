const Nav = () => {
	const scrollToEle = (id: string) => {
		const nextSection = document.getElementById(id);
		if (nextSection) {
			const scrollY = window.scrollY + nextSection.getBoundingClientRect().top - 100;
			window.scrollTo({
				top: scrollY,
				behavior: 'smooth',
			});
		}
	};

	return (
		<>
			{/* Top nav */}
			<header className="z-50 fixed top-0 right-0 left-0 bg-white dark:bg-(--background-dark)">
				<div className="flex items-center justify-between mx-auto w-full px-4 py-5 sm:px-8">
					<div className="cursor-pointer flex items-center gap-2" onClick={() => scrollToEle('hero')}>
						<span className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-300 text-xs font-semibold uppercase">
							AS
						</span>
						<span className="text-lg font-semibold tracking-tight">Aditya Samanta</span>
					</div>

					<nav className="hidden items-center gap-8 text-sm text-black dark:text-white lg:flex">
						<button className="cursor-pointer hover:underline" onClick={() => scrollToEle('problem-solution')}>
							Solution
						</button>
						<button className="cursor-pointer hover:underline" onClick={() => scrollToEle('case-studies')}>
							Case Studies
						</button>
						<button className="cursor-pointer hover:underline" onClick={() => scrollToEle('services')}>
							Services
						</button>
						<button className="cursor-pointer hover:underline" onClick={() => scrollToEle('testimonials')}>
							Testimonials
						</button>
						<button className="cursor-pointer hover:underline" onClick={() => scrollToEle('tech')}>
							Tech
						</button>
						<button className="cursor-pointer hover:underline" onClick={() => scrollToEle('faq')}>
							FAQ
						</button>
						<button className="cursor-pointer hover:underline" onClick={() => scrollToEle('contact')}>
							Contact
						</button>
					</nav>

					<div className="flex items-center gap-3">
						{/* <button className="hidden text-sm text-slate-700 cursor-pointer hover:text-slate-900 md:inline">Log in</button> */}
						{/* <button className="rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow-md hover:bg-slate-800">
							Start free trial
						</button> */}
						<a
							href={`mailto:connect@opmtwo.com?subject=Serverless%20%2B%20AI%20Consultation`}
							// onClick={() => setMenuOpen(false)}
							className="flex w-full items-center justify-center rounded-full bg-emerald-500 px-4 py-2.5 text-sm font-semibold text-white shadow-md shadow-emerald-500/30 transition hover:bg-emerald-400"
						>
							<div className="sm:hidden">Book Consultation</div>
							<div className="hidden sm:block">Book a Free 15-Min Consultation</div>
						</a>
					</div>
				</div>
			</header>
		</>
	);
};

export default Nav;
