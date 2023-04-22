import './App.css';
import CardNet from './partices/card';
import nData from "../src/partices/nData"
import MatchGame from './partices/matchGame';
import CountBtn from './partices/Hooks/countBtn';
import DateAndTime from "./partices/Hooks/DateandTime"
import OnClickEvent from "./partices/Events/OnclickEvent"
import NameChange from './partices/Events/namechange';
import TodoList from './partices/todo app/Todo';
import Accordion from './partices/According/Accorden';

// import ElementSelected from './partices/elemetshow';

const netf = "netflix";
// function NetfFun(){
//   if(netf === "netflix"){
//     return(
//       <CardNet
//       key={nData[0].id}
//       imgSrc={nData[0].imgSrc}
//       title={nData[0].title}
//       sName={nData[0].sName}
//       link="https://www.netflix.com/browse"
//     />
//     )
//   }
//   else{
//     return(
//       <CardNet
//       key={nData[4].id}
//       imgSrc={nData[4].imgSrc}
//       title={nData[4].title}
//       sName={nData[4].sName}
//       link="https://www.netflix.com/browse"
//     />
//     )
//   }
// }


function App() {

  return (
    <div className="App">
      {/* {nData.map(nCard)} */}
      {(netf === "netflix") ?

        <CardNet 
          key={nData[0].id}
          imgSrc={nData[0].imgSrc}
          title={nData[0].title}
          sName={nData[0].sName}
          link="https://www.netflix.com/browse"
        />
        :
        <CardNet
          key={nData[4].id}
          imgSrc={nData[4].imgSrc}
          title={nData[4].title}
          sName={nData[4].sName}
          link="https://www.netflix.com/browse"
        />}
      {/* <CardNet 
      imgSrc = {nData[0].imgSrc}
      title = {nData[0].title}
      sName = {nData[0].sName}
      link = "https://www.netflix.com/browse"
    />
        <CardNet 
      imgSrc = {nData[1].imgSrc}
      title = {nData[1].title}
      sName = {nData[1].sName}
      link = "https://www.netflix.com/browse"
    />
        <CardNet 
      imgSrc = {nData[2].imgSrc}
      title = {nData[2].title}
      sName = {nData[2].sName}
      link = "https://www.netflix.com/browse"
    />
        <CardNet 
      imgSrc = {img1}
      title = "Netflix Original series"
      sName = "Stranger Think"
      link = "https://www.netflix.com/browse"
    /> */}
      {/* <ElementSelected/> */}
      <MatchGame/>
      <CountBtn/>
      <DateAndTime/>
      <OnClickEvent/>
      <NameChange/>
      <TodoList/>
      <Accordion/>
    </div>
  );
}
export default App;