<<<<<<< HEAD
import React from "react";

function Content(props) {
  console.log("Mise à jour");
  return <div className="content">{props.num}</div>;
}
export default React.memo(Content);
=======
import React from 'react'

export default function Content(props) {
    console.log(props);
  return (
    <div className="content">
      {props.children}
    </div>
  )
}
>>>>>>> b2b23f7af1324bfa0d9fc3424bc38fefdbd36d94
