import { Routes, Route } from 'react-router-dom';

import { routeKey } from '../components/Layout/ManagerItems';
import ErrorPage from '../pages/Errors';
import Home from '../pages/Home';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

// public routes here
const publicRoutes = [
	{
		path: routeKey.dashBoard,
		Element: <Home />,
		role: 'everyone',
	},
];

// private routes here
const managerRoutes = [
	{
		path: '/admin',
		Element: <Home />,
		role: 'manager',
	},
	{
		path: routeKey.employeesAll,
		Element: <Home />,
		role: 'asdafd',
	},
];

const AppRoutes = () => {
	return (
		<Routes>
			<Route path={''} element={<PublicRoute role='everyone' />}>
				{publicRoutes.map((route, index) => (
					<Route key={index} element={route.Element} path={route.path} />
				))}
			</Route>
			<Route path={''} element={<PrivateRoute role='manager' />}>
				{managerRoutes.map((route, index) => (
					<Route key={index} element={route.Element} path={route.path} />
				))}
			</Route>
			<Route path={'/error/:statusCode'} element={<ErrorPage />} />
		</Routes>
	);
};

export default AppRoutes;
