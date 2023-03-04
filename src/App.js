<<<<<<< HEAD
import { useState, useEffect, useMemo } from "react";
=======
>>>>>>> 583f43a57dea072162fbc1c75c6bafbefb000419
import "./App.css";
import Modal from "./Components/Modal/Modal";

function App() {
  // useEffect se lance lors du 1er chargement
  //le tableau pour le state à surveiller

<<<<<<< HEAD
  const toggleFunc = () => {
    const newArr = [...toggle];
    newArr.push(4);

    setToggle(newArr);
    // setToggle(!toggle);
  };

  const tableau = useMemo(() => {
    return [1,2,3,4];
  }, []);

  return (
    <div className="App">
      <Content num={tableau} />
      <button onClick={toggleFunc}>Toggle2</button>
    </div>
=======
  return (
    <>
      <Modal />
    </>
>>>>>>> 583f43a57dea072162fbc1c75c6bafbefb000419
  );
}

export default App;
