import React, { Component } from "react";
import "./Controlled.css"
class Controlled extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      address: '',
      dob: '',
      phoneNumber: '',
      gender: '',
    };

    this.changeName = this.changeName.bind(this);
    this.changeData = this.changeData.bind(this);
    this.changeAddress = this.changeAddress.bind(this);
    this.changeDOB = this.changeDOB.bind(this);
    this.changePhoneNumber = this.changePhoneNumber.bind(this);
    this.changeGender = this.changeGender.bind(this);
    this.submitData = this.submitData.bind(this);
  }

  changeName(event) {
    this.setState({ name: event.target.value });
  }
  changeData(event) {
    this.setState({ email: event.target.value });
  }

  changeAddress(event) {
    this.setState({ address: event.target.value });
  }


  changeDOB(event) {
    this.setState({ dob: event.target.value });
  }

  changePhoneNumber(event) {
    this.setState({ phoneNumber: event.target.value });
  }

  changeGender(event) {
    this.setState({ gender: event.target.value });
  }

  submitData(event) {
    event.preventDefault(); // Prevent the form from actually submitting (page reload)

    // Perform your login logic here, for now, let's just display an alert with the entered data
    const userData = {
      userID: this.state.userID,
      address: this.state.address,
      name: this.state.name,
      dob: this.state.dob,
      phoneNumber: this.state.phoneNumber,
      gender: this.state.gender,
    };

    alert("Form Submitted Successfully with the following data:\n" + JSON.stringify(userData, null, 2));
  }

  render() {
    return (
      <div>
        <center>
          <form onSubmit={this.submitData}>
            <h1>Login Form</h1>
           <div className="input-container"> <label htmlFor="">Name</label><input type="text" placeholder="Enter Name" value={this.state.name} onChange={this.changeName} /><br /><br /></div>
            <div className="input-container"> <label htmlFor="">EmailId</label><input type="text" placeholder="Enter EmailID" value={this.state.email} onChange={this.changeData} /><br /><br /></div>
            <div className="input-container"><label htmlFor="">Address</label><input type="text" placeholder="Enter Address" value={this.state.address} onChange={this.changeAddress} /><br /><br /></div>
            <div className="input-container"><label htmlFor="">DOB</label><input type="date" placeholder="Enter Date of Birth" value={this.state.dob} onChange={this.changeDOB} /><br /><br /></div>
            <div className="input-container"><label htmlFor="">PhoneNumber</label><input type="text" placeholder="Enter Phone Number" value={this.state.phoneNumber} onChange={this.changePhoneNumber} /><br /><br /></div>
            <div className="input-container"><label>Gender:</label>
            <select value={this.state.gender} onChange={this.changeGender}>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            <br /><br /></div>
            <input type="submit" value="Login" /><br /><br />
          </form>
        </center>
      </div>
    );
  }
}

export default Controlled;
