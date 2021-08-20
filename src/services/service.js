import service from "./axios.interceptor";
import qs from "qs";

export async function getFrontPageData(category) {
  return await service.get("shop/" + category);
}

export async function getProductDetails(id) {
  return await service.get("/shop/" + id.toString());
}

export async function getProductList(data) {
  return await service.get("shop/products", {
    params: {
      data: data,
    },
    paramsSerializer: (params) => {
      return qs.stringify(params);
    },
  });
}

export async function getFilters(category) {
  return await service
    .get("/shop/filters", {
      params: { category: category },
    })
    .then((result) => result.data);
}

export async function addProductTocart(data) {
  return await service.post("/user/addtocart/", { ...data });
}

export async function removeProductFromCart(data) {
  return await service.post("/user/removefromcart", { ...data });
}

export async function getCartData() {
  return await service.get("/user/getcart");
}

export async function addProductToFavourites(id) {
  return await service.post("user/favourite/", { id: id });
}

export async function getFavouriteList(userId) {
  console.log({ userId });
  return await service.get("user/favourite/" + userId.toString());
}

export async function getAddressList() {
  return await service.get("user/address").then((result) => result.data);
}

export async function createNewAddress(data) {
  return await service
    .post("user/address", data)
    .then((result) => result.data)
    .catch((result) => result.error);
}
