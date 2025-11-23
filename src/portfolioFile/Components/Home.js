import ProfileImg from "../../assets/ProfileImg.jpeg";
import About from "./AboutUs";

const Home = () => {

  return (
    <div className="container mt-5">

      {/* Profile Section */}
      <div className="d-flex justify-content-around align-items-center mb-4 flex-wrap">
        <div className="content text-center">
          <h3 className="fw-bold text-white title">
            I AM A <span></span>
          </h3>
        </div>

        <div>
          <img
            src={ProfileImg}
            alt="Profile"
            className="rounded-5 h-50 profile-img"
          />
        </div>
      </div>

      {/* Skillset Cards 1*/}
      <div className="d-flex justify-content-around flex-wrap gap-3 mb-5">
        <div className="skill-set-box col-12 col-md-5 col-xl-3">
          <h3 className="fw-bold mb-2 fs-5 text-center">
            MERN Stack Intern
          </h3>
          <div className=" px-1">
            <ul>
              <li>Developing and maintaining <b>"Bestrunner"</b>, a static website with <b>responsive UI</b></li>
              <li>Contributing to <b>"Africa Duty Free"</b> website (responsive layouts, product management modules, and performance optimization)</li>
              <li>Implementing features with <b>HTML5, CSS3, JavaScript, React.js, Bootstrap,</b> and <b>REST APIs</b></li>
              <li>Gaining backend experience in <b>API development, authentication,</b> and <b>database management</b> using <b>Node.js, Express.js,</b> and <b>MongoDB</b></li>
            </ul>
          </div>
        </div>

        {/* Skillset Cards 2 */}
        <div className="skill-set-box col-12 col-md-5 col-xl-3">
          <h3 className="fw-bold mb-2 fs-5 text-center">
            Java Full Stack Development
          </h3>
          <div className=" px-1">
            <ul>
              <li>Completed Java Full Stack course at <b>Intellisense Academy</b></li>
              <li>Hands-on practical experience in developing full stack web applications</li>
              <li>Skilled in <b>Java, Spring Boot, PostgreSQL</b> for backend development</li>
              <li>Proficient in <b>HTML, CSS, JavaScript, Bootstrap</b> for front-end design</li>
              <li>Familiar with RESTful APIs and basic deployment workflow</li>
            </ul>
          </div>
        </div>

        {/* Skillset Cards 3*/}
        <div className="skill-set-box col-12 col-md-5 col-xl-3">
          <h3 className="fw-bold mb-2 fs-5 text-center">
            Java Training
          </h3>
          <div className=" px-1">
            <ul>
              <li>Successfully completed <b>Java Training</b> at <b>Besant Technologies</b></li>
              <li>Gained strong knowledge in <b>Core Java</b> concepts</li>
              <li>Enhanced understanding of <b>Object-Oriented Programming (OOP)</b> principles</li>
              <li>Worked on hands-on exercises involving <b>loops, arrays, collections,</b> and <b>exception handling</b></li>
              <li>Developed mini-projects to apply real-world <b>Java application development</b> skills</li>
            </ul>
          </div>
        </div>
      </div>

      <About />

    </div>
  );
};

export default Home;
