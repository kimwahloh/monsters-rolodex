import { ChangeEvent } from 'react';

import './search-box.styles.css';

type SearchBoxProps = {
    className: string;
    placeholder?: string;
    onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
};

const SearchBox = ({ className, placeholder, onChangeHandler }: SearchBoxProps) => (
    <input 
        className={`search-box ${className}`} //NEW50: adding classname 'Search-box'
        type='search' 
        placeholder={placeholder}
        onChange={onChangeHandler}  //suppose to update APP.JS the state seachfield value
    />
);

export default SearchBox;