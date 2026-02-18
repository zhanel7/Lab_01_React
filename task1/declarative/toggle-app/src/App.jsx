import { useState } from 'react'
import './App.css';
function App() {
  const [isHighlighted, setIsHighlighted]=useState(false);
  const handleToggleClick=()=>
  {
    setIsHighlighted(!isHighlighted);
    console.log('Состояние изменено:', !isHighlighted);
  };

  return (
    <div style={{padding:'20px'}}>
      <h1>Declarative Approach(React)</h1>
      <p className={isHighlighted ? 'highlight' : ''}>
        This paragraph will be highlighted on button click.
      </p>
      <button onClick={handleToggleClick}>
        Toggle Highlight
      </button>
      <div style={{marginTop:'20px'}}>
        <p>Текущее состояние: {isHighlighted ? 'подсвечено': 'не подсвечено'}</p>
      </div>
    </div>
  );
}

export default App;