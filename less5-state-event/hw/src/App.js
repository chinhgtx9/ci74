import { useState } from "react";
import Tfl from "./traffic-ligh";


function App() {
  const [color,setColor] = useState([
    'red',
    'yellow',
    'blue'
  ]);


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

export default App;
