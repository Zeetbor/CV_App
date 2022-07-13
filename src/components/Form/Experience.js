import React, {Component} from "react";
import ExperienceFormItem from "./ExperienceFormItem";


class Experience extends Component {

  handleRemoveExp = (e) => {
    e.preventDefault();
  }

  render() {
    const { experienceChange, experience, addExperience, removeExperience } = this.props;
    const experienceItems = experience.map((exp) => {
      return <ExperienceFormItem
        key={exp.id}
        id={exp.id}
        experienceChange={experienceChange}
        experience={experience}
        removeExperience={removeExperience}
      />
    })
    return (
      <div>
        {experience.length > 0 ? experienceItems : ""}
        <button type="button" onClick={addExperience}>Add</button>
      </div>
    )
  }
}

export default Experience;
