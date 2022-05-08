import logo from "./logo.svg";
import "./App.css";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      description: "",
      gender: "",
      acceptTerms: false,
    };
  }
  handleSubmit = (event) => {
    event.preventDefault();
    alert(
      "User name: " +
        this.state.userName +
        "\n Description: " +
        this.state.description +
        "\n Gender: " +
        this.state.gender +
        "\n CheckBox: " +
        this.state.acceptTerms 
    );
  };
  handleChange=(event)=>{
    this.setState({
      [event.target.name]:event.target.type==='checkbox'?event.target.checked:event.target.value,
    });
  }
  // handleUsernameChange = (event) => {
  //   this.setState({ userName: event.target.value });
  // };
  // handleDescriptionChange = (event) => {
  //   this.setState({ description: event.target.value });
  // };
  // handleGenderChange = (event) => {
  //   this.setState({ gender: event.target.value });
  // };
  
  // handleAcceptTermsChange = (event) => {
  //   this.setState({ acceptTerms: event.target.checked });
  // };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text" name="userName"
            value={this.state.userName}
            onChange={this.handleChange}
          ></input>
        </div>
        <div>
          <label>Gender:</label>
          <select  name="gender" value={this.state.gender} onChange={this.handleChange}>
            <option>Choose</option>
            <option>Men</option>
            <option>Women</option>
          </select>
        </div>
        <div>
          <label>Description:</label>
          <textarea name="description"
            value={this.state.description}
            onChange={this.handleChange}
          ></textarea>
        </div>
        <div>
          <label>Accept Terms</label>
          <input name="acceptTerms" type="checkbox" checked={this.state.acceptTerms} onChange={this.handleChange}></input>
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
    );
  }
}

export default App;
