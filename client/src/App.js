import React, { useState } from "react";
import "./App.css";
import ClientList from "./components/ClientList/ClientList";
import ClientSearch from "./components/ClientSearch/ClientSearch";

const CLIENTS_API = "/api/clients";

function App() {
  const [clients, setClients] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const searchClient = (searchQuery) => {
    setIsLoading(true);
    fetch(`${CLIENTS_API}?search=${searchQuery}`)
      .then((res) => res.json())
      .then((fetchedClients) => {
        setClients(fetchedClients);
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <div className="App">
      <ClientSearch searchClient={searchClient} clients={clients} />
      {isLoading ? <p>"Loading..."</p> : <ClientList clients={clients} />}
    </div>
  );
}

export default App;
