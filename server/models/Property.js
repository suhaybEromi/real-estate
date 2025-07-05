const mongoose = require("mongoose");
const { Schema } = mongoose;

const propertySchema = new Schema({});

module.exports = mongoose.model("Property", propertySchema);
