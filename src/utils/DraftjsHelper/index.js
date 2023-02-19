import { convertFromRaw, EditorState } from 'draft-js';

export const convertToRaw = (editorState) => {
	const contentState = editorState.getCurrentContent();
	const rawState = convertToRaw(contentState);
	return rawState;
};

export const convertToEditor = (rawState) => {
	const contentState = convertFromRaw(rawState);
	const editorState = EditorState.createWithContent(contentState);
	return editorState;
};
