import MovieCard from "./MovieCard";

const MoviesGrid = ({movies}) => {
    
    return (
        <div className="movies-grid">
            {
                movies.map( el => {
                    return <MovieCard movie={el} />
                })
            }
        </div>
    )
}

export default MoviesGrid;