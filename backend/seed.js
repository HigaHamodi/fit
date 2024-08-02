// seed.js

const mongoose = require("mongoose");
const dotenv = require("dotenv");
const { Instructor } = require("./models/instructor"); // Adjust the path if necessary
const connectDB = require("./config/ConnectToDb"); // Adjust the path if necessary

// Load environment variables from .env file
dotenv.config();

const instructors = [
  {
    name: "John Doe",
    job: "Personal Trainer",
    image: "/JohnDoe.webp",
  },
  {
    name: "Sarah Lee",
    job: "Yoga Instructor",
    image: "/SarahLee.webp",
  },
  {
    name: "Jim Green",
    job: "Nutritionist",
    image: "/JimGreen.webp",
  },
  {
    name: "Laura Wilson",
    job: "Physiotherapist",
    image: "/LauraWilson.webp",
  },
  {
    name: "Trainer One",
    job: "Personal Trainer",
    image: "/trainer1.webp",
  },
  {
    name: "Doctor Fit",
    job: "Doctor",
    image: "/doctor.webp",
  },
  {
    name: "Yoga Master",
    job: "Yoga Instructor",
    image: "/yoga.webp",
  },
  {
    name: "Fitness Physio",
    job: "Physiotherapist",
    image: "/physio.webp",
  },
  {
    name: "Nutrition Expert",
    job: "Nutritionist",
    image: "/nutritionist.webp",
  },
  {
    name: "Laura Smith",
    job: "Personal Trainer",
    image: "/personal_trainer.webp",
  },
];

async function seedInstructors() {
  try {
    // Connect to the database
    await connectDB();

    // Delete existing data
    await Instructor.deleteMany();

    // Insert initial data
    await Instructor.insertMany(instructors);

    console.log("Instructors seeded successfully");
    process.exit();
  } catch (error) {
    console.error("Error seeding instructors:", error);
    process.exit(1);
  }
}

seedInstructors();
