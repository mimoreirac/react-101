function Saludo({ nombre, id }) {
  return (
    <>
      <h1>Hola, Mundo!</h1>
      <p>
        Mi nombre es <strong>{nombre}</strong>
      </p>
      <p>Y mi id es {id}</p>
    </>
  );
}

export default Saludo;
