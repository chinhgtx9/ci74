import { useState } from 'react';
import'./traffic-light.css';
const Tfl = ({color}) => {
  
    const handleNext = ()=> {
        
    }
    return(
        <div className="traffic">
            <button onClick={handleNext}>Next</button>
            <div>
                <span className="dot" style={{backgroundColor: {color}}}></span>,
                <span className="dot" style={{backgroundColor: {color}}}></span>,
                <span className="dot" style={{backgroundColor: {color}}}></span>
           </div>
        </div>
    );
    
}
export default Tfl;
