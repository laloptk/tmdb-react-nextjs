"use client"

import { useState } from "react";
import { useTMDBApi } from "@/utils/hooks/useTMDBApi";
import MovieFilters from "@/components/MovieFilters";
import Grid from "@/components/Grid";
import styles from '../../styles/movies.module.scss';

const Tv = () => {
    const [sorted, setSorted] = useState("popularity.desc");
    const [data, isLoading] = useTMDBApi(`/discover/tv?&language=en-US&page=1&sort_by=${sorted}`, sorted);
    console.log(data);
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
                    </> 
            }
        </div>
    )
}

export default Tv;