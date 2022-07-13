import React, {Component} from "react";

class EducationFormItem extends Component {

  render(){
    const {
      educationChange,
      removeEducation,
      id
    } = this.props;

    return (
      <div>
        <fieldset>
          <label>University Name</label><br/>
          <input type="text" name="university" placeholder="University" onChange={(e) => educationChange(e, id)}></input><br/>
          <label>City</label><br/>
          <input type="text" name="city" placeholder="City" onChange={(e) => educationChange(e, id)}></input><br/>
          <label>Degree</label><br/>
          <input type="text" name="degree" placeholder="Degree" onChange={(e) => educationChange(e, id)}></input><br/>
          <label>Subject</label><br/>
          <input type="text" name="subject" placeholder="Subject" onChange={(e) => educationChange(e, id)}></input><br/>
          <label>Grade</label><br/>
          <input type="text" name="grade" placeholder="Grade" onChange={(e) => educationChange(e, id)}></input><br/>
          <label>From</label><br/>
          <input type="text" name="from" placeholder="From" onChange={(e) => educationChange(e, id)}></input><br/>
          <label>To</label><br/>
          <input type="text" name="to" placeholder="To" onChange={(e) => educationChange(e, id)}></input>
          <button id={id} type="button" onClick={(e) => removeEducation(id)}>Remove</button>
        </fieldset>
      </div>
    )
  }
}

export default EducationFormItem;
