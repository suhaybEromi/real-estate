const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
require("dotenv").config();
app.use(express.json());

const routes = require("./routes/index.routes");
app.use("/", routes);

app.listen(3000);
