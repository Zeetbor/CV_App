import React, {Component} from "react";
import PersonalInfo from "./PersonalInfo.js"
import Experience from "./Experience.js"
import Education from "./Education.js"

class Form extends Component {
  constructor(props){
    super(props);

  };
  render() {
    const {inputChange, firstName} = this.props;

    return (
      <div>Form
        <form>
          <h2>Personal Information</h2>
          <PersonalInfo
            inputChange={inputChange}
            firstName={firstName}
          />
          <h2>Experience</h2>
          <Experience />
          <h2>Education</h2>
          <Education />
        </form>
        <button type="submit">Confirm</button>
      </div>
    )
  }
}

export default Form;
