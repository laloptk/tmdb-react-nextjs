import Image from "next/image";
import MovieInfo from "./MovieInfo";
import ActorInfo from "./ActorInfo";

const Card = ({item, type = "movies"}) => {
    const poster_uri = `https://image.tmdb.org/t/p/w300${type === "movies" ? item.poster_path : item.profile_path}`;
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
                    && <ActorInfo item={item} />
            }
            
        </div>
    )
}

export default Card;