import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

// public routes here
const publicRoutes = [
	{
		path: '/',
		Element: <Home />,
		role: 'everyone',
	},
];

// private routes here
const privateRoutes = [
	{
		path: '/admin',
		Element: <Home />,
		role: 'admin',
	},
];

const AppRoutes = () => {
	return (
		<Routes>
			<Route path={''} elements={<PublicRoute />}>
				{publicRoutes.map((route, index) => (
					<Route key={index} element={route.Element} path={route.path} />
				))}
			</Route>
			<Route path={''} elements={<PrivateRoute />}>
				{privateRoutes.map((route, index) => (
					<Route key={index} element={route.Element} path={route.path} />
				))}
			</Route>
		</Routes>
	);
};

export default AppRoutes;
