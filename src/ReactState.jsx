import React from "react";
class ReactState extends React.Component{
    constructor(){
        super();
        this.state=  {show:true}  
    }
    render(){
        const b=this.state.show ? (
            <div>
                <h1>Welcome to react state</h1>
            </div>
        ):(
            <div>
                <h1>Error</h1>
            </div>
        )

        

        return(
            <div>
                <h1>Hello everyone</h1>
                {b}
            </div>
        );

    }
   
}
export default ReactState;