import React, {Component} from "react";

class PersonalInfo extends Component {
  render(){
    const {inputChange, firstName} = this.props;
    return (
      <fieldset>
        <label>First Name</label><br/>
        <input type="text" name="firstName" placeholder="First Name" onChange={inputChange}></input><br/>
        <label>Last Name</label><br/>
        <input type="text" name="lastName" placeholder="Last Name" onChange={inputChange}></input><br/>
        <label>Role</label><br/>
        <input type="text" name="role" placeholder="Role" onChange={inputChange}></input><br/>
        <label>City</label><br/>
        <input type="text" name="city" placeholder="City" onChange={inputChange}></input><br/>
        <label>Email</label><br/>
        <input type="email" name="email" placeholder="Email" onChange={inputChange}></input><br/>
        <label>Phone</label><br/>
        <input type="tel" name="phone" placeholder="Phone" onChange={inputChange}></input><br/>
        <label>Summary</label><br/>
        <textarea type="text" name="summary" placeholder="Summary" onChange={inputChange}></textarea><br/>
      </fieldset>
    )
  }
}

export default PersonalInfo;
