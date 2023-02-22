import { useEffect, useState } from 'react';

import { Alert, Button } from 'antd';

import './App.css';
import LayoutEveryone from './components/Layout/LayoutEveryone';
import LayoutManager from './components/Layout/LayoutManager';
import ErrorPage from './pages/Errors';
import AppRoutes from './routes';
import { roles } from './routes/roles';
import { usePersistedState } from './utils/LocalStorage/usePersistedState';

import ErrorBoundary from 'antd/es/alert/ErrorBoundary';

function App() {
	const [role, roles] = usePersistedState('role', '');
	const [Layout, setLayout] = useState('LayoutEveryone');
	useEffect(() => {
		if (role !== roles.GUEST && role !== '') {
			setLayout('LayoutManager');
		}
	}, [role]);
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
