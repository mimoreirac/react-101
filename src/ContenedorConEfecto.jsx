import { useEffect, useState } from "react";

function ContenedorConEfecto() {
  const [golosinas, setGolosinas] = useState(0);

  useEffect(() => {
    console.log("Comi una golosina");
  }, [golosinas]);
  return (
    <div>
      <h1>He comido {golosinas} golosinas</h1>
      <button
        onClick={() => {
          setGolosinas(golosinas + 1);
        }}
      >
        Comer Golosinas
      </button>
      <button
        onClick={() => {
          setGolosinas(0);
        }}
      >
        Reiniciar
      </button>
    </div>
  );
}

export default ContenedorConEfecto;
