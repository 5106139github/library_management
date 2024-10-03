
import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { JSON_url } from "../../utils/Contents"


const Cartitems = () => {
    let [cart , setcart] = useState('')

    useEffect(()=> {
        axios.get(`${JSON_url}/cartitems`).then(ele => setcart(ele.data))
    },[cart])
    console.log(cart);
    
    let handledelete = (id,title) => {
        let bool =  window.confirm(`do you want to delete ${title} book ...???`)
        if(bool){
         fetch(`${JSON_url}/cartitems/${id}`,{method : 'DELETE'})
         alert(`user is deleted`)
        }
        else{
         alert(`${title} is not deleted`)
        }
       }
   return(
    <>
     <div className="userscontsiner">
      <div className="users-table">
        <table>
          <thead>
            <tr>
              <th>Sno</th>
              <th>Title</th>
              <th>Author</th>  
              <th>Categoties</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {cart && cart.map((ele,index)=>{
                let {id,title,authors,categories} = ele
                console.log(authors );
                
                return(
                  <>
                    <tr>
                      <td>{index+1}</td>
                      <td>{title}</td>
                      <td>{authors}</td>
                      <td>{categories}</td>
                      <td><button id="btnred" onClick={()=>handledelete(id,title)}>DELETE</button></td>
                    </tr>
                  </>
                )
              })
            }
          </tbody>
          <tfoot><tr><td colSpan={5} style={{textAlign:'center'}}><Link to='/userportal/books'><button id="greenbtn">ADD BOOKS</button></Link></td></tr></tfoot>
        </table>
      </div>
    </div>

    </>
   )
}

export default Cartitems
