import { useSelector, useDispatch } from "react-redux";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import "./Favorite.css";
function Favorite() {
  const favorite = useSelector((state) => state.fav);
  return (
    <div>
      <div className="navbar">
        <div>
          <h3 className="head">BOOK STORE</h3>
        </div>

        <div>
          <ul style={{ listStyleType: "none" }}>
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              {" "}
              <li className="sec-li-tag">
                <IoMdArrowRoundBack className="heart" />
                Back
              </li>{" "}
            </Link>
          </ul>
        </div>
      </div>

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
          {favorite.map((list) => {
            return (
              <div className="col-md-4 col-12" id="images">
                <div>
                  <img src={list.image_url} alt="img" className="image" />
                </div>
                <div>
                  <h3 className="header">{list.title}</h3>
                </div>

                <div>
                  <p className="header">{list.description}</p>
                </div>

                <div>
                  <div className="header">Rating -- {list.rating}</div>
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}
export default Favorite;
