import './App.css';
import MyComponent from './components/MyComponent';
import {useState}  from "react";

function App() {

  const n= 15
  const [name] = useState("Matheus")
  const redTitle = true

  return (
    <div className="App">
      {/*CSS global*/}
      <h1>React com CSS</h1>
      {/*CSS de componente*/}
      <MyComponent/>
      <p>Este paragráfo é do App.js</p>
      <p className="my-comp-paragraph">Este também é componente</p>
      {/*Inline CSS*/}
      <p style={{color:"white", padding:"25px", borderTop:"2px solid red"}}>
        Este elemento foi estilizado de forma Inline</p>
      {/*CSS Inline Dinâmico*/}
      <h2 style={n < 10 ? ({color:"purple"}) : ({color:"orange"})}>CSS Dinâmico</h2>
      <h2 style={n > 10 ? ({color:"purple"}) : ({color:"orange"})}>CSS Dinâmico</h2>
      <h2 style={name === "Matheus" ? { color: "green", backgroudColor: "#000"} 
      : null}
      >
      Teste nome</h2>
      {/*Classe dinâmica*/}
      <h2 className={redTitle ? "red-title" : "title"}>Este título vai ter classe dinâmica</h2>

    </div>
  );
}

export default App;
