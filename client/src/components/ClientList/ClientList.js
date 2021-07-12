import React, { useState } from "react";
import "./ClientList.css";

function ClientList({ clients }) {
  return (
    <div>
      <p>Here are clients you searched for</p>
      <ul className="clients-list">
        {clients.map((client) => {
          return (
            <li key={client.id.$oid}>
              <img src={client.photo} alt="client's photo" />
              {client.first_name} {client.last_name} {client.origin}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ClientList;
