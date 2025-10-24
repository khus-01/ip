import React from 'react';
import BankDetails from './bank';
import Counter from './Counter';

function App() {
  return (
    <div style={{ textAlign: 'center', fontFamily: 'Arial' }}>
      <h1 style={{ color: '#6a0dad' }}>React Class Component Example</h1>
      <BankDetails />
      <Counter />
    </div>
  );
}

export default App;
