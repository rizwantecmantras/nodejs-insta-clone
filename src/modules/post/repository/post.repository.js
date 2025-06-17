import Post from '../model/post.model.js';

class PostRepository {
  async create(postData) {
    return await Post.create(postData);
  }

  async findById(id) {
    return await Post.findById(id);
  }

  async fetchAll() {
    return await Post.find().populate('user', '-password');
  }

  async update(id, postData) {
    return await Post.findByIdAndUpdate(id, postData, { new: true });
  }

  async delete(id) {
    return await Post.findByIdAndDelete(id);
  }
  async findByUserId(userId) {
      return await Post.find({user:userId}).select('-password');
  }
}

export default new PostRepository();