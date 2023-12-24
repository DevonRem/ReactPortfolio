import "./Skills.css";

function Skills() {


    return (
      <>
  
        <div className="skills section" id="skills">
            <h2 className="sectionTitle">Skills</h2>
            <div className="sectionSubtitle">The tools I use</div>

            <div className="skillsContainer container grid">
                <div className="skillsContent">
                    <h3 className="skillsTitle"></h3>

                    <div className="skillsBox">
                        <div className="skillsGroup">
                            <div className="skillsData">
                                <i className="uil uil-html5">HTML </i>
                                <i className="uil uil-css3-simple">CSS </i>
                                <i className="uil uil-java-script">Javascript </i>
                                <i className="uil uil-react">React </i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  
      </>
    )
  }
  
  export default Skills