import { useEffect, useState } from 'react';

import { Routes, Route, Navigate } from 'react-router-dom';

<<<<<<< HEAD
import LayoutEveryone from '../components/Layout/LayoutEveryone';
import LayoutManager from '../components/Layout/LayoutManager';
import { routeKey } from '../components/Layout/ManagerItems';
import Contract from '../pages/Contract/Contract';
import EmDashboard from '../pages/EmDashboard';
import EmSalary from '../pages/EmSalary/Salary';
=======
>>>>>>> 71f01d8f85ab074e3fcfc150f00ce84ab39b98f9
import ErrorPage from '../pages/Errors';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import { employeeRoutes, managerRoutes, publicRoutes, roles } from './roles';

const AppRoutes = () => {
	return (
		<Routes>
			<Route path={''} element={<PrivateRoute role={roles.HR_MANAGER} />}>
				{managerRoutes.map((route, index) => (
					<Route key={index} element={route.Element} path={route.path} />
				))}
			</Route>
			<Route path={''} element={<PrivateRoute role={roles.HR_EMPLOYEE} />}>
				{employeeRoutes.map((route, index) => (
					<Route key={index} element={route.Element} path={route.path} />
				))}
			</Route>
			<Route path={''} element={<PublicRoute />}>
				{publicRoutes.map((route, index) => (
					<Route key={index} element={route.Element} path={route.path} />
				))}
			</Route>
			<Route path={'/error/:statusCode'} element={<ErrorPage />} />
			<Route path={'*'} element={<Navigate to='/error/404' />} />
		</Routes>
	);
};

export default AppRoutes;
