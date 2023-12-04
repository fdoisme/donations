const { User, Project, History } = require("../models")

async function authorization(req, res, next) {
    console.log(req.user);
    try {
        const { id } = req.params
        const project = await Project.findByPk(id);
        if (!project) {
            throw ({ name: "notFound" })
        }
        if (req.user.role.toLowerCase() == "admin") {
            if (req.user.role != "admin") {
                throw ({ name: "Forbidden" })
            }
        }
        next()
    } catch (error) {
        next(error)
    }
}

module.exports = authorization