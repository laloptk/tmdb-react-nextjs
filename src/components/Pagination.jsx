const Pagination = ({page, total_pages, show_pages = 5}) => {
    const nums = total_pages <= show_pages ? total_pages : show_pages;
    const pages = [...Array(nums).keys()];
    
    return (
        <div className="pagination">
            <div className="pagination__last"></div>
            <div className="pagination__numbers">
                <ul>
                    {
                        pages.map((num, index) => {
                            return <li 
                                className={ num === index + 1 ? "num num--current" : "num"}
                            >
                                {num}
                            </li>
                        })
                    }
                </ul>
            </div>
            <div className="pagination__next"></div>
        </div>
    )
}

export default Pagination;