import { useState } from 'react';
import CDCMain from './cdc/CDCMain';
import './App.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <CDCMain />
    </>
  )
}

export default App
