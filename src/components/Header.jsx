import React from 'react'
import img from "../assets/Troll Face.png"
import '../App.css'


export default function Header() {
    return(
        <div className="header flex">
            <div className="left flex">
                <img src={img} alt="" />
                <h2>meme generator</h2>
            </div> 
            <div className="right thin">
                React Course - project 3
            </div>
        </div>
    ) 
}