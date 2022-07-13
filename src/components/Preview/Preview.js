import React, {Component} from "react";
import PersonalInfo from "./PersonalInfo.js"
import Experience from "./Experience.js"
import Education from "./Education.js"

class Preview extends Component {
  // constructor(props){
  //   super(props);
  //   console.log("preview",props)
  // }

  render() {
    const { firstName, lastName, role, email, phone, city, summary, experience, education } = this.props;

    return (
      <div >
        <h2>{firstName} {lastName}</h2>
        <div className="row">
          <div className="column" id="prevInnerCol">

            <PersonalInfo
            role={role}
            city={city}
            email={email}
            phone={phone}
            summary={summary}
            />
            <Experience experience={experience}/>
            <Education education={education}/>
          </div>
        </div>
      </div>
    )
  }
}

export default Preview;
