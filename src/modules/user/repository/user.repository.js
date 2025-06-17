import User  from "../model/user.model.js";

export class UserRepository {
    async create(userData) {
      console.log("🚀 ~ UserRepository ~ create ~ userData:", userData)
      return await User.create(userData);
    }
    async findByEmail(email) {
      return await User.findOne({ email });  
    }
    async fetchAll() {
      return await User.find().select("-password");  
    }
}

export default new UserRepository();