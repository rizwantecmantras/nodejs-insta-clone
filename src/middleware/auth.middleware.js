import jwt from 'jsonwebtoken';

// Middleware to check if the user is authenticated
const authMiddleware = (req , res , next) =>{
    
    const token = req.headers['authorization']?.split(' ')[1];
    // Check if token is provided
    if(!token) {
        return res.status(401).json({ message: 'No token provided' });
    }
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        
        if (err) {
            return res.status(401).json({ message: 'Invalid token' });
        }
        req.user = decoded; // Attach user info to request object
        next(); // Proceed to the next middleware or route handler
    });
}

export default authMiddleware;