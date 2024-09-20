import { BrowserRouter, Route, Routes } from "react-router-dom"
import LandingPage from "./Components/LandingPage"
import Adminportal from './Components/admin/Adminportal'

const App = () => {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route element={<LandingPage />} path="/"/>
        <Route element={<Adminportal />} path="/adminportal/*"/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
