const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const userRoutes = require('./routes/auth');
const productRoutes = require('./routes/product');
const cartRoutes = require('./routes/cart');

dotenv.config();

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true })); 

app.use(cors());

app.use(cors({
   origin: 'https://ecommerce-frontend-iota-ten.vercel.app',  
   credentials: true  
 }));

app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);
app.use('/api/cart', cartRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
 