const { pgDB } = require("../configs/db.connect");

const findTokenCustomer = async (obj) => {
  sql = "SELECT ref_cus FROM accesstoken_cus WHERE accesstoken=${accesstoken}";
  try {
    const result = await pgDB.query(sql, obj);
    if (result[0]) {
      data = {
        status: true,
        result: result[0],
      };
    } else {
      data = {
        status: false,
        result: [],
      };
    }

    return data;
  } catch (error) {
    data = {
      status: false,
      result: [],
    };
    return data;
  }
};

const selectProductCustomerGeneral = async (id) => {
  sql = `SELECT status_fav,procore_name,procore_photo,product_cus.id 
  FROM product_cus INNER JOIN product_core ON product_cus.ref_procore = product_core.id 
  WHERE ref_cus = ${id} AND product_cus.is_deleted != 99 AND product_core.is_deleted != 99`;

  try {
    const result = await pgDB.query(sql);
    if (result[0]) {
      data = {
        status: true,
        message: `Success`,
        result: result,
      };
    } else {
      data = {
        status: true,
        message: `ไม่พบรายการสินค้า`,
        result: [],
      };
    }
    return data;
  } catch (error) {
    data = {
      status: false,
      message: `Error ${error}`,
      result: [],
    };
    return data;
  }
};

const selectProductCustomerDelivered = async (id) => {
  sql = `SELECT status_fav,procore_name,procore_photo,product_cus.id 
  FROM product_cus INNER JOIN product_core ON product_cus.ref_procore = product_core.id 
  WHERE ref_cus = ${id} AND product_cus.status_delivered = true AND product_cus.is_deleted != 99 AND product_core.is_deleted != 99`;

  try {
    const result = await pgDB.query(sql);
    if (result[0]) {
      data = {
        status: true,
        message: `Success`,
        result: result,
      };
    } else {
      data = {
        status: true,
        message: `ไม่พบรายการสินค้า`,
        result: [],
      };
    }
    return data;
  } catch (error) {
    data = {
      status: false,
      message: `Error ${error}`,
      result: [],
    };
    return data;
  }
};

const selectProductCustomerFav = async (id) => {
  sql = `SELECT status_fav,procore_name,procore_photo,product_cus.id 
  FROM product_cus INNER JOIN product_core ON product_cus.ref_procore = product_core.id 
  WHERE ref_cus = ${id} AND product_cus.status_fav = true AND product_cus.is_deleted != 99 AND product_core.is_deleted != 99`;

  try {
    const result = await pgDB.query(sql);
    if (result[0]) {
      data = {
        status: true,
        message: `Success`,
        result: result,
      };
    } else {
      data = {
        status: true,
        message: `ไม่พบรายการสินค้า`,
        result: [],
      };
    }
    return data;
  } catch (error) {
    data = {
      status: false,
      message: `Error ${error}`,
      result: [],
    };
    return data;
  }
};

const findProductCustomerFavByID = async (id) => {
  sql = `SELECT status_fav FROM product_cus WHERE id = ${id}`;

  try {
    const result = await pgDB.query(sql);

    data = {
      status: true,
      message: `Success`,
      result: result[0],
    };

    return data;
  } catch (error) {
    data = {
      status: false,
      message: `Error ${error}`,
      result: [],
    };
    return data;
  }
};

const updateFavForProductCustomer = async (obj) => {
  sql =
    "UPDATE product_cus SET status_fav=${status_fav},updated_at=${updated_at} WHERE id=${id} RETURNING id";

  try {
    const result = await pgDB.query(sql, obj);
    data = {
      status: true,
      message: `Success`,
      result: [],
    };
    return data;
  } catch (error) {
    data = {
      status: false,
      message: `Error ${error}`,
      result: [],
    };
    return data;
  }
};

const findProductCustomerByName = async (obj) => {

  sql = `SELECT status_fav,procore_name,procore_photo,product_cus.id 
  FROM product_cus INNER JOIN product_core ON product_cus.ref_procore = product_core.id 
  WHERE ref_cus = ${obj.id} AND product_core.procore_name LIKE '%${obj.name}%' AND product_cus.is_deleted != 99 AND product_core.is_deleted != 99`;

  try {
    const result = await pgDB.query(sql);
    if (result[0]) {
      data = {
        status: true,
        message: `Success`,
        result: result,
      };
    } else {
      data = {
        status: true,
        message: `ไม่พบรายการสินค้า`,
        result: [],
      };
    }
    return data;
  } catch (error) {
    data = {
      status: false,
      message: `Error ${error}`,
      result: [],
    };
    return data;
  }
};

const selectProductCustomerInfoByID = async (obj) => {

  sql = `SELECT status_fav,procore_name,procore_detail,procore_photo,product_cus.id 
  FROM product_cus INNER JOIN product_core ON product_cus.ref_procore = product_core.id 
  WHERE ref_cus = ${obj.cus_id} AND product_cus.id = ${obj.procus_id} AND product_cus.is_deleted != 99 AND product_core.is_deleted != 99`;

  try {
    const result = await pgDB.query(sql);
    if (result[0]) {
      data = {
        status: true,
        message: `Success`,
        result: result,
      };
    } else {
      data = {
        status: true,
        message: `ไม่พบรายการสินค้า`,
        result: [],
      };
    }
    return data;
  } catch (error) {
    data = {
      status: false,
      message: `Error ${error}`,
      result: [],
    };
    return data;
  }
};

module.exports = {
  findTokenCustomer,
  selectProductCustomerGeneral,
  selectProductCustomerDelivered,
  selectProductCustomerFav,
  findProductCustomerFavByID,
  updateFavForProductCustomer,
  findProductCustomerByName,
  selectProductCustomerInfoByID
};
