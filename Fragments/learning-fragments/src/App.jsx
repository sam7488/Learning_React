
import React from "react"
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  let food_items = ['Green Vegetables', 'Paneer', 'Milk', 'Dal', 'Meat'];
  // let food_items =[]

  const emptyMsg = food_items.length == 0 ? <h3>I'm still hungry.</h3>: null;


  return (
    <>
    {/* <React.Fragment> */}
      <h1>Healthy Foods</h1>
      <ul class="list-group">
        {/* <li class="list-group-item">Green Vegetables</li>
        <li class="list-group-item">Paneer</li>
        <li class="list-group-item">Milk</li>
        <li class="list-group-item">Dal</li>
        <li class="list-group-item">Meat</li> */}
        {emptyMsg}
        
        {food_items.map(item => (
          <li className="list-group-item" key={item}>{item}</li>
        ))}
      </ul>
    {/* </React.Fragment> */}
    </>
  )
}

export default App
