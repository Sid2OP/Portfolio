import React,{Component} from "react";
class ReactReference extends Component{
   constructor(props){
    super(props)
    this.refCall=React.createRef();
    this.reactReferenceInput=this.reactReferenceInput.bind(this);

   }
   reactReferenceInput(){
    this.refCall.current.focus();
   }

   render(){
    return(
        <div>
            <h1>React Reference Demo</h1>
            <input type="text" ref={this.refCall} /><br />
            <button type="button" value="Input Text" onClick={this.reactReferenceInput}></button>
        </div>
    )
   }
   

}

export default ReactReference

