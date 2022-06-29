import React, {Component} from "react";
import EducationFormItem from "./EducationFormItem";

class Education extends Component {
  constructor(){
    super();
    this.state = {
      school: '',
      degree: '',
      grade: '',
      startDate: '',
      endDate: '',
      grade: '',
      education: [

      ]
    }
  }
  render (){
    return (
      <div>
        <EducationFormItem />
      </div>
    )
  }
}

export default Education;
