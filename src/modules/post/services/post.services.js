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
}

export default new PostService();