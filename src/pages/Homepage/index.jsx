import { useRef } from 'react';

import Career from './career/indes';
import Contact from './contact';
import Dashboard from './dashboard';
import Environment from './environment';

export default function Homepage() {
	const careerRef = useRef(null);

	const executeScroll = () => careerRef.current.scrollIntoView({ behavior: 'smooth' });

	return (
		<div>
			<Dashboard scrollFunc={executeScroll} />
			<Environment />
			<div ref={careerRef}>
				<Career />
			</div>
			<Contact />
		</div>
	);
}
