'use client'

import { useState } from "react";

const Search = () => {
    const [query, setQuery] = useState("");
    
    function handleChange(e) {
        setQuery(e.target.value);
    }

    return (
        <input type="text" value={query} onChange={handleChange} />
    )
}

export default Search;