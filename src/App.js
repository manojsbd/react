import {useState} from 'react';
import './App.css';

function App() {
  const [count,setCount] = useState(0);

  const incrementHandle = () => {
     if(count >=10) 
     {
      setCount (count);
     }else{
      setCount(count + 1);
     }
  }

  const decrementHandle = () => {
    if(count <=0) { 
      setCount(count);
    }else{
      setCount(count - 1);
    }
  }
  return (
    <div className="App">
      <h1>Counter App</h1>
      <button onClick={incrementHandle}>Increment</button>
      <h3>{count}</h3>
      <button onClick={decrementHandle}>Decrement</button>
    </div>
  );
}

export default App;
