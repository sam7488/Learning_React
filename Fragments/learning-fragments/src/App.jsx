
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import Header from "./components/Header"
import ErrorMsg from "./components/ErrorMessage";
import FoodItems from "./components/FoodItems";

function App() {
  let food_items = ['Green Vegetables', 'Paneer', 'Milk', 'Dal', 'Meat'];

  return (
    <>
      <Header />
      <ErrorMsg food_items={food_items}/>
      <FoodItems food_items={food_items}/>

    </>
  )
}

export default App
