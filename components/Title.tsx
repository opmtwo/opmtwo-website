import { HTMLProps } from 'react';

interface TitleProps extends HTMLProps<HTMLHeadingElement> {}

const Title = ({ children, className = 'text-balance text-3xl font-semibold text-slate-900 sm:text-4xl dark:text-slate-50', ...props }: TitleProps) => {
	return (
		<h2 className={className} {...props}>
			{children}
		</h2>
	);
};

export default Title;
