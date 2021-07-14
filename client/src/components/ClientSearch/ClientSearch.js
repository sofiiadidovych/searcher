import React, { useState } from "react";
import "./ClientSearch.css";

function ClientSearch({ clients, searchClient }) {
  const [clientIndex, setClientIndex] = useState(0);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [userInput, setUserInput] = useState("");

  //To describe the client in the suggestion list
  const clientToString = (client) => {
    return `${client.first_name} ${client.last_name} ${client.origin}`;
  };

  //Every time the user types in the search bar
  const onChange = (event) => {
    searchClient(event.target.value);
    setClientIndex(0);
    setShowSuggestions(true);
    setUserInput(event.target.value);
  };

  //Every time user clicks on suggestion
  const onClick = (event) => {
    setClientIndex(0);
    setShowSuggestions(false);
    setUserInput(event.target.innerText);
    searchClient(event.target.innerText);
  };

  //Add functionality to let the user choose an item in the suggestion list using the keyboard
  const onKeyDown = (event) => {
    //User presses Enter key
    if (event.keyCode === 13) {
      setShowSuggestions(false);
      setClientIndex(0);
      if (clientIndex >= 0 && clientIndex < clients.length) {
        setUserInput(clientToString(clients[clientIndex]));
        searchClient(clientToString(clients[clientIndex]));
      }
    }
    //User presses Arrow up key
    else if (event.keyCode === 38) {
      if (clientIndex === 0) {
        return;
      }
      setClientIndex(clientIndex - 1);
    }
    //User presses Arrow down key
    else if (event.keyCode === 40) {
      if (clientIndex === clients.length - 1) {
        return;
      }
      setClientIndex(clientIndex + 1);
    }
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search"
        onChange={onChange}
        value={userInput}
        onKeyDown={onKeyDown}
      />
      {showSuggestions && userInput && clients.length > 0 ? (
        <ul className="suggestions">
          {clients.map((client, index) => {
            return (
              <li
                key={client.id.$oid}
                onClick={onClick}
                //If index of the currect item is equal to the selected
                //client index the special class will be applied
                className={index === clientIndex ? "suggestion-active" : ""}
              >
                {clientToString(client)}
              </li>
            );
          })}
        </ul>
      ) : (
        <></>
      )}
    </div>
  );
}

export default ClientSearch;
