import React    from "react";
class College extends React.Component{
    constructor(){
        this.state={
            loc:"Pune",
            grade:"A+",
            name:"trinity",
            Area:"110acre"



        }
        
    }
    render(){
        return(
            <div>
                <h1>my college name is {this.state.name}</h1>
            </div>
        )
    }
}