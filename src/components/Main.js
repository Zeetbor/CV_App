import React, {Component} from "react";
import Form from "./Form/Form.js";
import Preview from "./Preview/Preview.js";

class Main extends Component {
  constructor(props){
    super(props);

    this.state = {
      personalInfo: {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        city: '',
        summary: ''
      },
      experience: [],
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
    // this.setState({
    //   personalInfo: {
    //     [name]: value,
    //   }
    // })
  }

  render(){
    const {firstName} = this.state.personalInfo;
    return (
      <main>Main
        <div className="row">
          <div className="column">
            <Form
              inputChange={this.handleInputChange}
              firstName={firstName}
            />
          </div>
          <div className="column">
            <Preview
              inputChange={this.handleInputChange}
              firstName={firstName}
            />
          </div>
        </div>
      </main>
    )
  }
}

export default Main;
