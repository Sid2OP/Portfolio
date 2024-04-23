import React, {Component} from "react";
import "./UncontrolledComponent.css";
class UncontrolledComponentDemo extends Component{
    constructor(props){
        super(props);
        this.displayFormContent = this.displayFormContent.bind(this);
        this.input = React.createRef();

    }

    displayFormContent(){
        alert("Your form has been submitted successfully");
    }
    render(){
        return(
            <div>
                <center>
                <form action="#" onSubmit={this.displayFormContent}>

                    <h2>Person Basic Information</h2><br/>
                    <input type="text" ref={this.input} placeholder="Enter First Name" /><br/>
                    <br></br>
                    <input type="text" ref={this.input} placeholder="Enter Last Name" /><br/>
                    <br></br>
                    <input type="email" ref={this.input} placeholder="Enter You Email id" /><br/>
                    <br></br>
                    <input type="text" ref={this.input} placeholder="Enter Mobile Number" /><br/>
                    <br></br>
                    <textarea name="Address" id="address" cols="30" rows="10" ref={this.textarea} placeholder="Enter your address"></textarea><br/>
                    <br></br>
                    <input type="submit" value="Submit" />

                 </form>
                 </center>
            </div>
        );
    }
}
export default UncontrolledComponentDemo;