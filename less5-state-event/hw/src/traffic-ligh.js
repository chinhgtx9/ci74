import { useState } from 'react';
import'./traffic-light.css';
const Tfl = () => {
    const [count, setCount] = useState(0)
    const [change1,setChange1] = useState(true);
    const [change2,setChange2] = useState(false);
    const [change3,setChange3] = useState(false);
    const handleNext = ()=> {
        setCount(count +1);
        if(count === 0){
            setChange1(!change1);
            setChange2(!change2);
        }
        if(count === 1){
            setChange2(!change2);
            setChange3(!change3);
        }
        if(count === 2){
            setChange3(!change3);
            setChange1(!change1);
        }
        
     
     if(count === 2) {
         setCount(0)
     }
    }
    return(
        <div className="traffic">
            <button onClick={handleNext}>Next</button>
            <div>
            {change1 === true ?   <div className="dot" id = "change1" style={{backgroundColor: 'red'}}></div> :  <div className="dot"></div>}
            {change2 === true ?   <div className="dot" id = "change2" style={{backgroundColor: 'yellow'}}></div> :  <div className="dot"></div>}
            {change3 === true ?   <div className="dot" id = "change3" style={{backgroundColor: 'green'}}></div> :  <div className="dot"></div>}
           </div>
        </div>
    );
    
}
export default Tfl;
