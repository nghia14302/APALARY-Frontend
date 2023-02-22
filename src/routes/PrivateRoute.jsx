import { Navigate, Outlet } from 'react-router';

import { usePersistedState } from '../utils/LocalStorage/usePersistedState';

const PrivateRoute = (props) => {
	const { role } = props;
	const [userRole, setUserRole] = usePersistedState('role');
	const [token, setToken] = usePersistedState('token');
	if (!token || token === '') {
		return <Navigate to='/homepage' />;
	}
	if (userRole !== role) {
		return <Navigate to='/error/403' />;
	}
	return <Outlet />;
};

export default PrivateRoute;
