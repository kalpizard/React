import React, { useState } from "react";

function Counter() {
  // var value = 0;

  //declaro la variable con el estado inicial
  var [value, setValue] = useState(0);
  //evento
  const increase = () => {
    // console.log("Value: " + value);
    setValue(value + 1);
    // value +=1;
    // console.log("Value despues de incrementarse" + value);
  };

  return (
    <div>
      <p>El cotador esta en {value} </p>
      <button onClick={increase}>Aumentar</button>
    </div>
  );
}

export default Counter;
