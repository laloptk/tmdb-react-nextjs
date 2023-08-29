"use client"

import { useState } from "react";
import { useTMDBApi } from "@/utils/hooks/useTMDBApi";
import MovieFilters from "@/components/MovieFilters";
import Grid from "@/components/Grid";
import styles from '../../styles/movies.module.scss';
import Pagination from "@/components/Pagination";

const Movies = ({searchParams}) => {
    const [sorted, setSorted] = useState("popularity.desc");
    const [data, isLoading] = useTMDBApi(`/discover/movie?&language=en-US&page=${searchParams.page != undefined ? searchParams.page : "1"}&sort_by=${sorted}`, sorted);
    console.log(data);
    function handleChange(e) {
        setSorted(e.target.value);
    }
    
    return (
        <>
            <div className={styles.container}>
                {
                    isLoading === false && 
                        <>
                            <MovieFilters onChange={handleChange}/>             
                            <Grid items={data.results} type="movies" />
                        </> 
                }
            </div>

            <Pagination page={data.page} total_pages={data.total_pages} />
        </>
    )
}

export default Movies;