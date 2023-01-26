import './index.scss';
import React from 'react';

function App() {
  const [count, setCount] = React.useState(0);
  const minus = () => setCount(count - 1);
  const plus = () => setCount(count + 1);


  return (
    <div className="App">
      <div>
        <h2>Счетчик:</h2>
        <h1>{count}</h1>
        <button onClick={minus} className="minus">- Минус</button>
        <button onClick={plus} className="plus">Плюс +</button>
      </div>
    </div>
  );
}

export default App;
