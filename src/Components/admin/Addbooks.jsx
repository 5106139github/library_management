/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from 'react'
import '../../assets/styles/addbooks.css'
import {JSON_url} from '../../utils/Contents'
import axios from 'axios'

const Addbooks = () => {
    let [books,setbooks] = useState([])
    
    useEffect(() => {
        const data =   axios
        .get("http://localhost:4000/books").then((resp) => setbooks(resp.data));
      }, []);

      const newid = () => {
            const lid = Number(books[books.length - 1].id);
            return lid+1;                 
        }; 
    // console.log(newid());
    
    let refname = useRef()
let handlesubmit = (e) => {
    e.preventDefault()
   const ids =  newid()
    let formdata = {
        id : String(ids),
        title : refname.current[0].value,
        isbn : refname.current[1].value,
        pageCount : refname.current[2].value,
        thumbnailUrl : refname.current[3].value,
        shortDescription : refname.current[4].value,
        longDescription :refname.current[5].value ,
        status : refname.current[6].value,
        Author :[refname.current[7].value], 
        categories: [refname.current[8].value] ,
    }


    // let {id,title,isbn,pageCount,thumbnailUrl,shortDescription,longDescription,status,Author,categories} = formdata
    // console.log(formdata.id);
    
    
//! sending data to books component
    fetch('http://localhost:4000/books',{
        method : 'POST',
        headers : {'Content-Type' : 'application/json'},
        body : JSON.stringify(formdata)
        
    }) 
    
    refname.current[0].value=""
    refname.current[1].value=""
    refname.current[2].value=""
    refname.current[3].value=""
    refname.current[4].value=""
    refname.current[5].value=""
    refname.current[6].value=""
    refname.current[7].value=""
    refname.current[8].value=""

    
}
  return (
    <>
    <div className="addbooks">
        <div className="container">
            <form className='form' onSubmit={handlesubmit} ref={refname}>
                <input type="text" placeholder="Enter Title Name" required/>
                <input type="number" placeholder="Enter isbn" required/>
                <input type="number" placeholder="Enter Page count" required/>
                <input type="text" placeholder="Enter Image Url" required/>
                <input type="text" placeholder="Enter shortDescription" required/>
                <input type="text" placeholder="Enter longDescription" required/>
                <input type="text" placeholder="Enter Status" required/>
                <input type="text" placeholder="Enter Author Name" required/>
                <input type="text" placeholder="Enter Categories" required/>
                <button>ADD BOOKS</button>

            </form>
        </div>
    </div>
    </>
  )
}

export default Addbooks
