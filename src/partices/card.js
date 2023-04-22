import React from "react";
import "./card.css";

function CardNet(props){
    return(
        <div className="MainpageCard">
            <div className="cards" id="">
                <div className="card"id="" >
                    <img src={props.imgSrc} id="" href={props.link} alt="" className="card_img" />
                    <div className="card_info" id="">
                        <span className="card-cat" id="sName">
                            {props.sName}
                        </span>
                        <h3 className="cardTitle" id="">
                            {props.title}
                        </h3>
                        <a href={props.link}>
                            <button className="btn btn-outline-danger" id="">
                                Watch Now   
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CardNet;