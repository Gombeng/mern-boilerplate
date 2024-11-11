const route = require("express")();

const {
  getAll,
  getOne,
  create,
  remove,
} = require("../controllers/user.controller");

route.get("/", getAll);
route.get("/:id", getOne);
route.post("/", create);
route.delete("/:id", remove);

module.exports = route;
