import React, {Component} from "react";

class ExperienceFormItem extends Component {
  render(){
    return (
      <div>
      <fieldset>
        <label>Position</label><br/>
        <input></input><br/>
        <label>Company Name</label><br/>
        <input></input><br/>
        <label>City</label><br/>
        <input></input><br/>
        <label>From</label><br/>
        <input></input><br/>
        <label>To</label><br/>
        <input></input>
        </fieldset>
        <button>Add</button>
        <button>Remove</button>
      </div>
    )
  }
}

export default ExperienceFormItem;
