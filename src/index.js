import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import AppDemo from './AppDemo';
import FunctionalComponent from './FunctionalComponent';
import Car from './ClassComponent';
import ReactState from './ReactState';
import Mobile from './ReactState1';
import Car1 from './ReactState2';
import Person2 from './props';
import Constructor from './ReactConstructor';
import ForceUpdate from './ForceUpdate';
import ReactDOMNode from './ReactDomNode';
// import Uncontrolled from './UncontrolledComponent';
import UncontrolledComponentDemo from './UncontrolledComponent';
import Controlled from './Controlled';
import Event from './EventHandler';
import ConditionRendering from './ConditionalRendering';
import ReactReference from './ReactReference';

import App from './App';
import { Route,BrowserRouter, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import AboutUs from './Pages/AboutUs';
import ContactUs from './Pages/Blogs';
import Career from './Pages/Career';
import App1 from './App1';
import PageCounter from './eg/PageCounter';
import Icon from './Pages/icons';
import PageEffect from './eg/UseEffectPage';
// import DatePickerDemo from './eg/Datepicker';



//use react router to rout to use pages


// const mydata=(
//   <div>
//     <h1>Hii sid</h1>
//     <h2>ITE Course</h2>
//     <h3>python</h3>
//     <h4>java</h4>
//     <img src='../image/IMG_1146.jpeg' ></img>
//   </div>
// )

function DisplayCapital(){
  const show =()=>
  alert("Capital Of India is Delhi")

  return(
    <button onClick={show}>Capital</button>
  )
}

//react list

function Mobile1 (props) {
  return <li>{props.company}</li>

}
function MobileStore(){
  const store =['Iphone','Mi','Lenovo','Realme','Oneplus'];
  return(
    <div>
      <h1>List of Mobile</h1>
      <ul>
        {store.map((companyName)=> <Mobile1  company={companyName}/>)}
      </ul>
    </div>
  )
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <FunctionalComponent/> */}
    {/* <Car/> */}
    {/* <ReactState/> */}
    {/* <Mobile/> */}
    {/* <Car1/> */}
     {/* <Constructor/> */}
    {/* <Person2 />  */}
    {/* <ForceUpdate/> */}
    {/* <ReactDOMNode/> */}
    {/* <UncontrolledComponentDemo/> */}
     {/* <Controlled/> */}
    {/* <Event/>
    <DisplayCapital/>  */}
    {/* <ConditionRendering/> */}
    {/* <MobileStore/> */}
    <App/>
    {/* <PageCounter/> */}
    {/* <PageEffect/> */}
   {/* <DatePickerDemo/> */}
    {/* <Icon/> */}
    {/* <App1/> */}
    {/* <ReactReference/> */}
  </React.StrictMode>
  // mydata
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
