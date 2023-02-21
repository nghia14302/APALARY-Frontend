import { Navigate, Outlet } from 'react-router';

const PrivateRoute = (props) => {
	const { role } = props;
	const fakeUser = {
		token: localStorage.getItem('token'),
		role: localStorage.getItem('role'),
	};
	if (!fakeUser.token || fakeUser.token === '') {
		return <Navigate to='/homepage' />;
	}
	if (fakeUser.role !== role) {
		return <Navigate to='/error/403' />;
	}
	return <Outlet />;
};

export default PrivateRoute;
