import React from "react";
import Globe from "../Assets/Globe.png"

 export default function Navbar(){
    return(
        <nav>
            <img src={Globe} className="nav--logo"></img>
            <h6 className="nav--title">my travel journal</h6>
        </nav>
    )
 }