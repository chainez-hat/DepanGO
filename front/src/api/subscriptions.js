import instance from "./config.js";

async function getSubscriptions() {
  return await instance.get("/subscriptions");
}

async function getSubscriptionByUserId(userId) {
  return await instance.get(`/subscriptions/user/${userId}`);
}

export { getSubscriptions };