import React from "react";
import "./ClientSearch.css";

function ClientSearch({ clients, searchClient }) {
  const onChange = (event) => {
    console.log("Inside", event.target.value);
    searchClient(event.target.value);
  };
  return (
    <div>
      <input type="text" placeholder="Search" onChange={onChange} />
    </div>
  );
}

export default ClientSearch;
