import React from "react";


export const Card=(props)=>{
    return(
        <div className="cardl">
            <div className="image-cont">
                <img className="cardimage" src={props.image} alt="" />
            </div>
            <div className="card-lower d-grid">
                <div className="info-card">Info</div>
                <div className="price-card">₡{props.price}</div>
            </div>
        </div>
    )
}