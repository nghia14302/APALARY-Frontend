import base64toFile from 'node-base64-to-file';

export const convertBaseToFile = (base64, fileName) => {
	base64toFile(base64, { filePath: '../../assets/cv', fileName: fileName, type: ['pdf'] })
		.then(() => {
			console.log('done');
		})
		.catch((err) => {
			console.log(err);
		});
};
