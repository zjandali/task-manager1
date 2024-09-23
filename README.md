# Task Manager Application

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
- [Environment Variables](#environment-variables)
- [Running the Application](#running-the-application)
- [API Documentation](#api-documentation)
- [Testing](#testing)
  - [Using Postman](#using-postman)
  - [Automating Tests with Newman](#automating-tests-with-newman)
- [CI/CD Integration](#cicd-integration)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## Project Overview

The **Task Manager Application** is a full-stack web application that allows users to manage their tasks efficiently. Users can register, authenticate, create, read, update, and delete tasks. The application supports assigning tasks to users and tracking task statuses.

Postman is integrated into the development workflow for API design, testing, and documentation. Additionally, Newman is used to automate testing within a CI/CD pipeline to ensure continuous quality assurance.

## Features

- **User Authentication:**
  - Register new users
  - Login and receive JWT tokens
  - Protect routes using authentication middleware

- **Task Management:**
  - Create new tasks with titles, descriptions, statuses, and due dates
  - View all tasks assigned to the authenticated user
  - Update task details
  - Delete tasks

- **API Development:**
  - Design and test APIs using Postman
  - Automate tests with Newman
  - Generate comprehensive API documentation

- **CI/CD Integration:**
  - Automated testing on every push or pull request using GitHub Actions

## Tech Stack

- **Backend:**
  - Node.js
  - Express.js
  - MongoDB
  - Mongoose
  - JSON Web Tokens (JWT) for authentication

- **Frontend:**
  - React.js
  - Axios for API calls
  - React Router DOM for routing

- **API Development & Testing:**
  - Postman
  - Newman

- **CI/CD:**
  - GitHub Actions

## Prerequisites

Ensure you have the following installed on your machine:

- **Node.js & npm:** [Download and Install](https://nodejs.org/)
- **MongoDB:** [Download and Install](https://www.mongodb.com/try/download/community)
- **Git:** [Download and Install](https://git-scm.com/downloads)
- **Postman:** [Download and Install](https://www.postman.com/downloads/)
- **Basic Knowledge Of:**
  - JavaScript
  - Node.js & Express
  - React.js
  - MongoDB
  - Git

## Installation

### Backend Setup

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/yourusername/task-manager.git
   cd task-manager/backend
