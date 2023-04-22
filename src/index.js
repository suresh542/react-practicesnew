import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Add,Sub,Div,Mult} from "./partices/calculate"

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );


const DataHere = new Date(2023,2,1,14).getHours()
let gee = "";
let cssStyle={
}
if(DataHere >=1 && DataHere < 12){
gee = "Good Morning";
cssStyle.color = "#00FF00"
}
else if( DataHere >= 12 && DataHere < 17)
{
gee = "Good After"
cssStyle.color = "red"

}
else{
gee = "Good Night"
cssStyle.color = "orange"

}
ReactDOM.render(
 <div>
   <h1>Hello sir, <span style={cssStyle}>{gee}</span> 
  </h1>

  <div>
  <ol>
    <li>this is additional {Add(40,4)}</li>
    <li>this is subraction {Sub(40,4)}</li>
    <li>this is divition {Div(40,4)}</li>
    <li>this is Multiple {Mult(40,4)}</li>
  </ol>
  </div>
  < App />
 </div>,
  document.getElementById("root")
);