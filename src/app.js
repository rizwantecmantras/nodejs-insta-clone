import express from 'express';
import apiRoutes from './routes/index.js';
import { connect } from './utils/connection.js';


const app = express();
// Middleware to parse JSON bodies
app.use(express.json());

app.use('/api', apiRoutes);

// Middleware to handle 404 errors
app.use((req, res, next) => {
    res.status(404).json({ message: 'Not Found' });
}); 

connect();

export default app;