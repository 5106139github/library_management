import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { JSON_url } from "../../utils/Contents";

const Userlogin = () => {
  let [user, setUser] = useState([]);
  const usernavigate = useNavigate();

  useEffect(() => {
    let fetchapi = async () =>{
    await axios.get(`${JSON_url}/users`).then((res) => setUser(res.data));
    }
    fetchapi()
  }, [user]);

  let idfield = useRef();
  let pwdfield = useRef();

  let handleUserlogin = (e) => {
    e.preventDefault();
    let emailinp = idfield.current.value;
    let psdinp = pwdfield.current.value;
    user.map((ele) => {
      let {email,password} = ele
    // let userFound = user.find((ele) => ele.email === emailinp && ele.password === psdinp);
    
    if (emailinp === email && psdinp === password) {
      usernavigate('/Userportal');
    } else {
      if(emailinp !== email){
        idfield.current.style.border = '1px solid red';
        idfield.current.innerText = 'Wrong Email'
      }else if(psdinp === password){
        pwdfield.current.style.border = '1px solid red';
      }
    //  idfield.current.value = ''
    }
  })
}


  return (
    <>
      <form className="user-form" onSubmit={handleUserlogin}>
        <input ref={idfield} type="email" placeholder="Enter email address" />
        <input ref={pwdfield} type="password" placeholder="Enter password" />
        <button type="submit">User login</button>
        <p><Link to="/register">Register</Link></p>
      </form>
    </>
  );
};

export default Userlogin;
