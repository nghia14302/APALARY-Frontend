import React from 'react';

import { Navigate, Outlet } from 'react-router';

const PublicRoute = (props) => {
	const { role } = props;
	const fakeUser = {
		name: 'fake',
		token: null,
		role: role,
	};
	if (!fakeUser.token || fakeUser.role === 'everone') {
		return <Outlet />;
	}
	return <Navigate to='/login' />;
};

export default PublicRoute;
