const asyncHandler = require("express-async-handler");
const Order = require("../models/order");

module.exports.getAllOrderCtrl = asyncHandler(async (req, res) => {
  const orders = await Order.find().populate("course").populate("user");
  res.json(orders);
});

module.exports.addOrderCtrl = asyncHandler(async (req, res) => {
  const order = await Order.create({
    course: req.body.course,
    user: req.body.user,
  });
  res.json({ message: "Order Added Successfully" });
});

module.exports.deleteOrderCtrl = asyncHandler(async (req, res) => {
  await Order.findByIdAndDelete(req.params.id);
  res.json({ message: "Order Deleted Successfully" });
});

module.exports.updateOrderCtrl = asyncHandler(async (req, res) => {
  await Order.findByIdAndUpdate(req.params.id, {
    isApproved: req.body.isApproved,
  });
  res.json({ message: "Order Updated Successfully" });
});
