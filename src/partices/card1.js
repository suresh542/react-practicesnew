import React from "react";
import "./card.css";

function CardNet1(props){
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
                        </h3> <br />
                        <a href={props.link}>
                            <button type="submit" className="btn-danger" id="">
                                Watch Now
                            </button>
                        </a>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CardNet1;