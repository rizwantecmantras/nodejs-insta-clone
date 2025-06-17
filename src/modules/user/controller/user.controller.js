import userServices from "../services/user.services.js";

class UserController {
    async getAllUsers(req, res) {
        try {
            const users = await userServices.getAllUsers();
            res.status(200).json(users);
        } catch (error) {
            res.status(500).json({ message: "Internal Server Error", error: error.message });
        }
    }
}

export default new UserController();