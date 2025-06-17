import { Router } from "express";
import authRoutes from '../modules/auth/routes/auth.routes.js';
import userRoutes from '../modules/user/routes/user.routes.js';
import postRoutes from '../modules/post/routes/post.routes.js';

const router = Router();

// Sample route
router.use('/auth', authRoutes);
router.use('/user', userRoutes);
router.use('/post', postRoutes)

export default router;
