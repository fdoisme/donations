const express = require("express");
const donations = express.Router();
const errorHandler = require("../middleware/errorHandlers");
const authentication = require("../middleware/authentication");
const Donations = require("../controllers/donations");
const authorization = require("../middleware/authorization");

donations.get("/project", Donations.projects)
donations.use(authentication)
donations.get("/user", Donations.user)
donations.post("/midtrans-token/:id", Donations.generateTokenMidtrans)
donations.post("/donate/:project_id", Donations.donate)
donations.patch("/project/:id", Donations.updateDonations)
donations.delete("/project/:id", authorization, Donations.deleteProject)

module.exports = donations