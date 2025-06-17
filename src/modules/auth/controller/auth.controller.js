import authServices from "../services/auth.services.js";

class AuthController {
    async register(req, res) {
        try {
            const result = await authServices.register(req.body);
            res.status(201).json(result);
        } catch (error) {
            res.status(500).json({ message: "Internal Server Error", error: error.message });
        }
    }
    async login(req, res) {
            try {
                const result = await authServices.login(req.body);
                res.status(200).json(result);
            } catch (error) {
                res.status(500).json({ message: "Internal Server Error", error: error.message });
            }
    }
}

export default new AuthController();