const configRuntime = {
	NODE_ENV: import.meta.env.NODE_ENV || 'production',
	API_URL: import.meta.env.API_URL,
};

export const { NODE_ENV, API_URL } = configRuntime;
export default configRuntime;
