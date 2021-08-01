import service from "./axios.interceptor";

export async function getUserData(id) {
  return await service.get("user/" + id);
}
