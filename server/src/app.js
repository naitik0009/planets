const express = require("express");
const planetsRouter = require("./routes/planet.router");
const launchRouter = require("./routes/launch.route");
const cors = require("cors");
const app = express();
const morgan = require("morgan");
app.use(cors({
    origin:"http://localhost:3000",
}));

app.use(express.json());
app.use(morgan());
app.use("/api/v1/",planetsRouter);
app.use("/api/v1",launchRouter);


module.exports = app;                                                                           