"use client"

import Link from "next/link";
import { usePathname } from 'next/navigation';

const Pagination = ({page, total_pages, show_pages = 5}) => {
    const nums = total_pages <= show_pages ? total_pages : show_pages;
    const pages = [...Array(nums).keys()];
    const pathName = usePathname();
    
    return (
        <div className="pagination">
            {
                total_pages > show_pages &&
                    <div className="pagination__prev">
                        <Link href={`${pathName}?page=${page - 1}`}>{`<< Previous`}</Link>
                    </div>
            }

            <div className="pagination__numbers">
                <ul>
                    {
                        pages.map((num, index) => {
                            return <li 
                                className={ num === 0 ? "num num--current" : "num"}
                            >
                                <Link href={`${pathName}?page=${num + page}`}>{num + page}</Link>
                            </li>
                        })
                    }
                </ul>
            </div>

            {
                page <= total_pages &&
                    <div className="pagination__next"><Link href={`${pathName}?page=${page + show_pages}`}>{`Next >>`}</Link></div>
            }
            
        </div>
    )
}

export default Pagination;