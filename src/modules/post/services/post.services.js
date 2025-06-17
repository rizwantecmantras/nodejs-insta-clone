import { Error } from 'mongoose';
import postRepo from '../repository/post.repository.js';

class PostService {
    async createPost(postData) {
        const post = await postRepo.create(postData);
        return post;
    }
    async getAllPosts() {
        const posts = await postRepo.fetchAll();
        return posts;
    }
    async getPostsByUserId(userId) {
        if (!userId) {
            throw new Error('User ID is required');
        }
        const posts = await postRepo.findByUserId(userId);
        return posts;
    }
    async deletePost(postId) {
        if (!postId) {
            throw new Error('Post ID is required');
        }
        const post = await postRepo.findById(postId);
        if (!post) {
            throw new Error('Post not found');
        }
        await postRepo.delete(postId);
        return { message: 'Post deleted successfully' };
    }
}

export default new PostService();