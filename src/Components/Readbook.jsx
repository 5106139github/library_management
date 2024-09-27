/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../assets/Styles/readbook.css";
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';

const Readbook = () => {
  let params = useParams();
  let bookId = params.id;
  let [book, setBook] = useState({});
  useEffect(() => {
    let apifetch = async () => {
      let singlebook = await fetch(`http://localhost:4000/books/${bookId}`);
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
    navigate(`/adminportal/books/`)
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
          <div className="backbtn" onClick={()=>readbook(id)}><button>back</button></div>
        </div>
      </div>
    </>
  );
};

export default Readbook;
