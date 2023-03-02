import React, { useState } from 'react';

import { notification } from 'antd';
import { Navigate } from 'react-router-dom';

import toast from '../../components/Toast';
import usePersistedState from '../LocalStorage/usePersistedState';
import LocalStorageUtils from '../LocalStorage/utils';

// Whenever you use strict mode, it will render twice. So, the notification will show twice. But, it will not show twice in production mode. So, don't worry about it.
const apiHandler = async (api, action, successMessage, setLoading, ...rest) => {
	if (setLoading) {
		setLoading(true);
	}
	// const [token, setToken] = usePersistedState('token');
	// const [role, setRole] = usePersistedState('role');
	const result = await api[action](...rest)
		.then((response) => {
			if (response.status === 404) {
				throw new Error('API not found');
			}
			if (response.status === 403) {
				throw new Error('Forbidden');
			}
			if (response.status === 400) {
				throw new Error('Bad request');
			}
			if (successMessage && successMessage !== '') {
				toast(successMessage, 'success');
			}
			return response.data;
		})
		.catch((error) => {
			const status = error.response.status;
			if (status === 401 || status === 403) {
				LocalStorageUtils.clear();
				return <Navigate to='/' />;
			}
			toast(error.message, 'error');
			return error;
		})
		.finally(() => {
			if (setLoading) {
				setLoading(false);
			}
		});
	return result;
};

export default apiHandler;
