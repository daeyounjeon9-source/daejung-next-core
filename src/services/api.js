import { addItem, clearAllDaejungData, clearList, getDataSummary, getList } from "./localDb";

const wait = (ms = 250) => new Promise((resolve) => setTimeout(resolve, ms));

export async function apiGetSummary() {
  await wait();
  return getDataSummary();
}

export async function apiGetProducts() {
  await wait();
  return getList("dn_products", []);
}

export async function apiGetMembers() {
  await wait();
  return getList("dn_members", []);
}

export async function apiGetNotices() {
  await wait();
  return getList("dn_notices", []);
}

export async function apiGetLives() {
  await wait();
  return getList("dn_lives", []);
}

export async function apiCreateProduct(data) {
  await wait();
  return addItem("dn_products", data);
}

export async function apiCreateMember(data) {
  await wait();
  return addItem("dn_members", data);
}

export async function apiCreateNotice(data) {
  await wait();
  return addItem("dn_notices", data);
}

export async function apiCreateLive(data) {
  await wait();
  return addItem("dn_lives", data);
}

export async function apiClearList(key) {
  await wait();
  clearList(key);
  return getDataSummary();
}

export async function apiClearAll() {
  await wait();
  clearAllDaejungData();
  return getDataSummary();
}
