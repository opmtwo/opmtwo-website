import FiverrIcon from '@/icons/FiverrIcon';
import MailIcon from '@/icons/MailIcon';
import WhatsappIcon from '@/icons/WhatsappIcon';

interface CallToActionProps {
	headline?: string;
	description?: string;
	emailLabel?: string;
	whatsappLabel?: string;
	fiverrLabel?: string;
	email?: string;
	whatsapp?: string;
	fiverr?: string;
}

const CallToAction: React.FC<CallToActionProps> = ({
	headline = 'Ready to explore serverless & AI for your team?',
	description = "Send a quick note with your current stack and challenges. I'll reply with a short, actionable plan and possible next steps.",
	emailLabel = 'Email Me Your Use Case',
	whatsappLabel = 'Chat on WhatsApp',
	fiverrLabel = 'View My Fiverr Profile',
	email = 'you@example.com',
	whatsapp = '1234567890',
	fiverr = 'onepunchmantwo',
}) => {
	return (
		<>
			{/* Contact / CTA */}
			<section id="contact" className="border-t border-slate-800 pt-10 mt-4 space-y-6">
				<div className="space-y-3">
					<h3 className="animate-fade-in-up text-lg font-semibold">{headline}</h3>
					<p className="animate-fade-in-up-delay max-w-xl text-sm text-slate-400">
						{description}
					</p>
				</div>

				<div className="flex flex-wrap gap-3">
					<a
						href={`mailto:${email}?subject=Serverless%20%2B%20AI%20Consultation`}
						className="inline-flex items-center gap-2 rounded-full bg-black px-5 py-2.5 text-sm font-semibold text-white border-2 border-transparent transition hover:bg-transparent hover:text-black hover:border-black"
					>
						<MailIcon className="h-4 w-4" />
						{emailLabel}
					</a>
					<a
						href={`https://wa.me/${whatsapp}`}
						target="_blank"
						rel="noreferrer"
						className="inline-flex items-center gap-2 rounded-full border border-emerald-400/60 bg-white px-5 py-2.5 text-sm font-semibold text-emerald-600 transition hover:bg-[#25D366] hover:text-white hover:border-[#25D366] dark:bg-slate-950 dark:text-emerald-300 dark:hover:bg-[#25D366] dark:hover:text-white dark:hover:border-[#25D366]"
					>
						<WhatsappIcon className="h-4 w-4" />
						{whatsappLabel}
					</a>
					<a
						href={`https://www.fiverr.com/${fiverr}`}
						target="_blank"
						rel="noreferrer"
						className="inline-flex items-center gap-2 rounded-full border border-black bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-[#1DBF73] hover:text-white hover:border-[#1DBF73] dark:border-black dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-[#1DBF73] dark:hover:text-white dark:hover:border-[#1DBF73]"
					>
						<FiverrIcon className="h-4 w-4" />
						{fiverrLabel}
					</a>
				</div>
			</section>
		</>
	);
};

export default CallToAction;
