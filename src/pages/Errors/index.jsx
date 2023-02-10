import React from 'react';

import { useParams } from 'react-router-dom';

export const ErrorPage = () => {
	const params = useParams();

	return <div>{params.statusCode}</div>;
};

export default ErrorPage;
