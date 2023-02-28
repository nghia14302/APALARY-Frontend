import { Grid, Space } from 'antd';
import styled from 'styled-components';

import themeConfig from '../../utils/Theme';

export const StyledBox = styled(Space)`
	width: ${(props) => props.width || 'fit-content'}
	height: ${(props) => props.height || 'fit-content'}
	border: ${(props) => (props.bordered ? `1px solid ${themeConfig.customColor.LayerColor}` : 'none')};
`;
