import React from "react";
class Person2 extends React.Component{
    
    render(){
        return(
            <div>
                <h1>Welcome to {this.props.name}</h1>
                <h2>trainning and developement</h2>
                <h3>Courses available</h3>
            </div>
        );
    }
}

Person2.defaultProps={
    name:"ITC,Pune"
}
export default Person2