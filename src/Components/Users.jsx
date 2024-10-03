import axios from "axios"
import { useEffect, useState } from "react"
import '../assets/styles/users.css'
import { useLocation } from "react-router-dom"
import {JSON_url} from '../utils/Contents'

const Users = () => {
  let userdeletebutton = useLocation().pathname
  let bool = userdeletebutton.startsWith('/adminportal')
  let [usersdata,setusersdata] = useState()


  useEffect(()=>{
    axios.get(`${JSON_url}/users`).then((ele)=>setusersdata(ele.data))
  },[usersdata])
  

  let handledelete = (id,fnm) => {
    let bool =  window.confirm(`do you want to delete ${fnm} user`)
    if(bool){
     fetch(`${JSON_url}/users/${id}`,{method : 'DELETE'})
     alert(`user is deleted`)
    }
    else{
     alert(`${fnm} is not deleted`)
    }
   }

  return (
   <>
    <div className="userscontsiner">
      <div className="users-table">
        <table>
          <thead>
            <tr>
              <th>Sno</th>
              <th>Fname</th>
              <th>Lname</th>  
              {bool &&  <th>Email</th>}
              {bool && <th>Password</th> }
              {bool && <th>DOB</th>}
              <th>age</th>
              <th>Place</th>
              {bool ? <th>Delete Users</th> : ''}
            </tr>
            {/* <tr>
              <th><button>ADD USERS</button></th>
              <th><button onClick={()=>{delusersdata}}>DELETE ALL USERS</button></th>
            </tr> */}
          </thead>
          <tbody>
            {
              usersdata && usersdata.map((ele,index)=>{
                let {id,fnm,lnm,email,password,dob,place} = ele
                let calage = () => {
                  let age = new Date().getFullYear() - Number(dob.slice(0,4))
                  return age
                }
                let age = calage()
                {(usersdata.length !== 0)}
                
                return(
                  <>
                    <tr>
                      <td>{index+1}</td>
                      <td>{fnm}</td>
                      <td>{lnm}</td>
                      {bool && <td>{email}</td>}
                      {bool ? <td>{password}</td> : ''}
                      {bool && <td>{dob}</td>}
                      <td>{age}</td>
                      <td>{place}</td>
                      {bool ? <td><button onClick={()=>handledelete(id,fnm)}>DELETE</button></td> : ''}
                    </tr>
                  </>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </div>
   </>
  )
}

export default Users
