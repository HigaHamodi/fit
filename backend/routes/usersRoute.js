const express = require("express");
const { celebrate, Joi, Segments } = require("celebrate");
const router = express.Router();
const {
  getAllUsersCtrl,
  getUserProfileCtrl,
  UpdateUserProfileCtrl,
  deleteUserCtrl,
} = require("../controllers/usersController");
const {
  verifyTokenAndAdmin,
  verifyToken,
} = require("../middlewares/verifyToken");

// Path: /api/users
router.route("/").get(verifyTokenAndAdmin, getAllUsersCtrl);

// Path: /api/users/:id
router
  .route("/:id")
  .get(
    celebrate({
      [Segments.PARAMS]: Joi.object().keys({
        id: Joi.string().required(),
      }),
    }),
    getUserProfileCtrl
  )
  .delete(
    verifyTokenAndAdmin,
    celebrate({
      [Segments.PARAMS]: Joi.object().keys({
        id: Joi.string().required(),
      }),
    }),
    deleteUserCtrl
  );

module.exports = router;
