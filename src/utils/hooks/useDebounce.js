import {useState, useEffect} from 'react';
import { getAPIData } from '../helpers/getAPIData';

const useDebounceSearch = (query, time = 500) => {
    const [data, setData] = useState(false);

    useEffect(() => {
        const timeOut = setTimeout(() => {
            setData(getAPIData(`https://api.themoviedb.org/3/search/multi?query=${query}&include_adult=false&language=en-US&page=1`));
        }, time);

        return () => clearTimeout(timeOut);
    }, [query])

    return [data];
}

export default useDebounceSearch;