/* eslint-disable no-unused-vars */

import axios from 'axios'
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const Addbooks = () => {
    let [books,setbooks] = useState()
    
    useEffect(() => {
        const data =   axios
        .get("http://localhost:4000/users").then((resp) => setbooks(resp.data));
      }, [books]);
      const newid = () => {
        if (books && books.length > 0) {
            const lid = Number(books[books.length - 1].id);
            return lid+1;
          }else{
            return 1;
          }
        };
    
let refname = useRef()
let handlesubmit = (e) => {
    e.preventDefault()
   const ids =  newid()
    let formdata = {
        id : String(ids),
        fnm : refname.current[0].value,
        lnm : refname.current[1].value,
        phone : refname.current[2].value,
        email : refname.current[3].value,
        password : refname.current[4].value,
        dob : refname.current[5].value,
        place :refname.current[6].value ,
    }


    // let {id,title,isbn,pageCount,thumbnailUrl,shortDescription,longDescription,status,Author,categories} = formdata
    // console.log(formdata.id);
    
    
//! sending data to books component
    fetch('http://localhost:4000/users',{
        method : 'POST',
        headers : {'Content-Type' : 'application/json'},
        body : JSON.stringify(formdata)
    })   

    refname.current[0].value=''
    refname.current[1].value=''
    refname.current[2].value=''
    refname.current[3].value=''
    refname.current[4].value=''
    refname.current[5].value=''
    refname.current[6].value=''
}
  return (
    <>
    <div className="landingpage">

      <div className="addbooks">
        <div className="container">
            <form className='form' onSubmit={handlesubmit} ref={refname}>
                <input type="text" placeholder="Enter first Name" required/>
                <input type="text" placeholder="Enter last Name" required/>
                <input type="tel" placeholder="Enter phone.no" pattern='[6-9]{1}[0-9]{9}' required/>
                <input type="email" placeholder="Enter email " required/>
                <input type="password" placeholder="Enter password" required/>
                <input type="text" placeholder="YYYY-MM-DD" pattern="\d{4}-\d{2}-\d{2}" required/>
                <input type="text" placeholder="Enter place" required/>
                <button>REGISTER</button><br />
                <Link to='/'><h1>Back</h1></Link>
            </form>
        </div>
    </div>
      </div>
    
    </>
  )
}

export default Addbooks
