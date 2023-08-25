import Link from "next/link";

const MovieInfo = ({item}) => {
    return (
        <div className="movie-card_info">
            <Link href={`cast/${item.id}?title=${item.title}`} >See Movie Cast</Link>
        </div>
    )
}

export default MovieInfo;


