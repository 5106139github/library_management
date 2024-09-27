import axios from "axios"
import { useEffect, useState } from "react"
import '../assets/styles/users.css'


const Users = () => {
  let [usersdata,setusersdata] = useState()


  useEffect(()=>{
    axios.get('http://localhost:4000/users').then((ele)=>setusersdata(ele.data))
  },[usersdata])
  

  let handledelete = (id,fnm) => {
    let bool =  window.confirm(`do you want to delete ${fnm} user`)
    if(bool){
     fetch(`http://localhost:4000/users/${id}`,{method : 'DELETE'})
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
              <th>Email</th>
              <th>Password</th>
              <th>DOB</th>
              <th>age</th>
              <th>Place</th>
              <th>Delete Users</th>
            </tr>
            {/* <tr>
              <th><button>ADD USERS</button></th>
              <th><button onClick={()=>{delusersdata}}>DELETE ALL USERS</button></th>
            </tr> */}
          </thead>
          <tbody>
            {
              usersdata && usersdata.map((ele,index)=>{
                let {id,fnm,lnm,email,dob,place} = ele
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
                      <td>{email}</td>
                      <td>💇🏿‍♀️💇🏿💇🏿‍♀️</td>
                      <td>{dob}</td>
                      <td>{age}</td>
                      <td>{place}</td>
                      <td><button onClick={()=>handledelete(id,fnm)}>DELETE</button></td>
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
