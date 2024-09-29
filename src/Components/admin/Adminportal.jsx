import { Route, Routes} from "react-router-dom"
import Navbar from "../Navbar"
import Home from "../Home"
import Books from "../Books"
import Readbook from "../Readbook"
import Addbooks from "./Addbooks"
import Users from "../Users"
import Register from '../Register'
import Addusers from "../Addusers"
import Contact from "../Contact"


const Adminportal = () => {
  return (
   <>
  <Navbar />
  <Routes>
    <Route element={<Home />} path="/" />
    <Route element={<Register />} path="/register" />
    <Route element={<Books /> } path='/books' />
    <Route element={<Readbook />} path='/readbook/:id' />
    <Route element={<Addbooks />} path="/addbooks"/>
    <Route element={<Users />} path="/users"/>
    <Route element={<Addusers />} path="/addusers"/>
    <Route element={<Contact />} path="/contact" />
  </Routes>
   </>
  )
}

export default Adminportal
