const express = require("express");
const router = express.Router();
const propertyController = require("../controllers/property.controller");
const auth = require("../middlewares/auth.middleware");

router.get("/show", propertyController.showProperty);

router.get("/show/:id", propertyController.showPropertyDetails);

router.get("/add", propertyController.addProperty);

router.get("/update/:id", propertyController.updateProperty);

router.get("/delete/:id", propertyController.deleteProperty);

module.exports = router;
