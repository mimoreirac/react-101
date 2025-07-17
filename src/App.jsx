import "./App.css";
import Saludo from "./Saludo.jsx";
import ContenedorConEfecto from "./ContenedorConEfecto.jsx";

function App() {
  const nombres = [
    { id: 0, nombre: "Martin" },
    {
      id: 1,
      nombre: "Felipe",
    },
    {
      id: 2,
      nombre: "Jose",
    },
  ];

  return (
    <>
      <ContenedorConEfecto />
    </>
    // <>
    //   {nombres.map((nombre) => (
    //     <Saludo nombre={nombre.nombre} key={nombre.id} id={nombre.id} />
    //   ))}
    // </>
  );
}

export default App;
