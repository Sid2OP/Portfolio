import React,{Component} from "react";
class Car extends Component{
    constructor(){
        super();
        this.info={
            data:[
                {"name":"Audi","address":"pune"},
                {"name":"mercedise","address":"mumbai"},
                {"name":"lamborgini","address":"kolhapur"},
            ]
            
        }
        
    }
    render(){
        return(
            <div>
            <Carinfo/>
            <ul>
                {
                    this.info.data.map((item)=> <CarList data ={item}/>)
                }
            </ul>
            <ul>
                {
                    this.info.data.map((item1)=> <CarList1 data ={item1}/>)
                }
            </ul>
            </div>




        )
    } 

}

class Carinfo extends React.Component{
    render(){
        return(
            <h1>This is car information</h1>
        )
    }
        
}

class CarList extends React.Component{
    render(){
        return(
            <div>
            <ul>
                <li>{this.props.data.name}</li>
            </ul>
             
         </div>
        )
    }
}

class CarList1 extends React.Component{
    render(){
        return(
            <div>
            <ul>
                <li>{this.props.data.address}</li>
            </ul>
             
         </div>
        )
    }
}
export default Car