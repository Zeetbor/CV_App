import React, {Component} from "react";
import EducationPreviewItem from "./EducationPreviewItem";

class Education extends Component {
  render (){
    const {
      education
    } = this.props

    const educationItems = education.map((edu) => {
      return <EducationPreviewItem
        key={edu.id}
        university={edu.university}
        city={edu.city}
        degree={edu.degree}
        subject={edu.subject}
        grade={edu.grade}
        from={edu.from}
        to={edu.to}
      />
    })

    return (
      <div>
        <h2>Education</h2>
        {educationItems}
      </div>
    )
  }
}

export default Education;
