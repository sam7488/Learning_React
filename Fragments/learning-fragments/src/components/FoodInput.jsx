import styles from './FoodInput.module.css'

const FoodInput = ({text, handleOnChange, handleAddButton}) => {
  return (
    <div className={styles['add-item']}>
      <input
      type='text'
      placeholder='Enter new food item'
      value={text}
      onChange={(e) => handleOnChange(e)}
      ></input>
      <button onClick={handleAddButton}>Add</button>
    </div>
  );
}

export default FoodInput;