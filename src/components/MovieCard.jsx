import Image from "next/image";
import Link from "next/link";

const MovieCard = ({movie}) => {
    return (
        <div className="movie-card">
            <div className="movie-card_img">
                <Image
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    width={180}
                    height={300}
                    alt={`${movie.original_title} Poster`}
                />
            </div>
            <div className="movie-card_info">
                <Link href={`cast/${movie.id}?title=${movie.title}`} >See Movie Cast</Link>
            </div>
        </div>
    )
}

export default MovieCard;