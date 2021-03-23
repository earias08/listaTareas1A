import { Fragment } from "react";
import "./App.css";
import Subtitulo from "./components/Subtitulo";
import Titulo from "./components/Titulo";

function App() {
  return (
    <Fragment>
      <Titulo prueba={false}></Titulo>
      <Subtitulo comision='1A' estado={true}/>
    </Fragment>
  );
}

export default App;
