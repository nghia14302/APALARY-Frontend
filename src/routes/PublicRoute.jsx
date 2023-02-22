import { Navigate, Outlet } from 'react-router';

const PublicRoute = () => {
	const fakeUser = {
		token: localStorage.getItem('token'),
	};
	if (!fakeUser.token) {
		return <Outlet />;
	}
	// return <Navigate to='/dashboard' />;
};

export default PublicRoute;
