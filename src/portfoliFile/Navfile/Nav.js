
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router-dom";


function BasicExample() {
  return (
    <Nav
      activeKey="/home"
    >
      <Nav.Item>
        <Nav.Link as={Link} to='/' className="text-white">Home</Nav.Link>
      </Nav.Item>
<Nav.Item>
  <Nav.Link as={Link} to="/project" className="text-white">
    Projects
  </Nav.Link>
</Nav.Item>
      <Nav.Item>
        <Nav.Link as='a' href="#about" className="text-white">Contact</Nav.Link>
      </Nav.Item>
    <Nav.Item>
  <Nav.Link as='a' href="#about" className="text-white">
    About
  </Nav.Link>
</Nav.Item>
    </Nav>
  );
}

export default BasicExample;