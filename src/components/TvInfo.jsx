import Link from "next/link";

const TvInfo = ({item}) => {
    return (
        <div className="movie-card_info">
            <Link href={`cast/${item.id}?type=tv&title=${item.name}`} >Cast</Link>
            <Link href={`show/${item.id}`} >Details</Link>
        </div>
    )
}

export default TvInfo;