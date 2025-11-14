function TodoItem2() {
  let todoName = 'Go to New York';
  let todoDate = '2025-10-20';

  return <div className="container">
    <div className="row">
      <div className="col-5 todo-name">
        {todoName}
      </div>
      <div className="col-3 todo-date">
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

export default TodoItem2;
