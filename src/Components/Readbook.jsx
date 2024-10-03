/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import axios from "axios";
import {JSON_url} from '../utils/Contents'

const Readbook = () => {
  let locate = useLocation().pathname.startsWith('/adminportal')
  let params = useParams();
  // console.log(params.id);
  let bookId = params.id;
  let [book, setBook] = useState({});
  useEffect(() => {
    let apifetch = async () => {
      let singlebook = await fetch(`${JSON_url}/books/${bookId}`);
      let resp = await singlebook.json();
      setBook(resp);
    };
    apifetch();
  }, []);

  let [short, setShort] = useState(true);
  let handleShort = () => {
    setShort(!short);
  };
  let [long, setLong] = useState(true);
  let handleLong = () => {
    setLong(!long);
  };

  let navigate = useNavigate()
  let readbook = (id) => {
    {locate ? navigate(`/adminportal/books/`) : navigate(`/userportal/books/`)}
  }
  
let addtocart = () => {
  let bool = window.confirm(`Do you want to add ${title} book .. ?`)
  if(bool){
    fetch(`${JSON_url}/cartitems`,{
      method : 'POST',
      headers : {'Content-Type' : 'application/json'},
      body : JSON.stringify(book)
    })
    alert('Book is added')
  }
  else {
    alert('Not added')
  }
}


  let {
    id,
    title,
    pageCount,
    thumbnailUrl,
    shortDescription,
    longDescription,
    status,
    authors,
    categories,
  } = book;
  return (
    <>
      <div className="readbook">
        <div className="read1">
          <img src={thumbnailUrl} alt="" />
          <div className="head">
            <h2>{title}</h2>
          </div>
        </div>
        <div className="read2">
          <div className="head">
            <h2>{title}</h2>
          </div>
          <button onClick={handleShort}>
          <div className="dec">
            SHORT DESCRIPTION 
           {short ? <AddIcon /> : <CloseIcon />}
          </div>
          <p>{short ? "" : <div className="descbox">{shortDescription}</div>}</p>
          </button>
          <button onClick={handleLong}>
            <div className="dec">
            LONG DESCRIPTION 
           {long ? <AddIcon /> : <CloseIcon />}
          </div>
          <p>{long ? "" : <div className="descbox">{longDescription}</div>}</p>
            </button>
          <div className="classobj">
            <div className="box">
              <div>
                <u>Status:</u>
              </div>
              {status}
            </div>
            <div className="box">
              <div>
                <u>Author</u>
              </div>
              {authors}
            </div>
            <div className="box">
              <div>
                <u>Category</u>
              </div>
              {categories}
            </div>
          </div>
          <div className="backbtn" ><button onClick={()=>readbook(id)}>back</button>&nbsp;
          <button className="backbtn" onClick={()=>addtocart()}>Add</button></div></div>
        
      </div>
    </>
  );
};

export default Readbook;
