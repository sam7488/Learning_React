import Items from "./ItemsList";
import css from './FoodItems.module.css'

const FoodItems = ({food_items}) => {
  return (
    <ul className={`list-group ${css.list}`}>
      {food_items.map(item => (
        <Items key={item} foodItem={item} handleBuyButton={() => {console.log(`You sure want to buy ${item}.`);}} />
      ))}
    </ul>
  )
}

export default FoodItems;