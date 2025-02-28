import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom"
import { Home } from "./pages/Home"
import { About } from "./pages/About"
import Service from "./pages/Service"
import { Login } from "./pages/Login"
import { Register } from "./pages/Register"
import { Contact } from "./pages/Contact"
import { Navbar } from "./components/Navbar"
import { Logout } from "./pages/Logout"


const App = () => {

  // console.log("parent component rendered");

  return <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<Service />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </BrowserRouter>
  </>
}

export default App;