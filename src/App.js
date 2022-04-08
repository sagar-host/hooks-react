import './App.css';
import React, {useState} from 'react'

function initialValue(){
  console.log("function called");
  return 0;
}

function App() {
  const [name, setName] = useState("sagar");
  const [flag, setFlag] = useState(false);
  const [steps, setSteps] = useState(initialValue());
  const [names, setNames] = useState([])

  let a = "sagar";
  function changeName(){
    console.log("clicked");
    
    return setFlag(!flag);
  }
  function increment(){
   
    
    setSteps((prevState) => prevState + 1);
    setSteps((prevState) => prevState + 1);
  }
  function decrement(){
   
    
    return setSteps(steps - 1);
  }

  function addNames (e){
    e.preventDefault();
    setNames([...names,{id:names.length,name}]);
    setName("")
  }
  return (

    <div className="App">
      {/* previously we use class component in order to use state but with the help of the use state react hook , we can actually use the state in our functional component without the converting of of functional component to class component  */}
        
        <div>Hello. {flag ? name : ""}</div>
          <button onClick={changeName}>click me</button>
          <hr />
        
          <button onClick={increment}>click me</button>
          <div>{steps}</div>
          <button onClick={decrement}>click me</button>
          <hr />

          <form onSubmit={addNames}>
            <input type="text" value = {name} placeholder="add names" 
            onChange={(e)=> setName(e.target.value)} 

            />
            <button>submit</button>
          </form>
          <hr />
          <ul>
            {(names.map((item)=>
            <li key={item.id}>{item.name}</li>
            ))}
          </ul>
    </div>
  );
}

export default App;
