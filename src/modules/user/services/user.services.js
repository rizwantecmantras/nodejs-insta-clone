import userRepo from "../repository/user.repository.js";

class UserService {
  async getAllUsers() {
    return await userRepo.fetchAll();
  }
}

export default new UserService();