"use client"

import { useTMDBApi } from "@/utils/hooks/useTMDBApi";
import ActorsGrid from "@/components/ActorsGrid";

export const metadata = {
    title: 'Movie Cast',
    description: 'List all actors that worrked in a movie.',
}

const Actors = (props) => {
   const [data, isLoading] = useTMDBApi(`movie/${props.params.movie_id}/credits?language=en-US`);
   
   return (
        <div>
            <h1>{`Cast for "${props.searchParams.title}"`}</h1>
            {
                isLoading === false &&
                    <ActorsGrid actors={data.cast} />
            }   
        </div>
    )
}

export default Actors;