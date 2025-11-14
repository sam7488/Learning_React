function AddToDo() {
  return <div class="container text-center">
    <div class="row">
      <div class="col-5">
        <input type="text" placeholder="Enter todo-list" />
        </div>
      <div class="col-3">
        <input type="date" name="todo-date"  />
      </div>
      <div class="col-2">
        <button type="button" class="btn btn-success">
          Add
        </button>
      </div>
    </div>
  </div>
}

export default AddToDo