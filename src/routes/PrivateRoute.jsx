import React from 'react';

import { Navigate, Outlet } from 'react-router';

const PrivateRoute = (props) => {
	const { role } = props;
	const fakeUser = {
		name: 'fake',
		token: 'abc',
		role: 'admin',
	};
	if (fakeUser.token && fakeUser.role == role) {
		return <Outlet />;
	}
	return <Navigate to='/login' />;
};

export default PrivateRoute;
