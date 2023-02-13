import { Navigate, Outlet } from 'react-router';

const PublicRoute = (props) => {
	const { role } = props;
	const fakeUser = {
		name: 'fake',
		token: null,
		role: 'everyone',
	};
	if (!fakeUser.token || fakeUser.role === 'everyone') {
		return <Outlet />;
	}
	return <Navigate to='/login' />;
};

export default PublicRoute;
