import { StyledSearch } from './style';

const SearchBar = ({ className, ...rest }) => {
	return <StyledSearch className={className} {...rest} />;
};

export default SearchBar;
