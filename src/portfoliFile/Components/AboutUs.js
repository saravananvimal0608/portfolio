import Button from "./Button";

const About = () => {
  return (
    <div id="about">
      <div id="abouts" className="text-center px-3 py-4">
        <h4 className="text-white">About us</h4>
        <div className="mx-auto" style={{ maxWidth: "500px" }}>
          <p className="text-white text-center">
            Completed Java Full Stack course with practical experience in Java,
            Spring Boot, HTML, CSS, JavaScript, React, and MySQL. <br />
            Strong foundation in object-oriented programming and web
            development. <br />
            Passionate about learning new technologies and building efficient
            applications.
          </p>
        </div>
      </div>

      {/*details*/}
      <div className=" d-flex justify-content-center flex-wrap gap-4">
        <div
          className="cc text-white"
          style={{ border: "2px solid blue"}}
        >
          <p className="cc" style={{ paddingLeft: "20px" }}>
            <strong className="cc">Name :</strong>
            Saravanan
          </p>
          <p className="cc" style={{  paddingLeft: "20px" }}>
            <strong className="cc">Email :</strong>
            saravananvimal0608@gmail.com
          </p>
          <p className="cc" style={{  paddingLeft: "20px" }}>
            <strong className="cc">Mobile No :</strong>
            8838144554
          </p>
        </div>

        <div
          className="cc text-white"
          style={{ border: "2px solid blue" }}
        >
          <p className="cc" style={{ paddingLeft: "20px" }}>
            <strong className="cc">Address :</strong>
            Zamin Pallavaram Chennai-43
          </p>
          <p className="cc" style={{ paddingLeft: "20px" }}>
            <strong className="cc">Degree :</strong>
            Bachelor Of Computer Application
          </p>
          <p className="cc" style={{ paddingLeft: "20px" }}>
            <strong className="cc">
              Certification :
            </strong>{" "}
            Java Full Stack
          </p>
        </div>
      </div>

      <Button/>
    </div>
  );
};
export default About