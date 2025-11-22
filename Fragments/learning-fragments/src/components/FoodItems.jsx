import Items from "./ItemsList";
import css from './FoodItems.module.css'
import { useState } from "react";

const FoodItems = ({food_items}) => {

  let [cartItems, setCartItems] = useState([]);

  let addToCart = (item) => {
    if(!cartItems.includes(item)) {
      let temp = [...cartItems, item];
      setCartItems(temp);
    }
  }

  return (
    <ul className={`list-group ${css.list}`}>
      {food_items.map(item => (
        <Items 
        key={item} 
        foodItem={item} 
        added={cartItems.includes(item)} 
        handleAddToCart={() => addToCart(item)} />
      ))}
    </ul>
  )
}

export default FoodItems;