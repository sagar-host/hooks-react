import './App.css';
import React, {useState} from 'react'
import ClassComponent from './classComponent';



function App() {
  const [flag, setFlag] = useState(false);


  return (

    <div className="App">
        
        <div>
          <button onClick={()=>setFlag(!flag)}>Toggle class component</button>
 
        </div>
       
{flag ? <ClassComponent/> : ""}

          
    </div>
  );
}

export default App;
