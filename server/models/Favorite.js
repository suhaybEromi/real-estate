const mongoose = require("mongoose");

const { Schema } = mongoose;

const favoriteSchema = new Schema({});

module.exports = mongoose.model("Favorite", favoriteSchema);
