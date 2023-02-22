import { useEffect, useState } from 'react';

import './App.css';
import LayoutEveryone from './components/Layout/LayoutEveryone';
import LayoutManager from './components/Layout/LayoutManager';
import AppRoutes from './routes';

import ErrorBoundary from 'antd/es/alert/ErrorBoundary';

function App() {
	const fakeUser = {
		name: 'asv',
		token: localStorage.getItem('token'),
		// TODO: change role from api
		role: localStorage.getItem('role'),
	};
	const [Layout, setLayout] = useState('LayoutEveryone');
	useEffect(() => {
		if (fakeUser.role === 'HR_MANAGER') {
			setLayout('LayoutManager');
		}
	}, []);
	return (
		<ErrorBoundary>
			{Layout === 'LayoutEveryone' ? (
				<LayoutEveryone>
					<AppRoutes />
				</LayoutEveryone>
			) : (
				<LayoutManager>
					<AppRoutes />
				</LayoutManager>
			)}
		</ErrorBoundary>
	);
}

export default App;
