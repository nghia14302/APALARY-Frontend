import { useEffect, useState } from 'react';

import './App.css';
import LayoutEveryone from './components/Layout/LayoutEveryone';
import LayoutManager from './components/Layout/LayoutManager';
import AppRoutes from './routes';
import { usePersistedState } from './utils/LocalStorage/usePersistedState';

import ErrorBoundary from 'antd/es/alert/ErrorBoundary';

function App() {
	const [role, setRole] = usePersistedState('role');
	const [Layout, setLayout] = useState('LayoutEveryone');
	useEffect(() => {
		if (role === 'HR_MANAGER' || role === 'HR_EMPLOYEE') {
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
