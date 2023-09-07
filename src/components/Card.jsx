import Image from "next/image";
import MovieInfo from "./MovieInfo";
import ActorInfo from "./ActorInfo";
import TvInfo from "./TvInfo";
import { IMDB_ORIGINAL_IMG_URI } from "@/data/constants";
const Card = ({item, type = "movies"}) => {
    const poster_uri = `${IMDB_ORIGINAL_IMG_URI}${(type === "movies" || type === "tv") ? item.poster_path : item.profile_path}`;
    
    return (
        <div className="movie-card">
            <div className="movie-card_img">
                <Image
                    src={poster_uri}
                    width={180}
                    height={300}
                    alt={`${item.title} Poster`}
                />
            </div>
            {
                type === "movies" 
                    ? <MovieInfo item={item} />
                    : type === "actors" 
                    ? <ActorInfo item={item} /> 
                    : type === "tv" 
                    && <TvInfo item={item} />
            }
            
        </div>
    )
}

export default Card;