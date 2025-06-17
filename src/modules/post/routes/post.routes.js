import { Router } from "express";
import postContoller from "../controller/post.controller.js";
import authMiddleware from "../../../middleware/auth.middleware.js";

const router = Router();


router.post('/create', authMiddleware,  postContoller.createPost);
router.get('/list', postContoller.getAllPosts);

export default router;