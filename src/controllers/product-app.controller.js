const customerAppServies = require("../services/product-app.service");
const moment = require("moment");

const getProductCustomerGeneral = async (req, res) => {
  const obj = {
    accesstoken: req.headers["authorization"],
  };
  const result = await customerAppServies.selectProductCustomerGeneral(obj);
  if (result.status) {
    res.status(200).json(result);
  } else {
    res.status(400).json(result);
  }
};
const getProductCustomerDelivered = async (req, res) => {
  const obj = {
    accesstoken: req.headers["authorization"],
  };
  const result = await customerAppServies.selectProductCustomerDelivered(obj);
  if (result.status) {
    res.status(200).json(result);
  } else {
    res.status(400).json(result);
  }
};
const getProductCustomerFav = async (req, res) => {
  const obj = {
    accesstoken: req.headers["authorization"],
  };
  const result = await customerAppServies.selectProductCustomerFav(obj);
  if (result.status) {
    res.status(200).json(result);
  } else {
    res.status(400).json(result);
  }
};
const postProductCustomerByName = async (req, res) => {
  const obj = {
    accesstoken: req.headers["authorization"],
    name: req.body.name,
  };
  const result = await customerAppServies.findProductCustomerByName(obj);
  if (result.status) {
    res.status(200).json(result);
  } else {
    res.status(400).json(result);
  }
};
const updateFavForProductCustomer = async (req, res) => {
  const obj = {
    id: req.body.id,
    updated_at: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
  };
  const result = await customerAppServies.updateFavForProductCustomer(obj);
  if (result.status) {
    res.status(200).json(result);
  } else {
    res.status(400).json(result);
  }
};

module.exports = {
  getProductCustomerGeneral,
  getProductCustomerDelivered,
  getProductCustomerFav,
  postProductCustomerByName,
  updateFavForProductCustomer,
};
