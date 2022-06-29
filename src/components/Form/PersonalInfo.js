import React, {Component} from "react";

class PersonalInfo extends Component {
  render(){
    const {inputChange, firstName} = this.props;
    return (
      <fieldset>
        <label>First Name</label><br/>
        <input type="text" name="firstName" placeholder="First Name" onChange={inputChange}></input><br/>
        <label>Last Name</label><br/>
        <input></input><br/>
        <label>Email</label><br/>
        <input></input><br/>
        <label>Phone</label><br/>
        <input></input><br/>
        <label>City</label><br/>
        <input></input><br/>
        <label>Summary</label><br/>
        <input></input><br/>
      </fieldset>
    )
  }
}

export default PersonalInfo;
