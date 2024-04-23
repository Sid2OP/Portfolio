
import React,{Component} from "react"

class FunctionalComponent extends React.Component{
    render(){
        return(
            <div>
                <Employe/>

            </div>
        )
    }
}

class Employe extends React.Component{
    render(){
        return(
            <div>
                <h1>Heloo world</h1>
                <h2>Lets play games</h2>
                <a href="http://www.google.com"> Google</a>
            </div>
        )
        

        
    }
}

export default FunctionalComponent;
