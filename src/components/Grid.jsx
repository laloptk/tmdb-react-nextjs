import Card from "./Card";
import styles from "../styles/grid.module.scss";

const Grid = ({items, type = "movies"}) => {
    return (
        <div className={styles.container}>
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