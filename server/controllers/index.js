const { User, Project, History } = require("../models")
const bycrpt = require("bcrypt")
const { signToken } = require("../helpers/jwt")

class Controller {
    static async register(req, res, next) {
        try {
            const { username, email, password } = req.body
            const user = await User.create({ username, email, password })
            res.status(201).json(user)
        } catch (error) {
            console.log(error);
            next(error)
        }
    }
    static async login(req, res, next) {
        try {
            console.log("MASUK LOGIN");
            const { email, password } = req.body
            if (!email) {
                throw { name: "nullEmail" }
            } else if (!password) {
                throw { name: "nullPassword" }
            }
            const user = await User.findOne({ where: { email: email } })
            if (!user || !bycrpt.compareSync(password, user.password)) {
                throw { name: "failLogin" }
            }
            const role = user.email == "admin@mail.com" ? "admin" : "user"
            // console.log(role);
            const access_token = signToken({ id: user.id, username:user.username, email: user.email, role })
            // console.log(verifyToken(token));
            user.dataValues.access_token = access_token
            user.dataValues.role = role
            // console.log(user);
            res.status(200).json(user)
        } catch (error) {
            console.log(error);
            next(error)
        }
    }
}

module.exports = Controller