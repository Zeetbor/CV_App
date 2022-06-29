import React, {Component} from "react";
import ExperienceFormItem from "./ExperienceFormItem";


class Experience extends Component {
  constructor(props){
    super(props)

  }


  handleRemoveExp = (e) => {
    e.preventDefault();
  }


  render() {

    const { experienceChange, experience } = this.props;
    return (
      <div>
        <ExperienceFormItem
          experienceChange={this.handleExperienceChange}
          experience={experience}
        />
      </div>
    )
  }
}

export default Experience;
