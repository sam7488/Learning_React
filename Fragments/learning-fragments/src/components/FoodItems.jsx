import Items from "./ItemsList";

const FoodItems = ({food_items}) => {
  return (
    <ul className="list-group">
      {food_items.map(item => (
        <Items key={item} foodItem={item} />
      ))}
    </ul>
  )
}

export default FoodItems;