import React from "react";

import map from "../Assets/Map.png"


export default function Card({item,id,coverImg,title,date,description, link, location}){
    return(
        <div className="card">
            <img src={item.coverImg} className="card--image"></img>

            <div className="card--detail">
                <img src={map} ></img>
                <span >{item.location}</span>
                <h1>{item.title}</h1>
                <h6>{item.date}</h6>
                <p>{item.description}</p>
            </div>
        </div>
    )
}
