import { useState } from 'react';

import reactLogo from '../../assets/react.svg';
import StyledButton from '../../components/Button';

const Home = () => {
	const [count, setCount] = useState(0);

	return (
		<div>
			<div>
				<a href='https://vitejs.dev' target=''>
					<img src='/vite.svg' className='logo' alt='Vite logo' />
				</a>

				<a href='https://reactjs.org' target=''>
					<img src={reactLogo} className='logo react' alt='React logo' />
				</a>
			</div>
			<h1>Vite + React</h1>
			<div className='card'>
				<StyledButton onClick={() => setCount((count) => count + 1)}>
					count is {count}
				</StyledButton>
				<p>
					Edit <code>src/App.jsx</code> and save to test HMR
				</p>
			</div>
		</div>
	);
};

export default Home;
