const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
  {
    course: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course", // Corrected to match the model name
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // Corrected to match the model name
    },
    isApproved: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const Order = mongoose.model("Order", OrderSchema);

module.exports = Order;
