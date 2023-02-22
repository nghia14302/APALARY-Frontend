import { StyledSearch } from './style';

const SearchBar = ({ className, onSearch, ...rest }) => {
	return <StyledSearch className={className} onSearch={onSearch} {...rest} />;
};

export default SearchBar;
