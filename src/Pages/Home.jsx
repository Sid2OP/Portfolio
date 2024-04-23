import React,{Component} from "react";
import shapee from './portfolio/shapee.png'
import removebg from './portfolio/removebg.png'
// import React from "react";   
import{
    Box,
    FooterContainer,
    FooterLink,
    Heading,
    Column,
    Row,

}from "./FooterStyles"
 
class Home extends Component{
    render(){
        return(
            <>
            <div class="detel">
            <h1>I'm Siddharth <span>Todkar</span></h1>
            <p>This is my official portfolio website to showes all 
               <br/> Details and work experiencs web development
            </p>
            {/* <!-- <a href="">DOWNLOAD CV</a> --> */}
        </div>
        <div class="image">
            <img src={shapee} class="shapee"/>

            <img src={removebg} class="sid"/>
        </div>

        <center>
            <Box>
                <h1 style={{
                    color:"orange",
                    textAlign:"center",
                    marginTop:"0px",
                    
                    // marginBottom:"5px"
                    paddingBottom:"10px"
                }}>

                    Siddharth Todkar
                    
                </h1>
                <FooterContainer>
                    <Row>
                        <Column>
                        <Heading>About Us</Heading>
                        <FooterLink href="#">
                            Aim
                        </FooterLink>
                        <FooterLink href="#">
                            Vision
                        </FooterLink>
                        <FooterLink href="#">
                            Mission
                        </FooterLink>
                        </Column>
                        <Column>
                        <Heading>Services</Heading>
                        <FooterLink href="#">
                            Writing
                        </FooterLink>
                        <FooterLink href="#">
                            Coding
                        </FooterLink>
                        <FooterLink href="#">
                            Teaching
                        </FooterLink>
                        </Column>
                        <Column>
                        <Heading>Social platform</Heading>
                        <FooterLink href="#">
                            facebook
                        </FooterLink>
                        <FooterLink href="#">
                            instagram
                        </FooterLink>
                        <FooterLink href="#">
                            Twitter
                        </FooterLink>
                        </Column>
                        <Column>
                        <Heading>Branches</Heading>
                        <FooterLink href="#">
                            Deccan
                        </FooterLink>
                        <FooterLink href="#">
                            Hadapsar
                        </FooterLink>
                        <FooterLink href="#">
                            Pmpri
                        </FooterLink>
                        </Column>
                    </Row>
                </FooterContainer>
            </Box>
        </center>
        </>

        );
    }
}
export default Home;