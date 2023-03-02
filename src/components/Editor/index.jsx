import { Editor } from 'react-draft-wysiwyg';

import { StyledEditor } from './styled';

const CustomEditor = ({ editorState, setEditorState, children, ...rest }) => {
	return (
		<StyledEditor editorState={editorState} onEditorStateChange={setEditorState} {...rest}>
			{children}
		</StyledEditor>
	);
};

export default CustomEditor;
