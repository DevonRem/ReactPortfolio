import "./About.css";
import AboutImg from "../assets/me.jpg";

function About() {


    return (
      <>
  
        <div className="about section" id="about">
          <h2 className="sectionTitle">About me</h2>
          <div className="sectionSubtitle"></div>


          <div className="aboutContainer container grid">
            <img src={AboutImg} alt="" className="aboutImg"></img>

            <div className="aboutData">
              <p className="aboutDescription">Hi! My name is Devon Reminick and I love building software. I got my start in Computer Science at Hofstra University learning about algorithms and data structures, object oriented programming, and working on projects with other students and friends using Python, C++, and Java. I spent a lot of my free time developing Unity games with C# and tutoring younger students. Recently, I have been dedicating my time towards learning front-end web development using HTML, CSS, Javascript, and React. Currently, I am learning NodeJS, MongoDB, and Express to round out my skillset as a full-stack developer. Thank you for taking the time to read!</p>

              <a href="https://drive.google.com/file/d/1X3cVeQUkj31p5-tz-j3KDRf1TTr-PNyJ/view" className="button buttonFlex">Resume</a>
            </div>
          </div>
        </div>
  
      </>
    )
  }
  
  export default About
  