
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import Header from "./components/Header"
import ErrorMsg from "./components/ErrorMessage";
import FoodItems from "./components/FoodItems";
import Container from './components/Container';
import FoodInput from './components/FoodInput';
import { useState } from 'react';

function App() {
  let [food_items, setFoodItems] = useState(['broccoli', 'spinach', 'kale', 'sweet', 'potatoes', 'beets']);

  let [text, setTextState] = useState('');

  function handleOnChange(e) {
    text = e.target.value;
    setTextState(e.target.value);
  }

  function AddNewItem() {
    food_items = [...food_items, text];
    setFoodItems(food_items);
  }

  return (
    <Container>
      <Header />
      <FoodInput text={text} handleOnChange={handleOnChange} handleAddButton={AddNewItem}/>
      {text ? <p>Searching for {text}</p> : null}
      {food_items.length == 0 ? 
      <ErrorMsg/> :
      <FoodItems food_items={food_items}/> }
      
    </Container>
  )
}

export default App
