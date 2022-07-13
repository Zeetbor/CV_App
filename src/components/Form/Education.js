import React, {Component} from "react";
import EducationFormItem from "./EducationFormItem";

class Education extends Component {

  render (){
    const {
      education,
      educationChange,
      addEducation,
      removeEducation
    } = this.props;

    const educationItems = education.map((edu) => {
      return <EducationFormItem
        key={edu.id}
        id={edu.id}
        education={education}
        educationChange={educationChange}
        addEducation={addEducation}
        removeEducation={removeEducation}
      />
    })

    return (
      <div>
      {education.length > 0 ? educationItems : ""}
      <button type="button" onClick={addEducation}>Add</button>
      </div>
    )
  }
}

export default Education;
