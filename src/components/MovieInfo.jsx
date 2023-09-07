import Link from "next/link";

const MovieInfo = ({item}) => {
    return (
        <div className="movie-card_info">
            <Link href={`cast/${item.id}?type=movie&title=${item.title}`} >Cast</Link>
            <Link href={`movie/${item.id}`} >More</Link>
        </div>
    )
}

export default MovieInfo;


