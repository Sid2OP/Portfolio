import React from "react";
class Person extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name1:"sid",
            height:"6ft",
            weight:"80kg",
            mobileno:"9307327339",
            emailid:"sid96@gmail.com",
            Qualification:"BE"

        }
    }
    render(){
        return(
            <div>
                <p>my name is {this.state.name1}</p>
                <p>my Qualification is {this.state.Qualification}</p>
                <p>my emailid is {this.state.emailid}</p>
                <p>my height is {this.state.height}</p>
                <p>my mobileno is {this.state.mobileno}</p>
                <p>my weight is {this.state.weight}</p>
            </div>
        )
        
    }
}
        
class Car1 extends Person{
    constructor(props){
        super(props);
        this.state={
            brand:"Lamnorgini",
            price:"3mil",
            color:"Black",
            topspeed:"300",
            gear:"auto",
            mileage:"10"
        }
    }

    render(){
        return(
            <div>
                <h1>THIS IS PERSON INFORMATION</h1>
                <Person/>
                <h1>THIS IS CAR INFORMATION</h1>
                <p>my car name is  {this.state.brand}</p>
                <p>mileage is  {this.state.mileage}</p>
                <p>color is  {this.state.color}</p>
                <p>gear is  {this.state.gear}</p>
                <p>price is  {this.state.price}</p>
                <p>topspeed is  {this.state.topspeed}</p>


            </div>
        )
    }

}
export default Car1;
