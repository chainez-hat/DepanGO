import instance from "./config.js";

async function getServices() {
  return await instance.get("/services");
}

export { getServices };