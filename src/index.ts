import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import productRoutes from './routes/productRoutes';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());

app.use('/api/products', productRoutes);

app.get('/', (req, res) => {
    res.send('Welcome to the E-commerce API');
  });

const DB_URI = 'mongodb://localhost:27017/';
mongoose.connect(DB_URI)
  .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
  .catch((error) => console.error('Connection error', error));
