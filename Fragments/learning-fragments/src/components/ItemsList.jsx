import styles from "./ItemsList.module.css"

const Items = ({foodItem, handleBuyButton}) => {
  return <li className="list-group-item">
    <span className={`${styles.items}`}>{foodItem}</span>
    <button className={`${styles.btn} btn-info`} 
    onClick={handleBuyButton}>Buy</button>
    </li>
}

export default Items;