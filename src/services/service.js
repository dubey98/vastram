import axios from "axios";

const url = "http://localhost:8080/api/v1/shop";

export async function getFrontPageData(category) {
  return await axios.get(url + "/" + category);
}
