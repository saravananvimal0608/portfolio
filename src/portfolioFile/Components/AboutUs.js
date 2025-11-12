
const About = () => {
  return (
    <div id="about" className="pb-5">

      <div className="text-center px-3 py-4">
        <h4 className="text-white">About us</h4>
        <div >
          <p className="text-white ">
            Worked as a <b>MERN Stack Intern</b> with hands-on experience in
            <b> React.js, Node.js, Express.js,</b> and <b>MongoDB</b>.<br />
            Developing and maintaining full stack projects with <b>responsive UI</b> and
            optimized performance.<br />
            Gaining backend experience in <b>API development, authentication,</b> and <b>database management</b> while building scalable web applications.
          </p>
        </div>
      </div>

      <div className=" d-flex justify-content-center flex-wrap gap-4">

        <div
          className=" text-white skill-set-box col-12 col-md-7 col-xl-4">
          <p className="px-4">
            <strong className="">Name : </strong>
            Saravanan
          </p>
          <p className="px-4">
            <strong className="">Email : </strong>
            <a href="mailto:saravananvimal0608@gmail.com" className="text-white text-decoration-none">saravananvimal0608@gmail.com</a>
          </p>
          <p className="px-4">
            <strong className="">Mobile : </strong>
            <a href="tel:8838144554" className="text-white text-decoration-none">8838144554</a>
          </p>
          <p className="px-4">
            <strong className="">Resume : </strong>
            <a href="/SARAVANAN-VIMAL-RESUME.pdf" className="text-white text-decoration-none">SARAVANAN-VIMAL-RESUME</a>
          </p>
        </div>

        <div
          className=" text-white skill-set-box col-12 col-md-7 col-xl-5">
          <p className="px-4" >
            <strong className="">Address : </strong>
            Zamin Pallavaram Chennai-43
          </p>
          <p className="px-4" >
            <strong className="">Degree : </strong>
            Bachelor Of Computer Application
          </p>
          <p className="px-4" >
            <strong className="">
              Certifications : </strong>
            Mern Stack Intern, Java Full Stack, Java Training
          </p>
        </div>
        
      </div>
    </div>
  );
};
export default About