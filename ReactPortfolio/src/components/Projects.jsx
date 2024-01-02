import "./Projects.css";
import RSCImg from "../assets/RSCImg.png";
import RMGImg from "../assets/RMGImg.png";
import RCVImg from "../assets/RCVImg.png";

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
              <div className="toolsUsed"><h3>Tools used:</h3>HTML, CSS, JavaScript, React, React Testing Library</div>
              <div className="description"><h3>Description:</h3> Amazon style online shopping website. Uses React Router for navigating 
different pages, fetching from an API and using the API information to display the product data, and Context API for 
managing states/props.</div>
            </div>
            
          </div>

          <div className="projectBox container grid">
            <div className="projectTopBox">
              <h3 className="projectTitle">React Memory Game</h3>
              <a href="https://github.com/DevonRem/ReactMemoryGame" className="button buttonFlex">Github</a>
              <a href=" https://react-memory-game-theta.vercel.app/" className="button buttonFlex">Live</a>
              <img src={RMGImg} className="projectImg"></img>
            </div>
            <div className="projectBottomBox">
              <div className="toolsUsed"><h3>Tools used:</h3>HTML, CSS, JavaScript, React</div>
              <div className="description"><h3>Description:</h3> Memory card game built in React utilizing useEffect and state hooks, 
lifecycle methods, and asynchronous API calls.</div>
            </div>
            
          </div>


          <div className="projectBox container grid">
            <div className="projectTopBox">
              <h3 className="projectTitle">React CV App</h3>
              <a href="https://github.com/DevonRem/ReactCVApp" className="button buttonFlex">Github</a>
              <a href="https://react-cv-app-sable.vercel.app/" className="button buttonFlex">Live</a>
              <img src={RCVImg} className="projectImg"></img>
            </div>
            <div className="projectBottomBox">
              <div className="toolsUsed"><h3>Tools used:</h3>HTML, CSS, JavaScript, React</div>
              <div className="description"><h3>Description:</h3> CV application that takes a set of user info and uses it to create a CV. This 
is accomplished using components, states, and props. This is my first project using React.</div>
            </div>
            
          </div>

        </div>
  
      </>
    )
  }
  
  export default Projects
  