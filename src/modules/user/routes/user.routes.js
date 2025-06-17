import { Router } from "express";
import userController from '../controller/user.controller.js';

const router = Router();
router.get('/list', userController.getAllUsers);

export default router;