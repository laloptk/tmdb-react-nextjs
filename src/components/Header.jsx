import Link from "next/link";
import styles from "../styles/header.module.scss";

const Header = () => {
    return(
        <div className={styles.wrap}>
            <span className={styles.logo}>TMDB</span>
            <nav className={styles.nav}>
                <ul>
                    <li>
                        <Link href="/movies">Movies</Link>
                    </li>
                    <li>
                        <Link href="/tv">TV</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;