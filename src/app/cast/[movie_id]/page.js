"use client"

import useTMDBApi from "@/utils/hooks/useTMDBApi";
import Grid from "@/components/Grid";

export const metadata = {
    title: 'Movie Cast',
    description: 'List all actors that worked in a movie.',
}

const Cast = (props) => {
   const [data, isLoading] = useTMDBApi(`${props.searchParams.type}/${props.params.movie_id}/credits?language=en-US`);
   
   return (
        <div>
            <h1>{`Cast for "${props.searchParams.title}"`}</h1>
            {
                isLoading === false && 0 !== data.cast.length
                    && <Grid items={data.cast} type="actors" />
            }   
        </div>
    )
}

export default Cast;