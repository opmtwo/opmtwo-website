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
						className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-emerald-500/30 transition hover:bg-emerald-400"
					>
						<MailIcon className="h-4 w-4" />
						{emailLabel}
					</a>
					<a
						href={`https://wa.me/${whatsapp}`}
						target="_blank"
						rel="noreferrer"
						className="inline-flex items-center gap-2 rounded-full border border-emerald-400/60 bg-slate-950 px-5 py-2.5 text-sm font-semibold text-emerald-300 shadow-inner shadow-emerald-500/20 transition hover:bg-emerald-500/10"
					>
						<WhatsappIcon className="h-4 w-4" />
						{whatsappLabel}
					</a>
					<a
						href={`https://www.fiverr.com/${fiverr}`}
						target="_blank"
						rel="noreferrer"
						className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900 px-5 py-2.5 text-sm font-semibold text-slate-100 shadow-inner shadow-slate-900 transition hover:border-emerald-400 hover:text-emerald-300"
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
