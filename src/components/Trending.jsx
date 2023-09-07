import useTMDBApi from "@/utils/hooks/useTMDBApi";
import Grid from "./Grid";

const Trending = ({type = "movie"}) => {
    const [data, isLoading] = useTMDBApi(`trending/${type}/week?language=en-US`);
    
    return (
        <>
            {   isLoading === false &&
                    <Grid items={data.results} />
            }
        </>
    )
}

export default Trending;