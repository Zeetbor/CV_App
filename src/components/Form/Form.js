import React, {Component} from "react";
import PersonalInfo from "./PersonalInfo.js"
import Experience from "./Experience.js"
import Education from "./Education.js"

class Form extends Component {
  // constructor(props){
  //   super(props);
  //
  // };
  render() {
    const {
      inputChange,
      firstName,
      lastName,
      email,
      phone,
      city,
      role,
      summary,
      experience,
      education,
      experienceChange,
      addExperience,
      removeExperience,
      educationChange,
      addEducation,
      removeEducation
    } = this.props;

    return (
      <div>
        <form>
          <h2>Personal Information</h2>
          <PersonalInfo
            inputChange={inputChange}
            firstName={firstName}
            lastName={lastName}
            role={role}
            city={city}
            email={email}
            phone={phone}
            summary={summary}
          />
          <h2>Experience</h2>
          <Experience
            experienceChange={experienceChange}
            experience={experience}
            addExperience={addExperience}
            removeExperience={removeExperience}
          />
          <h2>Education</h2>
          <Education
            education={education}
            educationChange={educationChange}
            addEducation={addEducation}
            removeEducation={removeEducation}
          />
        </form>
        <button type="submit">Confirm</button>
      </div>
    )
  }
}

export default Form;
