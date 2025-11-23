import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { IoReorderThree } from "react-icons/io5";
import { useState } from 'react'

function BasicExample() {
  const [toggle, setToggle] = useState(false)

  return (
    <div className="position-relative">
      <IoReorderThree size={"40"} color={"white"} className="three-icon ms-4 mb-3" onClick={() => setToggle(!toggle)} />

      <nav className={`${toggle ? "non-hide-sm" : "display-none"} `}>
        <Link to='/' className={`text-white text-decoration-none fw-semibold `} onClick={() => setToggle(false)}>
          Home
        </Link>

        <Link to='/project' className={`text-white text-decoration-none fw-semibold `} onClick={() => setToggle(false)}>
          Projects
        </Link>

        <a href="#contact" className={`text-white text-decoration-none fw-semibold `} onClick={() => setToggle(false)}>
          Contact
        </a>

        <a href="#about" className={`text-white text-decoration-none fw-semibold `} onClick={() => setToggle(false)}>
          About
        </a>
      </nav>
    </div>
  );
}

export default BasicExample;
