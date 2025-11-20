import styles from './FoodInput.module.css'

const FoodInput = ({handleOnChange}) => {
  return <input
  type='text'
  placeholder='Enter new food item'
  onChange={(e) => handleOnChange(e)}
  ></input>

}

export default FoodInput;