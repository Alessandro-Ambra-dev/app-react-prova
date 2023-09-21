export function LoggedArea() {
  function handlePromuovi() {
    alert("Postepay Ricaricata con successo");
  }
  return (
    <div>
      Ciao Francesco
      <button onClick={handlePromuovi}>Promuovi</button>
      <button disabled>Boccia</button>
      {}
    </div>
  );
}
