import React, { useState } from "react";
import "./todo.css"

export default function TodoList() {
    const [allShowItem, setAllItem] = useState("")
    const [itemList, setItemList] = useState([])
    const allItem = (event) => {
        setAllItem(event.target.value)
    }
    const ItemSelected = () => {
        setItemList((Data1) => {
            return [...Data1, allShowItem];
        });
        setAllItem("");
    }
    const deleteItem=()=>{
        console.log("deleted")
       
    }
    return (
        <div>
            <div className="mainPage" style={{ backgroundColor: "#1E90FF" }}>
                <div className="borf m-5 " style={{ width: "300px", height: "500px", backgroundColor: "#ffff", boxShadow: "3px 13px 10px solid #0000" }}>
                    <div className="text-center ToDoList " id="ToDoList" style={{ backgroundColor: "#8A2BE2" }}>
                        ToDo
                    </div>
                    <div className="m-5 d-flex" >
                        <input type="text" id="TodoInput" placeholder="Add item Here" value={allShowItem} onChange={allItem} />
                        <button className="ms-3" style={{ border: "none", backgroundColor: "transparent", textAlign: "center", width: "auto", borderRadius: "19px" }} onClick={ItemSelected}>
                            <i class="fa-solid fa-circle-plus " id="icons"></i>
                        </button>
                    </div>
                    <div className="showtheList">
                        <ul className="list-unstyled">
                            {itemList.map((interVal,index) => {
                                return (
                                    <div style={{display:"flex"}}>
                                    <i class="fa-solid fa-circle-xmark " id="icons" key={index} onClick={()=>{deleteItem(interVal.id)}}></i>
                                    <li className="ms-3" style={{fontSize:"20px"}} id={index} > {interVal}</li>
                                    </div>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
            <div>
            </div>
        </div>
    )
}