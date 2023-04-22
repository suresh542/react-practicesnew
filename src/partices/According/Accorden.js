import React,{useState} from 'react'
import { dataDb } from './AccoDB'
import According1 from './According1';

const Accordion= ()=>{
    const [dataHere] = useState(dataDb);
        return(
            <>
             <section>
             <div className="main-div card text-center" style={{width:900}} >
             <h1 style={{border:"2px solid #fef08a", backgroundColor:"#fff7ed"}}>React js</h1>
             {
                    dataHere.map((eventsHere)=>{
                        const { id } = eventsHere;
                        return <According1 key={id} {...eventsHere}/>;
                })} 
             </div>
             </section>
            </>
        )
}
export default Accordion