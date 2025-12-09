import DownArrowIcon from '@/icons/DownArrowIcon';

const ScrollToNextSection = () => {
	return (
		<>
			{/* Scroll to next section button */}
			<button
				className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 transition cursor-pointer"
				onClick={() => {
					const sections = Array.from(document.querySelectorAll('section'));
					const current = sections.findIndex((sec) => sec.getBoundingClientRect().top - 100 > 50);
					const nextSection = sections[current !== -1 ? current : 1];
					if (nextSection) {
						const scrollY = window.scrollY + nextSection.getBoundingClientRect().top - 100;
						window.scrollTo({
							top: scrollY,
							behavior: 'smooth',
						});
					}
				}}
			>
				{/* Scroll to Next */}
				<DownArrowIcon width={24} height={24} fill="currentColor" stroke="currentColor" />
			</button>
		</>
	);
};

export default ScrollToNextSection;
