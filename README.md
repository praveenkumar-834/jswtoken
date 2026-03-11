# JWT Authentication API

A simple REST API built using **Node.js, Express, MongoDB, and JWT** for user authentication.
This project demonstrates how to implement **user registration, login, and protected routes using JSON Web Tokens**.

---

## Technologies Used

* Node.js
* Express.js
* MongoDB
* Mongoose
* JSON Web Token (JWT)
* bcryptjs
* dotenv

---

## Project Structure

```
project
│
├── config
│   └── db.js
│
├── controllers
│   └── authController.js
│
├── middleware
│   └── authMiddleware.js
│
├── models
│   └── userModel.js
│
├── routes
│   └── authRoutes.js
│
├── .env
├── .gitignore
├── package.json
└── server.js
```

---

## Installation

Clone the repository

```
git clone https://github.com/yourusername/jwt-auth-api.git
```

Go to the project directory

```
cd jwt-auth-api
```

Install dependencies

```
npm install
```

---

## Environment Variables

Create a `.env` file in the root folder and add:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

---

## Running the Server

Start the server

```
node server.js
```

Or run with nodemon

```
nodemon server.js
```

Server will run on:

```
http://localhost:5000
```

---

## API Endpoints

### Register User

POST `/api/register`

Request Body

```
{
  "username": "testuser",
  "email": "test@gmail.com",
  "password": "123456"
}
```

---

### Login User

POST `/api/login`

Request Body

```
{
  "email": "test@gmail.com",
  "password": "123456"
}
```

Response

```
{
  "message": "Login successful",
  "token": "JWT_TOKEN"
}
```

---

### Protected Route

GET `/api/profile`

Headers

```
Authorization: Bearer JWT_TOKEN
```

Response

```
{
  "message": "Protected route accessed",
  "user": {
    "id": "...",
    "email": "test@gmail.com"
  }
}
```

---

## Testing the API

You can test the endpoints using Postman:

1. Register a user
2. Login to receive a JWT token
3. Use the token to access protected routes

---

## Deployment

This API can be deployed using platforms such as:

* Vercel
* Render
* Railway

---

## Author

Praveen Kumar
