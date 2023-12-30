import "./Projects.css";
import RSCImg from "../assets/RSCImg.png";

function Projects() {


    return (
      <>
  
        <div className="projects" id="projects">
          <h2 className="sectionTitle">Projects:</h2>
          <div className="sectionSubtitle">Recent work:</div>

          <div className="projectBox container grid">
            <div className="projectTopBox">
              <h3 className="projectTitle">React Shopping Cart</h3>
              <a href=" https://github.com/DevonRem/ReactShoppingCart" className="button buttonFlex">Github</a>
              <a href="https://react-shopping-cart-opal.vercel.app/" className="button buttonFlex">Live</a>
              <img src={RSCImg} className="projectImg"></img>
            </div>
            <div className="projectBottomBox">
              <div className="toolsUsed">Tools used:HTML, CSS, JavaScript, React</div>
              <div className="description">Description: </div>
            </div>
            
          </div>

        </div>
  
      </>
    )
  }
  
  export default Projects
  