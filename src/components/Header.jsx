import Link from "next/link";

const Header = () => {
    return(
        <div className="header">
            <span className="header_logo">TMDB</span>
            <nav className="header_nav">
                <ul>
                    <li>
                        <Link href="/movies">Movies</Link>
                    </li>
                    <li>
                        <Link href="/actors">Actors</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;