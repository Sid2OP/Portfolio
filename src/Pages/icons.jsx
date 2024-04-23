import  React,{ Component } from 'react';
import {FaHeart,FaAddressBook,FaAirFreshener} from 'react-icons/fa'

class Icon extends Component{
    render(){
        return(
            <div >
                <FaHeart style={{width:1000, height:100}}/>
                <FaAirFreshener style={{width:1000, height:100}}/>
                {/* <FontAwesomeIcon icon="fa-brands fa-facebook-f" /> */}
            </div>
        )
    }

}

export default Icon