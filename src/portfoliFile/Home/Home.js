import ProfileImg from "./ProfileImg.jpeg";
import About from "../Components/AboutUs";

const Home = () => {

  return (
    <div className="container mt-5">
      {/* Profile Section */}
      <div className="d-flex justify-content-around align-items-center mb-4 flex-wrap">
        <div className="content text-center">
          <h1 className="fw-bold" style={{ color: "white" }}>
            Saravanan
          </h1>
          <h1 className="fw-bold" style={{ color: "white" }}>
            Vimal
          </h1>
          <h6 style={{ color: "white" }}>Java Full Stack Developer</h6>
        </div>
        <div>
          <img
            src={ProfileImg}
            alt="Profile"
            className="rounded-5 h-50"
            style={{ Height: "270px", width: "288px" }}
          />
        </div>
      </div>

      {/* Skillset Cards 1*/}
      <div className="d-flex justify-content-around flex-wrap gap-3 mb-5">
        <div
       style={{
        width: "335px",
        height: "246px",
        border: "2px solid blue",
        backgroundColor: "#2e1b68",
        color: "white",
        padding: "15px",
        borderRadius: "10px",
        transition: "transform 0.3s ease-in-out",
        cursor: "pointer",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.1)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
      }}
    >
          <h3
            className="fw-bold mb-2 fs-5 text-center"
            style={{ backgroundColor: "#2e1b68" }}
          >
            Deeper Skillset
          </h3>
          <p
            className="mb-0 fs-6 lh-base px-1"
            style={{ backgroundColor: "#2e1b68" }}
          >
            Strong in front-end development using HTML, CSS, JavaScript,
            Bootstrap, and React. Hands-on experience in building full-stack
            applications using Java, PostgreSQL, and Spring Boot. Quick learner,
            always eager to explore new technologies and improve problem-solving
            skills.
          </p>
        </div>

        {/* Skillset Cards 2 */}
         <div
       style={{
        width: "335px",
        height: "246px",
        border: "2px solid blue",
        backgroundColor: "#2e1b68",
        color: "white",
        padding: "15px",
        borderRadius: "10px",
        transition: "transform 0.3s ease-in-out",
        cursor: "pointer",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.1)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
      }}
    >
          <h3
            className="fw-bold mb-2 fs-5 text-center"
            style={{ backgroundColor: "#2e1b68" }}
          >
            Deeper Skillset
          </h3>
          <p
            className="mb-0 fs-6 lh-base px-1"
            style={{ backgroundColor: "#2e1b68" }}
          >
            Strong in front-end development using HTML, CSS, JavaScript,
            Bootstrap, and React. Hands-on experience in building full-stack
            applications using Java, PostgreSQL, and Spring Boot. Quick learner,
            always eager to explore new technologies and improve problem-solving
            skills.
          </p>
        </div>

        {/* Skillset Cards 3*/}
          <div
       style={{
        width: "335px",
        height: "246px",
        border: "2px solid blue",
        backgroundColor: "#2e1b68",
        color: "white",
        padding: "15px",
        borderRadius: "10px",
        transition: "transform 0.3s ease-in-out",
        cursor: "pointer",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.1)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
      }}
    >
          <h3
            className="fw-bold mb-2 fs-5 text-center"
            style={{ backgroundColor: "#2e1b68" }}
          >
            Deeper Skillset
          </h3>
          <p
            className="mb-0 fs-6 lh-base px-1"
            style={{ backgroundColor: "#2e1b68" }}
          >
            Strong in front-end development using HTML, CSS, JavaScript,
            Bootstrap, and React. Hands-on experience in building full-stack
            applications using Java, PostgreSQL, and Spring Boot. Quick learner,
            always eager to explore new technologies and improve problem-solving
            skills.
          </p>
        </div>
      </div>
       
           <About/>
         </div>
  );
};

export default Home;
