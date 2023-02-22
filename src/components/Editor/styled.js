import { Editor } from 'react-draft-wysiwyg';
import styled from 'styled-components';

import themeConfig from '../../utils/Theme';

export const StyledEditor = styled(Editor)`
	border: 1px solid ${themeConfig.customColor.LayerColor};
	border-radius: 10px;
	padding: 10px;
	width: ${(props) => props.width || 'fit-content'};
	height: ${(props) => props.height || 'fit-content'};
	background-color: ${themeConfig.customColor.LayerColor};
`;
