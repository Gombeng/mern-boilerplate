const asyncHandler = require("express-async-handler");
const EmployeeModel = require("../models/employee.model");

const getAll = asyncHandler(async (req, res, next) => {
  await EmployeeModel.find()
    .then((user) => res.status(200).json(user))
    .catch((error) => next(error));
});

const getOne = asyncHandler(async (req, res, next) => {
  const { id } = req.params;

  await EmployeeModel.findById(id)
    .then((user) => res.status(200).json(user))
    .catch((error) => next(error));
});

const create = asyncHandler(async (req, res, next) => {
  const {
    employeeId,
    employeeName,
    role,
    employeeStatus,
    employeeEmail,
    employeePhone,
    joinDate,
    endDate,
    isActive,
    adminAccess,
    photoUrl,
  } = req.body;

  //  * use req.file for handling image
  // const image = req.file.path;

  const data = new EmployeeModel({
    employeeId,
    employeeName,
    role,
    employeeStatus,
    employeeEmail,
    employeePhone,
    joinDate,
    endDate,
    isActive,
    adminAccess,
    photoUrl,
  });

  await data
    .save()
    .then((user) => res.status(200).json({ employee: user }))
    .catch((error) => next(error));
});

const update = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const updatedData = req.body;
  const options = { new: true };

  await EmployeeModel.findByIdAndUpdate(id, updatedData, options)
    .then((user) => res.status(200).json(user))
    .catch((error) => next(error));
});

const remove = asyncHandler(async (req, res, next) => {
  const { id } = req.params;

  await EmployeeModel.findByIdAndDelete(id)

    .then(({ username }) =>
      res.status(200).json({
        message: `"${username}" has been removed..`,
      })
    )
    .catch((error) => next(error));
});

module.exports = { getAll, getOne, create, update, remove };
