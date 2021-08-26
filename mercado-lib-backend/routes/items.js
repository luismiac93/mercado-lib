const express = require("express");
const {
  itemById,
  searchAll,
  itemByIdDescription,
  notFound,
} = require("../controller/items");

const router = express.Router();

//rutas de nuestra Api
router.get("/", searchAll);
router.get("/:id", itemById);
router.get("/:id/description", itemByIdDescription);
router.get("*", notFound);

module.exports = router;
