import { useState } from "react";
import { useEffect } from "react";

const TotalText = () => {
    
    const [lengthArr, setLength] = useState(0);
    const [count,setCuont] = useState(0);
    const [text, setText] = useState('');
    const getText = (event)=> {
        
        setTimeout(()=>{
            setText(event.target.value); 
         },2000);
        
    }
   useEffect(() => {
    setCuont(lengthArr);
   })
    useEffect(()=>{
        
        setLength((text.split(' ').length));
    },[text])
    
    return(
        <div>
            <input style={{width: '100%',height:'25px'}} onChange={getText}/>
            <p>Words(s): {count}</p>
        </div>
    );
}

export default TotalText;