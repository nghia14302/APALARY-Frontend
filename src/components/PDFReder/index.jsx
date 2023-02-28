import { useState } from 'react';

import { Button } from 'antd';

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
const PDFReader = () => {
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
			<p>
				Page {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'}
			</p>
			<Box>
				<Button type='primary' disabled={pageNumber <= 1} onClick={previousPage}>
					Previous
				</Button>
				<Button type='primary' disabled={pageNumber >= numPages} onClick={nextPage}>
					Next
				</Button>
			</Box>
		</Box>
	);
};
export default PDFReader;
