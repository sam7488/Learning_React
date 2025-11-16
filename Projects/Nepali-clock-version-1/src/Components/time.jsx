function CurrentTime() {
  const now = new Date();

  return <div className="time-container">
    <p className="para fw-bolder">This the current Time :  - {now.toLocaleDateString()} - {now.toLocaleTimeString()}</p>
  </div>
}

export default CurrentTime