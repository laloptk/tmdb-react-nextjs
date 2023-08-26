import Link from "next/link";

const TvInfo = ({item}) => {
    return (
        <div className="movie-card_info">
            <Link href={`cast/${item.id}?type=tv&title=${item.name}`} >See Tv Show Cast</Link>
        </div>
    )
}

export default TvInfo;