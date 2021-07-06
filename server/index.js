const express = require("express");

const PORT = 3000;

const app = express();
const router = express.Router();

const clientsRouter = require("./api/clients");
router.use("/clients", clientsRouter);

app.use("/api", router);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
