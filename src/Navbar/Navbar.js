import "./Navbar.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Moment } from "react-moment";
import { AiTwotoneHeart } from "react-icons/ai";
function Navbar() {
  const [time, setTime] = useState();
  let d = new Date();
  setTime(d.toLocaleTimeString());
  return (
    <div>
      <div className="navbar">
        <div>
          <h3 className="head">BOOK STORE</h3>
        </div>

        <div>
          <ul style={{ listStyleType: "none" }}>
            <Link to="/fav" style={{ textDecoration: "none", color: "white" }}>
              <li className="first-li cursor-pointer">Favorite Books</li>
            </Link>
            <Link to="/fav" style={{ textDecoration: "none", color: "white" }}>
              {" "}
              <li className="sec-li">
                <AiTwotoneHeart className="heart" />
              </li>{" "}
            </Link>
          </ul>
        </div>
      </div>
      <div style={{ textAling: "center", color: "white" }}>
        <Moment fromNow>{time}</Moment>
      </div>
    </div>
  );
}
export default Navbar;
