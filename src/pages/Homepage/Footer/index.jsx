import AntdLogo from '../../../assets/homepage/antd-logo.png';
import ReactLogo from '../../../assets/homepage/react-logo.png';
import { componentStyle } from './styles';

export default function Footer() {
	return (
		<div style={componentStyle}>
			<p style={{ margin: '5px 0' }}>
				Made by <b>BBNT</b>
			</p>
			<p style={{ margin: '0 0 5px' }}>
				© 2023
				<b> SWP</b>. All rights reserved
			</p>
			<div>
				<a href='https://reactjs.org/' style={{ margin: '0 5px' }}>
					<img src={ReactLogo} alt='react logo' style={{ width: '35px' }} />
				</a>
				<a href='https://ant.design/' style={{ margin: '0 5px' }}>
					<img src={AntdLogo} alt='antd logo' style={{ width: '30px' }} />
				</a>
			</div>
		</div>
	);
}
