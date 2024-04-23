import React,{Component} from "react";
function InfoMessage(props){
    if (props.isLoggedIn) {
        return <h2>Welcome Back . Your Logged In.</h2>;
        
    }
    else{
        return <h2>Please Login First </h2>;
    }

}

function LoginInfo(props){
    return(
        <button onClick={props.clickInfo}>Login</button>
    )

}
function LogoutInfo(props){
    return(
        <button onClick={props.clickInfo}  > Logout</button>
    )

}

class ConditionRendering extends  Component{
    constructor(props){
        super(props);
        this.handleLogin=this.handleLogin.bind(this)
        this.handleLogout=this.handleLogout.bind(this)
        this.state={isLoggedIn:false}
    }

    handleLogin(){
        this.setState({isLoggedIn:true});

    }

    handleLogout(){
        this.setState({isLoggedIn:false});
    }

    render(){
        return(
            <div>
                <h1>Login Module</h1>
                <InfoMessage isLoggedIn={ this.state.isLoggedIn}/>
                {
                    (this.state.isLoggedIn)?(
                        <LogoutInfo clickInfo={this.handleLogout}/>
                    ):(
                        <LoginInfo clickInfo={this.handleLogin}/>
                    )

                }
            </div>
        )
    }





}
export default ConditionRendering