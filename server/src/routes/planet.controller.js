const {planet} = require("../models/planet.model");

const getAllPlanet = async function(request,response){
console.log(planet);
  return response.status(200).json(planet);
};



module.exports = {getAllPlanet};