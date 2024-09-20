/* eslint-disable no-unused-vars */

import axios from "axios";
import { useEffect, useState } from "react";
import "../assets/styles/books.css";

const Books = () => {
  const [books, booksData] = useState();
  let [del, setdel] = useState();

    const handledelete = (no,title) => {
      alert(`Do you want to delete ${title}`)
      booksData(books.filter((ele,index) => index+1 !== no))
    }

  useEffect(() => {
    axios
      .get("http://localhost:4000/books")
      .then((resp) => booksData(resp.data));
  }, []);
  return (
    <>
      <div className="books">
        {books && books.map((ele,index) => {
          let {
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
                  <h2>{title}</h2>
                </div>
                <div className="details">
                  <h1>{title}</h1>
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
                    <button>Read Book</button>
                    <button onClick={() => handledelete(index,title) }>Delete</button>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Books;
