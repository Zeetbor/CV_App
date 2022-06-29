import React, {Component} from "react";
import Form from "./Form/Form.js";
import Preview from "./Preview/Preview.js";


class Main extends Component {
  constructor(props){
    super(props);

    this.state = {
      personalInfo: {
        firstName: 'Bob',
        lastName: 'Boulder',
        role: 'Builder',
        email: 'bob@builder.com',
        phone: '07785469123',
        city: 'Boston',
        summary: 'Bob the builder, can he fix it? Yes he can!'
      },
      experience: [
        // school: "hello"
      ],
      eduction: []
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    const personalInfo = {...this.state.personalInfo}
    personalInfo[name] = value;
    console.log(name, value)
    this.setState({personalInfo})
  }

  handleExperienceChange = (e, id) => {
    const { name, value } = e.target;
    const experience = {...this.state.experience};
    console.log(name, value, id)
  }

  render(){
    const {firstName, lastName, role, email, phone, city, summary} = this.state.personalInfo;
    const {experience, education} = this.state;
    return (
      <main>
        <div className="row">
          <div className="column">
            <Form
              inputChange={this.handleInputChange}
              experienceChange={this.handleExperienceChange}
              firstName={firstName}
              lastName={lastName}
              role={role}
              email={email}
              phone={phone}
              city={city}
              summary={summary}
              experience={experience}
              education={education}
            />
          </div>
          <div className="column">
            <Preview
              inputChange={this.handleInputChange}
              experienceChange={this.handleExperienceChange}
              firstName={firstName}
              lastName={lastName}
              role={role}
              email={email}
              phone={phone}
              city={city}
              summary={summary}
              experience={experience}
              education={education}
            />
          </div>
        </div>
      </main>
    )
  }
}

export default Main;
