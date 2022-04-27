import React from "react";

export default function TaskList(props) {
    return (
        <>
           
           <div className="list">
               <input type = "radio" className="radio"></input>
                <label className="name">{props.name}</label>
           </div> 
            
        </>
    )
}