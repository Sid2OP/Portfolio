import { render } from "@testing-library/react";
import React,{Component} from "react";
import styles from './App1.module.css'


function App1 (){
    
        return(
            <div>
                <h1 className={styles.header}>
                    Hi There Myself Siddharth
                </h1>       
                <h2 className= {styles.paragraph}>
                    Currently im at Pune
                </h2>   
            </div>

        )
    }
    export default App1;
    
