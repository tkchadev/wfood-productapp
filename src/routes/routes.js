const router = require("express").Router();
const customerAppController = require("../controllers/product-app.controller");
const jwt = require("../helper/jwt");

router.get("/list/general", jwt.verifyTokenCustomer, customerAppController.getProductCustomerGeneral);
router.get("/list/delivered", jwt.verifyTokenCustomer, customerAppController.getProductCustomerDelivered);
router.get("/list/fav", jwt.verifyTokenCustomer, customerAppController.getProductCustomerFav);
router.post("/list/search", jwt.verifyTokenCustomer, customerAppController.postProductCustomerByName);
router.put("/change/fav", jwt.verifyTokenCustomer, customerAppController.updateFavForProductCustomer);

module.exports = router;
