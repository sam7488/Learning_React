function TodoItem1() {
  let todoName = 'Go shopping'
  let todoDate = "2025-10-25"

  return <div className="container">
    <div className="row">
      <div className="todo-name col-5">
        {todoName}
      </div>
      <div className="todo-date col-3">
        {todoDate}
      </div>
      <div className="col-2">
        <button type="button" className="btn btn-danger">
          Delete
        </button>
      </div>
    </div>
  </div>
}

export default TodoItem1