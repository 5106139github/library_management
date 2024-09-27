import { Route, Routes } from "react-router-dom"
import Home from "../Home"
import Books from "../Books"
import Readbook from "../Readbook"
import Users from "../Users"
import Addbooks from "../Register"
import Navbar from "../Navbar"


const Userportal = () => {
  return (
    <>
    <Navbar />
  <Routes>
    <Route element={<Home />} path="/" />
    <Route element={<Books /> } path='/books' />
    <Route element={<Readbook />} path='/readbook/:id' />
    <Route element={<Addbooks />} path="/addbooks"/>
    <Route element={<Users />} path="/users"/>
  </Routes></>
  )
}

export default Userportal
