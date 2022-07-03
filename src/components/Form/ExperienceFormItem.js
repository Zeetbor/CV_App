import React, {Component} from "react";

class ExperienceFormItem extends Component {
  render(){
    const {experienceChange, removeExperience, id} = this.props;

    return (
      <div>
      <fieldset>
        <label>Position</label><br/>
        <input type="text" name="position" placeholder="Position" onChange={(e) => experienceChange(e, id)}></input><br/>
        <label>Company</label><br/>
        <input type="text" name="company" placeholder="Company" onChange={(e) => experienceChange(e, id)}></input><br/>
        <label>City</label><br/>
        <input type="text" name="city" placeholder="City" onChange={(e) => experienceChange(e, id)}></input><br/>
        <label>From</label><br/>
        <input type="text" name="from" placeholder="From" onChange={(e) => experienceChange(e, id)}></input><br/>
        <label>To</label><br/>
        <input type="text" name="to" placeholder="To" onChange={(e) => experienceChange(e, id)}></input>
        <button id={id} onClick={(e) => removeExperience(id)}>Remove</button>
        </fieldset>
      </div>
    )
  }
}

export default ExperienceFormItem;
