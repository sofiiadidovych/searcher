const { response } = require("express");
const express = require("express");
const router = express.Router();

const clients = require("./../data/clients.json");

router.get("/", async (req, res) => {
  try {
    //We limit search results to 10
    const clientsLimit = 10;

    if (req.query.search) {
      const search = req.query.search;
      const searchArray = search.split(" ").map((word) => word.trim().toLowerCase());

      const filteredClients = clients.filter((client) => {
        for (let i = 0; i < searchArray.length; i++) {
          //We check if the last word partly matches first name, last name or country
          if (i === searchArray.length - 1) {
            return (client.first_name != null && client.first_name.toLowerCase().startsWith(searchArray[i]))
              || (client.last_name != null && client.last_name.toLowerCase().startsWith(searchArray[i]))
              || (client.origin != null && client.origin.toLowerCase().startsWith(searchArray[i]));
          //We check if the first or second word is the same with client`s first or last name, or country
          } else {
            return (client.first_name != null && client.first_name.toLowerCase() === searchArray[i])
              || (client.last_name != null && client.last_name.toLowerCase() === searchArray[i])
              || (client.origin != null && client.origin.toLowerCase() === searchArray[i]);
          }
        }
      });
      res.send(filteredClients.slice(0, clientsLimit));
    } else {
      res.send(clients.slice(0, clientsLimit));
    }
  } catch (error) {
    throw error;
  }
});

module.exports = router;
