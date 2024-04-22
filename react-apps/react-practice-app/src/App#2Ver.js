import React, { useState } from 'react'
import './App.css';
import Button from './Button';

const name = "libeolくん"
const number = 1 + 1

const element =
  (
    <>
      <h1>こんにちは{name}!</h1>
      <h2> 1+ 1 の答えは {number} です!</h2>
    </>
  )

function App() {

  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <p>カウント : {count}</p>
      <Button
      btn_txt="1増やす" 
      btn_click={() => { setCount(count + 1)}} 
      />
      <Button
      btn_txt="1減らす" 
      btn_click={() => { setCount(count - 1)}}
      />
    </div>
  );
}




export default App;
