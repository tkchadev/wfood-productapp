const customerAppModel = require("../models/product-app.model");
const bcrypt = require("bcryptjs");
const jwt = require("../helper/jwt");
const moment = require("moment");

const selectProductCustomerGeneral = async (obj) => {
  obj.accesstoken = obj.accesstoken && obj.accesstoken.split(" ")[1];
  const resToken = await customerAppModel.findTokenCustomer(obj);
  if (!resToken.status){
    return resToken
  }
  const resProcus = await customerAppModel.selectProductCustomerGeneral(resToken.result.ref_cus)
  return resProcus
};

const selectProductCustomerDelivered = async (obj) => {
  obj.accesstoken = obj.accesstoken && obj.accesstoken.split(" ")[1];
  const resToken = await customerAppModel.findTokenCustomer(obj);
  if (!resToken.status){
    return resToken
  }
  const resProcus = await customerAppModel.selectProductCustomerDelivered(resToken.result.ref_cus)
  return resProcus
};

const selectProductCustomerFav = async (obj) => {
  obj.accesstoken = obj.accesstoken && obj.accesstoken.split(" ")[1];
  const resToken = await customerAppModel.findTokenCustomer(obj);
  if (!resToken.status){
    return resToken
  }
  const resProcus = await customerAppModel.selectProductCustomerFav(resToken.result.ref_cus)
  return resProcus
};

const updateFavForProductCustomer = async (obj) => {
  const resStatus = await customerAppModel.findProductCustomerFavByID(obj.id)
  if (!resStatus.status){
    return resStatus
  }
  obj['status_fav'] = !resStatus.result.status_fav
  const resFav = await customerAppModel.updateFavForProductCustomer(obj)
  return resFav
};

const findProductCustomerByName = async (obj) => {
  obj.accesstoken = obj.accesstoken && obj.accesstoken.split(" ")[1];
  const resToken = await customerAppModel.findTokenCustomer(obj);
  if (!resToken.status){
    return resToken
  }

  let data = {
    id: resToken.result.ref_cus,
    name: obj.name
  }

  const resProcus = await customerAppModel.findProductCustomerByName(data)
  return resProcus
};

module.exports = {
  selectProductCustomerGeneral,
  selectProductCustomerDelivered,
  selectProductCustomerFav,
  updateFavForProductCustomer,
  findProductCustomerByName
};
