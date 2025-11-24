import { FaUser, FaEnvelope, FaPhone, FaFilePdf, FaMapMarkerAlt, FaGraduationCap, FaCertificate } from "react-icons/fa";
import TechStack from '../Components/TechStack'

const About = () => {
  return (
    <div id="about" className="pb-5">

      <div className="text-center px-3 py-4" id="contact">
        <h4 className="text-white fw-bold">About Me</h4>
        <p className="text-white mt-2 mx-auto" style={{ maxWidth: "700px" }}>
          I worked as a <b>MERN Stack Intern</b> with hands-on experience in
          <b> React.js, Node.js, Express.js</b>, and <b>MongoDB</b>.
          I develop responsive UIs, optimize performance, and build secure backend
          systems with <b>API development, authentication</b>,
          and <b>database management</b>.
        </p>
      </div>

      <div className="d-flex justify-content-center flex-wrap gap-4">

        <div className="text-white skill-set-box col-12 col-md-7 col-xl-4 fadeIn">
          <p className="px-4">
            <FaUser className="me-2 text-info" />
            <strong>Name:</strong> Saravanan Vimal
          </p>
          <p className="px-4">
            <FaEnvelope className="me-2 text-info" />
            <strong>Email:</strong>
            <a href="mailto:saravananvimal0608@gmail.com" className="text-white text-decoration-none ms-1 text-break">
              saravananvimal0608@gmail.com
            </a>
          </p>
          <p className="px-4">
            <FaPhone className="me-2 text-info" />
            <strong>Mobile:</strong>
            <a href="tel:8838144554" className="text-white text-decoration-none ms-1">
              8838144554
            </a>
          </p>
          <p className="px-4">
            <FaFilePdf className="me-2 text-info" />
            <strong>Resume:</strong>
            <a href="/SARAVANAN-VIMAL-RESUME.pdf" className="text-white text-decoration-none ms-1">
              Download Resume
            </a>
          </p>
        </div>

        <div className="text-white skill-set-box col-12 col-md-7 col-xl-5 fadeIn">
          <p className="px-4">
            <FaMapMarkerAlt className="me-2 text-info" />
            <strong>Address:</strong> Zamin Pallavaram, Chennai-43
          </p>
          <p className="px-4">
            <FaGraduationCap className="me-2 text-info" />
            <strong>Degree:</strong> Bachelor Of Computer Application
          </p>
          <p className="px-4">
            <FaCertificate className="me-2 text-info" />
            <strong>Certifications:</strong> MERN Stack Intern, Java Full Stack, Java Training
          </p>
        </div>

      </div>
      <TechStack />
    </div>
  );
};

export default About;
