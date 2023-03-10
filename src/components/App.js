import { useState } from "react";
import react from "react";
import "../../src/style.css"
function App(){
    const[  val1,setval1]=useState(0);
    const[val2,setval2]=useState(0);
    const[ans,setans]=useState(0);
    
    function func1(event){
        setval1(Number(event.target.value));
       }
       function func2(event){
        setval2(Number(event.target.value));
       }
       function Add(event){
       setans(val1+val2);
       
    }
    function Subtract(event){
        setans(val1-val2);
        
     }
     function Multiply(event){
        setans(val1*val2);
        
     }
     function Divide(event){
        setans(val1/val2);
        
     }
     function Modulo(event){
        setans(val1%val2);
        
     }
     function Power(event){
        setans(val1**val2);
        
     }
return (<div className="root">
    <h2 style={{textAlign:"center"}}> Calculator</h2>
    <div style={{textAlign:"center"}}>
       
        <label for='first'> Enter first value</label>
        <input type='number' onChange={func1} name="first" />
        
        <label for='second' > Enter second value</label>
        <input type='number' onChange={func2} name="second"/>
        <div className="inner">
        <button onClick={Add}> add</button>
        <button onClick={Subtract}>subtract</button>
        <button onClick={Multiply}>multiply</button>
        <button onClick={Divide}>divide</button>
        <button onClick={Modulo}>modulo</button>
        <button onClick={Power}>power</button>
        </div>
       <h3> ans is {ans}</h3>
        
    </div>    
</div>
);
}
export default App;