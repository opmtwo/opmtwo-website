import { useEffect } from 'react';

interface MetaTagsProps {
	title: string;
	description: string;
}

const MetaTags: React.FC<MetaTagsProps> = ({ title, description }) => {
	useEffect(() => {
		// Set the meta title
		document.title = title;

		// Set the meta description
		const metaDescription = document.querySelector('meta[name="description"]');
		if (metaDescription) {
			metaDescription.setAttribute('content', description);
		} else {
			const newMetaDescription = document.createElement('meta');
			newMetaDescription.setAttribute('name', 'description');
			newMetaDescription.setAttribute('content', description);
			document.head.appendChild(newMetaDescription);
		}
	}, [title, description]); // Re-run effect if title or description changes

	return null; // This component does not render any JSX content
};

export default MetaTags;
