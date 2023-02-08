import React from 'react';

import { ConfigProvider } from 'antd';
import ReactDOM from 'react-dom/client';

import App from './App';
import './index.css';
import themeConfig from './utils/Theme';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<ConfigProvider theme={{ ...themeConfig }}>
			<App />
		</ConfigProvider>
	</React.StrictMode>
);
