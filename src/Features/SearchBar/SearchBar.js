import React, {useState} from "react";
import { setSearchTerm, clearSearchTerm } from "./SearchBarSlice";

export default function SearchBar({state, dispatch}) {
    const [inputValue, setInputValue] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
        if(!inputValue.trim()) return;
        dispatch(setSearchTerm(inputValue))
        setInputValue('')
    }

    const handleInputChange = ({target}) => {
        setInputValue(target.value);
    }


    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Search Movie" value={inputValue} onChange={handleInputChange} />
            <button type="submit">Search</button>
        </form>
    )
}