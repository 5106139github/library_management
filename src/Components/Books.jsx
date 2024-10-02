
import axios from "axios";
import { useEffect, useState } from "react";
import "../assets/styles/books.css";
import { useLocation, useNavigate } from "react-router-dom";



const Books = () => {
  let readbooks = useLocation().pathname
  let user = readbooks.startsWith('/adminportal')
  let deletebutton = useLocation().pathname;
  let bool = deletebutton.startsWith('/adminportal')
  
  const [books, setbooks] = useState();

  let [search , setsearch] = useState()

  
  useEffect(() => {
    axios
      .get("http://localhost:4000/books")
      .then((resp) => {
        setbooks(resp.data)
        });
  }, [books]);


  let navigate = useNavigate()
  let readbook = (id) => {
    {user ? navigate(`/adminportal/readbook/${id}`) : navigate(`/userportal/readbook/${id}`)}
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
        <input type="text" placeholder="search" value={search} onChange={(tx)=>{setsearch( tx.target.value)}}/> 
        <button onClick={() => {
          const updatedSearch = books.filter((res) => 
            res.title.toLowerCase().includes(search.toLowerCase())
          );
            setbooks(updatedSearch)
          }}>Search</button>

      <div className="books">
        {books && books.map((ele) => {
          let {
            id,
            title,
            isbn,
            pageCount,
           
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
                    <div style={{textAlign:'center'}}>
                    <button id="greenbtn" onClick={()=>readbook(id)}>Read Book</button>
                    {bool ? <button id="redbtn" onClick={()=>handledelete(id,title)}>Delete</button> : ''}
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
