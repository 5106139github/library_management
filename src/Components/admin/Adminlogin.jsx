
import { useRef } from "react"
import { Link, useNavigate } from "react-router-dom"


const Adminlogin = () => {
    let emailfield = useRef()
    let pwdfield = useRef()
    
    let navigate = useNavigate()

    
    const adminlogin = (e) => {
        e.preventDefault()
        let emailinput = emailfield.current
        let pwdinput = pwdfield.current
        let credentials = {
            email : 'admin@gmail.com',
            password : '12345'
        }
        let {email,password} = credentials

        // todo : condition to visit admin portal
        
        if(emailinput.value === email && pwdinput.value === password){
            navigate('/adminportal')
        }
        else{
            let err = 'border : 1px red solid'
           emailinput.style.cssText = err
            pwdinput.style.cssText = err
        }
    }

  return (
   <>
   <div className="admin-form">
   <form onSubmit={adminlogin}>
     <input ref={emailfield} type="email" placeholder='Enter email address' />
     <input ref={pwdfield} type="text" placeholder='Enter password'/>
     <button>Admin login</button>
    <p> ? data is secured ? <Link to='/register'>Register as User</Link></p>
   </form>
 </div>
 </>
  )
}

export default Adminlogin
