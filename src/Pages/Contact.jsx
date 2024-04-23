import React,{Component} from "react";
import './contact.css'
class  ContactUs  extends Component{
    render(){
        return(
            <div>
                <h1>This is a Contact excution</h1>
                <form class="header">
                    <h1 class="h1"> ContactUs</h1>
                    <label htmlFor="Name">Name: <input type="text" placeholder="Name" /></label>
                    <label> Your Number : <input type="text"  placeholder="number" maxLength={10}/></label>
                    <label> Your MailId : <input type="mail"  placeholder="mailid" /></label>
                    <button>Submit</button>
                </form>
                
            </div>
        
        );
        
    }
}
export default  ContactUs ;