const express = require("express");
const { celebrate, Joi, Segments } = require("celebrate");
const router = express.Router();
const { verifyTokenAndAdmin } = require("../middlewares/verifyToken");
const {
  addInstructorCtrl,
  getAllInstructorsCtrl,
  deleteInstructorCtrl,
} = require("../controllers/instructorController");

// Path: /api/instructors
router
  .route("/")
  .post(
    verifyTokenAndAdmin,
    celebrate({
      [Segments.BODY]: Joi.object().keys({
        name: Joi.string().trim().min(4).required(),
        job: Joi.string().trim().min(4).required(),
        url: Joi.string().trim().required(),
      }),
    }),
    addInstructorCtrl
  )
  .get(getAllInstructorsCtrl);

// Path: /api/instructors/:id
router.route("/:id").delete(
  verifyTokenAndAdmin,
  celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.string().required(),
    }),
  }),
  deleteInstructorCtrl
);

module.exports = router;
