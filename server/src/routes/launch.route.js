const express = require("express");

const {getAllLaunches,addLaunch} = require("./launch.controller");

const launchRouter  = express.Router();

launchRouter.route("/launch").get(getAllLaunches).post(addLaunch);

module.exports = launchRouter;