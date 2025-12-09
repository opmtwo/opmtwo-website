import { HTMLProps } from 'react';

interface TextProps extends HTMLProps<HTMLHeadingElement> {}

const Text = ({ children, className = 'leading-relaxed text-slate-600 text-sm md:text-base', ...props }: TextProps) => {
	return (
		<p className={className} {...props}>
			{children}
		</p>
	);
};

export default Text;
