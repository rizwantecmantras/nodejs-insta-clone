import { Router } from "express";
import postContoller from "../controller/post.controller.js";
import authMiddleware from "../../../middleware/auth.middleware.js";

const router = Router();


router.post('/create', authMiddleware,  postContoller.createPost);
router.get('/list', postContoller.getAllPosts);
router.get('/', postContoller.getPostsByUserId); //get posts by user ID using query parameter
router.delete('/:postId', authMiddleware, postContoller.deletePost);

export default router;