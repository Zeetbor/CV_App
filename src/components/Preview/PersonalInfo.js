import React, {Component} from "react";

class PersonalInfo extends Component {
  render(){
      const { role, city, email, phone, summary } = this.props;
    return (
      <div id="personalInfoPrev">
        <h2>{role} - {city}</h2>
          {email} - {phone}<br/>
          <p>{summary}</p><br/>
          <hr />
      </div>

    )
  }
}

export default PersonalInfo;
