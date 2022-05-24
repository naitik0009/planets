const http = require("http");
const app = require("./app");
const server = http.createServer(app);
const {loadPlanetData} = require("./models/planet.model");


async function startServer(){
    await loadPlanetData();
    server.listen(5500,()=>{console.log("Server started successfully on PORT",5500)});
}




startServer();
