const mongoose = require("mongoose");
const { Schema } = mongoose;

const visitSchema = new Schema({});

module.exports = mongoose.model("Visit", visitSchema);
