const express = require("express");
// const { response } = require("express");
const router = express.Router();

const clients = require("./../data/clients.json");

router.get("/", async (req, res) => {
  try {
    //Limit search results to 10
    const clientsLimit = 10;
    if (req.query.search) {
      const search = req.query.search;
      const filteredClients = clients.filter((client) => {
        return (
          (client.first_name != null &&
            client.last_name != null &&
            client.origin != null &&
            `${client.first_name} ${client.last_name} ${client.origin}`
              .toLowerCase()
              .startsWith(search.toLowerCase())) ||
          (client.origin != null &&
            client.origin.toLowerCase().startsWith(search.toLowerCase()))
        );
      });
      res.send(filteredClients.slice(0, clientsLimit));
    } else {
      res.send([]);
    }
  } catch (error) {
    throw error;
  }
});
module.exports = router;
