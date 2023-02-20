import React, { useState } from 'react';

import { notification } from 'antd';

import toast from '../../components/Toast';

// Whenever you use strict mode, it will render twice. So, the notification will show twice. But, it will not show twice in production mode. So, don't worry about it.
export const apiHandler = async (api, action, successMessage, setLoading, ...rest) => {
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
			toast(successMessage, 'success');
			return response.data;
		})
		.catch((error) => {
			console.log(error);
			toast(error.message, 'error');
			return error;
		})
		.finally(() => {
			setLoading(false);
		});
	return result;
};
