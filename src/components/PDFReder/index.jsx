import { useState } from 'react';

import { Button, Col, Row, Typography } from 'antd';

import cv from '../../assets/cv/cv.pdf';
import Box from '../Box';

import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import { Document, Page } from 'react-pdf/dist/esm/entry.vite';

const options = {
	cMapUrl: 'cmaps/',
	cMapPacked: true,
	standardFontDataUrl: 'standard_fonts/',
};
const { Text } = Typography;
const PDFReader = (props) => {
	const { onAccept, onReject, isWaiting } = props;
	const [numPages, setNumPages] = useState(null);
	const [pageNumber, setPageNumber] = useState(1);
	const [file, setFile] = useState('./cv.pdf');
	function onDocumentLoadSuccess({ numPages }) {
		setNumPages(numPages);
		setPageNumber(1);
	}

	function changePage(offset) {
		setPageNumber((prevPageNumber) => prevPageNumber + offset);
	}

	function previousPage() {
		changePage(-1);
	}

	function nextPage() {
		changePage(1);
	}
	return (
		<Box direction='vertical'>
			<Document file={cv} onLoadSuccess={onDocumentLoadSuccess}>
				<Page pageNumber={pageNumber} />
			</Document>
			<Text style={{ marginBottom: '10px' }}>
				Page {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'}
			</Text>
			<Row style={{ width: '100%' }} justify={'space-between'}>
				<Col>
					<Button type='primary' style={{ marginRight: '10px' }}>
						Previous
					</Button>
					<Button type='primary'>Next</Button>
				</Col>
				{isWaiting && (
					<Col>
						<Button type='primary' style={{ marginRight: '10px' }} onClick={onAccept}>
							Accept
						</Button>
						<Button type='primary' onClick={onReject}>
							Reject
						</Button>
					</Col>
				)}
			</Row>
		</Box>
	);
};
export default PDFReader;
