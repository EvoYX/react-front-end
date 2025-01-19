
---

# React Tour with MongoDB Integration

This is a React application that integrates **React Shepherd** to guide users through an interactive tour. The tour steps are pulled from a **MongoDB** database, and user progress is tracked using **localStorage** to ensure only new steps are shown to returning users. The project also provides functionality for the **Project Manager** to upload, manage, and download the tour steps using **Excel files**.

## Features:
- Interactive, step-by-step tour using **React Shepherd**.
- **MongoDB** integration for storing and retrieving tour steps and user progress.
- **Excel file upload** to allow the Project Manager to manage the tour steps.
- Tracks user progress in **localStorage** and displays only new steps to returning users.
- Project Manager can download the current tour steps into an **Excel file**.

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/your-repository-name.git
```

### 2. Install Dependencies

Navigate to the project directory and install the necessary dependencies:

```bash
cd your-repository-name
npm install
```

### 3. Configure MongoDB

Ensure MongoDB is set up and running. You can use a local MongoDB instance or a cloud service like MongoDB Atlas.

Create a `.env` file in the root directory and add your MongoDB URI:

```
REACT_APP_MONGODB_URI=your-mongodb-uri
```

### 4. Run the Application

Start the application in development mode:

```bash
npm start
```

The application will be available at [http://localhost:3000](http://localhost:3000).

## Project Manager Features

### 1. Upload Tour Steps
The Project Manager can upload an Excel file with the tour steps. This will be parsed and stored in the MongoDB database.

### 2. Download Tour Steps
The Project Manager can download the current tour steps as an Excel file for records or editing.

## Folder Structure

```
/public
  - index.html

/src
  /components
    - TourStep.js
    - TourUpload.js
  /services
    - api.js
  App.js
  index.js
  .env
  package.json
```
