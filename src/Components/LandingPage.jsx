import { useState } from 'react'
import '../assets/styles/landingpage.css'
import Adminlogin from './admin/Adminlogin'
import Userlogin from './user/Userlogin'
const LandingPage = () => {
 let [bool,setBool] = useState()
 let handleBtn = () => {
  setBool(!bool)
 }
  return (
   <>
    <div className="landingpage">
        <div className="login-container">
            <div className="btn-container">
            <div className="btnback">
                <button>user</button>
                <button>admin</button>
              </div>
              <div className="btntop">
              <button onClick={handleBtn} className={bool ? 'admin-btn' : 'user-btn'}>
                {bool ? 'Admin' : 'User'}
              </button>
            </div>
              
            </div>
            <div className="form-container">
              <div className="heading">{bool ? 'Admin Login' : 'User Login'}</div>
              {bool ? <Adminlogin /> : <Userlogin />}
             
            </div>
        </div>
        
    </div>
   </>
  )
}

export default LandingPage
