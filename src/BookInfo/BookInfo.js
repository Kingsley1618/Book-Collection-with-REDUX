import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

import "./BookInfo.css";
import axios from "axios";
function BookInfo() {
  const { bookId } = useParams();
  const [info, setInfo] = useState({});
  useEffect(() => {
    const getApi = fetch("https://example-data.draftbit.com/books?_limit=30")
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        const findId = resp.find((val) => val.id === parseInt(bookId));
        if (findId) {
          setInfo(findId);
        }
      });
  }, []);
  return (
    <div className="col-12" id="images">
      <div>
        <img src={info.image_url} alt="img" className="image" />
      </div>
      <div>
        <h3 className="header">{info.title}</h3>
        <p className="header">{info.description}</p>
        <p className="header">Genre -- {info.genres}</p>
        <p className="header">Authors -- {info.authors}</p>

        <p className="header">Number of Pages -- {info.num_pages}</p>
        <p className="header">Quote 1 -- {info.Quote1}</p>
        <p className="header">Quote 2 -- {info.Quote2}</p>
        <p className="header">Quote 3 -- {info.Quote3}</p>
      </div>

      <div></div>
      <div>
        <Link to="/">
          {" "}
          <button type="button" className="btn btn-danger my-3 cursor-pointer">
            Back to Book Collection
          </button>
        </Link>
      </div>
    </div>
  );
}
export default BookInfo;
