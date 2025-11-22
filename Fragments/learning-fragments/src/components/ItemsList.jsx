import styles from "./ItemsList.module.css"

const Items = ({foodItem, added, handleAddToCart}) => {
  return <li className={`list-group-item ${added && 'active'}`}>
    <span className={`${styles.items}`}>{foodItem}</span>
    <button className={`${styles.btn} btn-info`} 
    onClick={handleAddToCart}>Add to Cart</button>
    </li>
}

export default Items;