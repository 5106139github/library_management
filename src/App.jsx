import { BrowserRouter, Route, Routes } from "react-router-dom"
import LandingPage from "./Components/LandingPage"
import Adminportal from './Components/admin/Adminportal'
import Register from "./Components/Register"
import Userportal from "./Components/user/Userportal"

const App = () => {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route element={<LandingPage />} path="/"/>
        <Route element={<Adminportal />} path="/adminportal/*"/>
        <Route element={<Userportal />} path="/userportal/*"/>
        <Route element={<Register />} path="/register"/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
