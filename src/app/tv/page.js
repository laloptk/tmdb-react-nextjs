"use client"

import { useState } from "react";
import { useTMDBApi } from "@/utils/hooks/useTMDBApi";
import MovieFilters from "@/components/MovieFilters";
import Grid from "@/components/Grid";
import Pagination from "@/components/Pagination";
import styles from '../../styles/movies.module.scss';

const Tv = ({searchParams}) => {
    const [sorted, setSorted] = useState("popularity.desc");
    const [data, isLoading] = useTMDBApi(`/discover/tv?&language=en-US&page=${searchParams.page != undefined ? searchParams.page : "1"}&sort_by=${sorted}`, [sorted, searchParams]);
    
    function handleChange(e) {
        setSorted(e.target.value);
    }
    
    return (
        <div className={styles.container}>
            {
                isLoading === false && 
                    <>
                        <MovieFilters onChange={handleChange}/>             
                        <Grid items={data.results} type="tv" />
                        <Pagination page={data.page} total_pages={data.total_pages} />
                    </> 
            }
        </div>
    )
}

export default Tv;