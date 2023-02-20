import { notification } from 'antd';

const toast = (message, type) => {
	notification[type]({
		message: message,
		placement: 'bottomRight',
	});
};
export default toast;
