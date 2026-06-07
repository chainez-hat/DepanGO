import instance from "./config.js";

async function createRequest(data) {
  return await instance.post("/requests", data);
}

async function getRequests() {
  return await instance.get("/requests");
}

export { createRequest, getRequests };