import { useState, useRef, useEffect } from 'react';

const useSearch = () => {
	const [search, setSearch] = useState('');
	const searchRef = useRef();
	useEffect(() => {
		setSearch(searchRef.current);
	}, [searchRef]);
	const onSearchChange = (value) => {
		searchRef.current = value;
	};
	return [search, searchRef, onSearchChange];
};

export default useSearch;
