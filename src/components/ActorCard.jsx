import Image from "next/image";

const ActorCard = ({actor}) => {
    return (
        <div className="actor-card">
            <div className="actor-card_img">
                <Image
                    src={`https://image.tmdb.org/t/p/w300${actor.profile_path}`}
                    width={180}
                    height={300}
                    alt={`${actor.name} photo`}
                />
            </div>
            <div className="actor-card_info">
                <span>{`Name: ${actor.name}`}</span>
                <span>{`Character: ${actor.character}`}</span>
            </div>
        </div>
    )
}

export default ActorCard;