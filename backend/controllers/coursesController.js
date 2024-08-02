const asyncHandler = require("express-async-handler");
const { Course } = require("../models/course");
const DEFAULT_THUMBNAIL = "/courses.webp";

// Get all courses
const getAllCourses = asyncHandler(async (req, res) => {
  const courses = await Course.find({});
  const coursesWithDefaultImage = courses.map((course) => {
    if (!course.thumbnail) {
      course.thumbnail = DEFAULT_THUMBNAIL;
    }
    return course;
  });
  res.json(coursesWithDefaultImage);
});

// Get a course by ID
const getCourseById = asyncHandler(async (req, res) => {
  const course = await Course.findById(req.params.id);
  if (course) {
    res.json(course);
  } else {
    res.status(404).json({ message: "Course not found" });
  }
});

const createCourse = asyncHandler(async (req, res) => {
  const { title, description, instructor, thumbnail } = req.body;
  console.log("Received course data:", req.body);

  // Validate incoming data
  if (!title || !description || !instructor) {
    res.status(400).json({ message: "All fields are required" });
    return;
  }

  const courseData = {
    title,
    description,
    thumbnail: thumbnail || DEFAULT_THUMBNAIL,
    instructor,
  };

  try {
    const course = new Course(courseData);
    const createdCourse = await course.save();
    res.status(201).json(createdCourse);
  } catch (error) {
    console.error("Error creating course:", error);
    res.status(400).json({ message: error.message || "Error creating course" });
  }
});

// Update a course
const updateCourse = asyncHandler(async (req, res) => {
  try {
    const { title, description, instructor, thumbnail } = req.body;
    const course = await Course.findById(req.params.id);
    if (course) {
      course.title = title;
      course.description = description;
      course.thumbnail = thumbnail || course.thumbnail;
      course.instructor = instructor;
      const updatedCourse = await course.save();
      res.json(updatedCourse);
    } else {
      res.status(404).json({ message: "Course not found" });
    }
  } catch (error) {
    console.error("Error updating course:", error); // Log error details
    res.status(400).json({ message: error.message || "Error updating course" });
  }
});

// Delete a course
const deleteCourse = asyncHandler(async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    if (course) {
      await course.deleteOne(); // Correct method to delete the course
      res.json({ message: "Course removed" });
    } else {
      res.status(404).json({ message: "Course not found" });
    }
  } catch (error) {
    console.error("Error deleting course:", error); // Log the error details
    res.status(500).json({ message: error.message || "Error deleting course" });
  }
});

module.exports = {
  getAllCourses,
  getCourseById,
  createCourse,
  updateCourse,
  deleteCourse,
};
