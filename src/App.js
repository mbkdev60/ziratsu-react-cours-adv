import { useState} from "react";
import "./App.css";
import Timer from "./Timer";

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

  const toggleFunc = () => {
    setToggle(!toggle);
  };
  return (
    <div className="App">
      <button onClick={toggleFunc}>Toggle</button>
      {toggle && <Timer />}
    </div>
  );
}

export default App;
