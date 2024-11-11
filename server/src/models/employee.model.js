const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const EmployeeSchema = new Schema(
  {
    employeeId: {
      required: true,
      type: Number,
    },
    employeeName: {
      required: true,
      type: String,
    },
    role: {
      required: true,
      type: String,
    },
    employeeStatus: {
      required: true,
      type: String,
    },
    employeeEmail: {
      required: true,
      type: String,
    },
    employeHandphone: {
      required: false,
      type: Number,
    },
    joinDate: {
      required: true,
      type: String,
    },
    endDate: {
      required: false,
      type: String,
    },
    isActive: {
      required: false,
      type: Boolean,
    },
    adminAccess: {
      required: false,
      type: Boolean,
    },
    photoUrl: {
      required: false,
      type: String,
    },
  },
  {
    timestamps: {
      createdAt: "createdAt",
      updatedAt: "updatedAt",
    },
  }
);

module.exports = model("employee", EmployeeSchema);
