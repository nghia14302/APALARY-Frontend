import { useEffect, useState } from 'react';

import { Routes, Route, Navigate } from 'react-router-dom';

import LayoutEveryone from '../components/Layout/LayoutEveryone';
import LayoutManager from '../components/Layout/LayoutManager';
import { routeKey } from '../components/Layout/ManagerItems';
import Contract from '../pages/Contract/Contract';
import EmDashboard from '../pages/EmDashboard';
import EmSalary from '../pages/EmSalary/Salary';
import ErrorPage from '../pages/Errors';
import Feedback from '../pages/Feedback/Feedback.jsx';
import Home from '../pages/Home';
import Homepage from '../pages/Homepage';
import JobOffering from '../pages/JobOffering';
import PostCreation from '../pages/JobOffering/CreatePages';
import PostDetail from '../pages/JobOffering/Detail';
import FormDisabledDemo from '../pages/Profile/Profile';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

// public routes here
const publicRoutes = [
	{
		path: '/',
		Element: <Homepage />,
	},
	{
		path: routeKey.employeesAll,
		Element: <Home />,
	},
	{
		path: '/feedback',
		Element: <Feedback />,
	},
	{
		path: '/profile',
		Element: <FormDisabledDemo />,
	},
	{
		path: '/salary',
		Element: <EmSalary />,
	},
	{
		path: '/contract',
		Element: <Contract />,
	},
	{
		path: '/dashboard',
		Element: <EmDashboard />,
	},
];
// private routes here
const managerRoutes = [
	{
		path: routeKey.applicants,
		Element: <Applicants />,
	},
	{
		path: routeKey.dashBoard,
		Element: <Home />,
	},
	{
		path: routeKey.postsCreate,
		Element: <PostCreation />,
	},
	{
		path: routeKey.postsSpecific,
		Element: <PostDetail />,
	},
	{
		path: '/admin',
		Element: <Home />,
	},
	{
		path: routeKey.employeesAll,
		Element: <Home />,
	},

	{
		path: routeKey.posts,
		Element: <JobOffering />,
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
			<Route path={'*'} element={<Navigate to='/error/404' />} />
		</Routes>
	);
};

export default AppRoutes;
