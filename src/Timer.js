import { useState, useEffect} from "react";

function Timer() {
  const [timer, setTimer] = useState(1);

  useEffect(() => {
    const intervalID = setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);

    return () => {
      clearInterval(intervalID);
    };
  }, []);
  // useEffect se lance lors du 1er chargement
  //le tableau pour le state à surveiller

  return (
    <>
      <h1>{timer}</h1>
    </>
  );
}

export default Timer;
