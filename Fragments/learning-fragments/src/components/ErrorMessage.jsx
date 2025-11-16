const ErrorMsg = ({food_items}) => {
  return (
    <>
      {food_items.length == 0 ? <h3>I'm hungry.</h3> : null}
    </>
  )
}

export default ErrorMsg;