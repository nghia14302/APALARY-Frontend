import React from 'react';

import { Navigate, Outlet } from 'react-router';

import randomUserApi from '../utils/Theme/Apis/randomUserApi';

const PrivateRoute = (props) => {
	const { role } = props;
	const fakeUser = {
		token: 'adfasf',
		role: 'everyone',
	};
	if (!fakeUser.token || fakeUser.token === '') {
		return <Navigate to='/error/401' />;
	}
	if (fakeUser.role !== role) {
		return <Navigate to='/error/403' />;
	}
	return <Outlet />;
};

export default PrivateRoute;
