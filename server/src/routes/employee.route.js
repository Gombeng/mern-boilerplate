const express = require("express");
const router = express.Router();
const {
  getAll,
  getOne,
  create,
  remove,
} = require("../controllers/employee.controller");

router.route("/").get(getAll).post(create);

router.route("/:id").get(getOne).delete(remove);

module.exports = router;
