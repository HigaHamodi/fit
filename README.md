FitWell Academy
Project Overview
FitWell Academy is a comprehensive platform designed to offer fitness and wellness courses to improve health, fitness, and overall well-being. This project comprises both backend and frontend components, providing a complete solution for managing and delivering courses. Key operations include:

Create: Add new users and courses.
Read: Retrieve details of users and courses.
Update: Modify existing user information and course details.
Delete: Remove users and courses from the system.
This API serves as a robust backend for fitness and wellness applications, facilitating seamless content management and user interactions.

Key Features
User Management: User registration, login, and management.
Course Management: Create and manage courses.
Technologies
MongoDB: For data storage.
Express.js: Web server framework.
Mongoose: MongoDB object modeling.
Bcryptjs: Password hashing.
Joi: Data validation.
JsonWebToken: Secure authentication.
Config: Configuration management.
Helmet: Security middleware.
Cors: Cross-Origin Resource Sharing.
Bonus Features
Rate Limiting: Limits repeated requests to public APIs and/or endpoints.
Photo Upload: Middleware for handling multipart/form-data.
Token Verification: Middleware for verifying user tokens.
API Endpoints
User Endpoints
No. Method URL Action Authorization Return
1 POST /api/auth/register Register user All User object
2 POST /api/auth/login Login All JWT
3 GET /api/users Get all users Admin Users array
4 GET /api/users/
Get user Registered user/Admin User object
5 PUT /api/users/
Edit user Registered user Updated user
6 DELETE /api/users/
Delete user Registered user/Admin Deleted user
Course Endpoints
No. Method URL Action Authorization Return
1 GET /api/courses Get all courses All Courses array
2 GET /api/courses/
Get course All Course object
3 POST /api/courses Create new course Admin/Instructor Created course
4 PUT /api/courses/
Edit course Course creator/Admin Updated course
5 DELETE /api/courses/
Delete course Course creator/Admin Deleted course
Postman Integration
This project includes a Postman collection that describes the available API routes. You can import this collection into Postman to explore and test the API endpoints easily.

Locating the Postman Collection
You can find the Postman collection JSON file in the backend/postman folder:

FitWell Academy API.postman_collection.json
Importing the Collection into Postman
Open Postman.
Click on Import in the top-left corner.
Select File and upload the FitWell Academy API.postman_collection.json file.
After the import is complete, you will see a new collection in your Postman sidebar.
Getting Started
To get started with this project, clone the repository and install dependencies:

bash
Copy code
git clone https://github.com/HigaHamodi/fit.git
cd fit
Backend
Navigate to the backend directory and install the required dependencies:

bash
Copy code
cd backend
npm install
Create a .env file in the backend directory and add the following environment variables:

makefile
Copy code
MONGO_URL=your_mongodb_connection_string
JWT_SECRET_KEY=your_jwt_secret_key
PORT=5500
To start the backend server, run:

bash
Copy code
npm start
For development purposes, you can use:

bash
Copy code
npm run dev
Frontend
Navigate to the frontend directory and install the required dependencies:

bash
Copy code
cd frontend
npm install
To start the frontend development server, run:

bash
Copy code
npm run dev
The frontend server will run on http://localhost:5173.

Project Structure
The project is structured as follows:

arduino
Copy code
fit
├── backend
│ ├── config
│ │ └── ConnectToDb.js
│ ├── controllers
│ │ ├── authController.js
│ │ ├── coursesController.js
│ ├── models
│ │ ├── course.js
│ │ └── user.js
│ ├── routes
│ │ ├── authRoute.js
│ │ ├── coursesRoute.js
│ ├── postman
│ │ └── FitWell Academy API.postman_collection.json
│ ├── index.js
│ └── package.json
├── frontend
│ ├── public
│ │ └── icon.png
│ ├── src
│ │ ├── App.jsx
│ │ ├── index.jsx
│ │ ├── Pages
│ │ │ ├── Auth
│ │ │ │ ├── Login
│ │ │ │ │ └── login.jsx
│ │ │ └── Home
│ │ │ └── home.jsx
│ └── package.json
Backend
index.js: Entry point for the backend server.
config/ConnectToDb.js: Configuration for connecting to the MongoDB database.
controllers/: Contains the controllers for handling various routes.
models/: Contains the Mongoose models for the application's data.
routes/: Defines the routes for the API.
postman/: Contains the Postman collection JSON file.
Frontend
public/: Contains static assets.
src/: Contains the React components and pages.
App.jsx: Main application component.
index.jsx: Entry point for the React application.
Pages/Auth/Login/login.jsx: Login page component.
Pages/Home/home.jsx: Home page component.
Contact
For any questions or feedback, please reach out to HigaHamodi.

License
This project is licensed under the MIT License.

This README file provides a detailed and structured overview of the FitWell Academy project, including installation instructions, key features, technologies used, API endpoints, Postman integration, and more. Feel free to customize it further to better fit your project's specific details.
