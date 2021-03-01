import './index.css';
import React, { useState } from 'react';
import SearchIcon from '@material-ui/icons/Search';

const SearchBar = () => {
	const [ value, setValue ] = useState('');
	const handleInput = (event) => {
		setValue(event.taget.value);
	};
	return (
		<div className="search__container">
			<div className="search__inputContainer">
				<SearchIcon className="search__icon" />
				<input
					type="text"
					className="search__input"
					onChange={handleInput}
					value={value}
					placeholder="buscar..."
				/>
			</div>
		</div>
	);
};

export default SearchBar;
