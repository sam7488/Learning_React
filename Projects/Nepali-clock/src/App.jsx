import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import AppName from './Components/AppName'
import Descirption from './Components/description'
import CurrentTime from './Components/time'

function App() {
  return <div>
    <center>
      <AppName />
      <Descirption />
      <CurrentTime />
    </center>
  </div>
}

export default App
