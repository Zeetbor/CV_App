import React, {Component} from "react";
import ExperiencePreviewItem from "./ExperiencePreviewItem";


class Experience extends Component {
  constructor(props){
    super(props)
    console.log("Experience", props.experience)
  }

  render() {

    const {experience} = this.props;

    const experienceItems = experience.map((exp) => {
      
      return <ExperiencePreviewItem
        key={exp.id}
        position={exp.position}
        company={exp.company}
        city={exp.city}
        from={exp.from}
        to={exp.to}
      />
    })


    return (
      <div>
        <h2>Experience</h2>
        {experienceItems}
      </div>
    )
  }
}

export default Experience;
