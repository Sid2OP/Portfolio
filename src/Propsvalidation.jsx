import React ,{Component} from "react";
import PropTypes from 'prop-types';
class PropsValidation extends  React.Component{
    render(){
        return(
            <div>
                <h1>Empolye Validation Demo</h1>
                <table>
                    <tr>
                        <th>Type</th>
                        <th>Value</th>
                        <th>Validation</th>

                    </tr>
                    <tr>
                        
                        <td>Array</td>
                        <td>{this.props.propArray}</td>
                        <td>{this.props.propArray?"This is an array":"this is not an array"}</td>
                    </tr>
                </table>
            </div>

            
        )
    }

}

PropsValidation.PropTypes={
    propArray:PropTypes.array.isRequired,
    propBool:PropTypes.bool.isRequired,
    propString:PropTypes.string.isRequired,
    propFunc:PropTypes.func,
    prop:PropTypes.number.isRequired
}

PropsValidation.defaultProps={
    propArray:[1,2,3,4,5,6,7,8,9,10],
    propBool:null,
    propString:"IEC,Pune",
    propFunc: function(a,b){
        return a+b
    },
    propNumber:40


}