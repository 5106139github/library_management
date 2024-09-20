import { Route, Routes } from "react-router-dom"
import Navbar from "../Navbar"
import Home from "../Home"
import Books from "../Books"


const Adminportal = () => {
  return (
   <>
  <Navbar />
  <Routes>
    <Route element={<Home />} path="/" />
    <Route element={<Books /> } path='/books' />
  </Routes>
   </>
  )
}

export default Adminportal
