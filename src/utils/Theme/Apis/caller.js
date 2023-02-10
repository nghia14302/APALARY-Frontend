import axios from 'axios';

import { API_URL } from '../../../config';

console.log(API_URL);
const apiCaller = async (method, endpoint, body, headers, params) => {
	return await axios({
		method,
		url: API_URL + endpoint,
		data: Object.assign({}, body),
		headers: Object.assign({}, headers),
		params: Object.assign({}, params),
	});
};

export const get = async (endpoint = '', body = {}, headers = {}, params = {}) =>
	await apiCaller('GET', endpoint, body, headers, params);

export const post = async (endpoint = '', body = {}, headers = {}, params = {}) =>
	await apiCaller('POST', endpoint, body, headers, params);

export const put = async (endpoint = '', body = {}, headers = {}, params = {}) =>
	await apiCaller('PUT', endpoint, body, headers, params);

export const del = async (endpoint = '', body = {}, headers = {}, params = {}) =>
	await apiCaller('DELETE', endpoint, body, headers, params);
