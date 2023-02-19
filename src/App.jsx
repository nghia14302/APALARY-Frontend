import { useEffect, useState } from 'react';

import { Alert, Button } from 'antd';

import './App.css';
import LayoutEveryone from './components/Layout/LayoutEveryone';
import LayoutManager from './components/Layout/LayoutManager';
import ErrorPage from './pages/Errors';
import AppRoutes from './routes';

import ErrorBoundary from 'antd/es/alert/ErrorBoundary';

function App() {
	const fakeUser = {
		name: 'asv',
		token: 'asdfasdf',
		// TODO: change role from api
		role: 'employee',
	};
	const [Layout, setLayout] = useState('LayoutEveryone');
	useEffect(() => {
		if (fakeUser.role === 'manager') {
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
