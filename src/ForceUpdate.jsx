import React,{Component} from "react";
class ForceUpdate extends Component{
    constructor(props){
        super(props);

    }
    ForceUpdateFunction = () =>{
        this.forceUpdate();
    };
    render(){
        return(
            <div>
                <h1>Random Number</h1>
                <h3>Random number : {Math.random()}</h3>
                <button onClick={this.ForceUpdateFunction}>Force Update</button>
            </div>
        )
    }
}
export default ForceUpdate