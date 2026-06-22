import instance from "./config.js";

async function getSubscriptions() {
  return await instance.get("/subscriptions");
}

async function getSubscriptionByUserId(userId) {
  return await instance.get(`/subscriptions/user/${userId}`);
}

async function createSubscription(data) {
  return await instance.post("/subscriptions", data);
}

async function updateSubscription(id, data) {
  return await instance.put(`/subscriptions/${id}`, data);
}

async function deleteSubscription(id) {
  return await instance.delete(`/subscriptions/${id}`);
}

export { 
  getSubscriptions, 
  getSubscriptionByUserId,
  createSubscription,
  updateSubscription,
  deleteSubscription,
 };