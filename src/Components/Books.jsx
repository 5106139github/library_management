/* eslint-disable no-unused-vars */

import axios from "axios";
import { useEffect, useState } from "react";
import "../assets/styles/books.css";
import { useLocation, useNavigate } from "react-router-dom";
import Addbooks from '../Components/admin/Addbooks'


const Books = () => {
  let deletebutton = useLocation().pathname;
  let bool = deletebutton.startsWith('/adminportal')
  
  const [books, setbooks] = useState();
  
  useEffect(() => {
    axios
      .get("http://localhost:4000/books")
      .then((resp) => {
        setbooks(resp.data)
        });
  }, [books]);


  let navigate = useNavigate()
  let readbook = (id) => {
    navigate(`/adminportal/readbook/${id}`)
  }
  
  // const [delbook, setdelbook] = useState();
  // const handledelete = (no,title) => {
  //   alert(`Do you want to delete ${title}`)
  //   setbooks(books.filter((ele,index) => index+1 !== no))
  // }
  let handledelete = (id,title) => {
   let bool =  window.confirm(`do you want to delete ${title} book`)
   if(bool){
    fetch(`http://localhost:4000/books/${id}`,{method : 'DELETE'})
    alert(`book is deleted`)
   }
   else{
    alert(`${title} is not deleted`)
   }
  }


  return (
    <>
      <div className="booksbg">
      <div className="books">
        {books && books.map((ele,index) => {
          let {
            id,
            title,
            isbn,
            pageCount,
            publishedDate,
            thumbnailUrl,
            status,
            authors,
            categories,
          } = ele;
          return (
            <>
              <div className="cards">
                <div className="image">
                  <img src={thumbnailUrl} alt="loading" />
                  <h4>{title}</h4>
                </div>
                <div className="details">
                  <p>{title}</p>
                  <table>
                    <tr>
                      <th>PageCount</th>
                      <td>{pageCount}</td>
                    </tr>
                    <tr>
                      <th>RegNo</th>
                      <td>{isbn}</td>
                    </tr>
                    <tr>
                      <th>Status</th>
                      <td>{status}</td>
                    </tr>
                    <tr>
                      <th>Author</th>
                      <td>{authors}</td>
                    </tr>
                    <tr>
                      <th>Categories</th>
                      <td>{categories}</td>
                    </tr>
                  </table>
                  <div className="btns">
                    <button onClick={()=>readbook(id)}>Read Book</button>
                    {bool ? <button onClick={()=>handledelete(id,title)}>Delete</button> : ''}
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
      </div>
    </>
  );
};

export default Books;
