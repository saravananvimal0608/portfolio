import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function BasicExample() {
  return (
    <nav className="d-flex gap-5 pt-3 pb-5 justify-content-center flex-wrap">
      <Link to='/' className="text-white text-decoration-none fw-semibold">
        Home
      </Link>
      <Link to='/project' className="text-white text-decoration-none fw-semibold">
        Projects
      </Link>
      <a href="#about" className="text-white text-decoration-none fw-semibold">
        Contact
      </a>
      <a href="#about" className="text-white text-decoration-none fw-semibold">
        About
      </a>
    </nav>
  );
}

export default BasicExample;
