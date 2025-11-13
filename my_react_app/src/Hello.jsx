function Hello() {
  let myName = 'Sumit'

  let fullName = () => {
    return 'Sumit Kumar Sah';
  }
  return <div>
      <p> Hello there, I'm {myName}.</p>
      <p>My full name is {fullName()}.</p>
    </div>
  
}

export default Hello