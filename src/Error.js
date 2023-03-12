import "./Error.css";
import { Link } from "react-router-dom";
function Error() {
  return (
    <div>
      <img src="error.png" className="images-src" alt="img" />
      <Link to="/" style={{ textDecoration: "none" }}>
        {" "}
        <button
          type="button"
          className="btn btn-danger my-3 cursor-pointer d-block mx-auto"
        >
          Back to Book Collection
        </button>
      </Link>
    </div>
  );
}
export default Error;
