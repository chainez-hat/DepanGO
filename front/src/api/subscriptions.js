import instance from "./config.js";

async function getSubscriptions() {
  return await instance.get("/subscriptions");
}

export { getSubscriptions };