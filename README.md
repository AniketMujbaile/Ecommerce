# Ecommerce

This is an online shopping / eCommerce website made using Nodejs, Reactjs, MongoDB database for storing data and ContextAPI for store state and creating functions. On this site any user can signUp and signIn in his/her account. A user can add or remove product from cart, user can increase or decrease product quantity and can place order.

## 🔗 Hosted link

Ecommerce Hosted Link: [Ecommerce](https://ecommerce-frontend-iota-ten.vercel.app/)

## Technologies Used

- Node.js
- React.js
- Express.js
- MongoDB
 

## Project Structure

The project is organized into two main folders: `frontend` and `backend`.

### Frontend

The `frontend` folder contains the React.js application.

#### Installation

```bash
cd frontend
npm install
```

#### Usage

```bash
npm start
```

### Backend

The `backend` folder contains the Node.js and Express backend, along with the MongoDB database.

#### Installation

1. Create a MongoDB database and update the connection details in `backend/config/db.js`.

## Configuration File

 .env then modify to your environment variables PORT, mongodb uri.

```ENV

PORT= 5000

MONGO_URI= YOUR_URL

JWT_SECRET= YOUR_KEY
 
```
2. Install dependencies:

```bash
cd backend
npm install
```

3. Run the server:

```bash
npm start
```