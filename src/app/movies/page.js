"use client"

import { useEffect, useState } from "react";
import { useTMDBApi } from "@/utils/hooks/useTMDBApi";
import MovieFilters from "@/components/MovieFilters";
import MoviesGrid from "@/components/MoviesGrid";

const Movies = () => {
    const [sorted, setSorted] = useState("popularity.desc");
    const [data, isLoading] = useTMDBApi(`/discover/movie?&language=en-US&page=1&sort_by=${sorted}`, sorted);

    function handleChange(e) {
        setSorted(e.target.value);
    }
    
    return (
        <div>
            {
                isLoading === false && 
                    <>
                        <MovieFilters onChange={handleChange}/>             
                        <MoviesGrid movies={data.results} />
                    </> 
            }
        </div>
    )
}

export default Movies;