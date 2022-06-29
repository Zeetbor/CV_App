import React, {Component} from "react";

class PersonalInfo extends Component {
  render(){
      const { inputChange, role, city, email, phone, summary } = this.props;
    return (
      <div>
      <h2>Personal Details</h2>
      <h3>{role}</h3><h3>{city}</h3>
        {email}<br/>
        {phone}<br/>
        {summary}<br/>
      </div>

    )
  }
}

export default PersonalInfo;
