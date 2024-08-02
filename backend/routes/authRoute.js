const express = require("express");
const { celebrate, Joi, Segments } = require("celebrate");
const router = express.Router();
const { verifyTokenAndAdmin } = require("../middlewares/verifyToken");
const {
  registerUserCtrl,
  loginUserCtrl,
  addNewUserCtrl,
} = require("../controllers/authController");

// Path: /api/auth/register
router.post(
  "/register",
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string().trim().min(2).required(),
      email: Joi.string().trim().min(7).required().email(),
      phone: Joi.string().trim().min(10).required(),
      password: Joi.string().trim().min(6).required(),
    }),
  }),
  registerUserCtrl
);

// Path: /api/auth/newuser
router.post(
  "/newuser",
  verifyTokenAndAdmin,
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string().trim().min(2).required(),
      email: Joi.string().trim().min(7).required().email(),
      phone: Joi.string().trim().min(10).required(),
      password: Joi.string().trim().min(6).required(),
      isAdmin: Joi.boolean().required(),
    }),
  }),
  addNewUserCtrl
);

// Path: /api/auth/login
router.post(
  "/login",
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      email: Joi.string().trim().min(7).required().email(),
      password: Joi.string().trim().min(6).required(),
    }),
  }),
  loginUserCtrl
);

module.exports = router;
