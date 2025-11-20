
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import Header from "./components/Header"
import ErrorMsg from "./components/ErrorMessage";
import FoodItems from "./components/FoodItems";
import Container from './components/Container';
import FoodInput from './components/FoodInput';

function App() {
  let food_items = ['Green Vegetables', 'Paneer', 'Milk', 'Dal', 'Meat'];
  function handleOnChange(e) {
    console.log(e.target.value);
  }

  return (
    <Container>
      <Header />
      <FoodInput handleOnChange={handleOnChange}/>
      <ErrorMsg food_items={food_items}/>
      <FoodItems food_items={food_items}/>

    </Container>
  )
}

export default App
