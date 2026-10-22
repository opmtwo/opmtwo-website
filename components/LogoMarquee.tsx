import { BedrockIcon } from '@/icons/BedrockIcon';
import { ClaudeIcon } from '@/icons/ClaudeIcon';
import { DynamoDbIcon } from '@/icons/DynamoDbIcon';
import { GeminiIcon } from '@/icons/GeminiIcon';
import { LambdaIcon } from '@/icons/LambdaIcon';
import { LlamaIcon } from '@/icons/LlamaIcon';
import { OpenAiIcon } from '@/icons/OpenAiIcon';
import { PineconeIcon } from '@/icons/PineconeIcon';
import { PythonIcon } from '@/icons/PythonIcon';
import { StepFunctionsIcon } from '@/icons/StepFunctionsIcon';
import { TypeScriptIcon } from '@/icons/TypeScriptIcon';

const logos = [
	{ name: 'OpenAI', Icon: OpenAiIcon },
	{ name: 'Claude', Icon: ClaudeIcon },
	{ name: 'Gemini', Icon: GeminiIcon },
	{ name: 'Llama', Icon: LlamaIcon },
	{ name: 'Bedrock', Icon: BedrockIcon },
	{ name: 'Pinecone', Icon: PineconeIcon },
	{ name: 'Lambda', Icon: LambdaIcon },
	{ name: 'Step Functions', Icon: StepFunctionsIcon },
	{ name: 'DynamoDB', Icon: DynamoDbIcon },
	{ name: 'Python', Icon: PythonIcon },
	{ name: 'TypeScript', Icon: TypeScriptIcon },
];

// Infinite strip of model and platform logos
const LogoMarquee = () => {
	return (
		<div className="relative border-y border-line py-8 lg:py-10">
			<p className="mb-6 text-center font-mono text-[11px] uppercase tracking-[0.3em] text-muted">Building with the models & platforms that matter</p>
			<div className="mask-fade-x flex overflow-hidden">
				<div className="flex shrink-0 animate-marquee items-center gap-14 pr-14 hover:[animation-play-state:paused]">
					{[...logos, ...logos].map(({ name, Icon }, i) => (
						<div key={i} className="flex shrink-0 items-center gap-3 text-white/70 grayscale transition hover:text-white hover:grayscale-0">
							<Icon className="h-7 w-7" />
							<span className="text-lg font-medium tracking-tight">{name}</span>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default LogoMarquee;
