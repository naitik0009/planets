const {launches,addNewLaunch} = require("../models/launch.model");

const getAllLaunches =  function (request,response){
    return response.status(200).json(Array.from(launches.values()));
};

const addLaunch = async function(request,response){
    const launch = request.body;
    console.log(launch);
    launch.launchDate = new Date(launch.launchDate);
    const create = await addNewLaunch(launch);

return response.status(201).json({create});
};
module.exports = {getAllLaunches,addLaunch};