# <span style="color:blue">FitWell Academy</span>

## Project Overview

FitWell Academy is a comprehensive platform designed to offer fitness and wellness courses to improve health, fitness, and overall well-being. This project comprises both backend and frontend components, providing a complete solution for managing and delivering courses. Key operations include:

- **Create**: Add new users and courses.
- **Read**: Retrieve details of users and courses.
- **Update**: Modify existing user information and course details.
- **Delete**: Remove users and courses from the system.

This API serves as a robust backend for fitness and wellness applications, facilitating seamless content management and user interactions.

## <span style="color:green">Key Features</span>

- **User Management**: User registration, login, and management.
- **Course Management**: Create and manage courses.
- **Admin Management Dashboard**: Users , Instructors, Orders management.

## Technologies

- **MongoDB**: For data storage.
- **Express.js**: Web server framework.
- **Mongoose**: MongoDB object modeling.
- **Bcryptjs**: Password hashing.
- **Joi**: Data validation.
- **JsonWebToken**: Secure authentication.
- **Config**: Configuration management.
- **Helmet**: Security middleware.
- **Cors**: Cross-Origin Resource Sharing.


### <span style="color:red">API Endpoints and Postman Integration</span>

**This project includes a Postman collection that describes the available API routes. You can import this collection into Postman to explore and test the API endpoints easily.**

**Locate the Postman collection file:** You can find the `FitWell Academy API.postman_collection.json` file in the `backend/postman` folder.

**Adding the collection to Postman:** After the import is complete, you will see a new collection in your Postman sidebar.


## Getting Started

To get started with this project, clone the repository and install dependencies:

```bash
git clone https://github.com/HigaHamodi/fit.git
cd fit

Backend
Navigate to the backend directory and install the required dependencies:

bash
Copy code
cd backend
npm install
For development purposes, you can use:

bash
Copy code
npm run dev

# <span style="color:blue">FitWell Academy Frontend</span>

## Project Overview

The frontend of FitWell Academy is a modern web application built using React, MUI (Material-UI) for the user interface components, and Vite as the build tool for a fast and efficient development experience. This application is designed to offer fitness and wellness courses, providing users with an intuitive and engaging interface to manage their health and fitness journey.

## <span style="color:green">Key Features</span>

- **User Management**: User registration, login, and profile management.
- **Course Management**: View, search, and enroll in various fitness and wellness courses.
- **Responsive Design**: Optimized for both desktop and mobile devices.

## Technologies

- **React**: A JavaScript library for building user interfaces.
- **MUI (Material-UI)**: React components for faster and easier web development.
- **Vite**: A build tool that provides a faster and leaner development experience for modern web projects.

## <span style="color:orange">Bonus Features</span>

- **Dark Mode**: Toggle between light and dark themes.
- **Notification System**: Real-time notifications for various user actions.
- **Form Validation**: Robust form validation using React Hook Form and Yup.

### <span style="color:red">API Endpoints and Postman Integration</span>

**This project includes a Postman collection that describes the available API routes. You can import this collection into Postman to explore and test the API endpoints easily.**

**Locate the Postman collection file:** You can find the `FitWell Academy API.postman_collection.json` file in the `backend/postman` folder.

**Adding the collection to Postman:** After the import is complete, you will see a new collection in your Postman sidebar.

## Getting Started

To get started with this project, clone the repository and install dependencies:

```bash
git clone https://github.com/HigaHamodi/fit.git
cd fit/frontend
npm install

To start the frontend development server, run:

bash
Copy code
npm run dev
The frontend server will run on http://localhost:5173.
