import React,{Component} from "react";
import ReactDOM  from "react-dom";
class ReactDOMNode extends Component{
    constructor(props){
        super(props);   

        this.findDOMNodeMethod1=this.findDOMNodeMethod1.bind(this)
        this.findDOMNodeMethod2=this.findDOMNodeMethod2.bind(this)
        this.findDOMNodeMethod3=this.findDOMNodeMethod3.bind(this)
    };
    findDOMNodeMethod1(){
        var redchange= document.getElementById('red1')
        ReactDOM.findDOMNode(redchange).style.color='red';
        
    }
    findDOMNodeMethod2(){
        var greenchange= document.getElementById('green1')
        ReactDOM.findDOMNode(greenchange).style.color='green';
    }
    findDOMNodeMethod3(){
        var bluechange= document.getElementById('blue1')
        ReactDOM.findDOMNode(bluechange).style.color='blue';
    }
    render(){
        return(
            <div>
                <h1 id="red1">Change to red</h1>
                <button onClick={this.findDOMNodeMethod1}>Changed To Red</button>
                <h1 id="green1">Change to green</h1>
                <button onClick={this.findDOMNodeMethod2}>Changed To Green</button>
                <h1 id="blue1">Change to blue</h1>
                <button onClick={this.findDOMNodeMethod3}>Changed To Blue</button>
            </div>
        )

        
    }
}
export default ReactDOMNode;