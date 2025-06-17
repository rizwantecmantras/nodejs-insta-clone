import { Router } from "express";
import authContoller from '../controller/auth.controller.js';

const router = Router();

router.get('/health', (req, res) => {
    res.status(200).json({ message: 'Auth service is running' });
});
router.post('/register',  authContoller.register);
router.get('/login',  authContoller.login);

export default router;