const asyncHandler = require("express-async-handler");
const {
  Instructor,
  validateCreateInstructor,
} = require("../models/instructor");

module.exports.getAllInstructorsCtrl = asyncHandler(async (req, res) => {
  const instructors = await Instructor.find();
  res.json(instructors);
});

module.exports.addInstructorCtrl = asyncHandler(async (req, res) => {
  // Validation Create Instructor
  const { error } = validateCreateInstructor(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }

  // Create Instructor
  const instructor = await Instructor.create({
    name: req.body.name,
    job: req.body.job,
    image: req.body.url,
  });

  res.json({ message: "Instructor Added Successfully" });
});

module.exports.deleteInstructorCtrl = asyncHandler(async (req, res) => {
  await Instructor.findByIdAndDelete(req.params.id);
  res.json({ message: "Instructor Deleted Successfully !!" });
});
