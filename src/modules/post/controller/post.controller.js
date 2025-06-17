import postServices from "../services/post.services.js";

class PostController {
	async createPost(req, res) {
    
    try {
      // Assuming req.body contains the post data
      const post = await postServices.createPost({...req.body,user:req.user.id});

      res.status(201).json({ message: "Post created successfully", post });
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
  }
  async getAllPosts(req, res) {
    try {
      const posts = await postServices.getAllPosts();
      res.status(200).json({ message: "Posts fetched successfully", posts });
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
  }
  async getPostsByUserId(req, res) {
    try {
      const userId = req.query.userId;
      const posts = await postServices.getPostsByUserId(userId);
      res.status(200).json({ message: "Posts fetched successfully", posts });
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
  }
  async deletePost(req, res) {
    try {
      const postId = req.params.postId;
      const post = await postServices.deletePost(postId);
      res.status(200).json({ message: "Post deleted successfully", post });
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
  }
}

export default new PostController();