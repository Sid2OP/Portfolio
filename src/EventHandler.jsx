import React,{Component} from "react";
class Event extends Component{
    constructor(props){
        super(props)
        this.state={
            instituteName:''

        };
    }
    changeData(event){
        this.setState({
            instituteName:event.target.value
        });
    }
    render(){
        return( 
            <div>
                <h1>Change Event Example</h1>
                <label htmlFor="instituteName"> Enter Institute Name:</label>
                <input type="text" id="intituteName" onChange={this.changeData.bind(this)} />
                <h2> Entered Institute  Value is : {this.state.instituteName}</h2>
            </div>
        )
    }
}export default Event