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
        {
          id: "1g72oafvb0bdfa96c05a4ef",
          position: "Builder",
          company: "Build Inc",
          city: "Buildsville",
          from: "May 2014",
          to: "Present"
        },
      ],
      education: []
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
    const prevState = {...this.state}
    const experience = prevState.experience.map((exp) => {
      if(exp.id === id){
        return  {...exp, [name]: value}
      }
      return exp;
    })
    this.setState({
      experience
    })
  }

  handleAddExperience = () => {
    const prevState = {...this.state};
    this.setState({
      prevState,
      experience: [
        ...prevState.experience,
        {
          id: this.uid(),
          position: "",
          company: "",
          city: "",
          from: "",
          to: ""
        }
      ]
    })
  }

  handleRemoveExp = (id) => {
    const prevState = {...this.state}
    const newExp = prevState.experience.filter(
      (exp) => exp.id !== id
    )
    this.setState({
      ...prevState, experience: [newExp]
    })
  }

  uid = () =>
  String(
    Date.now().toString(32) +
      Math.random().toString(16)
  ).replace(/\./g, '');


  render(){
    const {firstName, lastName, role, email, phone, city, summary} = this.state.personalInfo;
    const {experience, education} = this.state;
    return (
      <main>
        <div className="row">
          <div className="column" id="formCol">
            <Form
              inputChange={this.handleInputChange}
              experienceChange={this.handleExperienceChange}
              addExperience={this.handleAddExperience}
              removeExperience={this.handleRemoveExp}
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
          <div className="column" id="prevCol">
            <Preview
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
