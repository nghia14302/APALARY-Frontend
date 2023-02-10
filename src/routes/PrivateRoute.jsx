import React from 'react';

import { Navigate, Outlet } from 'react-router';

const PrivateRoute = (props) => {
	const { role } = props;
	const fakeUser = {
		name: 'fake',
		token: '',
		role: 'manager',
	};
	if (!fakeUser.token || fakeUser.token === '') {
		return <Navigate to='/error/401' />;
	}

	if (!fakeUser.role !== role) {
		return <Navigate to='/error/403' />;
	}
	return <Outlet />;
};

export default PrivateRoute;
