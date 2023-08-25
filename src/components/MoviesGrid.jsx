import MovieCard from "./MovieCard";
import styles from "../styles/grid.module.scss";

const MoviesGrid = ({movies}) => {
    
    return (
        <div className={styles.movies_grid}>
            {
                movies.map( el => {
                    return <MovieCard movie={el} />
                })
            }
        </div>
    )
}

export default MoviesGrid;