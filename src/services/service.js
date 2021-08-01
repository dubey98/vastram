import service from "./axios.interceptor";
import qs from "qs";

export async function getFrontPageData(category) {
  return await service.get("shop/" + category);
}

export async function getProductDetails(id) {
  return await service.get(id);
}

export async function getProductList(data) {
  console.log(data);
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
