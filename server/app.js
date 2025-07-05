const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
app.use(cors());
require("dotenv").config();
app.use(express.json());

const propertyRoutes = require("./routes/property.route");
const userRoutes = require("./routes/user.route");
app.use("/property", propertyRoutes);
app.use("/user", userRoutes);

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL);
    console.log("Database connected successfully");
    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
  }
};

connectDb();
