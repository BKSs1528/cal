// import logo from './logo.svg';
import React, { useState } from "react"
import './App.css';

function App() {
  const [input, setInput] = useState("");
  const clickHandler = (event) => {
    setInput(input.concat(event.target.value))
  }
  const clearHandler = () => {
    setInput("");
  }
  const resultHandler = () => {
    setInput(eval(input));
  }

  return (
    <>
      <div className="container">
        <h1 className="head">Calculator</h1>
        <div name="form">
          <input type="text" name="output" className="answer" value={input} /><br></br>
          <input type="button" value="7" onClick={clickHandler} className="value" />
          <input type="button" value="8" onClick={clickHandler} className="value" />
          <input type="button" value="9" onClick={clickHandler} className="value" />
          <input type="button" value="+" onClick={clickHandler} className="value" />
          <br></br>
          <input type="button" value="4" onClick={clickHandler} className="value" />
          <input type="button" value="5" onClick={clickHandler} className="value" />
          <input type="button" value="6" onClick={clickHandler} className="value" />
          <input type="button" value="-" onClick={clickHandler} className="value" />
          <br></br>
          <input type="button" value="1" onClick={clickHandler} className="value" />
          <input type="button" value="2" onClick={clickHandler} className="value" />
          <input type="button" value="3" onClick={clickHandler} className="value" />
          <input type="button" value="*" onClick={clickHandler} className="value" />
          <br></br>
          <input type="button" value="." onClick={clickHandler} className="value" />
          <input type="button" value="0" onClick={clickHandler} className="value" />
          <input type="button" value="/" onClick={clickHandler} className="value" />
          <input type="button" value="=" onClick={resultHandler} className="equal" />
          <br></br>
          <input type="button" value="C" onClick={clearHandler} className="clear" />
        </div>
      </div>
    </>
  );
}

export default App;
