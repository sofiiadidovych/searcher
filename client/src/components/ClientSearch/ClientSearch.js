import React, { useState } from "react";
import "./ClientSearch.css";

function ClientSearch({ clients, searchClient }) {
  const [clientIndex, setClientIndex] = useState(0);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [userInput, setUserInput] = useState("");

  const clientToString = (client) => {
    return `${client.first_name} ${client.last_name} ${client.origin}`;
  }

  const onChange = (event) => {
    searchClient(event.target.value);
    setClientIndex(0);
    setShowSuggestions(true);
    setUserInput(event.currentTarget.value);
    console.log("Inside", event.currentTarget.value);
  };

  const onClick = (event) => {
    setClientIndex(0);
    setShowSuggestions(false);
    setUserInput(event.currentTarget.innerText);
    searchClient(event.currentTarget.innerText);
  };

  //Add functionality to let the user choose an iteem in the list using the keyboard
  const onKeyDown = (event) => {
    //User presses Enter key
    if (event.keyCode === 13) {
      setShowSuggestions(false);
      setClientIndex(0);
      if (clientIndex >= 0 && clientIndex < clients.length) {
        setUserInput(clientToString(clients[clientIndex]));
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
      if (clientIndex - 1 === clients.length) {
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
