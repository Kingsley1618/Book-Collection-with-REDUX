import { userActions } from "../store/store";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

import { motion } from "framer-motion";
import "./Books.css";
import { fetchBooks } from "../store/store";
function Book() {
  const book = useSelector((state) => state.Books);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBooks());
  }, []);
  return (
    <div>
      <Navbar />
      <motion.div
        initial={{ opacity: 0, scale: 0.2 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <div
          className="row flex_book"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {book.map((list) => {
            return (
              <div className="col-md-4 col-sm-6 col-12" id="images">
                <div>
                  <img src={list.image_url} alt="img" className="image" />
                </div>
                <div>
                  <h3 className="header">{list.title}</h3>
                </div>
                <div>
                  <button
                    type="button"
                    onClick={() => {
                      dispatch(userActions.addFav({ id: list.id }));
                    }}
                    className="btn btn-success mb-2"
                  >
                    Add to favorite
                  </button>

                  <Link to={`/info/${list.id}`}>
                    {" "}
                    <button
                      type="button"
                      className="btn btn-secondary mb-2 ms-2"
                    >
                      More Info
                    </button>{" "}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}
export default Book;
