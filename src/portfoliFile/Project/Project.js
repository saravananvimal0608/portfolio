import Youtube from "./youtubue.png";
import Food from "./food.jpg";
import Evoting from "./Voting.jpg";
import Nav from "../Navfile/Nav";
import About from "../Components/AboutUs";

const Project = () => {
  return (
    <div className="text-center" >
      <Nav />
      <div className="cc w-50 mx-auto mb-4" style={{ border: "2px solid blue"}}>
        <img src={Youtube} alt="youtube img" className="cc w-50 "></img>
        <h3 className="cc text">Project 1</h3>
        <h5 className="cc text">Youtube Clone</h5>
      </div>

      <div className="cc w-50 mx-auto mb-4" style={{ border: "2px solid blue" }}>
        <img src={Food} alt="img" className="cc w-50 pt-5"></img>
        <h3 className="cc text">Project 2</h3>
        <h5 className="cc text">Restaraunt Website</h5>
      </div>

      <div className="cc w-50 mx-auto mb-4" style={{ border: "2px solid blue" }}>
        <img src={Evoting} alt="img" className="cc w-50 pt-5"></img>
        <h3 className="cc text">Project 3</h3>
        <h5 className="cc text">E Voting System</h5>
      </div>

      <About/>

    </div>
  );
};
export default Project;
