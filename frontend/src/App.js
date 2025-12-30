import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Home } from "./pages/home"
import { Register } from "./pages/register"
import { User } from "./pages/user"


function App() {

  return (

    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/user" element={<User/>}/>
      </Routes>
    </Router>

  )

}

export default App;
