import Card from "./Card";
import styles from "../styles/grid.module.scss";

const Grid = ({items, type = "movies"}) => {
    return (
        <div className={styles.movies_grid}>
            {
                items.map( item => {
                    return <Card 
                        item={item}
                        type={type} 
                        key={item.id} 
                    />
                })
            }
        </div>
    )
}

export default Grid;