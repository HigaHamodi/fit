const mongoose = require("mongoose");
const Joi = require("joi");

const courseSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    thumbnail: {
      type: String,
      default: "/courses.webp",
    },
    instructor: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Course = mongoose.model("Course", courseSchema); // Ensure the model name is "Course"

const validateCreateCourse = (data) => {
  const schema = Joi.object({
    title: Joi.string().required().messages({
      "string.empty": "Title is required",
    }),
    description: Joi.string().required().messages({
      "string.empty": "Description is required",
    }),
    thumbnail: Joi.string().uri().optional().allow("").messages({
      "string.uri": "Invalid URL format",
    }),
    instructor: Joi.string().required().messages({
      "string.empty": "Instructor is required",
    }),
  });
  return schema.validate(data);
};

module.exports = {
  Course,
  validateCreateCourse,
};
