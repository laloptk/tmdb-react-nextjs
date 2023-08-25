import Image from "next/image";

const MovieCard = ({movie}) => {
    return (
        <div className="movie-card">
            <div className="movie-card_img">
                <Image
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    width={180}
                    height={300}
                />
            </div>
            <div className="movie-card_info">

            </div>
        </div>
    )
}

export default MovieCard;