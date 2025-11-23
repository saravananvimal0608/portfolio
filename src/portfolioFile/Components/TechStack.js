import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGithub } from "react-icons/fa";
import { SiJavascript, SiMongodb, SiExpress, SiBootstrap, SiPostgresql } from "react-icons/si";

const TechStack = () => {
  return (
    <div className="text-center py-5" id="tech-stack">
      <h4 className="text-white fw-bold mb-4">Tech Stack</h4>

      <div className="d-flex justify-content-center flex-wrap gap-4">

        <div className="skill-set-box text-white p-4 col-10 col-md-5 col-xl-3">
          <h5 className="fw-bold mb-3">Frontend</h5>
          <div className="d-flex flex-wrap justify-content-center gap-3">
            <FaHtml5 size={35} className="text-warning" />
            <FaCss3Alt size={35} className="text-primary" />
            <SiJavascript size={35} className="text-warning" />
            <FaReact size={35} className="text-info" />
            <SiBootstrap size={35} className="text-purple" />
          </div>
        </div>

        <div className="skill-set-box text-white p-4 col-10 col-md-5 col-xl-3">
          <h5 className="fw-bold mb-3">Backend</h5>
          <div className="d-flex flex-wrap justify-content-center gap-3">
            <FaNodeJs size={35} className="text-success" />
            <SiExpress size={35} className="text-light" />
            <SiMongodb size={35} className="text-success" />
          </div>
        </div>

        <div className="skill-set-box text-white p-4 col-10 col-md-5 col-xl-3">
          <h5 className="fw-bold mb-3">Tools</h5>
          <div className="d-flex flex-wrap justify-content-center gap-3">
            <FaGithub size={35} className="text-white" />
          </div>
        </div>

      </div>
    </div>
  );
};

export default TechStack;
