import { useState, useEffect, useRef } from "react";
import "./App.css";
import Video from "./Video.mp4";

function App() {
  // const [timer, setTimer] = useState(1);
  const [toggle, setToggle] = useState(true);

  // useEffect(() => {
  //   const intervalID = setInterval(() => {
  //     setTimer(timer => timer + 1);
  //   }, 1000)

  //   return () => {
  //     clearInterval(intervalID)
  //   }
  // }, [])
  // useEffect se lance lors du 1er chargement
  //le tableau pour le state à surveiller

  const ref = useRef([]);

  useEffect(() => {
    console.log(ref);
  }, []);

  const addToRef = (el) => {
    // console.log(el);
    if (el && !ref.current.includes(el)) {
      ref.current.push(el);
    }
  };

  const toggleFunc = () => {
    setToggle(!toggle);
  };
  return (
    <div className="App">
      <video ref={addToRef} width="750" height="500" autoPlay controls muted>
        <source src={Video} type="video/mp4" />
      </video>
      <video ref={addToRef} width="750" height="500" autoPlay controls muted>
        <source src={Video} type="video/mp4" />
      </video>
      <video ref={addToRef} width="750" height="500" autoPlay controls muted>
        <source src={Video} type="video/mp4" />
      </video>
      <button onClick={toggleFunc}>Toggle</button>
    </div>
  );
}

export default App;
