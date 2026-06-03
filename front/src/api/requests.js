import instance from "./config.js";

async function createRequest(data) {
  return await instance.post("/requests", data);
}

export { createRequest };