const mongoose = require("mongoose");
const dotenv = require("dotenv");
const { Course } = require("./models/course"); // Adjust the path if necessary
const connectDB = require("./config/ConnectToDb"); // Adjust the path if necessary

// Load environment variables from .env file
dotenv.config();

const courses = [
  {
    title: "Beginner Yoga",
    description:
      "Learn the basics of yoga with this introductory course. Perfect for beginners.",
    instructor: "Sarah Lee",
  },
  {
    title: "Advanced Strength Training",
    description:
      "Take your strength training to the next level with advanced techniques and workouts.",
    instructor: "John Doe",
  },
  {
    title: "Nutrition for Athletes",
    description:
      "Understand the nutritional needs of athletes and how to optimize performance through diet.",
    instructor: "Jim Green",
  },
  {
    title: "Post-Injury Rehabilitation",
    description:
      "Learn how to safely and effectively recover from injuries with this rehabilitation course.",
    instructor: "Laura Wilson",
  },
  {
    title: "Mindfulness Meditation",
    description:
      "Explore mindfulness and meditation techniques to reduce stress and improve mental clarity.",
    instructor: "Alice Johnson",
  },
];

async function seedCourses() {
  try {
    // Connect to the database
    await connectDB();

    // Delete existing data
    await Course.deleteMany();

    // Insert initial data
    await Course.insertMany(courses);

    console.log("Courses seeded successfully");
    process.exit();
  } catch (error) {
    console.error("Error seeding courses:", error);
    process.exit(1);
  }
}

seedCourses();
