import {BrowserRouter as Router, Routes, Route} from "react-router"
import Todo from "./components/Todo/Todo"
import Calculadora from "./components/Calculadora/Calculadora"
import RegistroEstud from "./components/RegistroEstud/RegistroEstud"
import Nav from "./components/Nav/"

function App() {

  return (
    <>

      <Nav/>

     <Router>
      <Routes>
        <Route path="/" element={<Todo />} />
        <Route path="/calculadora" element={<Calculadora />} />
        <Route path="/registroEstud" element={<RegistroEstud />} />
      </Routes>

     </Router>

    </>
  )
}

export default App

