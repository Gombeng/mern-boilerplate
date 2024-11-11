const app = require("express")();
const userRoutes = require("./user.route");
const employeeRoutes = require("./employee.route");

app.use("/users", userRoutes);
app.use("/employees", employeeRoutes);

module.exports = app;
