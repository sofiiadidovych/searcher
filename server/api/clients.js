const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    res.json({ message: "Hello from server!" });
  } catch (error) {
    throw error;
  }
});

module.exports = router;