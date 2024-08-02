const mongoose = require("mongoose");
const joi = require("joi");

const InstructorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      min: 4,
      required: true,
      trim: true,
    },
    job: {
      type: String,
      min: 4,
      required: true,
      trim: true,
    },
    image: {
      type: String, // Corrected to String
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);

const Instructor = mongoose.model("Instructor", InstructorSchema);

function validateCreateInstructor(obj) {
  const schema = joi.object({
    name: joi.string().min(4).trim().required().messages({
      "string.base": `שם חייב להיות מחרוזת`,
      "string.empty": `שם אינו יכול להיות ריק`,
      "string.min": `שם חייב להיות לפחות {#limit} תווים`,
      "any.required": `שם הוא שדה חובה`,
    }),
    job: joi.string().min(4).trim().required().messages({
      "string.base": `תפקיד חייב להיות מחרוזת`,
      "string.empty": `תפקיד אינו יכול להיות ריק`,
      "string.min": `תפקיד חייב להיות לפחות {#limit} תווים`,
      "any.required": `תפקיד הוא שדה חובה`,
    }),
    url: joi.string().trim().required().messages({
      "string.base": `קישור לתמונה חייב להיות מחרוזת`,
      "string.empty": `קישור לתמונה אינו יכול להיות ריק`,
      "any.required": `קישור לתמונה הוא שדה חובה`,
    }),
  });
  return schema.validate(obj);
}

module.exports = {
  Instructor,
  validateCreateInstructor,
};
