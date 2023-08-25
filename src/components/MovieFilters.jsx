"use client"

const MovieFilters = ({onChange}) => {
    return (
        <form>
            <label for="sort">SortBy: </label> 
            <select name="sort" id="sort" onChange={e => onChange(e)} >
                <option value="popularity.desc" >Popularity</option>
                <option value="revenue.desc">Revenue</option> 
                <option value="vote_average.desc">Vote Average</option> 
                <option value="vote_count.desc">Vote Count</option> 
            </select>
        </form>
    )
}

export default MovieFilters;