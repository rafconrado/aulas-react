//componentes
import FirstComponent from "./components/FirstComponent"
import TemplatesExpressions from "./components/TemplatesExpressions"
import MyComponents from "./components/MyComponentes";
import Events from "./components/Events";
import Challenge from "./components/Challenge";

import './App.css';

function App() {
  return (
    <div className="App">
        <h1>Fundamentos React</h1>
        <p className="teste">Meu texto</p>
        <MyComponents/>
        <TemplatesExpressions/>
        <FirstComponent/>
        <Events/>
        <Challenge/>
    </div>
  );
}

export default App;
