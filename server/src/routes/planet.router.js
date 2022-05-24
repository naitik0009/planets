const express = require("express");
const {getAllPlanet} = require("./planet.controller");
const planetRouter = express.Router();

planetRouter.route("/planets").get(getAllPlanet);

module.exports = planetRouter;