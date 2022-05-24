const planet = [];

const fs = require("fs");
const {parse} = require("csv-parse");


function habitualPlanet(planets) {
    return planets["koi_disposition"] === "CONFIRMED" && planets["koi_insol"] > 0.36 && planets["koi_insol"] < 1.11 && planets["koi_prad"] < 1.6;
}
function loadPlanetData() {
    return new Promise((resolve, rejects) => {
        fs.createReadStream("../data/data.csv").pipe(parse({comment: "#", columns: true})).on("data", (data) => {
            if (habitualPlanet(data)) {
                planet.push(data);
            };
        }).on("error", (error) => {
            rejects(error);
        }).on("end", () => {
            console.log(planet);
          resolve();
        })

    })
}

module.exports = {
    loadPlanetData,    
  planet:  planet
};
