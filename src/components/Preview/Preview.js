import React, {Component} from "react";
import PersonalInfo from "./PersonalInfo.js"
import Experience from "./Experience.js"
import Education from "./Education.js"

class Preview extends Component {
  constructor(props){
    super(props);

  }

  render() {
    const { inputChange, firstName } = this.props;

    return (
      <div>Preview <h1>{firstName}</h1>
        <PersonalInfo />
        <Experience />
        <Education />
      </div>
    )
  }
}

export default Preview;
