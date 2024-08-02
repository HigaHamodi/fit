const express = require("express");
const { celebrate, Joi, Segments } = require("celebrate");
const router = express.Router();
const { verifyTokenAndAdmin } = require("../middlewares/verifyToken");
const {
  addOrderCtrl,
  getAllOrderCtrl,
  deleteOrderCtrl,
  updateOrderCtrl,
} = require("../controllers/ordersController");

router
  .route("/")
  .post(
    celebrate({
      [Segments.BODY]: Joi.object().keys({
        course: Joi.string().required(),
        user: Joi.string().required(),
      }),
    }),
    addOrderCtrl
  )
  .get(verifyTokenAndAdmin, getAllOrderCtrl);

router
  .route("/:id")
  .delete(verifyTokenAndAdmin, deleteOrderCtrl)
  .put(
    verifyTokenAndAdmin,
    celebrate({
      [Segments.BODY]: Joi.object().keys({
        isApproved: Joi.boolean().required(),
      }),
    }),
    updateOrderCtrl
  );

module.exports = router;
