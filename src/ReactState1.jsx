import React from "react";
class Mobile extends React.Component{
    constructor(props){
        super(props);
        this.state={
            model:"Iphone15",
            price:"80000",
            colour:"Black",
            ram:"6"


        }
       
    }
    render(){
        return(
            <div>
            <h1>My model is {this.state.model}</h1>
            <h2>My iphone's price  is {this.state.price}</h2>
            <h2>My iphone's colour  is {this.state.colour}</h2>
            <h2>My iphone's ram  is {this.state.price}</h2>
            </div>
        )
    }
}

export default Mobile;