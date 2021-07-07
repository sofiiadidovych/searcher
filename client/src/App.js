import React, { useState, useEffect } from "react";
import "./App.css";
import SearchBox from "./components/SearchBox/SearchBox";
import ClientsList from "./components/ClientsList/ClientsList";

const CLIENTS_API = "/data/clients";

function App() {
  const [clients, setClients] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(CLIENTS_API)
      .then((res) => res.json())
      .then((fetchedmeals) => setClients(fetchedmeals))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>{!clients ? "Loading..." : clients}</p>
        <SearchBox />
        <ClientsList clients={clients}/>
      </header>
    </div>
  );
}

export default App;
