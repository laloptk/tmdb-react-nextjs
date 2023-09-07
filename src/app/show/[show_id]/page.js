"use client"

import useTMDBApi from "@/utils/hooks/useTMDBApi";
import Image from "next/image";
import styles from "../../../styles/movie.module.scss";
import { IMDB_ORIGINAL_IMG_URI } from "@/data/constants";

const Show = ({params}) => {
    const [data, isLoading] = useTMDBApi(`tv/${params.show_id}?language=en-US`, [params]);
        console.log(data);
    return (
        <div className={styles.container}>
            
            {
                isLoading === false && 
                    <>
                        <h1>{`"${data.title}" Details`}</h1>
                        <div className={styles.wrap} >
                            <Image 
                                src={`${IMDB_ORIGINAL_IMG_URI}${data.poster_path}`}
                                width={400}
                                height={600}
                                alt={`${data.title} Poster`}
                            />
                            <div className={styles.info} >
                                <h2>{`Original Title: ${data.original_title}`}</h2>
                                <div className="release-date">
                                    {`Release date: ${data.release_date}`}
                                </div>
                                <div className="budget">
                                    {`Budget: ${data.budget}`}
                                </div>
                                <div className="movie__overview">
                                    <h3>Overview</h3>
                                    <p><strong>{data.tagline}</strong></p>
                                    <p>
                                        {data.overview}
                                    </p>
                                </div>
                                <div className={styles.genres}>
                                    <h3>Genres</h3>
                                    <ul>
                                    {
                                        data.genres.map((genre) => {
                                            return <li>{genre.name}</li>
                                        })
                                    }
                                    </ul>
                                </div>
                                <div className={styles.companies}>
                                    <h3>Production Companies</h3>
                                    <ul>
                                    {
                                        data.production_companies.map((company) => {
                                            return  <li>
                                                        {
                                                            company.logo_path &&
                                                                <Image
                                                                    src={`https://image.tmdb.org/t/p/original${company.logo_path}`}
                                                                    width={0}
                                                                    height={0}
                                                                    sizes="100vw"
                                                                    style={{ width: '100%', height: 'auto' }}
                                                                    alt={`${company.name} Poster`}
                                                                />
                                                        }
                                                    </li>
                                        })
                                    }
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </> 
            }
        </div>
    )
}

export default Show;