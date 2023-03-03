import { useState, useEffect } from "react";
import "./App.css";
import Content from "./Content";
// import Video from "./Video.mp4";

function App() {
  const [toggle, setToggle] = useState([1, 2, 3]);

  // useEffect se lance lors du 1er chargement
  //le tableau pour le state à surveiller

  const toggleFunc = () => {
    const newArr = [...toggle];
    newArr.push(4);

    setToggle(newArr);
    // setToggle(!toggle);
  };
  return (
    <div className="App">
      <Content >
        <h1>Titre</h1>
        <p>Lorem ipsum dolor sit amet.</p>
        </Content>
      <button onClick={toggleFunc}>Toggle2</button>
    </div>
  );
}

export default App;
