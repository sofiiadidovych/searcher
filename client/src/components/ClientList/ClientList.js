import React from "react";
import "./ClientList.css";

function ClientList({ clients }) {
  return (
    <div>
      {clients.length > 0 ? (
        <>
          <p>Here are clients you searched for</p>
          <ul className="clients-list">
            {clients.map((client) => {
              return (
                <li key={client.id.$oid}>
                  <img src={client.photo} alt="client's photo" />
                  {client.first_name} {client.last_name}
                  <p>Country of origin: {client.origin}</p>
                  <p>Email: {client.email}</p>
                </li>
              );
            })}
          </ul>
        </>
      ) : (
        <p>No clients</p>
      )}
    </div>
  );
}

export default ClientList;
