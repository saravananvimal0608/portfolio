import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import About from "./AboutUs";
import { Link } from "react-router-dom";

const Project = () => {
  return (
    <div className="text-center">

      <div className="d-flex flex-column justify-content-center align-items-center gap-5">
        <Link className="text-decoration-none col-10 col-md-6 " to="https://real-estate-website-lemon-two.vercel.app/">
          <div className="skill-set-box">
            <DotLottieReact
              src="https://lottie.host/a3898ff0-7982-4341-ba39-0d784b7ee729/pQA48mn3rD.lottie"
              loop
              autoplay
              style={{ width: 250, height: 250, margin: "0 auto" }}
            />
            <h3 className="text">Project 1</h3>
            <h5 className="text">Real-Estate Website</h5>
          </div>
        </Link>

        <Link className="text-decoration-none col-10 col-md-6 " to="https://ecommerce-front-end-awfi.vercel.app/">
          <div className="skill-set-box">
            <DotLottieReact
              src="https://lottie.host/0092b39a-e9cd-4bbb-bc24-6c44d878272e/VsxdpwnvJs.lottie"
              loop
              autoplay
              style={{ width: 250, height: 250, margin: "0 auto" }}
            />
            <h3 className="text">Project 2</h3>
            <h5 className="text">E-Commerce Website</h5>
          </div>
        </Link>

        <Link className="text-decoration-none col-10 col-md-6 " to="https://myapp-gilt-six.vercel.app/">
          <div className="skill-set-box">
            <DotLottieReact
              src="https://lottie.host/b5e12307-f08b-4e04-94fe-04cc63539629/mZerJnfZ5X.lottie"
              loop
              autoplay
              style={{ width: 250, height: 250, margin: "0 auto" }}
            />
            <h3 className="text">Project 3</h3>
            <h5 className="text">YouTube Clone</h5>
          </div>
        </Link>

        <Link className="text-decoration-none col-10 col-md-6">
          <div className="skill-set-box">
            <DotLottieReact
              src="https://lottie.host/f0bd4602-7af3-49a4-85f3-ea6bd4cb7eb9/3sbcxCBFPc.lottie"
              loop
              autoplay
              style={{ width: 250, height: 250, margin: "0 auto" }}
            />
            <h3 className="text">Project 4</h3>
            <h5 className="text">Portfolio</h5>
          </div>
        </Link>
      </div>

      <About />

    </div>
  );
};

export default Project;
