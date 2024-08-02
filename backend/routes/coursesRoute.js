const express = require("express");
const { celebrate, Joi, Segments } = require("celebrate");
const router = express.Router();
const { verifyTokenAndAdmin } = require("../middlewares/verifyToken");
const {
  getAllCourses,
  getCourseById,
  createCourse,
  updateCourse,
  deleteCourse,
} = require("../controllers/coursesController");

router
  .route("/")
  .post(
    verifyTokenAndAdmin,
    celebrate({
      [Segments.BODY]: Joi.object().keys({
        title: Joi.string().trim().min(7).required(),
        description: Joi.string().trim().required(),
        instructor: Joi.string().trim().required(),
        thumbnail: Joi.string().uri().optional().allow(""),
      }),
    }),
    createCourse
  )
  .get(getAllCourses);

router
  .route("/:id")
  .get(getCourseById)
  .put(
    verifyTokenAndAdmin,
    celebrate({
      [Segments.BODY]: Joi.object().keys({
        title: Joi.string().trim().min(7).required(),
        description: Joi.string().trim().required(),
        instructor: Joi.string().trim().required(),
        thumbnail: Joi.string().uri().optional().allow(""),
      }),
    }),
    updateCourse
  )
  .delete(verifyTokenAndAdmin, deleteCourse);

module.exports = router;
