import ActorCard from "./ActorCard";
import styles from "../styles/grid.module.scss";

const ActorsGrid = ({actors}) => {
    
    return (
        <div className={styles.actors_grid}>
            {
                actors.map( el => {
                    return <ActorCard actor={el} key={el.id} />
                })
            }
        </div>
    )
}

export default ActorsGrid;