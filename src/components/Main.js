import React, {Component} from "react";
import Form from "./Form/Form.js";
import Preview from "./Preview/Preview.js";
// import "../styles/reset.css"
import "../styles/main.css"


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
          from: "August 1997",
          to: "Present"
        },
      ],
      education: [
        {
          id: "1g72oafvb0bdfa96c05a4eg",
          university: "UCL",
          city: "London",
          degree: "Building Studies",
          grade: "First Class",
          from: "Sept 1994",
          to: "July 1997"
        }
      ]
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
    const prevState = this.state;
    this.setState({
      ...prevState,
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
    const prevState = this.state
    const newExp = prevState.experience.filter(
      (exp) => exp.id !== id
    )
    console.log(newExp)
    this.setState(
      { ...prevState, experience: [...newExp] }
    )
  }

  //Education Handlers

  handleEducationChange = (e, id) => {
    const { name, value } = e.target;
    const prevState = {...this.state}
    const education = prevState.education.map((edu) => {
      if(edu.id === id){
        return  {...edu, [name]: value}
      }
      return edu;
    })
    this.setState({
      education
    })
  }

  handleAddEducation = () => {
    const prevState = this.state;
    this.setState({
      ...prevState,
      education: [
        ...prevState.education,
        {
          id: this.uid(),
          university: "",
          city: "",
          degree: "",
          subject: "",
          from:"",
          to: ""
        }
      ]
    })
  }

  handleRemoveEducation = (id) => {
    const prevState = this.state
    const newEdu = prevState.education.filter(
      (edu) => edu.id !== id
    )
    console.log(newEdu)
    this.setState(
      { ...prevState, education: [...newEdu] }
    )
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
              educationChange={this.handleEducationChange}
              addEducation={this.handleAddEducation}
              removeEducation={this.handleRemoveEducation}
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
