import instance from "./config.js";

async function createRequest(data) {
  return await instance.post("/requests", data);
}

async function getRequests() {
  return await instance.get("/requests");
}

async function acceptRequest(id, data) {
  return await instance.put(`/requests/${id}`, data);
}

async function cancelRequest(id, data) {
  return await instance.put(`/requests/${id}`, data);
}
export { createRequest, getRequests, acceptRequest, cancelRequest };