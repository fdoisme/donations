const { User, Project, History } = require("../models")
const { signToken } = require("../helpers/jwt")
const midtransClient = require('midtrans-client');
const orderIdMidtrans = require("../helpers/generateOrderIdMidtrans");
const { literal } = require("sequelize");

class Donations {
    static async projects(req, res, next) {
        try {
            const project = await Project.findAll()
            res.status(200).json(project)
        } catch (error) {
            console.log(error);
            next(error)
        }
    }
    static async user(req, res, next) {
        try {
            let history = []
            const { month } = req.query
            const user1 = await History.findAll({
                where: {
                    user_id: req.user.id
                },
                order: [["id", "DESC"]],
                include: {
                    model: Project,
                }
            })
            console.log(month, "33");
            if (month) {
                const user2 = await User.findOne({
                    where: {
                        id: req.user.id
                    },
                    include: {
                        model: History,
                        where: literal(`EXTRACT(MONTH FROM log) = ${month}`),
                        include: {
                            model: Project
                        }
                    }
                })
                user2 ? history = user2.Histories : history = []
            }
            const activity = user1
            res.status(200).json({ activity, history })
        } catch (error) {
            console.log(error);
            next(error)
        }
    }
    static async generateTokenMidtrans(req, res, next) {
        try {
            const order_id = req.user.id + req.params.id + orderIdMidtrans()
            console.log(order_id);
            let snap = new midtransClient.Snap({
                // Set to true if you want Production Environment (accept real transaction).
                isProduction: false,
                serverKey: process.env.MIDTRANS_KEY
            });

            let parameter = {
                "transaction_details": {
                    "order_id": order_id,
                    "gross_amount": req.body.amount
                },
                "credit_card": {
                    "secure": true
                },
                "customer_details": {
                    // "first_name": "budi",
                    // "last_name": "pratama",
                    "email": req.user.email,
                    // "phone": "08111222333"
                }
            };

            const tokenMidtrans = await snap.createTransaction(parameter)
            tokenMidtrans.project_id = req.params.id
            tokenMidtrans.amount = req.body.amount
            tokenMidtrans.order_id = order_id
            console.log(tokenMidtrans);
            res.status(200).json(tokenMidtrans)
        } catch (error) {
            console.log(error);
            next(error)
        }
    }
    static async donate(req, res, next) {
        try {
            console.log("MASSSSSUUUUUUUUKKKK DDDOOOOOONNNNATE");
            console.log(req.body, req.params);
            const { amount, order_id } = req.body
            const { project_id } = req.params
            const history = await History.create({order_id, project_id, user_id:req.user.id, amount:amount, log: new Date()})
            res.status(200).json(history)
        } catch (error) {
            console.log(error);
            next(error)
        }
    }
    static async updateDonations(req, res, next) {
        try {
            console.log("UPDATEDONATIONS", req.params, req.body);
            const { id } = req.params
            let { amount } = req.body
            const project = await Project.findOne({ where: { id: id } })
            const donation = Number(amount) + Number(project.dataValues.donation)
            await Project.update(
                { donation },
                {
                    where: { id: id }
                })
            res.status(200).json(project)
        } catch (error) {
            console.log(error);
            next(error)
        }
    }
    static async deleteProject(req, res, next) {
        try {
            await Project.destroy({ where: { id: req.params.id } })
            res.status(200).json({ message: `Succes Delete Project with id = ${req.params.id}` })
        } catch (error) {
            console.log(error);
            next(error)
        }
    }
}

module.exports = Donations