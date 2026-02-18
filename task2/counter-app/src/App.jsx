import { useState } from 'react'
function App() {
  const [count, setCount]=useState(0);
  const increment=()=>{
    setCount(count+1);
  };
  const decrement=()=>{
    setCount(count-1);
  };
  return (
    <div style={{textAlign:'center',padding:'50px'}}>
      <h1>Counter Component</h1>
      <h2 style={{fontSize:'48px',margin:'20px'}}>{count}</h2>
      <button
          onClick={increment}
          style={{margin:'10px',padding:'10px 20 px',fontSize:'16px'}}>
            Increment
      </button>
      <button
          onClick={decrement}
          style={{margin:'10px',padding:'10px 20 px',fontSize:'16px'}}>
            Decrement
      </button>
    </div>
  );
}

export default App;