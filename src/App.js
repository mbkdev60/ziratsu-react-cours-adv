import { useState, useEffect, useMemo } from "react";
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

  const tableau = useMemo(() => {
    return [1,2,3,4]
  }, [])

  return (
    <div className="App">
      <Content num={tableau} />
      <button onClick={toggleFunc}>Toggle2</button>
    </div>
  );
}

export default App;
