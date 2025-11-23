import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="text-white py-4 mt-5" >
      <div className="container text-center">

        <h5 className="fw-bold mb-3">Saravanan Vimal</h5>

        <div className="d-flex justify-content-center gap-4 fs-4 mb-3">
          <a 
            href="mailto:saravananvimal0608@gmail.com" 
            className="text-white text-decoration-none"
          >
            <FaEnvelope />
          </a>

          <a 
            href="https://github.com/saravananvimal0608" 
            target="_blank" 
            rel="noreferrer" 
            className="text-white text-decoration-none"
          >
            <FaGithub />
          </a>

          <a 
            href="https://www.linkedin.com/in/saravanan-vimal-399364352/?trk=PROFILE_DROP_DOWN" 
            target="_blank" 
            rel="noreferrer" 
            className="text-white text-decoration-none"
          >
            <FaLinkedin />
          </a>
        </div>

        <div className="border-top w-50 mx-auto mb-3" style={{ opacity: 0.3 }}></div>


        <p className="mb-0" style={{ fontSize: "14px", opacity: 0.8 }}>
          © {new Date().getFullYear()} Saravanan — All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
